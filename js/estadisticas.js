import { getData } from "./getHistorical.js";

let imagenEscudo = document.getElementById("escudo")
let imagenPlantel = document.getElementById("plantel")
let mejorPuesto = document.getElementById("mejorPuesto")
let mundialMP = document.getElementById("mundialMp")
let ultimoMundial = document.getElementById("ultimoMundial")
let posicionUM = document.getElementById("posicionUm")
let cantidadPart = document.getElementById("participaciones")
let partidosJ = document.getElementById("pj")
let partidosG = document.getElementById("pg")
let partidosE = document.getElementById("pe")
let partidosP = document.getElementById("pp")
let golesFT = document.getElementById("gf")
let golesCT = document.getElementById("gc")
let golesDT = document.getElementById("dg")
let ultimosP = document.getElementById("rachap")
let ultimosG = document.getElementById("rachag")


document.getElementById(`cargarHistorico`).addEventListener(`click`, async function(){
	const dataPais = await getData();
	console.log(dataPais);
    let paisSelect = document.getElementById("listaDePaises").value - 1
    imagenEscudo.src = "../assets/img/escudos/"+dataPais[paisSelect].id+".png"
    imagenPlantel.src = "../assets/img/formaciones/"+dataPais[paisSelect].id+".jpg";
    mejorPuesto.innerText = dataPais[paisSelect].mejorParticipacion
	mundialMP.innerText = dataPais[paisSelect].anioMejor
	ultimoMundial.innerText = dataPais[paisSelect].ultima
	posicionUM.innerText = dataPais[paisSelect].posicionUltima
	cantidadPart.innerText = dataPais[paisSelect].participacionesTotales
	partidosJ.innerText = dataPais[paisSelect].partidosTotales
	partidosG.innerText = dataPais[paisSelect].g
	partidosE.innerText = dataPais[paisSelect].e
	partidosP.innerText = dataPais[paisSelect].p
	golesFT.innerText = dataPais[paisSelect].gf
	golesCT.innerText = dataPais[paisSelect].gc
	golesDT.innerText = dataPais[paisSelect].dg
	ultimosP.innerText = dataPais[paisSelect].ultimos
	ultimosG.innerText = dataPais[paisSelect].ultimosGoles
	
	Toastify({

        text: "Cargaste las estadisticas con exito",
        
        duration: 3000
        
        }).showToast();
})