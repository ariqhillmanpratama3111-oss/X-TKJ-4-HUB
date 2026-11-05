/* Cissa Live — avatar untuk Inside AI (Inside TKJ 4)
 * Mode 1 (default): boneka layer PNG/WebP dari cissa/manifest.json (jalan tanpa model .moc3).
 * Mode 2 (otomatis): bila cissa/cissa.model3.json ada, memakai model Live2D hasil export Cubism.
 * API: CissaLive.mount(canvas,opts) · setSpeaking(b) · setListening(b) · setThinking(b) · pulse()
 */
(function () {
  'use strict';
  var BASE = 'cissa/';
  var VIEW = { x: 20, y: 20, w: 860, h: 1120 };           // area tampil (bust) pada kanvas 900x2632
  var NECK = { x: 470, y: 440 }, HEADTOP = { x: 470, y: 120 };
  var SHOULDER = { Kanan: { x: 290, y: 504 }, Kiri: { x: 650, y: 504 } };
  var HAIR = { Poni: 1, Rambut_Samping_Kanan: 1, Rambut_Samping_Kiri: 1, Rambut_Belakang: 1,
               Aksesori_Pita: 1, Aksesori_Bunga: 1, Aksesori_Beruang: 1 };
  var SHAPE_LAYER = { A: 'Mulut_Buka_Senyum', O: 'Mulut_Buka_O', I: 'Mulut_Buka_I', E: 'Mulut_Buka_E', U: 'Mulut_Buka_U' };
  var SHAPE_PARAM = { A: [0.9, 0.6], O: [0.6, -0.6], I: [0.3, 1], E: [0.5, 0.4], U: [0.35, -1], C: [0, 0] };

  var S = { t: 0, speaking: false, listening: false, thinking: false, pulse: 0,
    blinkPhase: -1, nextBlink: 2, gx: 0, gy: 0, tgx: 0, tgy: 0, nextGaze: 1,
    hx: 0, hy: 0, hz: 0, sway: 0, swayV: 0, shape: 'C', open: 0, mouthT: 0, breath: 0 };
  var rnd = Math.random, clamp = function (v, a, b) { return Math.max(a, Math.min(b, v)); };

  function update(dt) {
    S.t += dt; S.breath = Math.sin(S.t * 1.4);
    // kedip
    S.nextBlink -= dt;
    if (S.blinkPhase < 0 && S.nextBlink <= 0) S.blinkPhase = 0;
    if (S.blinkPhase >= 0) { S.blinkPhase += dt / 0.22; if (S.blinkPhase >= 1) { S.blinkPhase = -1; S.nextBlink = 2 + rnd() * 3.5; } }
    S.blink = S.blinkPhase < 0 ? 0 : Math.sin(S.blinkPhase * Math.PI);
    // pandangan
    S.nextGaze -= dt;
    if (S.nextGaze <= 0) {
      S.nextGaze = 1.2 + rnd() * 2.4;
      if (S.thinking) { S.tgx = 0.5 + rnd() * 0.3; S.tgy = -0.6; }
      else if (S.listening) { S.tgx = (rnd() - .5) * 0.3; S.tgy = -0.1; }
      else { S.tgx = (rnd() - .5) * 0.9; S.tgy = (rnd() - .5) * 0.5; }
    }
    S.gx += (S.tgx - S.gx) * Math.min(1, dt * 8); S.gy += (S.tgy - S.gy) * Math.min(1, dt * 8);
    // kepala
    var tz = Math.sin(S.t * 0.6) * 0.012, tx = Math.sin(S.t * 0.45) * 3, ty = 0;
    if (S.listening && !S.speaking) { tz += 0.035; ty = 2; }
    if (S.thinking) { tz -= 0.03; tx += 4; }
    if (S.speaking) { tz += Math.sin(S.t * 2.3) * 0.02; ty = Math.abs(Math.sin(S.t * 3.1)) * 3; }
    S.hz += (tz - S.hz) * Math.min(1, dt * 5); S.hx += (tx - S.hx) * Math.min(1, dt * 5); S.hy += (ty - S.hy) * Math.min(1, dt * 5);
    // rambut: pegas
    var f = (S.hz - S.sway) * 60 - S.swayV * 6; S.swayV += f * dt; S.sway += S.swayV * dt;
    // mulut
    S.pulse = Math.max(0, S.pulse - dt * 4);
    if (S.speaking) {
      S.mouthT -= dt;
      if (S.mouthT <= 0) {
        S.mouthT = 0.07 + rnd() * 0.09;
        var r = rnd(); S.shape = r < 0.18 ? 'C' : r < 0.45 ? 'A' : r < 0.62 ? 'O' : r < 0.77 ? 'E' : r < 0.9 ? 'I' : 'U';
        S.open = S.shape === 'C' ? 0 : clamp(0.45 + rnd() * 0.55 + S.pulse * 0.3, 0, 1);
      }
    } else { S.shape = 'C'; S.open = 0; S.mouthT = 0; }
  }

  /* ---------------- Mode boneka (sprite) ---------------- */
  function loadImg(src) { return new Promise(function (res, rej) { var i = new Image(); i.onload = function () { res(i); }; i.onerror = function () { rej(new Error('Gambar tidak ditemukan: ' + src)); }; i.src = src; }); }

  function SpriteDriver(canvas, man, imgs) {
    var ctx = canvas.getContext('2d'), off = document.createElement('canvas'), octx = off.getContext('2d');
    var L = {}; man.groups.forEach(function (g) { g.layers.forEach(function (l) { l.img = imgs[l.name]; L[l.name] = l; }); });
    function draw(c, l, a) { if (!l) return; if (a != null) c.globalAlpha = a; c.drawImage(l.img, l.x, l.y, l.w, l.h); if (a != null) c.globalAlpha = 1; }
    function rotAbout(c, p, ang, dx, dy) { c.translate(p.x + (dx || 0), p.y + (dy || 0)); c.rotate(ang); c.translate(-p.x, -p.y); }
    function eye(c, side) {
      var pu = L['Mata_' + side + '_Putih'], ir = L['Mata_' + side + '_Iris'], bu = L['Mata_' + side + '_Bulu'], open = 1 - S.blink;
      if (open <= 0.02) return;
      off.width = pu.w; off.height = pu.h; octx.clearRect(0, 0, pu.w, pu.h);
      octx.drawImage(ir.img, ir.x - pu.x + S.gx * 7, ir.y - pu.y + S.gy * 5, ir.w, ir.h);
      octx.globalCompositeOperation = 'destination-in'; octx.drawImage(pu.img, 0, 0, pu.w, pu.h); octx.globalCompositeOperation = 'source-over';
      c.globalAlpha = open; c.drawImage(pu.img, pu.x, pu.y, pu.w, pu.h); c.drawImage(off, pu.x, pu.y); c.globalAlpha = 1;
      draw(c, bu, open);
    }
    this.render = function () {
      var w = canvas.width, h = canvas.height;
      ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.clearRect(0, 0, w, h);
      var sc = Math.min(w / VIEW.w, h / VIEW.h);
      ctx.setTransform(sc, 0, 0, sc, (w - VIEW.w * sc) / 2 - VIEW.x * sc, (h - VIEW.h * sc) / 2 - VIEW.y * sc);
      var by = S.breath * 3;
      var mouthOn = S.shape !== 'C' && S.open > 0.05;
      man.groups.forEach(function (g) {
        if (g.group === 'Variasi_Ekspresi') return;
        ctx.save();
        if (g.group === 'Badan') ctx.translate(0, by);
        else if (g.group.indexOf('Tangan_') === 0) { var side = g.group.split('_')[1]; rotAbout(ctx, SHOULDER[side], S.breath * 0.006 * (side === 'Kanan' ? 1 : -1), 0, by); }
        else if (g.group === 'Kepala') { ctx.translate(S.hx, S.hy + by); rotAbout(ctx, NECK, S.hz); }
        g.layers.forEach(function (l) {
          var n = l.name;
          if (g.group === 'Kepala') {
            if (/^Mata_(Kanan|Kiri)_(Putih|Iris|Bulu)$/.test(n)) { if (/_Putih$/.test(n)) eye(ctx, n.split('_')[1]); return; }
            if (n === 'Mulut' && mouthOn) return;
            if (HAIR[n]) { ctx.save(); rotAbout(ctx, HEADTOP, (S.sway - S.hz) * 0.8); draw(ctx, l); ctx.restore(); return; }
          }
          draw(ctx, l);
        });
        if (g.group === 'Kepala') {            // variasi mengikuti kepala
          if (S.blink > 0.05) { draw(ctx, L.Mata_Kanan_Tutup, S.blink); draw(ctx, L.Mata_Kiri_Tutup, S.blink); }
          if (mouthOn) draw(ctx, L[SHAPE_LAYER[S.shape]], clamp(S.open * 1.4, 0, 1));
        }
        ctx.restore();
      });
    };
    this.destroy = function () {};
  }

  /* ---------------- Mode model Live2D (opsional) ---------------- */
  function loadScript(src) { return new Promise(function (res, rej) { var s = document.createElement('script'); s.src = src; s.onload = res; s.onerror = function () { rej(new Error('gagal memuat ' + src)); }; document.head.appendChild(s); }); }

  async function Live2DDriver(canvas, modelUrl) {
    await loadScript('https://cubism.live2d.com/sdk-web/cubismcore/live2dcubismcore.min.js');
    await loadScript('https://cdn.jsdelivr.net/npm/pixi.js@6.5.10/dist/browser/pixi.min.js');
    await loadScript('https://cdn.jsdelivr.net/npm/pixi-live2d-display@0.4.0/dist/cubism4.min.js');
    var PIXI = window.PIXI;
    var app = new PIXI.Application({ view: canvas, transparent: true, autoStart: false, width: canvas.width, height: canvas.height });
    var model = await PIXI.live2d.Live2DModel.from(modelUrl, { autoInteract: false });
    app.stage.addChild(model);
    function fit() {
      var sc = Math.min(canvas.width / model.internalModel.width, canvas.height / model.internalModel.height) * 1.0;
      model.scale.set(sc); model.x = (canvas.width - model.width) / 2; model.y = canvas.height * 0.02;
    }
    fit();
    var core = model.internalModel.coreModel;
    function setP(id, v) { try { if (core.getParameterIndex(id) >= 0) core.setParameterValueById(id, v); } catch (e) {} }
    model.internalModel.on('beforeModelUpdate', function () {
      var sp = SHAPE_PARAM[S.shape] || [0, 0];
      setP('ParamAngleX', clamp(S.hx * 3, -30, 30)); setP('ParamAngleY', clamp(-S.hy * 3 + S.gy * -8, -30, 30)); setP('ParamAngleZ', clamp(S.hz * 400, -30, 30));
      setP('ParamBodyAngleX', clamp(S.hx * 1.2, -10, 10)); setP('ParamBodyAngleZ', clamp(S.hz * 150, -10, 10));
      setP('ParamEyeLOpen', 1 - S.blink); setP('ParamEyeROpen', 1 - S.blink);
      setP('ParamEyeBallX', S.gx); setP('ParamEyeBallY', -S.gy);
      setP('ParamMouthOpenY', sp[0] * S.open); setP('ParamMouthForm', sp[1]);
      setP('ParamBreath', (S.breath + 1) / 2);
    });
    return { render: function () { app.renderer.resize(canvas.width, canvas.height); fit(); app.render(); }, destroy: function () { app.destroy(false); } };
  }

  /* ---------------- Mount & API ---------------- */
  var C = { driver: null, canvas: null, running: false, last: 0 };
  function fitCanvas() {
    var c = C.canvas, r = c.getBoundingClientRect(), d = Math.min(window.devicePixelRatio || 1, 2);
    var w = Math.max(2, Math.round(r.width * d)), h = Math.max(2, Math.round(r.height * d));
    if (c.width !== w || c.height !== h) { c.width = w; c.height = h; }
  }
  function loop(ts) {
    if (!C.running) return;
    var dt = Math.min(0.05, (ts - (C.last || ts)) / 1000); C.last = ts;
    if (!document.hidden && C.driver) { fitCanvas(); update(dt); C.driver.render(); }
    requestAnimationFrame(loop);
  }
  C.mount = async function (canvas, opts) {
    opts = opts || {}; if (opts.view) VIEW = opts.view; C.canvas = canvas; var base = opts.base || BASE;
    var modelUrl = opts.model || base + 'cissa.model3.json';
    try {
      var mr = await fetch(modelUrl, { cache: 'no-cache' });
      var mj = mr.ok ? await mr.json().catch(function () { return null; }) : null;
      if (mj && mj.FileReferences) { C.driver = await Live2DDriver(canvas, modelUrl); C.mode = 'live2d'; }
    } catch (e) { console.warn('Model Live2D tidak dipakai:', e && e.message); C.driver = null; }
    if (!C.driver) {
      // Cara 1 (disarankan): satu atlas gambar + satu JSON di folder yang sama dengan halaman
      var ares = null;
      try { ares = await fetch(opts.atlas || 'cissa-atlas.json', { cache: 'no-cache' }); } catch (e) { ares = null; }
      if (ares && ares.ok) {
        var aman = await ares.json().catch(function () { throw new Error('cissa-atlas.json bukan JSON valid.'); });
        var aimg = await loadImg(aman.atlas);
        var aimgs = {};
        aman.groups.forEach(function (g) { g.layers.forEach(function (l) {
          var cv = document.createElement('canvas'); cv.width = l.w; cv.height = l.h;
          cv.getContext('2d').drawImage(aimg, l.ax, l.ay, l.w, l.h, 0, 0, l.w, l.h); aimgs[l.name] = cv; }); });
        C.driver = new SpriteDriver(canvas, aman, aimgs); C.mode = 'sprite';
      }
    }
    if (!C.driver) {
      var mres = await fetch(base + 'manifest.json', { cache: 'no-cache' });
      if (!mres.ok) throw new Error('File cissa-atlas.json / ' + base + 'manifest.json tidak ditemukan (kode ' + mres.status + '). Upload cissa-atlas.json dan cissa-atlas.webp ke folder yang sama dengan inside-ai.html.');
      var man = await mres.json().catch(function () { throw new Error('manifest.json bukan JSON valid (mungkin terbaca sebagai halaman HTML).'); }), imgs = {};
      await Promise.all(man.groups.flatMap(function (g) { return g.layers.map(function (l) { return loadImg(base + l.file).then(function (i) { imgs[l.name] = i; }); }); }));
      C.driver = new SpriteDriver(canvas, man, imgs); C.mode = 'sprite';
    }
    if (!C.running) { C.running = true; requestAnimationFrame(loop); }
    return C.mode;
  };
  C.setSpeaking = function (b) { S.speaking = !!b; if (b) { S.listening = false; S.thinking = false; } };
  C.setListening = function (b) { S.listening = !!b; };
  C.setThinking = function (b) { S.thinking = !!b; };
  C.pulse = function () { S.pulse = 1; S.mouthT = 0; };
  C.stop = function () { C.running = false; };
  C.resume = function () { if (!C.running && C.driver) { C.running = true; C.last = 0; requestAnimationFrame(loop); } };
  C._state = S; C._update = update;
  window.CissaLive = C;

  /* ---- sambungkan otomatis ke suara bawaan browser ---- */
  if ('speechSynthesis' in window) {
    var orig = speechSynthesis.speak.bind(speechSynthesis);
    speechSynthesis.speak = function (u) {
      u.addEventListener('start', function () { C.setSpeaking(true); });
      u.addEventListener('end', function () { setTimeout(function () { if (!(speechSynthesis.speaking || speechSynthesis.pending)) C.setSpeaking(false); }, 180); });
      u.addEventListener('error', function () { C.setSpeaking(false); });
      u.addEventListener('boundary', function () { C.pulse(); });
      return orig(u);
    };
  }
})();
