function navbarToogle(){

    let nav = document.getElementById('navbar-nav');
    console.log(nav.style.display);
    
    if(nav.style.display == '' || nav.style.display == 'none'){
        nav.style.display = 'flex';
    }
    else {
        nav.style.display = 'none';
    }
}