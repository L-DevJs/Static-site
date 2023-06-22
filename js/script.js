
/*activacion del menu-hamburguesa responsive*/

let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick=()=>{

    if(navbar.classList.contains('active')){
        navbar.classList.remove('active');
    }else{
        navbar.classList.add('active');
    }
       
}


/*Remover clase active de la barra de navegacion al utilizar el scroll*/

window.onscroll = () =>{
    navbar.classList.remove('active');
}


/*Script funcionalidad contactanos*/


document.querySelectorAll('.about .imagescontent .controls .control-btn').forEach(btn =>{
    btn.onclick = () =>{
        let src = btn.getAttribute('data-src');
        document.querySelector('.about .imagescontent .imagen').src = src;
    }

})

let tabHeaders = document.querySelectorAll(".tabs .tab-header > div");

let tabContent = document.querySelectorAll(".tabs .tab-content > div");


for (let i=0;i<tabHeaders.length;i++){

    tabHeaders[i].addEventListener("click", function(){

        document.querySelector(".tabs .tab-header > .active").classList.remove("active");

    tabHeaders[i].classList.add("active");
        document.querySelector(".tabs .tab-content > .active").classList.remove("active");

        tabContent[i].classList.add("active");
    })


}


//Scrip modal

const open = document.getElementById('buscar-btn');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
  modal_container.classList.add('show');  
});

close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});

modal_container.onclick = (event) =>{

    if(event.target== modal_container){

        modal_container.classList.remove('show');
    }
}

//Averiguar sobre ese error en el DOM

//element.addEventListener*





