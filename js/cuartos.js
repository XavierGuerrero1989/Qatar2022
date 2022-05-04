import { guardaGanadores8vos } from "./octavos.js";



let img4_1 = document.getElementById("img4_1")
let img4_2 = document.getElementById("img4_2")
let img4_3 = document.getElementById("img4_3")
let img4_4 = document.getElementById("img4_4")
let img4_5 = document.getElementById("img4_5")
let img4_6 = document.getElementById("img4_6")
let img4_7 = document.getElementById("img4_7")
let img4_8 = document.getElementById("img4_8")

let ganador1 = document.getElementById("4_1")
let ganador2 = document.getElementById("4_2")
let ganador3 = document.getElementById("4_3")
let ganador4 = document.getElementById("4_4")
let ganador5 = document.getElementById("4_5")
let ganador6 = document.getElementById("4_6")
let ganador7 = document.getElementById("4_7")
let ganador8 = document.getElementById("4_8")


let botonGenerador4tos = document.getElementById ("botonGenerador4tos");
botonGenerador4tos.addEventListener ("click", function (){

img4_1.src = "../assets/img/escudos/"+guardaGanadores8vos[0].id+".png"
img4_2.src = "../assets/img/escudos/"+guardaGanadores8vos[1].id+".png"
img4_3.src = "../assets/img/escudos/"+guardaGanadores8vos[2].id+".png"
img4_4.src = "../assets/img/escudos/"+guardaGanadores8vos[3].id+".png"
img4_5.src = "../assets/img/escudos/"+guardaGanadores8vos[4].id+".png"
img4_6.src = "../assets/img/escudos/"+guardaGanadores8vos[5].id+".png"
img4_7.src = "../assets/img/escudos/"+guardaGanadores8vos[6].id+".png"
img4_8.src = "../assets/img/escudos/"+guardaGanadores8vos[7].id+".png"

ganador1.innerText = guardaGanadores8vos[0].pais
ganador2.innerText = guardaGanadores8vos[1].pais
ganador3.innerText = guardaGanadores8vos[2].pais
ganador4.innerText = guardaGanadores8vos[3].pais
ganador5.innerText = guardaGanadores8vos[4].pais
ganador6.innerText = guardaGanadores8vos[5].pais
ganador7.innerText = guardaGanadores8vos[6].pais
ganador8.innerText = guardaGanadores8vos[7].pais

Toastify({

    text: "Generaste los 4tos de final con exito",
    
    duration: 3000
    
    }).showToast();

})

const cuartos1 = [guardaGanadores8vos[0], guardaGanadores8vos[1]]
const cuartos2 = [guardaGanadores8vos[2], guardaGanadores8vos[3]]
const cuartos3 = [guardaGanadores8vos[4], guardaGanadores8vos[5]]
const cuartos4 = [guardaGanadores8vos[6], guardaGanadores8vos[7]]

let gol4_1 = document.getElementById("4_1G90")
let pen4_1 = document.getElementById("4_1GP")
pen4_1.disabled = true;
let gol4_2 = document.getElementById("4_2G90")
let pen4_2 = document.getElementById("4_2GP")
pen4_2.disabled = true;
let gol4_3 = document.getElementById("4_3G90")
let pen4_3 = document.getElementById("4_3GP")
pen4_3.disabled = true;
let gol4_4 = document.getElementById("4_4G90")
let pen4_4 = document.getElementById("4_4GP")
pen4_4.disabled = true;
let gol4_5 = document.getElementById("4_5G90")
let pen4_5 = document.getElementById("4_5GP")
pen4_5.disabled = true;
let gol4_6 = document.getElementById("4_6G90")
let pen4_6 = document.getElementById("4_6GP")
pen4_6.disabled = true;
let gol4_7 = document.getElementById("4_7G90")
let pen4_7 = document.getElementById("4_7GP")
pen4_7.disabled = true;
let gol4_8 = document.getElementById("4_8G90")
let pen4_8 = document.getElementById("4_8GP")
pen4_8.disabled = true;

gol4_1.addEventListener("change", revision4_1())
gol4_2.addEventListener("change", revision4_1())

function revision4_1 () {
        gol4_1.addEventListener("input", function () {
            gol4_2.addEventListener("input", function () {
                if (parseInt(gol4_1.value) == parseInt(gol4_2.value)) {
                    pen4_1.disabled = false;
                    pen4_2.disabled = false;
                } else {
                    pen4_1.disabled = true;
                    pen4_2.disabled = true;
                }
            } )
        })
}

gol4_3.addEventListener("change", revision4_2())
gol4_4.addEventListener("change", revision4_2())

