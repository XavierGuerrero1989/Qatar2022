import { grupoArecuperado } from "./grupoA.js";
import { grupoBrecuperado } from "./grupoB.js";
import { grupoCrecuperado } from "./grupoC.js";
import { grupoDrecuperado } from "./grupoD.js";
import { grupoErecuperado } from "./grupoE.js";
import { grupoFrecuperado } from "./grupoF.js";
import { grupoGrecuperado } from "./grupoG.js";
import { grupoHrecuperado } from "./grupoH.js";


let img1a = document.getElementById("img1a");
let img2a = document.getElementById("img2a");
let img1b = document.getElementById("img1b");
let img2b = document.getElementById("img2b");
let img1c = document.getElementById("img1c");
let img2c = document.getElementById("img2c");
let img1d = document.getElementById("img1d");
let img2d = document.getElementById("img2d");
let img1e = document.getElementById("img1e");
let img2e = document.getElementById("img2e");
let img1f = document.getElementById("img1f");
let img2f = document.getElementById("img2f");
let img1g = document.getElementById("img1g");
let img2g = document.getElementById("img2g");
let img1h = document.getElementById("img1h");
let img2h = document.getElementById("img2h");

let nombre1a = document.getElementById("1a");
let nombre2a = document.getElementById("2a");
let nombre1b = document.getElementById("1b");
let nombre2b = document.getElementById("2b");
let nombre1c = document.getElementById("1c");
let nombre2c = document.getElementById("2c");
let nombre1d = document.getElementById("1d");
let nombre2d = document.getElementById("2d");
let nombre1e = document.getElementById("1e");
let nombre2e = document.getElementById("2e");
let nombre1f = document.getElementById("1f");
let nombre2f = document.getElementById("2f");
let nombre1g = document.getElementById("1g");
let nombre2g = document.getElementById("2g");
let nombre1h = document.getElementById("1h");
let nombre2h = document.getElementById("2h");





let botonGenerador = document.getElementById ("botonGenerador");
botonGenerador.addEventListener ("click", function (){

img1a.src = "../assets/img/escudos/"+grupoArecuperado[0].id+".png"
img2a.src = "../assets/img/escudos/"+grupoArecuperado[1].id+".png"
img1b.src = "../assets/img/escudos/"+grupoBrecuperado[0].id+".png"
img2b.src = "../assets/img/escudos/"+grupoBrecuperado[1].id+".png"
img1c.src = "../assets/img/escudos/"+grupoCrecuperado[0].id+".png"
img2c.src = "../assets/img/escudos/"+grupoCrecuperado[1].id+".png"
img1d.src = "../assets/img/escudos/"+grupoDrecuperado[0].id+".png"
img2d.src = "../assets/img/escudos/"+grupoDrecuperado[1].id+".png"
img1e.src = "../assets/img/escudos/"+grupoErecuperado[0].id+".png"
img2e.src = "../assets/img/escudos/"+grupoErecuperado[1].id+".png"
img1f.src = "../assets/img/escudos/"+grupoFrecuperado[0].id+".png"
img2f.src = "../assets/img/escudos/"+grupoFrecuperado[1].id+".png"
img1g.src = "../assets/img/escudos/"+grupoGrecuperado[0].id+".png"
img2g.src = "../assets/img/escudos/"+grupoGrecuperado[1].id+".png"
img1h.src = "../assets/img/escudos/"+grupoHrecuperado[0].id+".png"
img2h.src = "../assets/img/escudos/"+grupoHrecuperado[1].id+".png"

nombre1a.innerText = grupoArecuperado[0].pais
nombre2a.innerText = grupoArecuperado[1].pais
nombre1b.innerText = grupoBrecuperado[0].pais
nombre2b.innerText = grupoBrecuperado[1].pais
nombre1c.innerText = grupoCrecuperado[0].pais
nombre2c.innerText = grupoCrecuperado[1].pais
nombre1d.innerText = grupoDrecuperado[0].pais
nombre2d.innerText = grupoDrecuperado[1].pais
nombre1e.innerText = grupoErecuperado[0].pais
nombre2e.innerText = grupoErecuperado[1].pais
nombre1f.innerText = grupoFrecuperado[0].pais
nombre2f.innerText = grupoFrecuperado[1].pais
nombre1g.innerText = grupoGrecuperado[0].pais
nombre2g.innerText = grupoGrecuperado[1].pais
nombre1h.innerText = grupoHrecuperado[0].pais
nombre2h.innerText = grupoHrecuperado[1].pais

Toastify({

    text: "Generaste los Play-Off con exito",
    
    duration: 3000
    
    }).showToast();

})


