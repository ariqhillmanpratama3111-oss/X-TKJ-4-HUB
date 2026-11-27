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
