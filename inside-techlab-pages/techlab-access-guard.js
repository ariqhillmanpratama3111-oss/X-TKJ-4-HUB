/* Inside TechLab Public Access Guard
 * Include this script on every non-home TechLab HTML page before that page's own app scripts.
 * It uses a separate browser storage key from Inside TKJ and requires TechLab membership.
 */
(() => {
  const SUPABASE_URL = 'https://teuqxfwqntkgemyukiju.supabase.co';
  const SUPABASE_KEY = 'sb_publishable_0XsVO6d21dYZaDtWHoGyGQ_spE3LXbQ';
  const STORAGE_KEY = 'inside-techlab-auth-v1';
  const file = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  if (file === 'index.html' || file === '') return;
  document.documentElement.style.visibility = 'hidden';
  const sources = [
    'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/dist/umd/supabase.min.js',
    'https://unpkg.com/@supabase/supabase-js@2.45.4/dist/umd/supabase.min.js'
  ];
  async function loadLibrary() {
    if (window.supabase?.createClient) return true;
    for (const src of sources) {
      try { await new Promise((resolve,reject) => { const s=document.createElement('script');s.src=src;s.async=true;s.onload=resolve;s.onerror=reject;document.head.appendChild(s); }); if(window.supabase?.createClient)return true; }
      catch(e) { console.warn('[TechLab guard]',e); }
    }
    return false;
  }
  async function run() {
    try {
      if(!await loadLibrary()) throw new Error('Supabase client gagal dimuat.');
      const client=window.supabase.createClient(SUPABASE_URL,SUPABASE_KEY,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true,storageKey:STORAGE_KEY}});
      const {data,error}=await client.auth.getSession();if(error)throw error;
      if(!data.session) { location.replace('index.html?auth=login&reason=restricted'); return; }
      const gate=await client.rpc('techlab_public_is_member');if(gate.error)throw gate.error;
      if(gate.data!==true) { await client.auth.signOut();location.replace('index.html?auth=register&reason=restricted');return; }
      window.insideTechLabGuardClient=client;
      document.documentElement.style.visibility='visible';
    } catch(e) {
      console.error('[Inside TechLab] access guard:',e);
      document.documentElement.style.visibility='visible';
      const box=document.createElement('div');box.style.cssText='position:fixed;inset:0;z-index:99999;background:#070d18;color:#eaf4ff;display:grid;place-items:center;padding:24px;font:14px Inter,Arial,sans-serif;text-align:center';
      box.innerHTML='<div><h2>TechLab access check failed</h2><p>'+String(e.message||e).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))+'</p><a style="color:#55e5ff" href="index.html?auth=login">Kembali ke TechLab</a></div>';
      document.body.appendChild(box);
    }
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run,{once:true});else run();
})();
