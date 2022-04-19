document.getElementById(`botonCamp`).addEventListener(`click`, function(){
    let campeon = document.getElementById("paisesList").value
    let imagen = document.getElementById("campeon")
    let tituloCamp = document.getElementById("campTitle")
    imagen.src = "../assets/img/"+campeon+".jpg"
    tituloCamp.innerText = campeon.toUpperCase();
    let valorCampeon = localStorage.setItem("campeon", campeon);
})

let valorRecuperadoCamp = localStorage.getItem("campeon")
let imagen = document.getElementById("campeon")
let tituloCamp = document.getElementById("campTitle")
imagen.src = "../assets/img/"+valorRecuperadoCamp+".jpg"
tituloCamp.innerText = valorRecuperadoCamp.toUpperCase();


document.getElementById(`botonSubCamp`).addEventListener(`click`, function(){
    let subcampeon = document.getElementById("paisesList2").value
    let imagenSub = document.getElementById("subcampeon")
    let tituloSubCamp = document.getElementById("subcampTitle")
    imagenSub.src = "../assets/img/"+subcampeon+".jpg"
    tituloSubCamp.innerText = subcampeon.toUpperCase();
    let valorSubCampeon = localStorage.setItem("subcampeon", subcampeon);
})

let valorRecuperadoSubCamp = localStorage.getItem("subcampeon")
let imagenSub = document.getElementById("subcampeon")
let tituloSubCamp = document.getElementById("subcampTitle")
imagenSub.src = "../assets/img/"+valorRecuperadoSubCamp+".jpg"
tituloSubCamp.innerText = valorRecuperadoSubCamp.toUpperCase();


document.getElementById(`botonTercero`).addEventListener(`click`, function(){
    let tercero = document.getElementById("paisesList3").value
    let imagenTercero = document.getElementById("tercero")
    let titulotercero = document.getElementById("terceroTitle")
    imagenTercero.src = "../assets/img/"+tercero+".jpg"
    titulotercero.innerText = tercero.toUpperCase();
    let valorTercero = localStorage.setItem("tercero", tercero);
})

let valorRecuperadoTercero = localStorage.getItem("tercero")
let imagenTercero = document.getElementById("tercero")
let titulotercero = document.getElementById("terceroTitle")
imagenTercero.src = "../assets/img/"+valorRecuperadoTercero+".jpg"
titulotercero.innerText = valorRecuperadoTercero.toUpperCase();


document.getElementById(`botonSorpresa`).addEventListener(`click`, function(){
    let sorpresa = document.getElementById("paisesList4").value
    let imagenSorpresa = document.getElementById("sorpresa")
    let titulosorpresa = document.getElementById("sorpresaTitle")
    imagenSorpresa.src = "../assets/img/"+sorpresa+".jpg"
    titulosorpresa.innerText = sorpresa.toUpperCase();
    let valorSorpresa = localStorage.setItem("sorpresa", sorpresa);
})

let valorRecuperadoSorpresa = localStorage.getItem("sorpresa")
let imagenSorpresa = document.getElementById("sorpresa")
let titulosorpresa = document.getElementById("sorpresaTitle")
imagenSorpresa.src = "../assets/img/"+valorRecuperadoSorpresa+".jpg"
titulosorpresa.innerText = valorRecuperadoSorpresa.toUpperCase();


document.getElementById(`botonDecep`).addEventListener(`click`, function(){
    let decepcion = document.getElementById("paisesList5").value
    let imagenDecepcion = document.getElementById("decep")
    let tituloDecepcion = document.getElementById("decepTitle")
    imagenDecepcion.src = "../assets/img/"+decepcion+".jpg"
    tituloDecepcion.innerText = decepcion.toUpperCase();
    let valorDecepcion = localStorage.setItem("decepcion", decepcion);
})

let valorRecuperadoDecepcion = localStorage.getItem("decepcion")
let imagenDecepcion = document.getElementById("decep")
let tituloDecepcion = document.getElementById("decepTitle")
imagenDecepcion.src = "../assets/img/"+valorRecuperadoDecepcion+".jpg"
tituloDecepcion.innerText = valorRecuperadoDecepcion.toUpperCase();

document.getElementById(`botonFigura`).addEventListener(`click`, function(){
    let figura = document.getElementById("jugadoresList").value
    let imagenFigura = document.getElementById("figura")
    let tituloFigura = document.getElementById("figuraTitle")
    imagenFigura.src = "../assets/img/"+figura+".jpg"
    tituloFigura.innerText = figura.toUpperCase();
    let valorFigura = localStorage.setItem("figura", figura);
})

let valorRecuperadoFigura = localStorage.getItem("figura")
let imagenFigura = document.getElementById("figura")
let tituloFigura = document.getElementById("figuraTitle")
imagenFigura.src = "../assets/img/"+valorRecuperadoFigura+".jpg"
tituloFigura.innerText = valorRecuperadoFigura.toUpperCase();

document.getElementById(`botonFigura`).addEventListener(`click`, localStorage.clear())
