let btn = document.querySelector('.btn');
let modalBtn = document.querySelector('.modal-btn');
let modal = document.querySelector('.modal');

btn.addEventListener('click', function(){
    modal.style.display = "block";
});

modalBtn.addEventListener('click', function() {
    modal.style.display = "none";
});