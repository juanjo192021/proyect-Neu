let menu = document.getElementById("divContainerMenuBuscarId");
let altura = menu.offsetTop;


const seccionImgInicioClass = document.querySelector(".seccionImgInicioClass");
let divImgBanner = document.querySelectorAll(".divImgBanner");
let divImgBannerLast = divImgBanner[divImgBanner.length -1 ];

const btnIzq = document.querySelector("#btnIzq");
const btnDer = document.querySelector("#btnDer");

window.addEventListener("scroll", function(){

    if(window.pageYOffset > altura){
        menu.classList.add("divContainerMenuBuscar-fixed");
    }else{
        menu.classList.remove("divContainerMenuBuscar-fixed");
    }


});

seccionImgInicioClass.insertAdjacentElement("afterbegin",divImgBannerLast);

function moverDerecha(){
    let divImgBannerFirst = document.querySelectorAll(".divImgBanner")[0];
    seccionImgInicioClass.style.marginLeft = "-200%";
    seccionImgInicioClass.style.transition = "all 1s";
    setTimeout(() =>{
        
        seccionImgInicioClass.style.transition = "none";
        seccionImgInicioClass.insertAdjacentElement("beforeend", divImgBannerFirst);
        seccionImgInicioClass.style.marginLeft = "-100%";
    }, 1000);
}
const moverIzquierda =() =>{
    let divImgBanner = document.querySelectorAll(".divImgBanner");
    let divImgBannerLast = divImgBanner[divImgBanner.length -1 ];    
    seccionImgInicioClass.style.marginLeft = "0";
    seccionImgInicioClass.style.transition = "all 1s";
    setTimeout(() =>{
        
        seccionImgInicioClass.style.transition = "none";
        seccionImgInicioClass.insertAdjacentElement("afterbegin",divImgBannerLast);
        seccionImgInicioClass.style.marginLeft = "-100%";
    }, 1000);
}
let auto = setInterval(() => {
    moverDerecha();
}, 7000);

btnDer.addEventListener("click",() =>{      
    moverDerecha();
});
btnIzq.addEventListener("click",() =>{
    moverIzquierda();
});
