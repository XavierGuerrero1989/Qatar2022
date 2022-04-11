
const qatar = {
        pais: "Qatar",
        puntos: 0,
        golesFavor: 0,
        golesContra: 0
}

const ecuador = {
        pais: "Ecuador",
        puntos: 0,
        golesFavor: 0,
        golesContra: 0
}

const senegal = {
    pais: "Senegal",
    puntos: 0,
    golesFavor: 0,
    golesContra: 0
}

const paisesBajos = {
    pais: "Paises Bajos",
    puntos: 0,
    golesFavor: 0,
    golesContra: 0
}

const inglaterra = {
        pais: "Inglaterra",
        puntos: 0,
        golesFavor: 0,
        golesContra: 0
    }
    
const iran = {
        pais: "Iran",
        puntos: 0,
        golesFavor: 0,
        golesContra: 0
    }

const eeuu = {
        pais: "Estados Unidos",
        puntos: 0,
        golesFavor: 0,
        golesContra: 0
    }

const escocia = {
        pais: "Escocia",
        puntos: 0,
        golesFavor: 0,
        golesContra: 0
    }

const argentina = {
            pais: "Argentina",
            puntos: 0,
            golesFavor: 0,
            golesContra: 0
        }

const arabia = {
            pais: "Arabia Saudita",
            puntos: 0,
            golesFavor: 0,
            golesContra: 0
        }

const mexico = {
            pais: "Mexico",
            puntos: 0,
            golesFavor: 0,
            golesContra: 0
        }

const polonia = {
            pais: "Polonia",
            puntos: 0,
            golesFavor: 0,
            golesContra: 0
        }


const grupoA = [qatar, ecuador, senegal, paisesBajos]

const grupoB = [inglaterra, iran, eeuu, escocia]

const grupoC = [argentina, arabia, mexico, polonia]
    
const grupoD = [
    {
        pais: "Francia",
        puntos: 0,
        golesFavor: 0,
        golesContra: 0
    },
    {
        pais: "Peru",
        puntos: 0,
        golesFavor: 0,
        golesContra: 0
    },
    {
        pais: "Dinamarca",
        puntos: 0,
        golesFavor: 0,
        golesContra: 0
    },
    {
        pais: "Tunez",
        puntos: 0,
        golesFavor: 0,
        golesContra: 0
    },
]

const grupoE = [
    {
        pais: "España",
        puntos: 0,
        golesFavor: 0,
        golesContra: 0
    },
    {
        pais: "Costa Rica",
        puntos: 0,
        golesFavor: 0,
        golesContra: 0
    },
    {
        pais: "Alemania",
        puntos: 0,
        golesFavor: 0,
        golesContra: 0
    },
    {
        pais: "Japon",
        puntos: 0,
        golesFavor: 0,
        golesContra: 0
    },
]

const grupoF = [
    {
        pais: "Belgica",
        puntos: 0,
        golesFavor: 0,
        golesContra: 0
    },
    {
        pais: "Canada",
        puntos: 0,
        golesFavor: 0,
        golesContra: 0
    },
    {
        pais: "Marruecos",
        puntos: 0,
        golesFavor: 0,
        golesContra: 0
    },
    {
        pais: "Croacia",
        puntos: 0,
        golesFavor: 0,
        golesContra: 0
    },
]

const grupoG = [
    {
        pais: "Brasil",
        puntos: 0,
        golesFavor: 0,
        golesContra: 0
    },
    {
        pais: "Serbia",
        puntos: 0,
        golesFavor: 0,
        golesContra: 0
    },
    {
        pais: "Suiza",
        puntos: 0,
        golesFavor: 0,
        golesContra: 0
    },
    {
        pais: "Camerun",
        puntos: 0,
        golesFavor: 0,
        golesContra: 0
    },
]

const grupoH = [
    {
        pais: "Portugal",
        puntos: 0,
        golesFavor: 0,
        golesContra: 0
    },
    {
        pais: "Ghana",
        puntos: 0,
        golesFavor: 0,
        golesContra: 0
    },
    {
        pais: "Uruguay",
        puntos: 0,
        golesFavor: 0,
        golesContra: 0
    },
    {
        pais: "Corea del Sur",
        puntos: 0,
        golesFavor: 0,
        golesContra: 0
    },
]





// document.addEventListener("DOMContentLoaded", function () {

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

