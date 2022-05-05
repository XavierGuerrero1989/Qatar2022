import { guardaGanadoresSemis } from "./semis.js";
import { guardaPerdedoresSemis } from "./semis.js";

let img3_1 = document.getElementById("img3_1")
let img3_2 = document.getElementById("img3_2")
let imgf1 = document.getElementById("imgf1")
let imgf2 = document.getElementById("imgf2")

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

let botonGeneradorFinal = document.getElementById ("botonGeneradorFinal");
botonGeneradorFinal.addEventListener ("click", function (){

img3_1.src = "../assets/img/escudos/"+guardaPerdedoresSemis[0].id+".png"
img3_2.src = "../assets/img/escudos/"+guardaPerdedoresSemis[1].id+".png"
imgf1.src = "../assets/img/escudos/"+guardaGanadoresSemis[0].id+".png"
imgf2.src = "../assets/img/escudos/"+guardaGanadoresSemis[1].id+".png"


tercer1.innerText = guardaPerdedoresSemis[0].pais
tercer2.innerText = guardaPerdedoresSemis[1].pais
final1.innerText = guardaGanadoresSemis[0].pais
final2.innerText = guardaGanadoresSemis[1].pais


Toastify({

    text: "Generaste las FINALES con exito",
    
    duration: 3000
    
    }).showToast();

})

const tercerPuesto = [guardaPerdedoresSemis[0], guardaPerdedoresSemis[1]]
const final = [guardaGanadoresSemis[0], guardaGanadoresSemis[1]]

let gol3_1 = document.getElementById("3_1G90")
let pen3_1 = document.getElementById("3_1GP")
pen3_1.disabled = true;
let gol3_2 = document.getElementById("3_2G90")
let pen3_2 = document.getElementById("3_2GP")
pen3_2.disabled = true;
let golf1 = document.getElementById("f1G90")
let penf1 = document.getElementById("f1GP")
penf1.disabled = true;
let golf2 = document.getElementById("f2G90")
let penf2 = document.getElementById("f2GP")
penf2.disabled = true;

gol3_1.addEventListener("change", revision3_1())
gol3_2.addEventListener("change", revision3_1())


function revision3_1 () {
    gol3_1.addEventListener("input", function () {
        gol3_2.addEventListener("input", function () {
            if (parseInt(gol3_1.value) == parseInt(gol3_2.value)) {
                pen3_1.disabled = false;
                pen3_2.disabled = false;
            } else {
                pen3_1.disabled = true;
                pen3_2.disabled = true;
            }
        } )
    })
}

golf1.addEventListener("change", revisionf())
golf2.addEventListener("change", revisionf())


function revisionf () {
    golf1.addEventListener("input", function () {
        golf2.addEventListener("input", function () {
            if (parseInt(golf1.value) == parseInt(golf2.value)) {
                penf1.disabled = false;
                penf2.disabled = false;
            } else {
                penf1.disabled = true;
                penf2.disabled = true;
            }
        } )
    })
}

document.getElementById(`botonSemis`).addEventListener(`click`, () =>  { 

    for (let index = 0; index <2; index++) {
        tercerPuesto[index].puntos = 0;
        final[index].puntos = 0;
    }

    if (parseInt(gol3_1.value)>parseInt(gol3_2.value)) {
        tercerPuesto[0].puntos = 3
        tercerPuesto[1].puntos = 0
    } else if (parseInt(gol3_1.value) < parseInt(gol3_2.value)) {
        tercerPuesto[0].puntos = 0
        tercerPuesto[1].puntos = 3
    } else if (parseInt(pen3_1.value)>parseInt(pen3_2.value)) {
        tercerPuesto[0].puntos = 3
        tercerPuesto[1].puntos = 0
    } else {
        tercerPuesto[0].puntos = 0
        tercerPuesto[1].puntos = 3
    }

    if (parseInt(golf1.value)>parseInt(golf2.value)) {
        final[0].puntos = 3
        final[1].puntos = 0
    } else if (parseInt(golf1.value) < parseInt(golf1.value)) {
        final[0].puntos = 0
        final[1].puntos = 3
    } else if (parseInt(penf1.value)>parseInt(penf2.value)) {
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

    let valorg3_1 = parseInt(gol3_1.value)
    let valorg3_1p = parseInt(pen3_1.value)
    let valorg3_2 = parseInt(gol3_2.value)
    let valorg3_2p = parseInt(pen3_2.value)
    let valorFinal1 = parseInt(golf1.value)
    let valorFinal1p = parseInt(penf1.value)
    let valorFinal2 = parseInt(golf2.value)
    let valorFinal2p = parseInt(penf2.value)
    

    const golesFinales =[ valorg3_1, valorg3_1p, valorg3_2, valorg3_2p, valorFinal1, valorFinal1p, valorFinal2, valorFinal2p]

    const guardaGolesFinales = JSON.stringify(golesFinales)
    localStorage.setItem("golesSemis", guardaGolesFinales);


    img3ro.src = "../assets/img/escudos/"+finalResultados[2].id+".png"
    img2do.src = "../assets/img/escudos/"+finalResultados[1].id+".png"
    img1ro.src = "../assets/img/escudos/"+finalResultados[0].id+".png"

    titulo1ro.innerText = finalResultados[0].pais
    titulo2do.innerText = finalResultados[1].pais
    titulo3ro.innerText = finalResultados[0].pais


    Toastify({

        text: "Cargaste las FINALES con exito",
        
        duration: 3000
        
        }).showToast();    
})
