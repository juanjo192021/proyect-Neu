//variables menu desplegable
let menu = document.getElementById("divContainerMenuBuscarId");
let altura = menu.offsetTop;

//variables imagenes banner
const seccionImgInicioClass = document.querySelector(".seccionImgInicioClass");
let divImgBanner = document.querySelectorAll(".divImgBanner");
let divImgBannerLast = divImgBanner[divImgBanner.length -1 ];

const btnIzq = document.querySelector("#btnIzq");
const btnDer = document.querySelector("#btnDer");

//variables iniciar sesion
// const linkUsuarioId = document.querySelector("#linkUsuarioId");
const linkUsuarioId = document.querySelector("#linkUsuarioId");
const divIniRegisClass = document.querySelector(".divIniRegisClass");
let divIniRegisId = document.getElementById("divIniRegisId");
const body = document.querySelector("body");
//Evento menu desplegable 
window.addEventListener("scroll", () => {
    if(window.pageYOffset > altura){
        menu.classList.add("divContainerMenuBuscar-fixed");
    }else{
        menu.classList.remove("divContainerMenuBuscar-fixed");
    }
});

//Evento imagenes banner
seccionImgInicioClass.insertAdjacentElement("afterbegin",divImgBannerLast);

const moverDerecha = () => {
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
btnDer.addEventListener("click",() =>{ 
    moverDerecha();
});
btnIzq.addEventListener("click",() =>{
    moverIzquierda();
});


linkUsuarioId.addEventListener("click", () =>{
    divIniRegisId.classList.add("divIniRegisClass-fixed");
    setTimeout(() => {
        divIniRegisId.classList.remove("divIniRegisClass-fixed");
    }, 5000);
});


// linkUsuarioId.addEventListener("dblclick", () =>{
//     divIniRegisId.classList.remove("divIniRegisClass-fixed");
// })

