const first=document.querySelector('#form-step-one'),success=document.querySelector('#form-success');
document.querySelector('#lead-form').addEventListener('submit',e=>{e.preventDefault();first.hidden=true;success.hidden=false;document.querySelector('#contact').scrollIntoView({behavior:'smooth'});success.querySelector('h2').focus({preventScroll:true})});
document.querySelector('#start-over').addEventListener('click',()=>{document.querySelector('#lead-form').reset();success.hidden=true;first.hidden=false;document.querySelector('[name="name"]').focus({preventScroll:true})});
document.querySelectorAll('a[href="#contact"]').forEach(link=>link.addEventListener('click',()=>{success.hidden=true;first.hidden=false}));
document.querySelector('#search-form').addEventListener('submit',e=>{e.preventDefault();const brand=document.querySelector('#brand-search').value.trim();document.querySelector('#search-message').textContent=`“${brand}” is ready for an expert trademark search. Fill out the assistance form to continue.`});
document.querySelector('.back-top').addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
const updateFloating=()=>document.querySelectorAll('.floating-call,.back-top').forEach(button=>button.classList.toggle('visible',window.scrollY>350));
window.addEventListener('scroll',updateFloating,{passive:true});updateFloating();
