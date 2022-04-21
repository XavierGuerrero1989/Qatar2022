const qatar = {
    pais: "Qatar",
    puntos: 0,
    golesFavor: 0,
    golesContra: 0,
    diferencia: 0
}

const ecuador = {
    pais: "Ecuador",
    puntos: 0,
    golesFavor: 0,
    golesContra: 0,
    diferencia: 0
}

const senegal = {
pais: "Senegal",
puntos: 0,
golesFavor: 0,
golesContra: 0,
diferencia: 0
}

const paisesBajos = {
pais: "Paises Bajos",
puntos: 0,
golesFavor: 0,
golesContra: 0,
diferencia: 0
}

const grupoA = [qatar, ecuador, senegal, paisesBajos]

let goles1 = document.getElementById("g1");
let goles2 = document.getElementById("g2");
let goles3 = document.getElementById("g3");
let goles4 = document.getElementById("g4");
let goles5 = document.getElementById("g5");
let goles6 = document.getElementById("g6");
let goles7 = document.getElementById("g7");
let goles8 = document.getElementById("g8");
let goles9 = document.getElementById("g9");
let goles10 = document.getElementById("g10");
let goles11= document.getElementById("g11");
let goles12 = document.getElementById("g12");



let botonDeCarga = document.getElementById("cargaData");
botonDeCarga.addEventListener ("click", function () {
   
    for (let index = 0; index <4; index++) {
        grupoA[index].puntos = 0;
        grupoA[index].golesFavor = 0;
        grupoA[index].golesContra = 0;
        grupoA[index].diferencia = 0;
    }

    if (parseInt(goles1.value) >= 0) {
        qatar.golesFavor = qatar.golesFavor + parseInt(goles1.value);
        ecuador.golesContra = ecuador.golesContra + parseInt(goles1.value);
    }



    if (parseInt(goles2.value) >= 0 ) {
        ecuador.golesFavor = ecuador.golesFavor + parseInt(goles2.value);
        qatar.golesContra = qatar.golesContra + parseInt(goles2.value);
    }
    


    if (parseInt(goles3.value) >= 0) {
        senegal.golesFavor = senegal.golesFavor + parseInt(goles3.value);
        paisesBajos.golesContra = paisesBajos.golesContra + parseInt(goles3.value)
    }     



    if (parseInt(goles4.value) >= 0 ) {
        paisesBajos.golesFavor = paisesBajos.golesFavor + parseInt(goles4.value);
        senegal.golesContra = senegal.golesContra + parseInt(goles4.value);
    }
    


    if (parseInt(goles5.value) >= 0) {
        qatar.golesFavor = qatar.golesFavor + parseInt(goles5.value);
        senegal.golesContra = senegal.golesContra + parseInt(goles5.value)
    }     

    
    if (parseInt(goles6.value) >= 0 ) {
        senegal.golesFavor = senegal.golesFavor + parseInt(goles6.value);
        qatar.golesContra = qatar.golesContra + parseInt(goles6.value);
    }


    if (parseInt(goles7.value) >= 0) {
        ecuador.golesFavor = ecuador.golesFavor + parseInt(goles7.value);
        paisesBajos.golesContra = paisesBajos.golesContra + parseInt(goles7.value)
    }     


    
    if (parseInt(goles8.value) >= 0 ) {
        paisesBajos.golesFavor = paisesBajos.golesFavor + parseInt(goles8.value);
        ecuador.golesContra = ecuador.golesContra + parseInt(goles8.value);
    }   



    if (parseInt(goles9.value) >= 0) {
        qatar.golesFavor = qatar.golesFavor + parseInt(goles9.value);
        paisesBajos.golesContra = paisesBajos.golesContra + parseInt(goles9.value)
    }     
    
    

    if (parseInt(goles10.value) >= 0 ) {
        paisesBajos.golesFavor = paisesBajos.golesFavor + parseInt(goles10.value);
        qatar.golesContra = qatar.golesContra + parseInt(goles10.value);
    }
    
    
    if (parseInt(goles11.value) >= 0) {
            ecuador.golesFavor = ecuador.golesFavor + parseInt(goles11.value);
            senegal.golesContra = senegal.golesContra + parseInt(goles11.value)
    }       
    
    if (parseInt(goles12.value) >= 0 ) {
            senegal.golesFavor = senegal.golesFavor + parseInt(goles12.value);
            ecuador.golesContra = ecuador.golesContra + parseInt(goles12.value);
    }   
   
    if (parseInt(goles1.value) > parseInt(goles2.value)) {
                
         qatar.puntos = qatar.puntos + 3
         ecuador.puntos = ecuador.puntos + 0
    } else if (parseInt(goles1.value) == parseInt(goles2.value)) {
        qatar.puntos = qatar.puntos + 1
        ecuador.puntos = ecuador.puntos + 1
    } else {
        qatar.puntos = qatar.puntos + 0
        ecuador.puntos = ecuador.puntos + 3
    }

       
    if (parseInt(goles3.value) > parseInt(goles4.value)) {            
    senegal.puntos = senegal.puntos + 3
    paisesBajos.puntos = paisesBajos.puntos + 0        
} else if (parseInt(goles3.value) == parseInt(goles4.value)) {
    senegal.puntos = senegal.puntos + 1
    paisesBajos.puntos = paisesBajos.puntos + 1
} else {
    senegal.puntos = senegal.puntos + 0
    paisesBajos.puntos = paisesBajos.puntos + 3
}

if (parseInt(goles5.value) > parseInt(goles6.value)) {
    qatar.puntos = qatar.puntos + 3
    senegal.puntos = senegal.puntos + 0
} else if (parseInt(goles5.value) == parseInt(goles6.value)) {
    qatar.puntos = qatar.puntos + 1
    senegal.puntos = senegal.puntos + 1
} else {
    qatar.puntos = qatar.puntos + 0
    senegal.puntos = senegal.puntos + 3
}
                                   
if (parseInt(goles7.value) > parseInt(goles8.value)) {
            ecuador.puntos = ecuador.puntos + 3
             paisesBajos.puntos = paisesBajos.puntos + 0
} else if (parseInt(goles7.value) == parseInt(goles8.value)) {
        ecuador.puntos = ecuador.puntos + 1
        paisesBajos.puntos = paisesBajos.puntos + 1
} else {
        ecuador.puntos = ecuador.puntos + 0
        paisesBajos.puntos = paisesBajos.puntos + 3
}
                        
if (parseInt(goles9.value) > parseInt(goles10.value)) {
        qatar.puntos = qatar.puntos + 3
        paisesBajos.puntos = paisesBajos.puntos + 0
} else if (parseInt(goles9.value) == parseInt(goles10.value)) {
        qatar.puntos = qatar.puntos + 1
        paisesBajos.puntos = paisesBajos.puntos + 1
} else {qatar.puntos = qatar.puntos + 0
        paisesBajos.puntos = paisesBajos.puntos + 3
}
                    
if (parseInt(goles11.value) > parseInt(goles12.value)) {
    ecuador.puntos = ecuador.puntos + 3
    senegal.puntos = senegal.puntos + 0
} else if (parseInt(goles11.value) == parseInt(goles12.value)) {
    ecuador.puntos = ecuador.puntos + 1
    senegal.puntos = senegal.puntos + 1
} else {
    ecuador.puntos = ecuador.puntos + 0
    senegal.puntos = senegal.puntos + 3
}


    qatar.diferencia = qatar.golesFavor - qatar.golesContra
    ecuador.diferencia = ecuador.golesFavor - ecuador.golesContra
    senegal.diferencia = senegal.golesFavor - senegal.golesContra
    paisesBajos.diferencia = paisesBajos.golesFavor - paisesBajos.golesContra



    grupoA.sort(
        function(a,b) {
            if (b.puntos == a.puntos) {
                return b.diferencia - a.diferencia;
            }
            return b.puntos > a.puntos ? 1 : -1;
    })



    let clasificado1 = document.getElementById("clasi1")
    clasificado1.innerText = grupoA[0].pais;
    let clasificado2 = document.getElementById("clasi2")
    clasificado2.innerText = grupoA[1].pais;
    let tercero = document.getElementById("ter")
    tercero.innerText = grupoA[2].pais;
    let cuarto = document.getElementById("cuar")
    cuarto.innerText = grupoA[3].pais;
    let puntos1 = document.getElementById("pts1")
    puntos1.innerText = grupoA[0].puntos;
    let puntos2 = document.getElementById("pts2")
    puntos2.innerText = grupoA[1].puntos;
    let puntos3 = document.getElementById("pts3")
    puntos3.innerText = grupoA[2].puntos;
    let puntos4 = document.getElementById("pts4")
    puntos4.innerText = grupoA[3].puntos;
    let favor1 = document.getElementById("gf1")
    favor1.innerText = grupoA[0].golesFavor;
    let favor2 = document.getElementById("gf2")
    favor2.innerText = grupoA[1].golesFavor;
    let favor3 = document.getElementById("gf3")
    favor3.innerText = grupoA[2].golesFavor;
    let favor4 = document.getElementById("gf4")
    favor4.innerText = grupoA[3].golesFavor;
    let contra1 = document.getElementById("gc1")
    contra1.innerText = grupoA[0].golesContra;
    let contra2 = document.getElementById("gc2")
    contra2.innerText = grupoA[1].golesContra;
    let contra3 = document.getElementById("gc3")
    contra3.innerText = grupoA[2].golesContra;
    let contra4 = document.getElementById("gc4")
    contra4.innerText = grupoA[3].golesContra;
    let difGol1 = document.getElementById("df1")
    difGol1.innerText = grupoA[0].diferencia;
    let difGol2 = document.getElementById("df2")
    difGol2.innerText = grupoA[1].diferencia;
    let difGol3 = document.getElementById("df3")
    difGol3.innerText = grupoA[2].diferencia;
    let difGol4 = document.getElementById("df4")
    difGol4.innerText = grupoA[3].diferencia;


let vGol1 = parseInt(goles1.value);
let vGol2 = parseInt(goles2.value);
let vGol3 = parseInt(goles3.value);
let vGol4 = parseInt(goles4.value);
let vGol5 = parseInt(goles5.value);
let vGol6 = parseInt(goles6.value);
let vGol7 = parseInt(goles7.value);
let vGol8 = parseInt(goles8.value);
let vGol9 = parseInt(goles9.value);
let vGol10 = parseInt(goles10.value);
let vGol11 = parseInt(goles11.value);
let vGol12 = parseInt(goles12.value);

const golesA = { vGol1, vGol2, vGol3, vGol4, vGol5, vGol6, vGol7, vGol8, vGol9, vGol10, vGol11, vGol12 }

const guardaGolesA = JSON.stringify(golesA)
localStorage.setItem("golesGrupoA", guardaGolesA);


})


localStorage.hasOwnProperty("golesGrupoA") === true && deployGolesA();

function deployGolesA() {
    const golesRecuperadosA = JSON.parse(localStorage.getItem("golesGrupoA"))

    goles1.innerText = golesRecuperadosA[0];
    goles2.innerText = golesRecuperadosA[1];
    goles3.innerText = golesRecuperadosA[2];
    goles4.innerText = golesRecuperadosA[3];
    goles5.innerText = golesRecuperadosA[4];
    goles6.innerText = golesRecuperadosA[5];
    goles7.innerText = golesRecuperadosA[6];
    goles8.innerText = golesRecuperadosA[7];
    goles9.innerText = golesRecuperadosA[8];
    goles10.innerText = golesRecuperadosA[9];
    goles11.innerText = golesRecuperadosA[10];
    goles12.innerText = golesRecuperadosA[11];

    console.log(golesRecuperadosA);
}
