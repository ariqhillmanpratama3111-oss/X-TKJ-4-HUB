/* TechLab restrained parallax, pinned chapter headings and tactile feedback */
(()=>{
 const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
 const hero=document.querySelector('main>.hero,main>.hero-card');
 if(hero&&!reduce){let raf=0;hero.addEventListener('pointermove',e=>{const r=hero.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;cancelAnimationFrame(raf);raf=requestAnimationFrame(()=>{hero.style.setProperty('--ig-px',`${x*-13}px`);hero.style.setProperty('--ig-py',`${y*-10}px`)})});hero.addEventListener('pointerleave',()=>{hero.style.setProperty('--ig-px','0px');hero.style.setProperty('--ig-py','0px')})}
 document.querySelectorAll('.section-head,section>.head').forEach(h=>h.classList.add('ig-pinned-heading'));
 if(!reduce&&'IntersectionObserver'in window){const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('ig-in-view');io.unobserve(e.target)}}),{threshold:.06});document.querySelectorAll('main>.hero,main>.stats,main>.modules,main>section').forEach(el=>{el.classList.add('ig-reveal');io.observe(el)})}
 document.addEventListener('pointerdown',e=>{const b=e.target.closest('button,.btn,.page-nav a,[role=button]');if(!b)return;b.classList.remove('ig-press');void b.offsetWidth;b.classList.add('ig-press');setTimeout(()=>b.classList.remove('ig-press'),260)},{passive:true});
})();
