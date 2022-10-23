const button = document.querySelector('button');
const pick = document.querySelector('.pick');

button.addEventListener('click', ()=>{
    pick.scrollIntoView({behavior: 'smooth', block: 'center'})
});

pick.addEventListener('click', ()=>{
    window.scrollTo({behavior: 'smooth', top: 0})
});