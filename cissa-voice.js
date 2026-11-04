/* Cissa Voice — suara untuk Cissa
 * 1) Suara bawaan browser, dipilih otomatis yang paling lembut/perempuan (Edge: "Gadis Online (Natural)" paling bagus),
 *    lalu nada dinaikkan supaya terdengar imut.
 * 2) Opsional: TTS server (Edge Function "cissa-tts") untuk suara neural. Kalau gagal, otomatis kembali ke suara browser.
 */
(function () {
  'use strict';
  var KEY = 'cissa-voice-v1';
  var PRESETS = { imut: { pitch: 1.55, rate: 1.05 }, lembut: { pitch: 1.25, rate: 0.92 }, normal: { pitch: 1, rate: 1 } };
  var cfg = { uri: '', preset: 'imut', pitch: PRESETS.imut.pitch, rate: PRESETS.imut.rate };
  try { var sv = JSON.parse(localStorage.getItem(KEY) || 'null'); if (sv) Object.assign(cfg, sv); } catch (e) {}
  function save() { try { localStorage.setItem(KEY, JSON.stringify(cfg)); } catch (e) {} }

  var V = { speakingNow: false, remote: null, remoteOK: true, audio: null, token: 0 };

  function voices() { try { return (window.speechSynthesis && speechSynthesis.getVoices()) || []; } catch (e) { return []; } }
  function lang(v) { return String(v.lang || '').toLowerCase().replace('_', '-'); }
  function score(v) {
    var n = String(v.name || '').toLowerCase(), s = 0;
    if (lang(v).indexOf('id') !== 0) return -1;
    s += 100;
    if (/natural|online/.test(n)) s += 40;
    if (/gadis|female|wanita|perempuan|damayanti|indah|sari/.test(n)) s += 30;
    if (/ardi|andika|male|pria|laki|rizki|budi/.test(n) && !/female/.test(n)) s -= 40;
    if (/microsoft/.test(n)) s += 10;
    if (/google/.test(n)) s -= 10;
    return s;
  }
  V.list = function (all) {
    var vs = voices().slice();
    if (!all) vs = vs.filter(function (v) { return score(v) >= 0; });
    return vs.sort(function (a, b) { return score(b) - score(a); });
  };
  V.pick = function () {
    var vs = voices();
    if (cfg.uri) { var f = vs.filter(function (v) { return v.voiceURI === cfg.uri; })[0]; if (f) return f; }
    var best = null, bs = -1;
    vs.forEach(function (v) { var s = score(v); if (s > bs) { bs = s; best = v; } });
    return best;
  };
  V.hint = function () {
    var v = V.pick();
    if (!v) return 'Tidak ada suara Indonesia di perangkat ini. Coba Microsoft Edge atau Chrome terbaru.';
    var n = v.name.toLowerCase();
    if (/google/.test(n)) return 'Kamu memakai suara Google. Buka halaman ini di Microsoft Edge untuk suara "Gadis (Natural)" yang lebih lembut.';
    if (score(v) < 130) return 'Suara perempuan yang lebih lembut mungkin tersedia di Microsoft Edge ("Gadis Online (Natural)").';
    return '';
  };
  V.get = function () { return Object.assign({}, cfg); };
  V.set = function (o) { Object.assign(cfg, o); save(); };
  V.preset = function (name) { if (PRESETS[name]) { cfg.preset = name; cfg.pitch = PRESETS[name].pitch; cfg.rate = PRESETS[name].rate; save(); } };

  /* teks -> bersih untuk dibaca */
  V.clean = function (t) {
    t = String(t || '');
    var hadCode = /```/.test(t);
    t = t.replace(/```[\s\S]*?```/g, ' ');
    t = t.replace(/`[^`]*`/g, ' ').replace(/https?:\/\/\S+/g, ' ').replace(/!?\[([^\]]*)\]\([^)]*\)/g, '$1');
    t = t.replace(/[*_#>~|]+/g, ' ').replace(/^\s*[-•]\s+/gm, ' ');
    try { t = t.replace(/[\u{1F000}-\u{1FFFF}\u{2600}-\u{27BF}\u{FE0F}]/gu, ' '); } catch (e) {}
    t = t.replace(/\s+/g, ' ').trim();
    if (hadCode) t += ' Kodenya aku taruh di layar ya.';
    return t;
  };
  V.chunks = function (t, max) {
    max = max || 170; var out = [], parts = String(t).split(/(?<=[.!?…])\s+|\n+/);
    var cur = '';
    parts.forEach(function (p) {
      p = p.trim(); if (!p) return;
      if ((cur + ' ' + p).trim().length <= max) cur = (cur + ' ' + p).trim();
      else { if (cur) out.push(cur); while (p.length > max) { var cut = p.lastIndexOf(' ', max); if (cut < 40) cut = max; out.push(p.slice(0, cut).trim()); p = p.slice(cut).trim(); } cur = p; }
    });
    if (cur) out.push(cur);
    return out;
  };

  V.stop = function () {
    V.token++; V.speakingNow = false;
    try { speechSynthesis.cancel(); } catch (e) {}
    if (V.audio) { try { V.audio.pause(); } catch (e) {} V.audio = null; }
    if (window.CissaLive) CissaLive.setSpeaking(false);
  };

  function speakBrowser(text, onend, tk) {
    if (!('speechSynthesis' in window)) { onend && onend(); return; }
    var list = V.chunks(text), i = 0, voice = V.pick();
    V.speakingNow = true;
    (function next() {
      if (tk !== V.token) return;
      if (i >= list.length) { V.speakingNow = false; onend && onend(); return; }
      var u = new SpeechSynthesisUtterance(list[i++]);
      u.lang = 'id-ID'; if (voice) { u.voice = voice; u.lang = voice.lang || 'id-ID'; }
      u.pitch = cfg.pitch; u.rate = cfg.rate; u.volume = 1;
      u.onend = next; u.onerror = function () { if (tk === V.token) { V.speakingNow = false; onend && onend(); } };
      speechSynthesis.speak(u);
    })();
  }

  async function speakRemote(text, onend, tk) {
    var res = await V.remote(text.slice(0, 1500), { pitch: cfg.pitch, rate: cfg.rate });
    if (tk !== V.token) return true;
    if (!res || !res.audio) throw new Error('TTS server tidak mengembalikan audio');
    var bin = atob(res.audio), arr = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i);
    var url = URL.createObjectURL(new Blob([arr], { type: res.mime || 'audio/mpeg' }));
    var a = new Audio(url); V.audio = a; V.speakingNow = true;
    var AC = window.AudioContext || window.webkitAudioContext, an = null, buf = null, tm = null;
    try {
      var ac = new AC(), src = ac.createMediaElementSource(a); an = ac.createAnalyser(); an.fftSize = 256; src.connect(an); an.connect(ac.destination); buf = new Uint8Array(an.frequencyBinCount);
    } catch (e) { an = null; }
    function done() { clearInterval(tm); URL.revokeObjectURL(url); V.speakingNow = false; if (window.CissaLive) CissaLive.setSpeaking(false); onend && onend(); }
    a.onended = done; a.onerror = done;
    a.onplay = function () {
      if (window.CissaLive) CissaLive.setSpeaking(true);
      tm = setInterval(function () { if (an) { an.getByteTimeDomainData(buf); var m = 0; for (var k = 0; k < buf.length; k++) m = Math.max(m, Math.abs(buf[k] - 128)); if (m > 14 && window.CissaLive) CissaLive.pulse(); } }, 90);
    };
    await a.play();
    return true;
  }

  V.speak = function (text, onend) {
    V.stop(); var tk = ++V.token; text = V.clean(text);
    if (!text) { onend && onend(); return; }
    if (V.remote && V.remoteOK) {
      speakRemote(text, onend, tk).catch(function (e) { console.warn('TTS server gagal, pakai suara browser:', e && e.message); V.remoteOK = false; if (tk === V.token) speakBrowser(text, onend, tk); });
    } else speakBrowser(text, onend, tk);
  };
  V.isSpeaking = function () { return V.speakingNow || (window.speechSynthesis && speechSynthesis.speaking); };
  V.setRemote = function (fn) { V.remote = fn; V.remoteOK = true; };
  if ('speechSynthesis' in window) { try { speechSynthesis.getVoices(); speechSynthesis.addEventListener('voiceschanged', function () {}); } catch (e) {} }
  window.CissaVoice = V;
})();
