const myBtn = document.querySelector('#modul-window_open');

const closeBtn = document.querySelector('.modal_close');

const modal = document.querySelector('.modal');

function toggleModal(){
    if (modal.style.display === 'block') {
        modal.style.display = 'none';
        document.querySelector("body").style.overflow = 'visible';
        
    } else {
        modal.style.display = 'block';
        document.querySelector("body").style.overflow = 'hidden';
    }  
}
function openModal(){
    modal.style.display = 'block';
        document.querySelector("body").style.overflow = 'hidden';
}
function closeModal(){
    modal.style.display = 'none';
    document.querySelector("body").style.overflow = 'visible';
}

myBtn.addEventListener('click', toggleModal);
closeBtn.addEventListener('click', toggleModal);