// goles1.addEventListener('input', calculadoraDeGoles(qatar, ecuador, g1, g2));
// }, false);
        
    

        

//     function calculadoraDeGoles(pais1, pais2, golesFavor, golesContra) {
//         if(golesFavor >= 0 ) {
//             pais1.golesFavor = pais1.golesFavor + golesFavor;
//             pais1.golesContra = pais1.golesContra + golesContra;
//             pais2.golesFavor = pais2.golesFavor + golesContra;
//             pais2.golesContra = pais2.golesContra + golesFavor;

//         }
//         console.log(pais1);
//     }
    


function partido1 () {

        goles1.addEventListener('input', calculadoraDeGoles);
        goles2.addEventListener('input', calculadoraDeGoles1);
    function calculadoraDeGoles () {
        if (parseInt(goles1.value) >= 0) {
            qatar.golesFavor = qatar.golesFavor + parseInt(goles1.value);
            ecuador.golesContra = ecuador.golesContra + parseInt(goles1.value)
        }
    }
    function calculadoraDeGoles1 () {
        if (parseInt(goles2.value) >= 0 ) {
            ecuador.golesFavor = ecuador.golesFavor + parseInt(goles2.value);
            qatar.golesContra = qatar.golesContra + parseInt(goles2.value);
        }
        
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

        console.log();

    
        
// function partido2 () {  
//         goles3.addEventListener('input', calculadoraDeGoles2);
//         goles4.addEventListener('input', calculadoraDeGoles3);
//     function calculadoraDeGoles2 () {
//         if (parseInt(goles3.value) >= 0) {
//             senegal.golesFavor = senegal.golesFavor + parseInt(goles3.value);
//             paisesBajos.golesContra = paisesBajos.golesContra + parseInt(goles3.value)
//         }     
//     }

//     function calculadoraDeGoles3 () {
//         if (parseInt(goles4.value) >= 0 ) {
//             paisesBajos.golesFavor = paisesBajos.golesFavor + parseInt(goles4.value);
//             senegal.golesContra = senegal.golesContra + parseInt(goles4.value);
//         }
        
//     }

//     if (parseInt(goles3.value) > parseInt(goles4.value)) {
//             senegal.puntos = senegal.puntos + 3
//             paisesBajos.puntos = paisesBajos.puntos + 0

//         } else if (parseInt(goles3.value) == parseInt(goles4.value)) {
//             senegal.puntos = senegal.puntos + 1
//             paisesBajos.puntos = paisesBajos.puntos + 1
//         } else {
//             senegal.puntos = senegal.puntos + 0
//             paisesBajos.puntos = paisesBajos.puntos + 3
//         }
// }
 
// function partido3 () {
//     goles5.addEventListener('input', calculadoraDeGoles4);
//     goles6.addEventListener('input', calculadoraDeGoles5);
// function calculadoraDeGoles4 () {
//     if (parseInt(goles5.value) >= 0) {
//         qatar.golesFavor = qatar.golesFavor + parseInt(goles5.value);
//         senegal.golesContra = senegal.golesContra + parseInt(goles5.value)
//     }     
// }
// function calculadoraDeGoles5 () {
//     if (parseInt(goles6.value) >= 0 ) {
//         senegal.golesFavor = senegal.golesFavor + parseInt(goles6.value);
//         qatar.golesContra = qatar.golesContra + parseInt(goles6.value);
//     }
    
// }

// if (parseInt(goles5.value) > parseInt(goles6.value)) {
//         qatar.puntos = qatar.puntos + 3
//         senegal.puntos = senegal.puntos + 0
//     } else if (parseInt(goles5.value) == parseInt(goles6.value)) {
//         qatar.puntos = qatar.puntos + 1
//         senegal.puntos = senegal.puntos + 1
//     } else {
//         qatar.puntos = qatar.puntos + 0
//         senegal.puntos = senegal.puntos + 3
//     }
// }

// function partido4 () {
//     goles7.addEventListener('input', calculadoraDeGoles6);
//     goles8.addEventListener('input', calculadoraDeGoles7);
// function calculadoraDeGoles6 () {
//     if (parseInt(goles7.value) >= 0) {
//         ecuador.golesFavor = ecuador.golesFavor + parseInt(goles7.value);
//         paisesBajos.golesContra = paisesBajos.golesContra + parseInt(goles7.value)
//     }     
// }

// function calculadoraDeGoles7 () {
//     if (parseInt(goles8.value) >= 0 ) {
//         paisesBajos.golesFavor = paisesBajos.golesFavor + parseInt(goles8.value);
//         ecuador.golesContra = ecuador.golesContra + parseInt(goles8.value);
//     }
    
// }

// if (parseInt(goles7.value) > parseInt(goles8.value)) {
//         ecuador.puntos = ecuador.puntos + 3
//         paisesBajos.puntos = paisesBajos.puntos + 0
//     } else if (parseInt(goles7.value) == parseInt(goles8.value)) {
//         ecuador.puntos = ecuador.puntos + 1
//         paisesBajos.puntos = paisesBajos.puntos + 1
//     } else {
//         ecuador.puntos = ecuador.puntos + 0
//         paisesBajos.puntos = paisesBajos.puntos + 3
//     }
// }

// function partido5 () {
// goles9.addEventListener('input', calculadoraDeGoles8);
// goles10.addEventListener('input', calculadoraDeGoles9);
// function calculadoraDeGoles8 () {
// if (parseInt(goles9.value) >= 0) {
//     qatar.golesFavor = qatar.golesFavor + parseInt(goles9.value);
//     paisesBajos.golesContra = paisesBajos.golesContra + parseInt(goles9.value)
// }     
// }

// function calculadoraDeGoles9 () {
// if (parseInt(goles10.value) >= 0 ) {
//     paisesBajos.golesFavor = paisesBajos.golesFavor + parseInt(goles10.value);
//     qatar.golesContra = qatar.golesContra + parseInt(goles10.value);
// }

// }

// if (parseInt(goles9.value) > parseInt(goles10.value)) {
//     qatar.puntos = qatar.puntos + 3
//     paisesBajos.puntos = paisesBajos.puntos + 0
// } else if (parseInt(goles9.value) == parseInt(goles10.value)) {
//     qatar.puntos = qatar.puntos + 1
//     paisesBajos.puntos = paisesBajos.puntos + 1
// } else {
//     qatar.puntos = qatar.puntos + 0
//     paisesBajos.puntos = paisesBajos.puntos + 3
// }
// }

// function partido6 () {
// goles11.addEventListener('input', calculadoraDeGoles10);
// goles12.addEventListener('input', calculadoraDeGoles11);
// function calculadoraDeGoles10 () {
// if (parseInt(goles11.value) >= 0) {
//     ecuador.golesFavor = ecuador.golesFavor + parseInt(goles11.value);
//     senegal.golesContra = senegal.golesContra + parseInt(goles11.value)
// }     
// }

// function calculadoraDeGoles11 () {
// if (parseInt(goles12.value) >= 0 ) {
//     senegal.golesFavor = senegal.golesFavor + parseInt(goles12.value);
//     ecuador.golesContra = ecuador.golesContra + parseInt(goles12.value);
// }

// }

// if (parseInt(goles11.value) > parseInt(goles12.value)) {
//     ecuador.puntos = ecuador.puntos + 3
//     senegal.puntos = senegal.puntos + 0
// } else if (parseInt(goles11.value) == parseInt(goles12.value)) {
//     ecuador.puntos = ecuador.puntos + 1
//     senegal.puntos = senegal.puntos + 1
// } else {
//     ecuador.puntos = ecuador.puntos + 0
//     senegal.puntos = senegal.puntos + 3
// }

// }
           

// function clasificacionA(){

//     grupoA.sort((a,b) => b.puntos - a.puntos);
//     console.log(grupoA);
//     let clasificado1 = document.getElementById("clasi1")
//     clasificado1.innerText = grupoA[0].pais;
//     let clasificado2 = document.getElementById("clasi2")
//     clasificado2.innerText = grupoA[1].pais;
//     let tercero = document.getElementById("ter")
//     tercero.innerText = grupoA[2].pais;
//     let cuarto = document.getElementById("cuar")
//     cuarto.innerText = grupoA[3].pais;
        
//     }


//     partido2 ();
//     partido3 ();
//     partido4 ();
//     partido5 ();
//     partido6 ();
//     clasificacionA ();    
          



    // function resultadosB () {

    //     let goles1 = parseInt(prompt("Primer partido: Inglaterra vs Iran. ¿cuantos goles hizo Inglaterra?"))
    //     let goles2 = parseInt(prompt("Primer partido: Inglaterra vs Iran. ¿cuantos goles hizo Iran?"))
    
    //     inglaterra.golesFavor = inglaterra.golesFavor + goles1 
    //     iran.golesFavor = iran.golesFavor + goles2
    //     inglaterra.golesContra = inglaterra.golesContra + goles2
    //     iran.golesContra = iran.golesContra + goles1 
    //     if (goles1 > goles2) {
    //         inglaterra.puntos = inglaterra.puntos + 3
    //         iran.puntos = iran.puntos + 0
    //     } else if (goles1 == goles2) {
    //         inglaterra.puntos = inglaterra.puntos + 1
    //         iran.puntos = iran.puntos + 1
    //     } else {
    //         inglaterra.puntos = inglaterra.puntos + 0
    //         iran.puntos = iran.puntos + 3
    //     }
                              
    //     let goles3 = parseInt(prompt("Segundo partido: Estados Unidos vs Escocia. ¿cuantos goles hizo Estados Unidos?"))
    //     let goles4 = parseInt(prompt("Segundo partido: Estados Unidos vs Escocia. ¿cuantos goles hizo Escocia?"))
    
    //     eeuu.golesFavor = eeuu.golesFavor + goles3 
    //     escocia.golesFavor = escocia.golesFavor + goles4
    //     eeuu.golesContra = eeuu.golesContra + goles4
    //     escocia.golesContra = escocia.golesContra + goles3 
    //     if (goles3 > goles4) {
    //         eeuu.puntos = eeuu.puntos + 3
    //         escocia.puntos = escocia.puntos + 0
    //     } else if (goles3 == goles4) {
    //         eeuu.puntos = eeuu.puntos + 1
    //         escocia.puntos = escocia.puntos + 1
    //     } else {
    //         eeuu.puntos = eeuu.puntos + 0
    //         escocia.puntos = escocia.puntos + 3
    //     }
    
    //     let goles5 = parseInt(prompt("Tercer partido: Inglaterra vs Estados Unidos. ¿cuantos goles hizo Inglaterra?"))
    //     let goles6 = parseInt(prompt("Tercer partido: Inglaterra vs Estados Unidos. ¿cuantos goles hizo Estados Unidos?"))
    
    //     inglaterra.golesFavor = inglaterra.golesFavor + goles5 
    //     eeuu.golesFavor = eeuu.golesFavor + goles6
    //     inglaterra.golesContra = inglaterra.golesContra + goles6
    //     eeuu.golesContra = eeuu.golesContra + goles5 
    //     if (goles5 > goles6) {
    //         inglaterra.puntos = inglaterra.puntos + 3
    //         eeuu.puntos = eeuu.puntos + 0
    //     } else if (goles5 == goles6) {
    //         inglaterra.puntos = inglaterra.puntos + 1
    //         eeuu.puntos = eeuu.puntos + 1
    //     } else {
    //         inglaterra.puntos = inglaterra.puntos + 0
    //         eeuu.puntos = eeuu.puntos + 3
    //     }
    
    //     let goles7 = parseInt(prompt("Cuarto partido: Iran vs Escocia. ¿cuantos goles hizo Iran?"))
    //     let goles8 = parseInt(prompt("Cuarto partido: Iran vs Escocia. ¿cuantos goles hizo Escocia?"))
    
    //     iran.golesFavor = iran.golesFavor + goles7 
    //     escocia.golesFavor = escocia.golesFavor + goles8
    //     iran.golesContra = iran.golesContra + goles8
    //     escocia.golesContra = escocia.golesContra + goles7 
    //     if (goles7 > goles8) {
    //         iran.puntos = iran.puntos + 3
    //         escocia.puntos = escocia.puntos + 0
    //     } else if (goles7 == goles8) {
    //         iran.puntos = iran.puntos + 1
    //         escocia.puntos = escocia.puntos + 1
    //     } else {
    //         iran.puntos = iran.puntos + 0
    //         escocia.puntos = escocia.puntos + 3
    //     }
    
    //     let goles9 = parseInt(prompt("Quinto partido: Inglaterra vs Escocia. ¿cuantos goles hizo Inglaterra?"))
    //     let goles10 = parseInt(prompt("Quinto partido: Inglaterra vs Escocia. ¿cuantos goles hizo Escocia?"))
    
    //     inglaterra.golesFavor = inglaterra.golesFavor + goles9 
    //     escocia.golesFavor = escocia.golesFavor + goles10
    //     inglaterra.golesContra = inglaterra.golesContra + goles10
    //     escocia.golesContra = escocia.golesContra + goles9 
    //     if (goles9 > goles10) {
    //         inglaterra.puntos = inglaterra.puntos + 3
    //         escocia.puntos = escocia.puntos + 0
    //     } else if (goles7 == goles8) {
    //         inglaterra.puntos = inglaterra.puntos + 1
    //         escocia.puntos = escocia.puntos + 1
    //     } else {
    //         inglaterra.puntos = inglaterra.puntos + 0
    //         escocia.puntos = escocia.puntos + 3
    //     }
    
    //     let goles11 = parseInt(prompt("Sexto partido: Iran vs Estados Unidos. ¿cuantos goles hizo Iran?"))
    //     let goles12 = parseInt(prompt("Sexto partido: Iran vs Estados Unidos. ¿cuantos goles hizo Estados Unidos?"))
    
    //     iran.golesFavor = iran.golesFavor + goles11 
    //     eeuu.golesFavor = eeuu.golesFavor + goles12
    //     iran.golesContra = iran.golesContra + goles12
    //     eeuu.golesContra = eeuu.golesContra + goles11 
    //     if (goles11 > goles12) {
    //         iran.puntos = iran.puntos + 3
    //         eeuu.puntos = eeuu.puntos + 0
    //     } else if (goles11 == goles12) {
    //         iran.puntos = iran.puntos + 1
    //         eeuu.puntos = eeuu.puntos + 1
    //     } else {
    //         iran.puntos = iran.puntos + 0
    //         eeuu.puntos = eeuu.puntos + 3
    //     }
    
    //     }
    
    //     function clasificacionB(){
            
    //         grupoB.sort((a,b)=> b.puntos - a.puntos);
    //         console.log(grupoB);


    //     }        
    
    //     function clasificadosB(){
    //         console.log(grupoB[0], grupoB[1]);
    //     }

    //     function resultadosC () {

    //         let goles1 = parseInt(prompt("Primer partido: Inglaterra vs Iran. ¿cuantos goles hizo Inglaterra?"))
    //         let goles2 = parseInt(prompt("Primer partido: Inglaterra vs Iran. ¿cuantos goles hizo Iran?"))
        
    //         inglaterra.golesFavor = inglaterra.golesFavor + goles1 
    //         iran.golesFavor = iran.golesFavor + goles2
    //         inglaterra.golesContra = inglaterra.golesContra + goles2
    //         iran.golesContra = iran.golesContra + goles1 
    //         if (goles1 > goles2) {
    //             inglaterra.puntos = inglaterra.puntos + 3
    //             iran.puntos = iran.puntos + 0
    //         } else if (goles1 == goles2) {
    //             inglaterra.puntos = inglaterra.puntos + 1
    //             iran.puntos = iran.puntos + 1
    //         } else {
    //             inglaterra.puntos = inglaterra.puntos + 0
    //             iran.puntos = iran.puntos + 3
    //         }
                                  
    //         let goles3 = parseInt(prompt("Segundo partido: Estados Unidos vs Escocia. ¿cuantos goles hizo Estados Unidos?"))
    //         let goles4 = parseInt(prompt("Segundo partido: Estados Unidos vs Escocia. ¿cuantos goles hizo Escocia?"))
        
    //         eeuu.golesFavor = eeuu.golesFavor + goles3 
    //         escocia.golesFavor = escocia.golesFavor + goles4
    //         eeuu.golesContra = eeuu.golesContra + goles4
    //         escocia.golesContra = escocia.golesContra + goles3 
    //         if (goles3 > goles4) {
    //             eeuu.puntos = eeuu.puntos + 3
    //             escocia.puntos = escocia.puntos + 0
    //         } else if (goles3 == goles4) {
    //             eeuu.puntos = eeuu.puntos + 1
    //             escocia.puntos = escocia.puntos + 1
    //         } else {
    //             eeuu.puntos = eeuu.puntos + 0
    //             escocia.puntos = escocia.puntos + 3
    //         }
        
    //         let goles5 = parseInt(prompt("Tercer partido: Inglaterra vs Estados Unidos. ¿cuantos goles hizo Inglaterra?"))
    //         let goles6 = parseInt(prompt("Tercer partido: Inglaterra vs Estados Unidos. ¿cuantos goles hizo Estados Unidos?"))
        
    //         inglaterra.golesFavor = inglaterra.golesFavor + goles5 
    //         eeuu.golesFavor = eeuu.golesFavor + goles6
    //         inglaterra.golesContra = inglaterra.golesContra + goles6
    //         eeuu.golesContra = eeuu.golesContra + goles5 
    //         if (goles5 > goles6) {
    //             inglaterra.puntos = inglaterra.puntos + 3
    //             eeuu.puntos = eeuu.puntos + 0
    //         } else if (goles5 == goles6) {
    //             inglaterra.puntos = inglaterra.puntos + 1
    //             eeuu.puntos = eeuu.puntos + 1
    //         } else {
    //             inglaterra.puntos = inglaterra.puntos + 0
    //             eeuu.puntos = eeuu.puntos + 3
    //         }
        
    //         let goles7 = parseInt(prompt("Cuarto partido: Iran vs Escocia. ¿cuantos goles hizo Iran?"))
    //         let goles8 = parseInt(prompt("Cuarto partido: Iran vs Escocia. ¿cuantos goles hizo Escocia?"))
        
    //         iran.golesFavor = iran.golesFavor + goles7 
    //         escocia.golesFavor = escocia.golesFavor + goles8
    //         iran.golesContra = iran.golesContra + goles8
    //         escocia.golesContra = escocia.golesContra + goles7 
    //         if (goles7 > goles8) {
    //             iran.puntos = iran.puntos + 3
    //             escocia.puntos = escocia.puntos + 0
    //         } else if (goles7 == goles8) {
    //             iran.puntos = iran.puntos + 1
    //             escocia.puntos = escocia.puntos + 1
    //         } else {
    //             iran.puntos = iran.puntos + 0
    //             escocia.puntos = escocia.puntos + 3
    //         }
        
    //         let goles9 = parseInt(prompt("Quinto partido: Inglaterra vs Escocia. ¿cuantos goles hizo Inglaterra?"))
    //         let goles10 = parseInt(prompt("Quinto partido: Inglaterra vs Escocia. ¿cuantos goles hizo Escocia?"))
        
    //         inglaterra.golesFavor = inglaterra.golesFavor + goles9 
    //         escocia.golesFavor = escocia.golesFavor + goles10
    //         inglaterra.golesContra = inglaterra.golesContra + goles10
    //         escocia.golesContra = escocia.golesContra + goles9 
    //         if (goles9 > goles10) {
    //             inglaterra.puntos = inglaterra.puntos + 3
    //             escocia.puntos = escocia.puntos + 0
    //         } else if (goles7 == goles8) {
    //             inglaterra.puntos = inglaterra.puntos + 1
    //             escocia.puntos = escocia.puntos + 1
    //         } else {
    //             inglaterra.puntos = inglaterra.puntos + 0
    //             escocia.puntos = escocia.puntos + 3
    //         }
        
    //         let goles11 = parseInt(prompt("Sexto partido: Iran vs Estados Unidos. ¿cuantos goles hizo Iran?"))
    //         let goles12 = parseInt(prompt("Sexto partido: Iran vs Estados Unidos. ¿cuantos goles hizo Estados Unidos?"))
        
    //         iran.golesFavor = iran.golesFavor + goles11 
    //         eeuu.golesFavor = eeuu.golesFavor + goles12
    //         iran.golesContra = iran.golesContra + goles12
    //         eeuu.golesContra = eeuu.golesContra + goles11 
    //         if (goles11 > goles12) {
    //             iran.puntos = iran.puntos + 3
    //             eeuu.puntos = eeuu.puntos + 0
    //         } else if (goles11 == goles12) {
    //             iran.puntos = iran.puntos + 1
    //             eeuu.puntos = eeuu.puntos + 1
    //         } else {
    //             iran.puntos = iran.puntos + 0
    //             eeuu.puntos = eeuu.puntos + 3
    //         }
        
    //         }
        
    //         function clasificacionC(){
                
    //             grupoC.sort((a,b)=> b.puntos - a.puntos);
    //             console.log(grupoB);
    
    
    //         }        
        
    //         function clasificadosC(){
    //             console.log(grupoC[0], grupoC[1]);
    //         }


