let imagen = document.getElementById("campeon")
let tituloCamp = document.getElementById("campTitle")

document.getElementById(`botonCamp`).addEventListener(`click`, function(){
    let campeon = document.getElementById("paisesList").value
    imagen.src = "../assets/img/"+campeon+".jpg"
    tituloCamp.innerText = campeon.toUpperCase();
    let valorCampeon = localStorage.setItem("campeon", campeon);
    Toastify({

        text: "Cargaste al CAMPEON con exito",
        
        duration: 3000
        
        }).showToast();
})


localStorage.hasOwnProperty("campeon") === true && imagenDeployC();
localStorage.hasOwnProperty("campeon") === true && textDeployC();

function imagenDeployC () {
    let valorRecuperadoCamp = localStorage.getItem("campeon")
    imagen.src = "../assets/img/"+valorRecuperadoCamp+".jpg"
}
function textDeployC () {
    let valorRecuperadoCamp = localStorage.getItem("campeon")
    tituloCamp.innerText = valorRecuperadoCamp.toUpperCase();
}



let imagenSub = document.getElementById("subcampeon")
let tituloSubCamp = document.getElementById("subcampTitle")


document.getElementById(`botonSubCamp`).addEventListener(`click`, function(){
    let subcampeon = document.getElementById("paisesList2").value
    imagenSub.src = "../assets/img/"+subcampeon+".jpg"
    tituloSubCamp.innerText = subcampeon.toUpperCase();
    let valorSubCampeon = localStorage.setItem("subcampeon", subcampeon);
    Toastify({

        text: "Cargaste al SUB-CAMPEON con exito",
        
        duration: 3000
        
        }).showToast();
})

localStorage.hasOwnProperty("subcampeon") === true && imagenDeploySc();
localStorage.hasOwnProperty("subcampeon") === true && textDeploySc();

function imagenDeploySc () {
    let valorRecuperadoSubCamp = localStorage.getItem("subcampeon")
    imagenSub.src = "../assets/img/"+valorRecuperadoSubCamp+".jpg"
}
function textDeploySc () {
    let valorRecuperadoSubCamp = localStorage.getItem("subcampeon")
    tituloSubCamp.innerText = valorRecuperadoSubCamp.toUpperCase();
}


let imagenTercero = document.getElementById("tercero")
let titulotercero = document.getElementById("terceroTitle")

document.getElementById(`botonTercero`).addEventListener(`click`, function(){
    let tercero = document.getElementById("paisesList3").value
    imagenTercero.src = "../assets/img/"+tercero+".jpg"
    titulotercero.innerText = tercero.toUpperCase();
    let valorTercero = localStorage.setItem("tercero", tercero);
    Toastify({

        text: "Cargaste al Tercer puesto con exito",
        
        duration: 3000
        
        }).showToast();
})

localStorage.hasOwnProperty("tercero") === true && imagenDeployT();
localStorage.hasOwnProperty("tercero") === true && textDeployT();

function imagenDeployT () {
    let valorRecuperadoTercero = localStorage.getItem("tercero")
    imagenTercero.src = "../assets/img/"+valorRecuperadoTercero+".jpg"
}
function textDeployT () {
    let valorRecuperadoTercero = localStorage.getItem("tercero")
    titulotercero.innerText = valorRecuperadoTercero.toUpperCase();
}


let imagenSorpresa = document.getElementById("sorpresa")
let titulosorpresa = document.getElementById("sorpresaTitle")

document.getElementById(`botonSorpresa`).addEventListener(`click`, function(){
    let sorpresa = document.getElementById("paisesList4").value
    imagenSorpresa.src = "../assets/img/"+sorpresa+".jpg"
    titulosorpresa.innerText = sorpresa.toUpperCase();
    let valorSorpresa = localStorage.setItem("sorpresa", sorpresa);
    Toastify({

        text: "Cargaste a la Sorpresa con exito",
        
        duration: 3000
        
        }).showToast();
})

