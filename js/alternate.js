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
