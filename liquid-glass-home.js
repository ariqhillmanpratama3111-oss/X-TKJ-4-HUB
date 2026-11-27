/* Inside TKJ 4 — compact radial navigation and low-motion parallax. */
(()=>{
 'use strict';
 const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 const dock=document.getElementById('bottomDock');
 if(dock&&!dock.dataset.igReady){
  dock.dataset.igReady='1';
  const dashboard=document.getElementById('dockDashboard');
  const account=document.getElementById('dockAccount');
  const oldAI=document.getElementById('dockInsideAI');
  const nav=[...document.querySelectorAll('.topnav .nav-link'),...document.querySelectorAll('.mnav a')];
  const unique=[];const seen=new Set();
  nav.forEach(link=>{
   const href=(link.getAttribute('href')||'').trim();
   if(!href||seen.has(href))return;
   if(href.startsWith('#')||/^(?:\.\/)?(?:inside-ai|techlab)\.html(?:[?#].*)?$/i.test(href)){
    seen.add(href);unique.push(link.cloneNode(true));
   }
  });
  const icons={
   '#siswa':'♧','#portofolio':'✳','#kegiatan':'▤','#sosmed':'◎',
   'inside-ai.html':'✦','techlab.html':'⌘','#bantuan':'?'
  };
  const orbit=document.createElement('div');orbit.className='ig-orbit';orbit.setAttribute('role','group');orbit.setAttribute('aria-label','Menu fitur Inside TKJ 4');
  unique.forEach(link=>{
   const href=link.getAttribute('href')||'';
   const label=(link.textContent||'Fitur').replace(/[✦⚡]/g,'').trim()||'Fitur';
   link.className='ig-orbit-link';link.textContent=icons[href]||'•';
   link.setAttribute('aria-label',label);link.setAttribute('title',label);link.setAttribute('data-label',label);
   link.removeAttribute('style');orbit.appendChild(link);
  });
  const toggle=document.createElement('button');toggle.type='button';toggle.className='ig-menu-toggle';toggle.textContent='+';
  toggle.setAttribute('aria-label','Buka menu fitur');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-controls','insideFeatureOrbit');orbit.id='insideFeatureOrbit';
  if(oldAI)oldAI.replaceWith(toggle);else dock.insertBefore(toggle,account||null);
  dock.appendChild(orbit);
  if(dashboard){dashboard.setAttribute('aria-label','Buka Dashboard');dashboard.querySelector('small')?.replaceChildren(document.createTextNode('Dashboard'));}
  if(account){account.setAttribute('aria-label','Buka Akun');account.querySelector('small')?.replaceChildren(document.createTextNode('Akun'));}
  const setOpen=open=>{
   dock.classList.toggle('menu-open',open);toggle.setAttribute('aria-expanded',String(open));
   toggle.setAttribute('aria-label',open?'Tutup menu fitur':'Buka menu fitur');
  };
  toggle.addEventListener('click',()=>setOpen(!dock.classList.contains('menu-open')));
  orbit.addEventListener('click',event=>{if(event.target.closest('a'))setOpen(false)});
  document.addEventListener('keydown',event=>{if(event.key==='Escape')setOpen(false)});
  document.addEventListener('pointerdown',event=>{if(!dock.contains(event.target))setOpen(false)},{passive:true});
  const placeOrbit=()=>{
   const mobile=window.matchMedia('(max-width:520px)').matches;
   const rx=mobile?116:142,ry=mobile?98:112,n=orbit.children.length;
   [...orbit.children].forEach((link,index)=>{
    const angle=(-72+(n<=1?0:index*144/(n-1)))*Math.PI/180;
    link.style.setProperty('--dx',`${Math.sin(angle)*rx}px`);
    link.style.setProperty('--dy',`${-Math.cos(angle)*ry}px`);
   });
  };
  placeOrbit();window.addEventListener('resize',placeOrbit,{passive:true});
  document.querySelectorAll('.topnav .nav-link,.mnav').forEach(node=>node.remove());
 }
 // Only the hero's soft light shifts on desktop pointer input; no scroll listeners.
 const hero=document.querySelector('.hero');
 if(hero&&!reduce&&window.matchMedia('(hover:hover) and (pointer:fine)').matches){
  let raf=0;
  hero.addEventListener('pointermove',event=>{
   const rect=hero.getBoundingClientRect();
   const x=(event.clientX-rect.left)/rect.width-.5,y=(event.clientY-rect.top)/rect.height-.5;
   cancelAnimationFrame(raf);raf=requestAnimationFrame(()=>{
    hero.style.setProperty('--ig-px',`${x*-7}px`);hero.style.setProperty('--ig-py',`${y*-6}px`);
   });
  },{passive:true});
  hero.addEventListener('pointerleave',()=>{hero.style.setProperty('--ig-px','0px');hero.style.setProperty('--ig-py','0px')},{passive:true});
 }
})();

/* Inside TKJ 4 — reversible scroll reveal. Light, repeatable and accessible. */
(()=>{
 'use strict';
 const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 if(reduce||!('IntersectionObserver' in window))return;
 const selector=[
  '.hero > div','.hero .orb','.slider','.section > .head',
  '.section > .grid > *','.section > .card','.section > .socials > *',
  '.section > p','.foot'
 ].join(',');
 const excluded='nav,header,footer button,button,a,form,input,textarea,select,dialog,[role="dialog"],.auth-modal,.sp,.tp,.bottom-dock,#toastRoot,#birthdayLayer,#snoopyDecor,.global-ai,.chatbody,.composer,canvas,video,iframe,[data-no-reveal]';
 const observed=new WeakSet();
 const observer=new IntersectionObserver(entries=>{
  for(const entry of entries){
   const el=entry.target;
   if(entry.isIntersecting){
    const fromBelow=entry.boundingClientRect.top>window.innerHeight*.45;
    el.style.setProperty('--reveal-y',fromBelow?'20px':'-16px');
    el.style.setProperty('--reveal-delay',el.dataset.revealDelay||'0ms');
    el.dataset.scrollState='in';
   }else{
    const above=entry.boundingClientRect.bottom<=0;
    el.style.setProperty('--reveal-y',above?'-18px':'20px');
    el.style.setProperty('--reveal-delay','0ms');
    el.dataset.scrollState='out';
   }
  }
 },{threshold:0.035,rootMargin:'0px 0px -5% 0px'});
 function scan(root){
  if(!root)return;
  const nodes=[];
  if(root.nodeType===1&&root.matches?.(selector))nodes.push(root);
  if(root.querySelectorAll)nodes.push(...root.querySelectorAll(selector));
  for(const el of nodes){
   if(observed.has(el)||el.matches(excluded)||el.closest(excluded))continue;
   const style=getComputedStyle(el);
   if(style.position==='fixed'||style.position==='sticky')continue;
   if(el.getBoundingClientRect().height<8)continue;
   observed.add(el);
   const siblings=[...el.parentElement.children].filter(s=>s.matches?.(selector));
   const index=Math.max(0,siblings.indexOf(el));
   el.dataset.revealDelay=`${Math.min(index*58,232)}ms`;
   el.style.setProperty('--reveal-delay','0ms');
   el.dataset.scrollReveal='';
   el.dataset.scrollState='out';
   observer.observe(el);
  }
 }
 scan(document);
 let queued=false;
 const mutation=new MutationObserver(records=>{
  if(queued)return;queued=true;
  requestAnimationFrame(()=>{queued=false;for(const rec of records)for(const node of rec.addedNodes)if(node.nodeType===1)scan(node)});
 });
 mutation.observe(document.body,{childList:true,subtree:true});
})();
