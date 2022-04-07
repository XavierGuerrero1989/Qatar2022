

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

function resultadosA () {

    let goles1 = parseInt(prompt("Primer partido: Qatar vs Ecuardor. ¿cuantos goles hizo Qatar?"))
    let goles2 = parseInt(prompt("Primer partido: Qatar vs Ecuardor. ¿cuantos goles hizo Ecuador?"))

    qatar.golesFavor = qatar.golesFavor + goles1 
    ecuador.golesFavor = ecuador.golesFavor + goles2
    qatar.golesContra = qatar.golesContra + goles2
    ecuador.golesContra = ecuador.golesContra + goles1 
    if (goles1 > goles2) {
        qatar.puntos = qatar.puntos + 3
        ecuador.puntos = ecuador.puntos + 0
    } else if (goles1 == goles2) {
        qatar.puntos = qatar.puntos + 1
        ecuador.puntos = ecuador.puntos + 1
    } else {
        qatar.puntos = qatar.puntos + 0
        ecuador.puntos = ecuador.puntos + 3
    }
    
    let goles3 = parseInt(prompt("Segundo partido: Senegal vs Paises Bajos. ¿cuantos goles hizo Senegal?"))
    let goles4 = parseInt(prompt("Segundo partido: Senegal vs Paises Bajos. ¿cuantos goles hizo Paises Bajos?"))

    senegal.golesFavor = senegal.golesFavor + goles3 
    paisesBajos.golesFavor = paisesBajos.golesFavor + goles4
    senegal.golesContra = senegal.golesContra + goles4
    paisesBajos.golesContra = paisesBajos.golesContra + goles3 
    if (goles3 > goles4) {
        senegal.puntos = senegal.puntos + 3
        paisesBajos.puntos = paisesBajos.puntos + 0
    } else if (goles3 == goles4) {
        senegal.puntos = senegal.puntos + 1
        paisesBajos.puntos = paisesBajos.puntos + 1
    } else {
        senegal.puntos = senegal.puntos + 0
        paisesBajos.puntos = paisesBajos.puntos + 3
    }

    let goles5 = parseInt(prompt("Tercer partido: Qatar vs Senegal. ¿cuantos goles hizo Qatar?"))
    let goles6 = parseInt(prompt("Tercer partido: Qatar vs Senegal. ¿cuantos goles hizo Senegal?"))

    qatar.golesFavor = qatar.golesFavor + goles5 
    senegal.golesFavor = senegal.golesFavor + goles6
    qatar.golesContra = qatar.golesContra + goles6
    senegal.golesContra = senegal.golesContra + goles5 
    if (goles5 > goles6) {
        qatar.puntos = qatar.puntos + 3
        senegal.puntos = senegal.puntos + 0
    } else if (goles5 == goles6) {
        qatar.puntos = qatar.puntos + 1
        senegal.puntos = senegal.puntos + 1
    } else {
        qatar.puntos = qatar.puntos + 0
        senegal.puntos = senegal.puntos + 3
    }

    let goles7 = parseInt(prompt("Cuarto partido: Ecuador vs Paises Bajos. ¿cuantos goles hizo Ecuador?"))
    let goles8 = parseInt(prompt("Cuarto partido: Ecuador vs Paises Bajos. ¿cuantos goles hizo Paises Bajos?"))

    ecuador.golesFavor = ecuador.golesFavor + goles7 
    paisesBajos.golesFavor = paisesBajos.golesFavor + goles8
    ecuador.golesContra = ecuador.golesContra + goles8
    paisesBajos.golesContra = paisesBajos.golesContra + goles7 
    if (goles7 > goles8) {
        ecuador.puntos = ecuador.puntos + 3
        paisesBajos.puntos = paisesBajos.puntos + 0
    } else if (goles7 == goles8) {
        ecuador.puntos = ecuador.puntos + 1
        paisesBajos.puntos = paisesBajos.puntos + 1
    } else {
        ecuador.puntos = ecuador.puntos + 0
        paisesBajos.puntos = paisesBajos.puntos + 3
    }

    let goles9 = parseInt(prompt("Quinto partido: Qatar vs Paises Bajos. ¿cuantos goles hizo Qatar?"))
    let goles10 = parseInt(prompt("Quinto partido: Qatar vs Paises Bajos. ¿cuantos goles hizo Paises Bajos?"))

    qatar.golesFavor = qatar.golesFavor + goles9 
    paisesBajos.golesFavor = paisesBajos.golesFavor + goles10
    qatar.golesContra = qatar.golesContra + goles10
    paisesBajos.golesContra = paisesBajos.golesContra + goles9 
    if (goles9 > goles10) {
        qatar.puntos = qatar.puntos + 3
        paisesBajos.puntos = paisesBajos.puntos + 0
    } else if (goles7 == goles8) {
        qatar.puntos = qatar.puntos + 1
        paisesBajos.puntos = paisesBajos.puntos + 1
    } else {
        qatar.puntos = qatar.puntos + 0
        paisesBajos.puntos = paisesBajos.puntos + 3
    }

    let goles11 = parseInt(prompt("Sexto partido: Ecuador vs Senegal. ¿cuantos goles hizo Ecuador?"))
    let goles12 = parseInt(prompt("Sexto partido: Ecuador vs Senegal. ¿cuantos goles hizo Senegal?"))

    ecuador.golesFavor = ecuador.golesFavor + goles11 
    senegal.golesFavor = senegal.golesFavor + goles12
    ecuador.golesContra = ecuador.golesContra + goles12
    senegal.golesContra = senegal.golesContra + goles11 
    if (goles11 > goles12) {
        ecuador.puntos = ecuador.puntos + 3
        senegal.puntos = senegal.puntos + 0
    } else if (goles11 == goles12) {
        ecuador.puntos = ecuador.puntos + 1
        senegal.puntos = senegal.puntos + 1
    } else {
        ecuador.puntos = ecuador.puntos + 0
        senegal.puntos = senegal.puntos + 3
    }

    }

    function clasificacionA(){

        grupoA.sort((a,b)=> b.puntos - a.puntos);
        console.log(grupoA);
    
    }

    function clasificadosA(){
        console.log(grupoA[0], grupoA[1]);
    }

    function resultadosB () {

        let goles1 = parseInt(prompt("Primer partido: Inglaterra vs Iran. ¿cuantos goles hizo Inglaterra?"))
        let goles2 = parseInt(prompt("Primer partido: Inglaterra vs Iran. ¿cuantos goles hizo Iran?"))
    
        inglaterra.golesFavor = inglaterra.golesFavor + goles1 
        iran.golesFavor = iran.golesFavor + goles2
        inglaterra.golesContra = inglaterra.golesContra + goles2
        iran.golesContra = iran.golesContra + goles1 
        if (goles1 > goles2) {
            inglaterra.puntos = inglaterra.puntos + 3
            iran.puntos = iran.puntos + 0
        } else if (goles1 == goles2) {
            inglaterra.puntos = inglaterra.puntos + 1
            iran.puntos = iran.puntos + 1
        } else {
            inglaterra.puntos = inglaterra.puntos + 0
            iran.puntos = iran.puntos + 3
        }
                              
        let goles3 = parseInt(prompt("Segundo partido: Estados Unidos vs Escocia. ¿cuantos goles hizo Estados Unidos?"))
        let goles4 = parseInt(prompt("Segundo partido: Estados Unidos vs Escocia. ¿cuantos goles hizo Escocia?"))
    
        eeuu.golesFavor = eeuu.golesFavor + goles3 
        escocia.golesFavor = escocia.golesFavor + goles4
        eeuu.golesContra = eeuu.golesContra + goles4
        escocia.golesContra = escocia.golesContra + goles3 
        if (goles3 > goles4) {
            eeuu.puntos = eeuu.puntos + 3
            escocia.puntos = escocia.puntos + 0
        } else if (goles3 == goles4) {
            eeuu.puntos = eeuu.puntos + 1
            escocia.puntos = escocia.puntos + 1
        } else {
            eeuu.puntos = eeuu.puntos + 0
            escocia.puntos = escocia.puntos + 3
        }
    
        let goles5 = parseInt(prompt("Tercer partido: Inglaterra vs Estados Unidos. ¿cuantos goles hizo Inglaterra?"))
        let goles6 = parseInt(prompt("Tercer partido: Inglaterra vs Estados Unidos. ¿cuantos goles hizo Estados Unidos?"))
    
        inglaterra.golesFavor = inglaterra.golesFavor + goles5 
        eeuu.golesFavor = eeuu.golesFavor + goles6
        inglaterra.golesContra = inglaterra.golesContra + goles6
        eeuu.golesContra = eeuu.golesContra + goles5 
        if (goles5 > goles6) {
            inglaterra.puntos = inglaterra.puntos + 3
            eeuu.puntos = eeuu.puntos + 0
        } else if (goles5 == goles6) {
            inglaterra.puntos = inglaterra.puntos + 1
            eeuu.puntos = eeuu.puntos + 1
        } else {
            inglaterra.puntos = inglaterra.puntos + 0
            eeuu.puntos = eeuu.puntos + 3
        }
    
        let goles7 = parseInt(prompt("Cuarto partido: Iran vs Escocia. ¿cuantos goles hizo Iran?"))
        let goles8 = parseInt(prompt("Cuarto partido: Iran vs Escocia. ¿cuantos goles hizo Escocia?"))
    
        iran.golesFavor = iran.golesFavor + goles7 
        escocia.golesFavor = escocia.golesFavor + goles8
        iran.golesContra = iran.golesContra + goles8
        escocia.golesContra = escocia.golesContra + goles7 
        if (goles7 > goles8) {
            iran.puntos = iran.puntos + 3
            escocia.puntos = escocia.puntos + 0
        } else if (goles7 == goles8) {
            iran.puntos = iran.puntos + 1
            escocia.puntos = escocia.puntos + 1
        } else {
            iran.puntos = iran.puntos + 0
            escocia.puntos = escocia.puntos + 3
        }
    
        let goles9 = parseInt(prompt("Quinto partido: Inglaterra vs Escocia. ¿cuantos goles hizo Inglaterra?"))
        let goles10 = parseInt(prompt("Quinto partido: Inglaterra vs Escocia. ¿cuantos goles hizo Escocia?"))
    
        inglaterra.golesFavor = inglaterra.golesFavor + goles9 
        escocia.golesFavor = escocia.golesFavor + goles10
        inglaterra.golesContra = inglaterra.golesContra + goles10
        escocia.golesContra = escocia.golesContra + goles9 
        if (goles9 > goles10) {
            inglaterra.puntos = inglaterra.puntos + 3
            escocia.puntos = escocia.puntos + 0
        } else if (goles7 == goles8) {
            inglaterra.puntos = inglaterra.puntos + 1
            escocia.puntos = escocia.puntos + 1
        } else {
            inglaterra.puntos = inglaterra.puntos + 0
            escocia.puntos = escocia.puntos + 3
        }
    
        let goles11 = parseInt(prompt("Sexto partido: Iran vs Estados Unidos. ¿cuantos goles hizo Iran?"))
        let goles12 = parseInt(prompt("Sexto partido: Iran vs Estados Unidos. ¿cuantos goles hizo Estados Unidos?"))
    
        iran.golesFavor = iran.golesFavor + goles11 
        eeuu.golesFavor = eeuu.golesFavor + goles12
        iran.golesContra = iran.golesContra + goles12
        eeuu.golesContra = eeuu.golesContra + goles11 
        if (goles11 > goles12) {
            iran.puntos = iran.puntos + 3
            eeuu.puntos = eeuu.puntos + 0
        } else if (goles11 == goles12) {
            iran.puntos = iran.puntos + 1
            eeuu.puntos = eeuu.puntos + 1
        } else {
            iran.puntos = iran.puntos + 0
            eeuu.puntos = eeuu.puntos + 3
        }
    
        }
    
        function clasificacionB(){
            
            grupoB.sort((a,b)=> b.puntos - a.puntos);
            console.log(grupoB);


        }        
    
        function clasificadosB(){
            console.log(grupoB[0], grupoB[1]);
        }

        function resultadosC () {

            let goles1 = parseInt(prompt("Primer partido: Inglaterra vs Iran. ¿cuantos goles hizo Inglaterra?"))
            let goles2 = parseInt(prompt("Primer partido: Inglaterra vs Iran. ¿cuantos goles hizo Iran?"))
        
            inglaterra.golesFavor = inglaterra.golesFavor + goles1 
            iran.golesFavor = iran.golesFavor + goles2
            inglaterra.golesContra = inglaterra.golesContra + goles2
            iran.golesContra = iran.golesContra + goles1 
            if (goles1 > goles2) {
                inglaterra.puntos = inglaterra.puntos + 3
                iran.puntos = iran.puntos + 0
            } else if (goles1 == goles2) {
                inglaterra.puntos = inglaterra.puntos + 1
                iran.puntos = iran.puntos + 1
            } else {
                inglaterra.puntos = inglaterra.puntos + 0
                iran.puntos = iran.puntos + 3
            }
                                  
            let goles3 = parseInt(prompt("Segundo partido: Estados Unidos vs Escocia. ¿cuantos goles hizo Estados Unidos?"))
            let goles4 = parseInt(prompt("Segundo partido: Estados Unidos vs Escocia. ¿cuantos goles hizo Escocia?"))
        
            eeuu.golesFavor = eeuu.golesFavor + goles3 
            escocia.golesFavor = escocia.golesFavor + goles4
            eeuu.golesContra = eeuu.golesContra + goles4
            escocia.golesContra = escocia.golesContra + goles3 
            if (goles3 > goles4) {
                eeuu.puntos = eeuu.puntos + 3
                escocia.puntos = escocia.puntos + 0
            } else if (goles3 == goles4) {
                eeuu.puntos = eeuu.puntos + 1
                escocia.puntos = escocia.puntos + 1
            } else {
                eeuu.puntos = eeuu.puntos + 0
                escocia.puntos = escocia.puntos + 3
            }
        
            let goles5 = parseInt(prompt("Tercer partido: Inglaterra vs Estados Unidos. ¿cuantos goles hizo Inglaterra?"))
            let goles6 = parseInt(prompt("Tercer partido: Inglaterra vs Estados Unidos. ¿cuantos goles hizo Estados Unidos?"))
        
            inglaterra.golesFavor = inglaterra.golesFavor + goles5 
            eeuu.golesFavor = eeuu.golesFavor + goles6
            inglaterra.golesContra = inglaterra.golesContra + goles6
            eeuu.golesContra = eeuu.golesContra + goles5 
            if (goles5 > goles6) {
                inglaterra.puntos = inglaterra.puntos + 3
                eeuu.puntos = eeuu.puntos + 0
            } else if (goles5 == goles6) {
                inglaterra.puntos = inglaterra.puntos + 1
                eeuu.puntos = eeuu.puntos + 1
            } else {
                inglaterra.puntos = inglaterra.puntos + 0
                eeuu.puntos = eeuu.puntos + 3
            }
        
            let goles7 = parseInt(prompt("Cuarto partido: Iran vs Escocia. ¿cuantos goles hizo Iran?"))
            let goles8 = parseInt(prompt("Cuarto partido: Iran vs Escocia. ¿cuantos goles hizo Escocia?"))
        
            iran.golesFavor = iran.golesFavor + goles7 
            escocia.golesFavor = escocia.golesFavor + goles8
            iran.golesContra = iran.golesContra + goles8
            escocia.golesContra = escocia.golesContra + goles7 
            if (goles7 > goles8) {
                iran.puntos = iran.puntos + 3
                escocia.puntos = escocia.puntos + 0
            } else if (goles7 == goles8) {
                iran.puntos = iran.puntos + 1
                escocia.puntos = escocia.puntos + 1
            } else {
                iran.puntos = iran.puntos + 0
                escocia.puntos = escocia.puntos + 3
            }
        
            let goles9 = parseInt(prompt("Quinto partido: Inglaterra vs Escocia. ¿cuantos goles hizo Inglaterra?"))
            let goles10 = parseInt(prompt("Quinto partido: Inglaterra vs Escocia. ¿cuantos goles hizo Escocia?"))
        
            inglaterra.golesFavor = inglaterra.golesFavor + goles9 
            escocia.golesFavor = escocia.golesFavor + goles10
            inglaterra.golesContra = inglaterra.golesContra + goles10
            escocia.golesContra = escocia.golesContra + goles9 
            if (goles9 > goles10) {
                inglaterra.puntos = inglaterra.puntos + 3
                escocia.puntos = escocia.puntos + 0
            } else if (goles7 == goles8) {
                inglaterra.puntos = inglaterra.puntos + 1
                escocia.puntos = escocia.puntos + 1
            } else {
                inglaterra.puntos = inglaterra.puntos + 0
                escocia.puntos = escocia.puntos + 3
            }
        
            let goles11 = parseInt(prompt("Sexto partido: Iran vs Estados Unidos. ¿cuantos goles hizo Iran?"))
            let goles12 = parseInt(prompt("Sexto partido: Iran vs Estados Unidos. ¿cuantos goles hizo Estados Unidos?"))
        
            iran.golesFavor = iran.golesFavor + goles11 
            eeuu.golesFavor = eeuu.golesFavor + goles12
            iran.golesContra = iran.golesContra + goles12
            eeuu.golesContra = eeuu.golesContra + goles11 
            if (goles11 > goles12) {
                iran.puntos = iran.puntos + 3
                eeuu.puntos = eeuu.puntos + 0
            } else if (goles11 == goles12) {
                iran.puntos = iran.puntos + 1
                eeuu.puntos = eeuu.puntos + 1
            } else {
                iran.puntos = iran.puntos + 0
                eeuu.puntos = eeuu.puntos + 3
            }
        
            }
        
            function clasificacionC(){
                
                grupoC.sort((a,b)=> b.puntos - a.puntos);
                console.log(grupoB);
    
    
            }        
        
            function clasificadosC(){
                console.log(grupoC[0], grupoC[1]);
            }
