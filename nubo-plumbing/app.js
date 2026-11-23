/* Shared header, footer, icons and service data for every page. */
const PHONE = '07385 131898';
const TEL = 'tel:+447385131898';
const FACEBOOK = 'https://www.facebook.com/share/1Cn8w3Ps1j/';
const INSTAGRAM = 'https://www.instagram.com/nubo_plumbing';

const I = {
  drop:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.5c-.3 0-.6.2-.8.4C9.6 5 5 10.8 5 15a7 7 0 0 0 14 0c0-4.2-4.6-10-6.2-12.1a1 1 0 0 0-.8-.4z"/></svg>',
  phone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.8 2z"/></svg>',
  arrow:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
  pin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  star:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/></svg>',
  clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
  tag:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L2 12V2h10l8.6 8.6a2 2 0 0 1 0 2.8z"/><circle cx="7" cy="7" r="1.5"/></svg>',
  user:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  map:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4z"/><path d="M8 2v16M16 6v16"/></svg>',
  menu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 7h18M3 12h18M3 17h18"/></svg>',
  close:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>',
  fb:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 8V6c0-.9.2-1.5 1.6-1.5H18V1h-3.3C11 1 10 3 10 6v2H7v3.6h3V23h4V11.6h3.2L18 8z"/></svg>',
  ig:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
  mail:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>',
  // service icons
  bath:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h18v3a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5z"/><path d="M6 12V5a2 2 0 0 1 3.5-1.3"/><path d="M7 20l-1 2M17 20l1 2"/></svg>',
  alarm:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v3M4.2 6.2l2.1 2.1M19.8 6.2l-2.1 2.1"/><path d="M6 18v-5a6 6 0 0 1 12 0v5"/><path d="M4 18h16v3H4z"/></svg>',
  wrench:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z"/></svg>',
  flame:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.4-.5-2-1-3-1.1-2.1-.2-4 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.2.4-2.3 1-3.4a2.5 2.5 0 0 0 2.5 2.9z"/></svg>',
  pipe:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 8h8a4 4 0 0 1 4 4v10"/><path d="M2 14h5a1 1 0 0 1 1 1v7"/><path d="M14 22h4M2 6v10"/></svg>',
  search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/><path d="M11 8c-1.2 1.6-2 2.6-2 3.6a2 2 0 0 0 4 0c0-1-.8-2-2-3.6z" fill="currentColor"/></svg>',
  tank:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="2" width="12" height="18" rx="6"/><path d="M9 22h6M12 20v2M6 9h12"/></svg>',
};

/* One list drives the home cards, the footer and the services page. */
const SERVICES = [
  {id:'bathrooms', name:'Bathrooms & Wetrooms', icon:'bath', feature:true, tag:'Our speciality',
   short:'Bespoke luxury bathrooms and wetrooms, designed around you and fitted from start to finish.'},
  {id:'emergency', name:'24/7 Emergency Plumbing', icon:'alarm', tag:'Day or night',
   short:'Burst pipe or bad leak? Call us any time, day or night, and we will help get it under control.'},
  {id:'plumbing', name:'Plumbing', icon:'wrench',
   short:'From a dripping tap to new pipework, toilets, showers and sinks. No job too small.'},
  {id:'heating', name:'Heating', icon:'flame',
   short:'Radiators, heating repairs and upgrades to keep your home warm and running well.'},
  {id:'leak-detection', name:'Leak Detection', icon:'search',
   short:'We track down hidden leaks fast, so you can fix the problem without ripping up the house.'},
  {id:'drainage', name:'Drainage', icon:'pipe',
   short:'Blocked sinks, toilets and drains cleared, and drainage problems sorted properly.'},
  {id:'g3-unvented', name:'G3 Unvented Systems', icon:'tank',
   short:'Installation and servicing of unvented hot water cylinders, done safely and to regulations.'},
];

const NAV = [
  ['index.html','Home','home'],
  ['services.html','Services','services'],
  ['portfolio.html','Our Work','portfolio'],
  ['contact.html','Contact','contact'],
];

function header(page){
  return `
  <header class="site-header">
    <div class="wrap nav">
      <a href="index.html" class="brand" aria-label="Nubo Plumbing and Bathrooms home">
        <span class="brand-mark">${I.drop}</span>
        <span class="brand-name">NUBO<small>PLUMBING &amp; BATHROOMS</small></span>
      </a>
      <ul class="menu" id="menu">
        ${NAV.map(([h,l,k])=>`<li><a href="${h}" class="${k===page?'active':''}">${l}</a></li>`).join('')}
      </ul>
      <div class="nav-cta">
        <a href="${TEL}" class="nav-phone">${I.phone}<span><small>24/7 EMERGENCIES</small>${PHONE}</span></a>
        <a href="contact.html" class="btn btn-cyan">Free quote</a>
        <button class="burger" id="burger" aria-label="Open menu" aria-expanded="false" aria-controls="menu">${I.menu}</button>
      </div>
    </div>
  </header>`;
}