function revision4_2 () {
        gol4_3.addEventListener("input", function () {
            gol4_4.addEventListener("input", function () {
                if (parseInt(gol4_3.value) == parseInt(gol4_4.value)) {
                    pen4_3.disabled = false;
                    pen4_4.disabled = false;
                } else {
                    pen4_3.disabled = true;
                    pen4_4.disabled = true;
                }
            } )
        })
}

gol4_5.addEventListener("change", revision4_3())
gol4_6.addEventListener("change", revision4_3())

function revision4_3 () {
        gol4_5.addEventListener("input", function () {
            gol4_6.addEventListener("input", function () {
                if (parseInt(gol4_5.value) == parseInt(gol4_6.value)) {
                    pen4_5.disabled = false;
                    pen4_6.disabled = false;
                } else {
                    pen4_5.disabled = true;
                    pen4_6.disabled = true;
                }
            } )
        })
}

gol4_7.addEventListener("change", revision4_4())
gol4_8.addEventListener("change", revision4_4())

function revision4_4 () {
        gol4_7.addEventListener("input", function () {
            gol4_8.addEventListener("input", function () {
                if (parseInt(gol4_7.value) == parseInt(gol4_8.value)) {
                    pen4_7.disabled = false;
                    pen4_8.disabled = false;
                } else {
                    pen4_7.disabled = true;
                    pen4_8.disabled = true;
                }
            } )
        })
}

document.getElementById(`boton4tos`).addEventListener(`click`, () =>  { 
    if (parseInt(gol4_1.value)>parseInt(gol4_2.value)) {
        cuartos1[0].puntos = 3
        cuartos1[1].puntos = 0
    } else if (parseInt(gol4_1.value) < parseInt(gol4_2.value)) {
        cuartos1[0].puntos = 0
        cuartos1[1].puntos = 3
    } else if (parseInt(pen4_1.value)>parseInt(pen4_2.value)) {
        cuartos1[0].puntos = 3
        cuartos1[1].puntos = 0
    } else {
        cuartos1[0].puntos = 0
        cuartos1[1].puntos = 3
    }

    if (parseInt(gol4_3.value)>parseInt(gol4_4.value)) {
        cuartos2[0].puntos = 3
        cuartos2[1].puntos = 0
    } else if (parseInt(gol4_3.value) < parseInt(gol4_4.value)) {
        cuartos2[0].puntos = 0
        cuartos2[1].puntos = 3
    } else if (parseInt(pen4_3.value)>parseInt(pen4_4.value)) {
        cuartos2[0].puntos = 3
        cuartos2[1].puntos = 0
    } else {
        cuartos2[0].puntos = 0
        cuartos2[1].puntos = 3
    }

    if (parseInt(gol4_5.value)>parseInt(gol4_6.value)) {
        cuartos3[0].puntos = 3
        cuartos3[1].puntos = 0
    } else if (parseInt(gol4_5.value) < parseInt(gol4_6.value)) {
        cuartos3[0].puntos = 0
        cuartos3[1].puntos = 3
    } else if (parseInt(pen4_5.value)>parseInt(pen4_6.value)) {
        cuartos3[0].puntos = 3
        cuartos3[1].puntos = 0
    } else {
        cuartos3[0].puntos = 0
        cuartos3[1].puntos = 3
    }

    if (parseInt(gol4_7.value)>parseInt(gol4_8.value)) {
        cuartos4[0].puntos = 3
        cuartos4[1].puntos = 0
    } else if (parseInt(gol4_7.value) < parseInt(gol4_8.value)) {
        cuartos4[0].puntos = 0
        cuartos4[1].puntos = 3
    } else if (parseInt(pen4_7.value)>parseInt(pen4_8.value)) {
        cuartos4[0].puntos = 3
        cuartos4[1].puntos = 0
    } else {
        cuartos4[0].puntos = 0
        cuartos4[1].puntos = 3
    }

    cuartos1.sort((a, b) => {
        if (b.puntos > a.puntos) {
            return 1;
        }
        if (b.puntos < a.puntos) {
            return -1;
        }
        return 0;
    })

    cuartos2.sort((a, b) => {
        if (b.puntos > a.puntos) {
            return 1;
        }
        if (b.puntos < a.puntos) {
            return -1;
        }
        return 0;
    })

    cuartos3.sort((a, b) => {
        if (b.puntos > a.puntos) {
            return 1;
        }
        if (b.puntos < a.puntos) {
            return -1;
        }
        return 0;
    })

    cuartos4.sort((a, b) => {
        if (b.puntos > a.puntos) {
            return 1;
        }
        if (b.puntos < a.puntos) {
            return -1;
        }
        return 0;
    })

    const ganadores4tos = [cuartos1[0], cuartos2[0], cuartos3[0], cuartos4[0]]

    const guardaGanadores4tos = JSON.stringify(ganadores4tos)
    localStorage.setItem("ganadores4tos", guardaGanadores4tos);

    let valorg4_1 = parseInt(gol4_1.value)
    let valorg4_1p = parseInt(pen4_1.value)
    let valorg4_2 = parseInt(gol4_2.value)
    let valorg4_2p = parseInt(pen4_2.value)
    let valorg4_3 = parseInt(gol4_3.value)
    let valorg4_3p = parseInt(pen4_3.value)
    let valorg4_4 = parseInt(gol4_4.value)
    let valorg4_4p = parseInt(pen4_4.value)
    let valorg4_5 = parseInt(gol4_5.value)
    let valorg4_5p = parseInt(pen4_5.value)
    let valorg4_6 = parseInt(gol4_6.value)
    let valorg4_6p = parseInt(pen4_6.value)
    let valorg4_7 = parseInt(gol4_7.value)
    let valorg4_7p = parseInt(pen4_7.value)
    let valorg4_8 = parseInt(gol4_8.value)
    let valorg4_8p = parseInt(pen4_8.value)

    const goles4tos =[ valorg4_1, valorg4_1p, valorg4_2, valorg4_2p, valorg4_3, valorg4_3p, valorg4_4, valorg4_4p, valorg4_5, valorg4_5p, valorg4_6, valorg4_6p, valorg4_7, valorg4_7p, valorg4_8, valorg4_8p]

    const guardaGoles4tos = JSON.stringify(goles4tos)
    localStorage.setItem("goles4tos", guardaGoles4tos);

    Toastify({

        text: "Cargaste los 4tos de final con exito",
        
        duration: 3000
        
        }).showToast();    

})