const octavos1 = [grupoArecuperado[0], grupoBrecuperado[1]]
const octavos2 = [grupoCrecuperado[0], grupoDrecuperado[1]]
const octavos3 = [grupoErecuperado[0], grupoFrecuperado[1]]
const octavos4 = [grupoGrecuperado[0], grupoHrecuperado[1]]
const octavos5 = [grupoBrecuperado[0], grupoArecuperado[1]]
const octavos6 = [grupoDrecuperado[0], grupoCrecuperado[1]]
const octavos7 = [grupoFrecuperado[0], grupoErecuperado[1]]
const octavos8 = [grupoHrecuperado[0], grupoGrecuperado[1]]

let gol1a = document.getElementById("1aG90")
let pen1a = document.getElementById("1aGP")
pen1a.disabled = true;
let gol2a = document.getElementById("2aG90")
let pen2a = document.getElementById("2aGP")
pen2a.disabled = true;
let gol1b = document.getElementById("1bG90")
let pen1b = document.getElementById("1bGP")
pen1b.disabled = true;
let gol2b = document.getElementById("2bG90")
let pen2b = document.getElementById("2bGP")
pen2b.disabled = true;
let gol1c = document.getElementById("1cG90")
let pen1c = document.getElementById("1cGP")
pen1c.disabled = true;
let gol2c = document.getElementById("2cG90")
let pen2c = document.getElementById("2cGP")
pen2c.disabled = true;
let gol1d = document.getElementById("1dG90")
let pen1d = document.getElementById("1dGP")
pen1d.disabled = true;
let gol2d = document.getElementById("2dG90")
let pen2d = document.getElementById("2dGP")
pen2d.disabled = true;
let gol1e = document.getElementById("1eG90")
let pen1e = document.getElementById("1eGP")
pen1e.disabled = true;
let gol2e = document.getElementById("2eG90")
let pen2e = document.getElementById("2eGP")
pen2e.disabled = true;
let gol1f = document.getElementById("1fG90")
let pen1f = document.getElementById("1fGP")
pen1f.disabled = true;
let gol2f = document.getElementById("2fG90")
let pen2f = document.getElementById("2fGP")
pen2f.disabled = true;
let gol1g = document.getElementById("1gG90")
let pen1g = document.getElementById("1gGP")
pen1g.disabled = true;
let gol2g = document.getElementById("2gG90")
let pen2g = document.getElementById("2gGP")
pen2g.disabled = true;
let gol1h = document.getElementById("1hG90")
let pen1h = document.getElementById("1hGP")
pen1h.disabled = true;
let gol2h = document.getElementById("2hG90")
let pen2h = document.getElementById("2hGP")
pen2h.disabled = true;

gol1a.addEventListener("change", revision() )
gol2b.addEventListener("change", revision())

function revision () {
        gol1a.addEventListener("input", function () {
            gol2b.addEventListener("input", function () {
                if (parseInt(gol1a.value) == parseInt(gol2b.value)) {
                    pen1a.disabled = false;
                    pen2b.disabled = false;
                } else {
                    pen1a.disabled = true;
                    pen2b.disabled = true;
                }
            } )
        })
}


        




document.getElementById(`boton8vos`).addEventListener(`click`, () =>  { 
    if (parseInt(gol1a.value)>parseInt(gol2b.value)) {
        octavos1[0].puntos = 3
        octavos1[1].puntos = 0
    } else if (parseInt(gol1a.value) < parseInt(gol2b.value)) {
        octavos1[0].puntos = 0
        octavos1[1].puntos = 3
    } else if (parseInt(pen1a.value)>parseInt(pen2b.value)) {
        octavos1[0].puntos = 3
        octavos1[1].puntos = 0
    } else {
        octavos1[0].puntos = 0
        octavos1[1].puntos = 3
    }
    console.log(parseInt(gol1a.value));
    console.log(parseInt(gol2b.value));
    console.log(octavos1);
})
  
