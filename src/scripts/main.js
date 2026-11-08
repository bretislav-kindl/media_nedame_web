// Animace a interakce webu Média nedáme!
function scramble(el){
  var final = el.getAttribute('data-final') || el.textContent; el.setAttribute('data-final', final);
  var chars = '0123456789'; var t0 = performance.now(), dur = 900;
  function step(t){
    var k = Math.min(1,(t-t0)/dur), out='';
    for(var i=0;i<final.length;i++){
      var c = final[i];
      if(/[0-9]/.test(c) && i/final.length > k) out += chars[(Math.random()*10)|0]; else out += c;
    }
    el.textContent = out; if(k<1) requestAnimationFrame(step); else el.textContent = final;
  }
  requestAnimationFrame(step);
}
(function(){
  // rozbalovací prvky: tlačítko [data-x] ovládá panel přes aria-controls
  function setOpen(btn, open){
    btn.setAttribute('aria-expanded', open ? 'true':'false');
    var p = document.getElementById(btn.getAttribute('aria-controls'));
    if(p){ p.classList.toggle('open', open); p.setAttribute('aria-hidden', open?'false':'true'); }
    var host = btn.closest('[data-xhost]'); if(host) host.classList.toggle('is-open', open);
  }
  document.addEventListener('click', function(ev){
    var b = ev.target.closest('[data-x]'); if(!b) return;
    var open = b.getAttribute('aria-expanded') !== 'true';
    var grp = b.getAttribute('data-x');
    if(grp && grp !== 'free' && open){
      document.querySelectorAll('[data-x="'+grp+'"][aria-expanded="true"]').forEach(function(o){ if(o!==b) setOpen(o,false); });
    }
    setOpen(b, open);
  });
  document.querySelectorAll('[data-xall]').forEach(function(t){
    t.addEventListener('click', function(){
      var grp = t.getAttribute('data-xall');
      var btns = document.querySelectorAll('[data-x="'+grp+'"]');
      var anyClosed = Array.prototype.some.call(btns, function(b){ return b.getAttribute('aria-expanded')!=='true'; });
      btns.forEach(function(b){ setOpen(b, anyClosed); });
      t.setAttribute('aria-pressed', anyClosed ? 'true':'false');
      t.querySelector('span').textContent = anyClosed ? t.getAttribute('data-close') : t.getAttribute('data-open');
    });
  });
})();
(function(){
  var root = document.documentElement, body = document.body;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var intro = document.getElementById('intro');
  function start(){ body.classList.add('ready'); document.querySelector('.hero').classList.add('shake'); }
  function endIntro(){ if(!intro || intro.classList.contains('go')) return; intro.classList.add('go'); start(); setTimeout(function(){ intro.classList.add('gone'); }, 1000); }
  var seen = false; try{ seen = sessionStorage.getItem('mn-intro') === '1'; sessionStorage.setItem('mn-intro','1'); }catch(e){}
  if(reduce || seen){ if(intro) intro.classList.add('gone'); start(); }
  else {
    var tc = document.getElementById('tc'), steps = ['11<b>:</b>57','11<b>:</b>58','11<b>:</b>59'], i = 0;
    var iv = setInterval(function(){ i++; if(i < steps.length){ tc.innerHTML = steps[i]; } else { clearInterval(iv); setTimeout(endIntro, 350); } }, 520);
    document.getElementById('skip').addEventListener('click', function(){ clearInterval(iv); endIntro(); });
    window.addEventListener('wheel', function(){ clearInterval(iv); endIntro(); }, {once:true, passive:true});
    window.addEventListener('touchstart', function(){ clearInterval(iv); endIntro(); }, {once:true, passive:true});
  }
  // navigace
  var nav = document.querySelector('.nav');
  document.querySelector('.menu-btn').addEventListener('click', function(){
    var o = nav.classList.toggle('open'); this.setAttribute('aria-expanded', o?'true':'false');
  });
  nav.querySelectorAll('ul a').forEach(function(a){ a.addEventListener('click', function(){ nav.classList.remove('open'); }); });
  // scroll: progress, letterbox, parallax, časová osa
  var prog = document.querySelector('.progress'), hero = document.querySelector('.hero');
  var inters = document.querySelectorAll('.interlude'), tl = document.querySelector('.tl');
  function onScroll(){
    var y = window.scrollY, h = document.documentElement.scrollHeight - innerHeight;
    prog.style.setProperty('--p', h > 0 ? (y / h).toFixed(4) : 0);
    nav.classList.toggle('solid', y > innerHeight * 0.6);
    hero.style.setProperty('--lb', Math.min(1, y / (innerHeight * 0.5)).toFixed(3));
    if(!reduce){
      inters.forEach(function(s){ var r = s.getBoundingClientRect(); if(r.bottom > 0 && r.top < innerHeight){ var k = (r.top + r.height/2 - innerHeight/2) / innerHeight; s.style.setProperty('--py', (k * -90).toFixed(1) + 'px'); } });
    }
    if(tl){ var r = tl.getBoundingClientRect(); var k = (innerHeight * 0.6 - r.top) / r.height; tl.style.setProperty('--tp', Math.max(0, Math.min(1, k)).toFixed(3)); }
  }
  window.addEventListener('scroll', onScroll, {passive:true}); onScroll();
  // vstupy sekcí
  var io = new IntersectionObserver(function(es){
    es.forEach(function(en){ if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target);
      if(en.target.id === 'data') en.target.querySelectorAll('.tile .v').forEach(function(v,i){ setTimeout(function(){ scramble(v); }, i*90); });
    } });
  }, {threshold: 0.18});
  document.querySelectorAll('.scene, .interlude, .fade').forEach(function(s){ io.observe(s); });
  // aktivní položka menu
  var links = {}; nav.querySelectorAll('ul a').forEach(function(a){ links[a.getAttribute('href').slice(1)] = a; });
  var spy = new IntersectionObserver(function(es){ es.forEach(function(en){ var a = links[en.target.id]; if(a && en.isIntersecting){ Object.values(links).forEach(function(l){ l.removeAttribute('aria-current'); }); a.setAttribute('aria-current','true'); } }); }, {rootMargin:'-45% 0px -50% 0px'});
  document.querySelectorAll('section[id]').forEach(function(s){ spy.observe(s); });
  // akce: odpočet, skrytí po skončení dne, zápis do časové osy
  function day(iso){ var q = iso.split('-'); return new Date(+q[0], +q[1]-1, +q[2]); }
  var now = new Date(), today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  var shown = 0;
  document.querySelectorAll('[data-event]').forEach(function(ev){
    var d = Math.round((day(ev.getAttribute('data-event')) - today) / 864e5);
    if(d < 0){ ev.hidden = true; return; }
    shown++;
    var cd = ev.querySelector('.cd'), t = cd.getAttribute('data-time');
    cd.textContent = d > 4 ? 'Za ' + d + ' dní' : d >= 2 ? 'Za ' + d + ' dny' : d === 1 ? 'Zítra v ' + t : 'Dnes v ' + t;
  });
  if(!shown){ var em = document.querySelector('.event-empty'); if(em) em.hidden = false; }
  document.querySelectorAll('[data-after]').forEach(function(li){ if(day(li.getAttribute('data-after')) < today) li.hidden = false; });
  var tb = document.getElementById('tl-btn');
  if(tb){ var n = document.querySelectorAll('.tl li:not([hidden])').length;
    tb.textContent = 'Celá časová osa (' + n + (n === 1 ? ' událost' : (n >= 2 && n <= 4) ? ' události' : ' událostí') + ')'; }
})();