localStorage.hasOwnProperty("goles4tos") === true && deployGoles4tos();

function deployGoles4tos() {
    const goles4tosRecuperados = JSON.parse(localStorage.getItem("goles4tos"))

    gol4_1.value = goles4tosRecuperados[0]
    pen4_1.value = goles4tosRecuperados[1]
    gol4_2.value = goles4tosRecuperados[2]
    pen4_2.value = goles4tosRecuperados[3]
    gol4_3.value = goles4tosRecuperados[4]
    pen4_3.value = goles4tosRecuperados[5]
    gol4_4.value = goles4tosRecuperados[6]
    pen4_4.value = goles4tosRecuperados[7]
    gol4_5.value = goles4tosRecuperados[8]
    pen4_5.value = goles4tosRecuperados[9]
    gol4_6.value = goles4tosRecuperados[10]
    pen4_6.value = goles4tosRecuperados[11]
    gol4_7.value = goles4tosRecuperados[12]
    pen4_7.value = goles4tosRecuperados[13]
    gol4_8.value = goles4tosRecuperados[14]
    pen4_8.value = goles4tosRecuperados[15]

  

    img4_1.src = "../assets/img/escudos/"+guardaGanadores8vos[0].id+".png"
    img4_2.src = "../assets/img/escudos/"+guardaGanadores8vos[1].id+".png"
    img4_3.src = "../assets/img/escudos/"+guardaGanadores8vos[2].id+".png"
    img4_4.src = "../assets/img/escudos/"+guardaGanadores8vos[3].id+".png"
    img4_5.src = "../assets/img/escudos/"+guardaGanadores8vos[4].id+".png"
    img4_6.src = "../assets/img/escudos/"+guardaGanadores8vos[5].id+".png"
    img4_7.src = "../assets/img/escudos/"+guardaGanadores8vos[6].id+".png"
    img4_8.src = "../assets/img/escudos/"+guardaGanadores8vos[7].id+".png"
   

    ganador1.innerText = guardaGanadores8vos[0].pais
    ganador2.innerText = guardaGanadores8vos[1].pais
    ganador3.innerText = guardaGanadores8vos[2].pais
    ganador4.innerText = guardaGanadores8vos[3].pais
    ganador5.innerText = guardaGanadores8vos[4].pais
    ganador6.innerText = guardaGanadores8vos[5].pais
    ganador7.innerText = guardaGanadores8vos[6].pais
    ganador8.innerText = guardaGanadores8vos[7].pais

}

document.getElementById(`botonReset4tos`).addEventListener(`click`, () =>  {
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
                        localStorage.removeItem("goles4tos");
                        gol4_1.value = 0
                        pen4_1.value = 0
                        gol4_2.value = 0
                        pen4_2.value = 0
                        gol4_3.value = 0
                        pen4_3.value = 0
                        gol4_4.value = 0
                        pen4_4.value = 0
                        gol4_5.value = 0
                        pen4_5.value = 0
                        gol4_6.value = 0
                        pen4_6.value = 0
                        gol4_7.value = 0
                        pen4_7.value = 0
                        gol4_8.value = 0
                        pen4_8.value = 0
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

const guardaGanadores4tos = JSON.parse(localStorage.getItem("ganadores4tos"))

export { guardaGanadores4tos }