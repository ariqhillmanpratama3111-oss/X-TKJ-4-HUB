/* INSIDE TKJ 4 radial menu + restrained parallax + pinned chapter headings */
(()=>{
 const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
 const dock=document.getElementById('bottomDock');
 if(dock&&!dock.dataset.igReady){dock.dataset.igReady='1';
   const dash=document.getElementById('dockDashboard'),ai=document.getElementById('dockInsideAI'),account=document.getElementById('dockAccount');
   const nav=[...document.querySelectorAll('.topnav .nav-link')];
   const mnav=[...document.querySelectorAll('.mnav a')];
   const unique=[]; const seen=new Set();
   [...nav,...mnav].forEach(a=>{const href=a.getAttribute('href')||'';if(!href||seen.has(href))return;seen.add(href);if(href.startsWith('#')||/techlab\.html/.test(href))unique.push(a.cloneNode(true));});
   // Include all primary sections and feature destinations, but leave utility icons in the header.
   const orbit=document.createElement('div');orbit.className='ig-orbit';orbit.setAttribute('aria-label','Menu fitur');
   const glyph={'#siswa':'👥','#portofolio':'✦','#kegiatan':'▤','#sosmed':'◎','inside-ai.html':'✧','techlab.html':'⚡','#bantuan':'?'};
   unique.forEach((a,i)=>{const href=a.getAttribute('href');const label=(a.textContent||'Fitur').replace(/[✦⚡]/g,'').trim();a.className='ig-orbit-link';a.textContent=glyph[href]||'•';a.title=label;a.setAttribute('aria-label',label);a.setAttribute('data-label',label);a.removeAttribute('style');orbit.appendChild(a)});
   const toggle=document.createElement('button');toggle.type='button';toggle.className='ig-menu-toggle';toggle.textContent='✦';toggle.setAttribute('aria-label','Buka menu fitur');toggle.setAttribute('aria-expanded','false');
   dock.insertBefore(orbit,ai);dock.insertBefore(toggle,ai);
   if(dash){dash.querySelector('small')?.replaceChildren(document.createTextNode('Dashboard'));dash.setAttribute('aria-label','Dashboard')}
   if(account){account.querySelector('small')?.replaceChildren(document.createTextNode('Akun'));account.setAttribute('aria-label','Akun')}
   // Remove duplicated navigation rows; header utility controls remain available.
   document.querySelectorAll('.topnav .nav-link,.mnav').forEach(n=>n.remove());
   const close=()=>{dock.classList.remove('menu-open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Buka menu fitur')};
   const open=()=>{dock.classList.add('menu-open');toggle.setAttribute('aria-expanded','true');toggle.setAttribute('aria-label','Tutup menu fitur')};
   toggle.addEventListener('click',()=>dock.classList.contains('menu-open')?close():open());
   orbit.addEventListener('click',e=>{if(e.target.closest('a'))close()});
   document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
   document.addEventListener('click',e=>{if(!dock.contains(e.target))close()});
   // Spread icons in a shallow arc above the central button.
   const links=[...orbit.children],n=links.length;
   links.forEach((a,i)=>{const t=n===1?0:(i/(n-1))*Math.PI-Math.PI/2;const radius=window.innerWidth<520?116:154;a.style.setProperty('--dx',`${Math.sin(t)*radius}px`);a.style.setProperty('--dy',`${-Math.cos(t)*radius}px`)});
 }
 // Subtle pointer parallax in the Snoopy hero only; content and theme remain unchanged.
 const hero=document.querySelector('.hero');
 if(hero&&!reduce){let raf=0;hero.addEventListener('pointermove',e=>{const r=hero.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;cancelAnimationFrame(raf);raf=requestAnimationFrame(()=>{hero.style.setProperty('--ig-px',`${x*-12}px`);hero.style.setProperty('--ig-py',`${y*-10}px`)})});hero.addEventListener('pointerleave',()=>{hero.style.setProperty('--ig-px','0px');hero.style.setProperty('--ig-py','0px')})}
 // Pinned glass chapter headers: they stay readable while their own section scrolls past.
 document.querySelectorAll('.section .head').forEach((h,i)=>{h.classList.add('ig-pinned-heading');h.style.setProperty('--ig-heading-index',i)});
 // Reveal sections gently without hiding content if IntersectionObserver is unavailable.
 if(!reduce&&'IntersectionObserver'in window){const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('ig-in-view');io.unobserve(e.target)}}),{threshold:.08});document.querySelectorAll('main .section,main .hero,main .slider').forEach(el=>{el.classList.add('ig-reveal');io.observe(el)})}
 // Press feedback for controls while preserving their existing click handlers.
 document.addEventListener('pointerdown',e=>{const b=e.target.closest('button,.btn,.icon-btn,.dock-btn');if(!b)return;b.classList.remove('ig-press');void b.offsetWidth;b.classList.add('ig-press');setTimeout(()=>b.classList.remove('ig-press'),260)},{passive:true});
})();
