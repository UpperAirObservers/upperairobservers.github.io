const menuBtn=document.querySelector('.menu-toggle'), nav=document.querySelector('.main-nav');
if(menuBtn&&nav){
  menuBtn.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',String(open))});
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuBtn.setAttribute('aria-expanded','false')}));
}
document.querySelectorAll('a[href="#top"]').forEach(btn=>btn.addEventListener('click',e=>{e.preventDefault();window.scrollTo({top:0,behavior:'smooth'})}));
const year=document.getElementById('year'); if(year) year.textContent=new Date().getFullYear();
const revealEls=[...document.querySelectorAll('.reveal')];
if('IntersectionObserver' in window){
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}}),{threshold:.12});
  revealEls.forEach(el=>observer.observe(el));
}else{revealEls.forEach(el=>el.classList.add('is-visible'));}
