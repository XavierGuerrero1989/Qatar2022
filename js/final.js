const guardaGanadoresSemis = JSON.parse(localStorage.getItem("ganadoresSemis"))
const guardaPerdedoresSemis = JSON.parse(localStorage.getItem("perdedoresSemis"))

document.addEventListener("DOMContentLoaded", () => {

let img3_1 = document.getElementById("img3_1")
let img3_2 = document.getElementById("img3_2")
let imgfinal1 = document.getElementById("imgf1")
let imgfinal2 = document.getElementById("imgf2")

let tercer1 = document.getElementById("3_1")
let tercer2 = document.getElementById("3_2")
let final1 = document.getElementById("f1")
let final2 = document.getElementById("f2")

let titulo3ro = document.getElementById("tituloTercerPuesto")
let titulo2do = document.getElementById("tituloSegundoPuesto")
let titulo1ro = document.getElementById("tituloCampeon")

let img3ro = document.getElementById("imgTercerPuesto")
let img2do = document.getElementById("imgSegundoPuesto")
let img1ro = document.getElementById("imgCampeon")

let finalista1 = document.getElementById("finalista1")
finalista1.innerText = guardaGanadoresSemis[0].pais
let imagenFinalista1 = document.getElementById("imgFinal1")
imagenFinalista1.src = "../assets/img/escudos/"+guardaGanadoresSemis[0].id+".png"
let finalista2 = document.getElementById("finalista2")
finalista2.innerText = guardaGanadoresSemis[1].pais
let imagenFinalista2 = document.getElementById("imgFinal2")
imagenFinalista2.src = "../assets/img/escudos/"+guardaGanadoresSemis[1].id+".png"
let perdedor1 = document.getElementById("perdedor1")
perdedor1.innerText = guardaPerdedoresSemis[0].pais
let imagenPerdedor1 = document.getElementById("imgPerdedor1")
imagenPerdedor1.src = "../assets/img/escudos/"+guardaPerdedoresSemis[0].id+".png"
let perdedor2 = document.getElementById("perdedor2")
perdedor2.innerText = guardaPerdedoresSemis[1].pais
let imagenPerdedor2 = document.getElementById("imgPerdedor2")
imagenPerdedor2.src = "../assets/img/escudos/"+guardaPerdedoresSemis[1].id+".png"

let botonGeneradorFinal = document.getElementById ("botonGeneradorFinal");
botonGeneradorFinal.addEventListener ("click", function (){

img3_1.src = "../assets/img/escudos/"+guardaPerdedoresSemis[0].id+".png"
img3_2.src = "../assets/img/escudos/"+guardaPerdedoresSemis[1].id+".png"
imgfinal1.src = "../assets/img/escudos/"+guardaGanadoresSemis[0].id+".png"
imgfinal2.src = "../assets/img/escudos/"+guardaGanadoresSemis[1].id+".png"


tercer1.innerText = guardaPerdedoresSemis[0].pais
tercer2.innerText = guardaPerdedoresSemis[1].pais
final1.innerText = guardaGanadoresSemis[0].pais
final2.innerText = guardaGanadoresSemis[1].pais


Toastify({

    text: "Generaste las FINALES con exito",
    
    duration: 3000
    
    }).showToast();

})



let goltercer1 = document.getElementById("tercer1G90")
let pentercer1 = document.getElementById("tercer1GP")
pentercer1.disabled = true;
let goltercer2 = document.getElementById("tercer2G90")
let pentercer2 = document.getElementById("tercer2GP")
pentercer2.disabled = true;
let golfinal1 = document.getElementById("f1G90")
let penfinal1 = document.getElementById("f1GP")
penfinal1.disabled = true;
let golfinal2 = document.getElementById("f2G90")
let penfinal2 = document.getElementById("f2GP")
penfinal2.disabled = true;

goltercer1.addEventListener("change", revisionTercer());
goltercer2.addEventListener("change", revisionTercer());

function revisionTercer () {
    goltercer1.addEventListener("input", function () {
        goltercer2.addEventListener("input", function () {
            if (parseInt(goltercer1.value) == parseInt(goltercer2.value)) {
                pentercer1.disabled = false;
                pentercer2.disabled = false;
            } else {
                pentercer1.disabled = true;
                pentercer2.disabled = true;
            }
        } )
    })
}

golfinal1.addEventListener("change", revisionFinal())
golfinal2.addEventListener("change", revisionFinal())


function revisionFinal () {
    golfinal1.addEventListener("input", function () {
        golfinal2.addEventListener("input", function () {
            if (parseInt(golfinal1.value) == parseInt(golfinal2.value)) {
                penfinal1.disabled = false;
                penfinal2.disabled = false;
            } else {
                penfinal1.disabled = true;
                penfinal2.disabled = true;
            }
        } )
    })
}

let tercerPuesto = []
let final = []


if (localStorage.getItem("ganadoresSemis")) {
tercerPuesto = [guardaPerdedoresSemis[0], guardaPerdedoresSemis[1]]
final = [guardaGanadoresSemis[0], guardaGanadoresSemis[1]]

for (let index = 0; index <2; index++) {
        tercerPuesto[index].puntos = 0;
        final[index].puntos = 0;
    }

document.getElementById(`botonFinales`).addEventListener(`click`, () =>  { 

    

    if (parseInt(goltercer1.value)>parseInt(goltercer2.value)) {
        tercerPuesto[0].puntos = 3
        tercerPuesto[1].puntos = 0
    } else if (parseInt(goltercer1.value) < parseInt(goltercer2.value)) {
        tercerPuesto[0].puntos = 0
        tercerPuesto[1].puntos = 3
    } else if (parseInt(pentercer1.value) > parseInt(pentercer2.value)) {
        tercerPuesto[0].puntos = 3
        tercerPuesto[1].puntos = 0
    } else {
        tercerPuesto[0].puntos = 0
        tercerPuesto[1].puntos = 3
    }

    if (parseInt(golfinal1.value)>parseInt(golfinal2.value)) {
        final[0].puntos = 3
        final[1].puntos = 0
    } else if (parseInt(golfinal1.value) < parseInt(golfinal1.value)) {
        final[0].puntos = 0
        final[1].puntos = 3
    } else if (parseInt(penfinal1.value)>parseInt(penfinal2.value)) {
        final[0].puntos = 3
        final[1].puntos = 0
    } else {
        final[0].puntos = 0
        final[1].puntos = 3
    }

    tercerPuesto.sort((a, b) => {
        if (b.puntos > a.puntos) {
            return 1;
        }
        if (b.puntos < a.puntos) {
            return -1;
        }
        return 0;
    })

    final.sort((a, b) => {
        if (b.puntos > a.puntos) {
            return 1;
        }
        if (b.puntos < a.puntos) {
            return -1;
        }
        return 0;
    })

    const finalResultados = [final[0], final[1], tercerPuesto[0], tercerPuesto[1]] 

    const guardaResultadoFinales = JSON.stringify(finalResultados)
    localStorage.setItem("resultadosFinales", guardaResultadoFinales);

    let valorg3_1 = parseInt(goltercer1.value)
    let valorg3_1p = parseInt(pentercer1.value)
    let valorg3_2 = parseInt(goltercer2.value)
    let valorg3_2p = parseInt(pentercer2.value)
    let valorFinal1 = parseInt(golfinal1.value)
    let valorFinal1p = parseInt(penfinal1.value)
    let valorFinal2 = parseInt(golfinal2.value)
    let valorFinal2p = parseInt(penfinal2.value)
    

    const golesFinales =[ valorg3_1, valorg3_1p, valorg3_2, valorg3_2p, valorFinal1, valorFinal1p, valorFinal2, valorFinal2p]

    const guardaGolesFinales = JSON.stringify(golesFinales)
    localStorage.setItem("golesFinales", guardaGolesFinales);


    img3ro.src = "../assets/img/formaciones/"+finalResultados[2].id+".jpg"
    img2do.src = "../assets/img/formaciones/"+finalResultados[1].id+".jpg"
    img1ro.src = "../assets/img/formaciones/"+finalResultados[0].id+".jpg"

    titulo1ro.innerText = finalResultados[0].pais
    titulo2do.innerText = finalResultados[1].pais
    titulo3ro.innerText = finalResultados[2].pais


    Toastify({

        text: "Cargaste las FINALES con exito",
        
        duration: 3000
        
        }).showToast();    
})}


localStorage.hasOwnProperty("golesFinales") === true && deployGolesFinales();

function deployGolesFinales() {
    const golesFinalesRecuperados = JSON.parse(localStorage.getItem("golesFinales"))

    goltercer1 = golesFinalesRecuperados[0]
    pentercer1 = golesFinalesRecuperados[1]
    goltercer2 = golesFinalesRecuperados[2]
    pentercer2 = golesFinalesRecuperados[3]
    golfinal1 = golesFinalesRecuperados[4]
    penfinal1 = golesFinalesRecuperados[5]
    golfinal2 = golesFinalesRecuperados[6]
    penfinal2 = golesFinalesRecuperados[7]

    img3_1.src = "../assets/img/escudos/"+guardaPerdedoresSemis[0].id+".png"
    img3_2.src = "../assets/img/escudos/"+guardaPerdedoresSemis[1].id+".png"
    imgfinal1.src = "../assets/img/escudos/"+guardaGanadoresSemis[0].id+".png"
    imgfinal2.src = "../assets/img/escudos/"+guardaGanadoresSemis[1].id+".png"
   

    tercer1.innerText = guardaPerdedoresSemis[0].pais
    tercer2.innerText = guardaPerdedoresSemis[1].pais
    final1.innerText = guardaGanadoresSemis[0].pais
    final2.innerText = guardaGanadoresSemis[1].pais
    
}

document.getElementById(`botonResetFinales`).addEventListener(`click`, () =>  {
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
        confirmButtonText: 'Si, Borrar!',
        cancelButtonText: 'No, cancelar!',
        reverseButtons: true
      }).then((result) => {
                if (result.isConfirmed) {
                        localStorage.removeItem("golesFinales");
                        localStorage.removeItem("resultadosFinales");

                        goltercer1.value = 0
                        pentercer1.value = 0
                        goltercer2.value = 0
                        pentercer2.value = 0
                        golfinal1.value = 0
                        penfinal1.value = 0
                        golfinal2.value = 0
                        penfinal2.value = 0
                    
                        img3_1.src = " "
                        img3_2.src = " "
                        imgfinal1.src = " "
                        imgfinal2.src = " "
                       
                    
                        tercer1.innerText = "Perdedor SemiFinal 1"
                        tercer2.innerText = "Perdedor SemiFinal 2"
                        final1.innerText = "Ganador SemiFinal 1"
                        final2.innerText = "Ganador SemiFinal 2"

                        img3ro.src = " "
                        img2do.src = " "
                        img1ro.src = " "

                        titulo1ro.innerText = "Medalla de Oro"
                        titulo2do.innerText = "Medalla de Plata"
                        titulo3ro.innerText = "Medalla de Bronce"

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

})