do {
    opcion = parseInt(prompt("Bienvenido: \n ¿Que Grupo quiere cargar? \n 1 - GRUPO A \n 2 - GRUPO B \n 3 - GRUPO C \n 4 - GRUPO D \n 5 - GRUPO E \n 6 - GRUPO F \n 7 - GRUPO G \n 8 - GRUPO H \n 9 - Clasificados \n 10 - Salir"))

    switch (opcion) {
        case 1:
            resultadosA ();
            clasificacionA ();
            break;
        case 2:
            resultadosB ();
            clasificacionB ();
            break;
        case 3:
            resultadosC ();
            clasificacionC ();
            break;
       case 4:
            resultadosD ();
            clasificacionD ();
            break;
       case 5:
            resultadosE ();
            clasificacionE ();
            break;
       case 6:
            resultadosF ();
            clasificacionF ();
            break;
        case 7:
            resultadosG ();
            clasificacionG ();
            break;    
        case 8:
            resultadosH ();
            clasificacionH ();
            break; 
        case 9:
            clasificadosA ();
            clasificadosB ();
            clasificadosC ();
            clasificadosD ();
            clasificadosE ();
            clasificadosF ();
            clasificadosG ();
            clasificadosH ();
            break;
        case 10:
            alert("Adios!");
            break;
        default:
            alert("Elija una opcion correcta");
            break;
    }
    
} while (opcion !== 10);

