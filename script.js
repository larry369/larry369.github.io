// Theme
var btn=document.getElementById('themeBtn');
if(btn){var dark=false;btn.addEventListener('click',function(){dark=!dark;document.documentElement.setAttribute('data-theme',dark?'dark':'');btn.innerHTML=dark?'\u2600\uFE0F':'\uD83C\uDF19'})}

// Nav scroll
window.addEventListener('scroll',function(){var n=document.querySelector('.nav');if(n)n.classList.toggle('scrolled',window.scrollY>40)});

// Scroll reveal
var obs=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting)x.target.classList.add('visible')})},{threshold:0.1});
document.querySelectorAll('.reveal').forEach(function(el){obs.observe(el)});

// Page transition
function pageNav(e,el){
    e.preventDefault();
    var w=document.getElementById('pageWrap');
    if(w){w.classList.add('page-exit');setTimeout(function(){window.location.href=el.href},300)}
    else{window.location.href=el.href}
    return false;
}

// Ripple
document.addEventListener('click',function(e){var r=document.createElement('div');r.className='ripple';r.style.left=(e.clientX-30)+'px';r.style.top=(e.clientY-30)+'px';document.body.appendChild(r);setTimeout(function(){r.remove()},600)});
