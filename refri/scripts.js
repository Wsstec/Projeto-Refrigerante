let list = document.querySelectorAll('.item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let count = list.length;
let active = 0;

//Comando para selecionar a classe ativa(active) e remover ela durante o clique do botão//
next.onclick = () => {
   let activeOld = document.querySelector('.active');
   activeOld.classList.remove('active');

   //Comando if else//
   active = active >= count -1 ? 0 : active + 1;
   list[active].classList.add('active');
}

prev.onclick = () => {
   let activeOld = document.querySelector('.active');
   activeOld.classList.remove('active');

   active = active <= 0 ? count -1 : active - 1;
   list[active].classList.add('active');
}
 