function footer(){
  return `
  <footer class="site-footer">
    <div class="wrap">
      <div class="f-grid">
        <div class="f-about">
          <a href="index.html" class="brand"><span class="brand-mark">${I.drop}</span><span class="brand-name" style="color:#fff">NUBO<small>PLUMBING &amp; BATHROOMS LTD</small></span></a>
          <p>Bespoke luxury bathrooms and wetrooms, plus 24/7 emergency plumbing, heating and leak detection.</p>
          <div class="socials">
            <a href="${FACEBOOK}" target="_blank" rel="noopener" aria-label="Facebook">${I.fb}</a>
            <a href="${INSTAGRAM}" target="_blank" rel="noopener" aria-label="Instagram">${I.ig}</a>
          </div>
          <div class="f-mascot"><img src="img/mascot.jpg" alt="Nubo mascot" width="58" height="56"><span>Say hi to our mascot on<br>Facebook and Instagram.</span></div>
        </div>
        <div>
          <h4>Services</h4>
          <ul>${SERVICES.map(s=>`<li><a href="services.html#${s.id}">${s.name}</a></li>`).join('')}</ul>
        </div>
        <div>
          <h4>Areas we cover</h4>
          <ul><li>Essex</li><li>Kent</li><li>Suffolk</li><li>Norfolk</li><li>London</li></ul>
        </div>
        <div>
          <h4>Get in touch</h4>
          <ul>
            <li><a href="${TEL}" style="font-family:var(--display);font-weight:700;color:#fff;font-size:1.15rem">${PHONE}</a></li>
            <li>Available 24/7 for emergencies</li>
            <li><a href="contact.html">Ask for a free quote</a></li>
          </ul>
        </div>
      </div>
      <div class="f-bottom">
        <span>&copy; ${new Date().getFullYear()} Nubo Plumbing &amp; Bathrooms Ltd. All rights reserved.</span>
        <span>Free, no obligation quotes</span>
      </div>
    </div>
  </footer>
  <a href="${TEL}" class="float-call" aria-label="Call Nubo now">${I.phone} Call now</a>`;
}

function serviceCards(el){
  el.innerHTML = SERVICES.map(s=>`
    <a href="services.html#${s.id}" class="svc reveal ${s.feature?'feature':''}">
      ${s.tag?`<span class="tag">${s.tag}</span>`:''}
      <div class="svc-ico">${I[s.icon]}</div>
      <h3>${s.name}</h3>
      <p>${s.short}</p>
      <span class="more">Find out more ${I.arrow}</span>
    </a>`).join('') + `
    <a href="contact.html" class="svc reveal" style="background:var(--tint);border-style:dashed">
      <div class="svc-ico">${I.phone}</div>
      <h3>Not sure what you need?</h3>
      <p>Tell us what is going on and we will point you the right way. Quotes are free.</p>
      <span class="more">Get in touch ${I.arrow}</span>
    </a>`;
}

document.addEventListener('DOMContentLoaded',()=>{
  const page = document.body.dataset.page;
  document.body.insertAdjacentHTML('afterbegin', header(page));
  document.body.insertAdjacentHTML('beforeend', footer());

  // fill any icon placeholders: <i data-i="phone"></i>
  document.querySelectorAll('[data-i]').forEach(e=>{ e.outerHTML = I[e.dataset.i] || ''; });
  document.querySelectorAll('[data-stars]').forEach(e=>{ e.innerHTML = I.star.repeat(5); });
  document.querySelectorAll('[data-tel]').forEach(a=>{ a.href = TEL; });
  document.querySelectorAll('[data-phone]').forEach(e=>{ e.textContent = PHONE; });

  const grid = document.getElementById('svc-grid');
  if (grid) serviceCards(grid);

  // mobile menu
  const burger = document.getElementById('burger'), menu = document.getElementById('menu');
  burger.addEventListener('click',()=>{
    const open = menu.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
    burger.innerHTML = open ? I.close : I.menu;
  });

  // hero headline words fade up one after another
  document.querySelectorAll('[data-words]').forEach(h=>{
    let n = 0;
    const walk = node => {
      [...node.childNodes].forEach(c=>{
        if (c.nodeType === 3) {
          const frag = document.createDocumentFragment();
          c.textContent.split(/(\s+)/).forEach(t=>{
            if (!t.trim()) { frag.appendChild(document.createTextNode(t)); return; }
            const s = document.createElement('span');
            s.className = 'w'; s.textContent = t; s.style.animationDelay = (0.15 + n++ * 0.09) + 's';
            frag.appendChild(s);
          });
          c.replaceWith(frag);
        } else if (c.nodeType === 1) walk(c);
      });
    };
    walk(h);
  });

  // reveal on scroll
  const io = new IntersectionObserver(es=>es.forEach(e=>{
    if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
  }),{threshold:.12, rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll('.reveal').forEach((el,i)=>{
    el.style.transitionDelay = (i % 4) * 0.07 + 's';
    io.observe(el);
  });

  // demo form: no backend yet
  document.querySelectorAll('form[data-demo]').forEach(f=>f.addEventListener('submit',e=>{
    e.preventDefault();
    f.closest('.form').classList.add('sent');
  }));

  // portfolio filters
  const filters = document.querySelector('.filters');
  if (filters) filters.addEventListener('click',e=>{
    const b = e.target.closest('button'); if (!b) return;
    filters.querySelectorAll('button').forEach(x=>x.classList.toggle('on', x===b));
    document.querySelectorAll('.pf').forEach(p=>{
      p.style.display = (b.dataset.f==='all' || p.dataset.cat.includes(b.dataset.f)) ? '' : 'none';
    });
  });
});

// Design-concept banner (preview build, not the official site)
(function(){
  const b=document.createElement('div');
  b.className='concept-bar';
  b.innerHTML='Design concept prepared by POM-DATA for Nubo Plumbing &amp; Bathrooms. This is a preview, not the official website: <a href="https://www.nubo-property.co.uk/" rel="nofollow">nubo-property.co.uk</a>';
  document.body.prepend(b);
})();
