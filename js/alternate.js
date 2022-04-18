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