localStorage.hasOwnProperty("sorpresa") === true && imagenDeployS();
localStorage.hasOwnProperty("sorpresa") === true && textDeployS();

function imagenDeployS () {
    let valorRecuperadoSorpresa = localStorage.getItem("sorpresa")
    imagenSorpresa.src = "../assets/img/"+valorRecuperadoSorpresa+".jpg"
}
function textDeployS () {
    let valorRecuperadoSorpresa = localStorage.getItem("sorpresa")
    titulosorpresa.innerText = valorRecuperadoSorpresa.toUpperCase();
}

let imagenDecepcion = document.getElementById("decep")
let tituloDecepcion = document.getElementById("decepTitle")

document.getElementById(`botonDecep`).addEventListener(`click`, function(){
    let decepcion = document.getElementById("paisesList5").value
    imagenDecepcion.src = "../assets/img/"+decepcion+".jpg"
    tituloDecepcion.innerText = decepcion.toUpperCase();
    let valorDecepcion = localStorage.setItem("decepcion", decepcion);
    Toastify({

        text: "Cargaste a la decepcion con exito",
        
        duration: 3000
        
        }).showToast();
})

localStorage.hasOwnProperty("decepcion") === true && imagenDeployD();
localStorage.hasOwnProperty("decepcion") === true && textDeployD();

function imagenDeployD () {
    let valorRecuperadoDecepcion = localStorage.getItem("decepcion")
    imagenDecepcion.src = "../assets/img/"+valorRecuperadoDecepcion+".jpg"
}
function textDeployD () {
    let valorRecuperadoDecepcion = localStorage.getItem("decepcion")
    tituloDecepcion.innerText = valorRecuperadoDecepcion.toUpperCase();
}

let imagenFigura = document.getElementById("figura")
let tituloFigura = document.getElementById("figuraTitle")

document.getElementById(`botonFigura`).addEventListener(`click`, function(){
    let figura = document.getElementById("jugadoresList").value
    imagenFigura.src = "../assets/img/"+figura+".jpg"
    tituloFigura.innerText = figura.toUpperCase();
    let valorFigura = localStorage.setItem("figura", figura);
    Toastify({

        text: "Cargaste a la FIGURA con exito",
        
        duration: 3000
        
        }).showToast();
})

localStorage.hasOwnProperty("figura") === true && imagenDeployF();
localStorage.hasOwnProperty("figura") === true && textDeployF();

function imagenDeployF () {
    let valorRecuperadoFigura = localStorage.getItem("figura")
    imagenFigura.src = "../assets/img/"+valorRecuperadoFigura+".jpg"
}
function textDeployF () {
    let valorRecuperadoFigura = localStorage.getItem("figura")
    tituloFigura.innerText = valorRecuperadoFigura.toUpperCase();
}


document.getElementById(`botonBorrar`).addEventListener(`click`, () =>  {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Estas seguro de querer borrar tus predicciones?',
        text: "No vas a poder recuperarlas si las borras!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, deseo Borrarlas!',
        cancelButtonText: 'No, cancelar!',
        reverseButtons: true
      }).then((result) => {
                if (result.isConfirmed) {
                        localStorage.clear();
                        imagen.src = "";
                        tituloCamp.innerText = "";
                        imagenSub.src = "";
                        tituloSubCamp.innerText = "";
                        imagenTercero.src = "";
                        titulotercero.innerText = "";
                        imagenSorpresa.src = "";
                        titulosorpresa.innerText = "";
                        imagenDecepcion.src = "";
                        tituloDecepcion.innerText = "";
                        imagenFigura.src = "";
                        tituloFigura.innerText = "";
          swalWithBootstrapButtons.fire(
            'Borrado!',
            'Tus predicciones fueron borradas!',
            'OK'
          )
        } else if (
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelado',
            'Tus predicciones estan a salvo :)',
            'error'
          )
        }
      })
})


