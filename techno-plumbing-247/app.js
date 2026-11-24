// Techno Plumbing 24/7: design concept by POM-DATA
(function(){
  var ICONS = {
    phone:'<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
    clock:'<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
    tag:'<path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L2 12V2h10l8.6 8.6a2 2 0 0 1 0 2.8z"/><circle cx="7" cy="7" r="1.5"/>',
    star:'<path fill="currentColor" stroke="none" d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/>',
    pin:'<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
    mail:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/>',
    arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',
    check:'<path d="M20 6 9 17l-5-5"/>',
    drop:'<path d="M12 2.7c-1.6 2.2-6 7.4-6 11.3a6 6 0 0 0 12 0c0-3.9-4.4-9.1-6-11.3z"/>',
    wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z"/>',
    pipe:'<path d="M4 4v6h10a2 2 0 0 1 2 2v8"/><path d="M8 4v2h10a2 2 0 0 1 2 2v12"/><path d="M2 4h8M14 20h8"/>',
    bath:'<path d="M4 12h16v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z"/><path d="M6 12V5a2 2 0 0 1 4 0"/><path d="M7 20l-1 2M17 20l1 2"/>',
    kitchen:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M8 13v4M8 5.5h.01M12 5.5h.01"/>',
    alert:'<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/>',
    building:'<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"/>',
    card:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>',
    menu:'<path d="M3 6h18M3 12h18M3 18h18"/>',
    close:'<path d="M18 6 6 18M6 6l12 12"/>'
  };
  function svg(name){
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+(ICONS[name]||'')+'</svg>';
  }
  document.querySelectorAll('i[data-i]').forEach(function(el){
    var s=document.createElement('span');s.style.display='contents';s.innerHTML=svg(el.getAttribute('data-i'));el.replaceWith(s.firstChild);
  });
  document.querySelectorAll('[data-stars]').forEach(function(el){el.innerHTML=svg('star')+svg('star')+svg('star')+svg('star')+svg('star');});

  // active nav
  var page=document.body.getAttribute('data-page');
  document.querySelectorAll('.menu a[data-nav]').forEach(function(a){if(a.getAttribute('data-nav')===page)a.classList.add('active');});

  // mobile menu
  var burger=document.querySelector('.burger'),menu=document.querySelector('.menu');
  if(burger&&menu){burger.addEventListener('click',function(){var o=menu.classList.toggle('open');burger.setAttribute('aria-expanded',o);burger.innerHTML=svg(o?'close':'menu');});}

  // headline words
  document.querySelectorAll('[data-words]').forEach(function(h){
    var i=0;
    (function walk(node){
      Array.prototype.slice.call(node.childNodes).forEach(function(n){
        if(n.nodeType===3){
          var frag=document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach(function(part){
            if(!part)return;
            if(/^\s+$/.test(part)){frag.appendChild(document.createTextNode(part));return;}
            var s=document.createElement('span');s.className='w';s.style.animationDelay=(0.08*i++)+'s';s.textContent=part;frag.appendChild(s);
          });
          n.replaceWith(frag);
        } else if(n.nodeType===1){walk(n);}
      });
    })(h);
  });

  // reveal on scroll
  var els=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.12});
    els.forEach(function(el){io.observe(el);});
  } else {els.forEach(function(el){el.classList.add('in');});}

  // counters
  document.querySelectorAll('[data-count]').forEach(function(el){
    var end=parseFloat(el.getAttribute('data-count')),dec=(el.getAttribute('data-count').split('.')[1]||'').length,done=false;
    function run(){if(done)return;done=true;var t0=performance.now();(function tick(t){var p=Math.min(1,(t-t0)/1400);el.textContent=(end*(1-Math.pow(1-p,3))).toFixed(dec);if(p<1)requestAnimationFrame(tick);})(t0);}
    if('IntersectionObserver' in window){new IntersectionObserver(function(es,o){if(es[0].isIntersecting){run();o.disconnect();}}).observe(el);} else run();
  });

  // demo form: this is a preview, nothing is sent
  document.querySelectorAll('form[data-demo]').forEach(function(f){
    f.addEventListener('submit',function(e){
      e.preventDefault();
      var m=f.querySelector('.demo-msg');
      if(m){m.classList.add('show');m.scrollIntoView({behavior:'smooth',block:'center'});}
    });
  });
})();
