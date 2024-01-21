
hammer=document.querySelector('.hammer')
    navbar=document.querySelector('.navbar')
    navlist = document.querySelector('.nav-list')
    rignav = document.querySelector('.right-nav')
    
    hammer.addEventListener('click',()=>{
    rignav.classList.toggle('v-class');
    navlist.classList.toggle('v-class');
    navbar.classList.toggle('h-navresp');
    })
    