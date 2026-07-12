// Theme
var btn=document.getElementById('themeBtn');
var dark=localStorage.getItem('theme')==='dark';
if(dark){document.documentElement.setAttribute('data-theme','dark');if(btn)btn.innerHTML='\u2600\uFE0F'}
if(btn){btn.addEventListener('click',function(){dark=!dark;document.documentElement.setAttribute('data-theme',dark?'dark':'');localStorage.setItem('theme',dark?'dark':'');btn.innerHTML=dark?'\u2600\uFE0F':'\uD83C\uDF19'})}

// Mobile menu
var mobileBtn=document.getElementById('mobileMenuBtn');
var mobileMenu=document.getElementById('mobileMenu');
if(mobileBtn&&mobileMenu){mobileBtn.addEventListener('click',function(){mobileMenu.classList.toggle('open')})}

// Utterances theme sync
function updateUtterances(){var iframe=document.querySelector('iframe.utterances-frame');if(iframe){var theme=dark?'github-dark':'github-light';iframe.src=iframe.src.replace(/theme=[^&]*/,'theme='+theme)}}
var mut=new MutationObserver(function(){updateUtterances()});mut.observe(document.body,{childList:true,subtree:true});
