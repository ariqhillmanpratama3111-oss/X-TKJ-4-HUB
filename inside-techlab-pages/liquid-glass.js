/* Inside TechLab — small, accessible motion only. Game stages and controls are not animated. */
(()=>{
 'use strict';
 const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 const hero=document.querySelector('body[data-page="home"] main>.hero');
 if(hero&&!reduce&&window.matchMedia('(hover:hover) and (pointer:fine)').matches){
  let raf=0;
  hero.addEventListener('pointermove',event=>{
   const r=hero.getBoundingClientRect(),x=(event.clientX-r.left)/r.width-.5,y=(event.clientY-r.top)/r.height-.5;
   cancelAnimationFrame(raf);raf=requestAnimationFrame(()=>{
    hero.style.setProperty('--ig-px',`${x*-6}px`);hero.style.setProperty('--ig-py',`${y*-5}px`);
   });
  },{passive:true});
  hero.addEventListener('pointerleave',()=>{hero.style.setProperty('--ig-px','0px');hero.style.setProperty('--ig-py','0px')},{passive:true});
 }
 document.querySelectorAll('.section-head,section>.head').forEach(heading=>heading.classList.add('ig-pinned-heading'));
 // Tactile feedback excludes 3D canvas controls and game HUD widgets.
 document.addEventListener('pointerdown',event=>{
  const control=event.target.closest('.page-nav a,.primary-btn,.secondary-btn,.login-btn,.feature-btn,.btn,.tab-btn');
  if(!control||control.closest('.game-hud,.pc3d-stage,.lab3d-stage,.network-stage'))return;
  control.classList.remove('ig-press');void control.offsetWidth;control.classList.add('ig-press');
  window.setTimeout(()=>control.classList.remove('ig-press'),180);
 },{passive:true});
})();

/* Inside TechLab — reversible scroll reveal; excludes game stages, HUD and controls. */
(()=>{
 'use strict';
 const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 if(reduce||!('IntersectionObserver' in window))return;
 const selector=[
  '.hero-copy','.hero-card','.intro > div','.intro-copy',
  'main>section>.section-head','main>section>.head',
  '.feature-card','.mission-card','.stat-card','.module-card','.component',
  '.account-card','.feedback-card','.friend-card','.profile-card',
  '.leaderboard-row','.roster','.team-card','.requestcard',
  '.panel-card','.feature-panel','.academy-card','.lesson-card',
  '.component-grid > *','.module-grid > *','.feature-grid > *',
  '.main-grid > section','.main-grid > aside','.main-grid > div',
  'main>section>article','main>section>.card','main>section>.panel'
 ].join(',');
 const excluded='nav,header,footer,button,a,form,input,textarea,select,dialog,[role="dialog"],.modal,.modal-card,.modalbox,.overlay,.backdrop,.auth-backdrop,.auth-modal,.toast,.game-hud,.game-controls,.pc3d-stage,.lab3d-stage,.network-stage,.game-world,.game-canvas,.hud,.inventory-modal,.inventory-panel,.chat-panel,.chatbody,.composer,.global-ai,.global-ai-panel,.global-ai-toggle,.loading-screen,.error-box,canvas,video,iframe,[data-no-reveal]';
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
   el.dataset.revealDelay=`${Math.min(index*52,208)}ms`;
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
