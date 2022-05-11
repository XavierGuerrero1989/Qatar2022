const guardaGanadores4tos = JSON.parse(localStorage.getItem("ganadores4tos"))

document.addEventListener("DOMContentLoaded", () => {

let img2_1 = document.getElementById("img2_1")
let img2_2 = document.getElementById("img2_2")
let img2_3 = document.getElementById("img2_3")
let img2_4 = document.getElementById("img2_4")

let semi1 = document.getElementById("2_1")
let semi2 = document.getElementById("2_2")
let semi3 = document.getElementById("2_3")
let semi4 = document.getElementById("2_4")

if (localStorage.getItem("ganadores4tos")) {

let ganadorAS = document.getElementById("ganadorAS")
ganadorAS.innerText = guardaGanadores4tos[0].pais
let ganadorASimg = document.getElementById("imgAS")
ganadorASimg.src = "../assets/img/escudos/"+guardaGanadores4tos[0].id+".png"
let ganadorAI = document.getElementById("ganadorAI")
ganadorAI.innerText = guardaGanadores4tos[1].pais
let ganadorAIimg = document.getElementById("imgAI")
ganadorAIimg.src = "../assets/img/escudos/"+guardaGanadores4tos[1].id+".png"
let ganadorBS = document.getElementById("ganadorBS")
ganadorBS.innerText = guardaGanadores4tos[2].pais
let ganadorBSimg = document.getElementById("imgBS")
ganadorBSimg.src = "../assets/img/escudos/"+guardaGanadores4tos[2].id+".png"
let ganadorBI = document.getElementById("ganadorBI")
ganadorBI.innerText = guardaGanadores4tos[3].pais
let ganadorBIimg = document.getElementById("imgBI")
ganadorBIimg.src = "../assets/img/escudos/"+guardaGanadores4tos[3].id+".png"
}

let botonGeneradorSemis = document.getElementById ("botonGeneradorSemis");
botonGeneradorSemis.addEventListener ("click", function (){

img2_1.src = "../assets/img/escudos/"+guardaGanadores4tos[0].id+".png"
img2_2.src = "../assets/img/escudos/"+guardaGanadores4tos[1].id+".png"
img2_3.src = "../assets/img/escudos/"+guardaGanadores4tos[2].id+".png"
img2_4.src = "../assets/img/escudos/"+guardaGanadores4tos[3].id+".png"


semi1.innerText = guardaGanadores4tos[0].pais
semi2.innerText = guardaGanadores4tos[1].pais
semi3.innerText = guardaGanadores4tos[2].pais
semi4.innerText = guardaGanadores4tos[3].pais


Toastify({

    text: "Generaste las SEMIFINALES con exito",
    duration: 3000,
    style: {
        background: "#56042C",
      } 
    
    }).showToast();

})



let gol2_1 = document.getElementById("2_1G90")
let pen2_1 = document.getElementById("2_1GP")
pen2_1.disabled = true;
let gol2_2 = document.getElementById("2_2G90")
let pen2_2 = document.getElementById("2_2GP")
pen2_2.disabled = true;
let gol2_3 = document.getElementById("2_3G90")
let pen2_3 = document.getElementById("2_3GP")
pen2_3.disabled = true;
let gol2_4 = document.getElementById("2_4G90")
let pen2_4 = document.getElementById("2_4GP")
pen2_4.disabled = true;

gol2_1.addEventListener("change", revision2_1())
gol2_2.addEventListener("change", revision2_1())


function revision2_1 () {
    gol2_1.addEventListener("input", function () {
        gol2_2.addEventListener("input", function () {
            if (parseInt(gol2_1.value) == parseInt(gol2_2.value)) {
                pen2_1.disabled = false;
                pen2_2.disabled = false;
            } else {
                pen2_1.disabled = true;
                pen2_2.disabled = true;
            }
        } )
    })
}

gol2_3.addEventListener("change", revision2_2())
gol2_4.addEventListener("change", revision2_2())


function revision2_2 () {
    gol2_3.addEventListener("input", function () {
        gol2_4.addEventListener("input", function () {
            if (parseInt(gol2_3.value) == parseInt(gol2_4.value)) {
                pen2_3.disabled = false;
                pen2_4.disabled = false;
            } else {
                pen2_3.disabled = true;
                pen2_4.disabled = true;
            }
        } )
    })
}

let semis1 = []
let semis2 = []

if (localStorage.getItem("ganadores4tos")) {

semis1 = [guardaGanadores4tos[0], guardaGanadores4tos[1]]
semis2 = [guardaGanadores4tos[2], guardaGanadores4tos[3]]

for (let index = 0; index <2; index++) {
        semis1[index].puntos = 0;
        semis2[index].puntos = 0;
    }

    document.getElementById(`botonSemis`).addEventListener(`click`, () =>  { 

    

    if (parseInt(gol2_1.value)>parseInt(gol2_2.value)) {
        semis1[0].puntos = 3
        semis1[1].puntos = 0
    } else if (parseInt(gol2_1.value) < parseInt(gol2_2.value)) {
        semis1[0].puntos = 0
        semis1[1].puntos = 3
    } else if (parseInt(pen2_1.value)>parseInt(pen2_2.value)) {
        semis1[0].puntos = 3
        semis1[1].puntos = 0
    } else {
        semis1[0].puntos = 0
        semis1[1].puntos = 3
    }

    if (parseInt(gol2_3.value)>parseInt(gol2_4.value)) {
        semis2[0].puntos = 3
        semis2[1].puntos = 0
    } else if (parseInt(gol2_3.value) < parseInt(gol2_4.value)) {
        semis2[0].puntos = 0
        semis2[1].puntos = 3
    } else if (parseInt(pen2_3.value)>parseInt(pen2_4.value)) {
        semis2[0].puntos = 3
        semis2[1].puntos = 0
    } else {
        semis2[0].puntos = 0
        semis2[1].puntos = 3
    }

    semis1.sort((a, b) => {
        if (b.puntos > a.puntos) {
            return 1;
        }
        if (b.puntos < a.puntos) {
            return -1;
        }
        return 0;
    })

    semis2.sort((a, b) => {
        if (b.puntos > a.puntos) {
            return 1;
        }
        if (b.puntos < a.puntos) {
            return -1;
        }
        return 0;
    })

    
    const ganadoresSemis = [semis1[0], semis2[0]]
    const perdedoresSemis = [semis1[1], semis2[1]]


    const guardaGanadoresSemis = JSON.stringify(ganadoresSemis)
    localStorage.setItem("ganadoresSemis", guardaGanadoresSemis);

    const guardaPerdedoresSemis = JSON.stringify(perdedoresSemis)
    localStorage.setItem("perdedoresSemis", guardaPerdedoresSemis);



    let valorg2_1 = parseInt(gol2_1.value)
    let valorg2_1p = parseInt(pen2_1.value)
    let valorg2_2 = parseInt(gol2_2.value)
    let valorg2_2p = parseInt(pen2_2.value)
    let valorg2_3 = parseInt(gol2_3.value)
    let valorg2_3p = parseInt(pen2_3.value)
    let valorg2_4 = parseInt(gol2_4.value)
    let valorg2_4p = parseInt(pen2_4.value)
    

    const golesSemis =[ valorg2_1, valorg2_1p, valorg2_2, valorg2_2p, valorg2_3, valorg2_3p, valorg2_4, valorg2_4p]

    const guardaGolesSemis = JSON.stringify(golesSemis)
    localStorage.setItem("golesSemis", guardaGolesSemis);

    Toastify({

        text: "Cargaste las SEMIFINALES con exito",
        duration: 3000,
        style: {
            background: "#56042C",
          } 
        
        }).showToast();    

})}


localStorage.hasOwnProperty("golesSemis") === true && deployGolesSemis();

function deployGolesSemis() {
    const golesSemisRecuperados = JSON.parse(localStorage.getItem("golesSemis"))

    gol2_1.value = golesSemisRecuperados[0]
    pen2_1.value = golesSemisRecuperados[1]
    gol2_2.value = golesSemisRecuperados[2]
    pen2_2.value = golesSemisRecuperados[3]
    gol2_3.value = golesSemisRecuperados[4]
    pen2_3.value = golesSemisRecuperados[5]
    gol2_4.value = golesSemisRecuperados[6]
    pen2_4.value = golesSemisRecuperados[7]

    img2_1.src = "../assets/img/escudos/"+guardaGanadores4tos[0].id+".png"
    img2_2.src = "../assets/img/escudos/"+guardaGanadores4tos[1].id+".png"
    img2_3.src = "../assets/img/escudos/"+guardaGanadores4tos[2].id+".png"
    img2_4.src = "../assets/img/escudos/"+guardaGanadores4tos[3].id+".png"
   

    semi1.innerText = guardaGanadores4tos[0].pais
    semi2.innerText = guardaGanadores4tos[1].pais
    semi3.innerText = guardaGanadores4tos[2].pais
    semi4.innerText = guardaGanadores4tos[3].pais
    
}

document.getElementById(`botonResetSemis`).addEventListener(`click`, () =>  {
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
                        localStorage.removeItem("golesSemis");
                        gol2_1.value = 0
                        pen2_1.value = 0
                        gol2_2.value = 0
                        pen2_2.value = 0
                        gol2_3.value = 0
                        pen2_3.value = 0
                        gol2_4.value = 0
                        pen2_4.value = 0

                        img2_1.src = " "
                        img2_2.src = " "
                        img2_3.src = " "
                        img2_4.src = " "
                    

                        semi1.innerText = "Ganador 1 - 4tos de final A"
                        semi2.innerText = "Ganador 2 - 4tos de final A"
                        semi3.innerText = "Ganador 1 - 4tos de final B"
                        semi4.innerText = "Ganador 2 - 4tos de final B"

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

const guardaGanadoresSemis = JSON.parse(localStorage.getItem("ganadoresSemis"))

const guardaPerdedoresSemis = JSON.parse(localStorage.getItem("perdedoresSemis"))



