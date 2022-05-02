const inglaterra = {
    id: 5,
    pais: "Inglaterra",
    puntos: 0,
    golesFavor: 0,
    golesContra: 0,
    diferencia: 0
}

const iran = {
    id: 6,
    pais: "Iran",
    puntos: 0,
    golesFavor: 0,
    golesContra: 0,
    diferencia: 0
}

const eeuu = {
    id: 7,
    pais: "Estados Unidos",
    puntos: 0,
    golesFavor: 0,
    golesContra: 0,
    diferencia: 0
}

const escocia = {
    id: 8,
    pais: "Escocia",
    puntos: 0,
    golesFavor: 0,
    golesContra: 0,
    diferencia: 0
}

const grupoB = [inglaterra, iran, eeuu, escocia]

let goles13 = document.getElementById("g13");
let goles14 = document.getElementById("g14");
let goles15 = document.getElementById("g15");
let goles16 = document.getElementById("g16");
let goles17 = document.getElementById("g17");
let goles18 = document.getElementById("g18");
let goles19 = document.getElementById("g19");
let goles20 = document.getElementById("g20");
let goles21 = document.getElementById("g21");
let goles22 = document.getElementById("g22");
let goles23= document.getElementById("g23");
let goles24 = document.getElementById("g24");


let botonDeCargaB = document.getElementById("cargaDataB");
botonDeCargaB.addEventListener ("click", function () {
   
    for (let index = 0; index <4; index++) {
        grupoB[index].puntos = 0;
        grupoB[index].golesFavor = 0;
        grupoB[index].golesContra = 0;
        grupoB[index].diferencia = 0;
    }

    if (parseInt(goles13.value) >= 0) {
        inglaterra.golesFavor = inglaterra.golesFavor + parseInt(goles13.value);
        iran.golesContra = iran.golesContra + parseInt(goles13.value);
    }



    if (parseInt(goles14.value) >= 0 ) {
        iran.golesFavor = iran.golesFavor + parseInt(goles14.value);
        inglaterra.golesContra = inglaterra.golesContra + parseInt(goles14.value);
    }
    


    if (parseInt(goles15.value) >= 0) {
        eeuu.golesFavor = eeuu.golesFavor + parseInt(goles15.value);
        escocia.golesContra = escocia.golesContra + parseInt(goles15.value)
    }     



    if (parseInt(goles16.value) >= 0 ) {
        escocia.golesFavor = escocia.golesFavor + parseInt(goles16.value);
        eeuu.golesContra = eeuu.golesContra + parseInt(goles16.value);
    }
    


    if (parseInt(goles17.value) >= 0) {
        inglaterra.golesFavor = inglaterra.golesFavor + parseInt(goles17.value);
        eeuu.golesContra = eeuu.golesContra + parseInt(goles17.value)
    }     

    
    if (parseInt(goles18.value) >= 0 ) {
        eeuu.golesFavor = eeuu.golesFavor + parseInt(goles18.value);
        inglaterra.golesContra = inglaterra.golesContra + parseInt(goles18.value);
    }


    if (parseInt(goles19.value) >= 0) {
        iran.golesFavor = iran.golesFavor + parseInt(goles19.value);
        escocia.golesContra = escocia.golesContra + parseInt(goles19.value)
    }     


    
    if (parseInt(goles20.value) >= 0 ) {
        escocia.golesFavor = escocia.golesFavor + parseInt(goles20.value);
        iran.golesContra = iran.golesContra + parseInt(goles20.value);
    }   



    if (parseInt(goles21.value) >= 0) {
        inglaterra.golesFavor = inglaterra.golesFavor + parseInt(goles21.value);
        escocia.golesContra = escocia.golesContra + parseInt(goles21.value)
    }     
    
    

    if (parseInt(goles22.value) >= 0 ) {
        escocia.golesFavor = escocia.golesFavor + parseInt(goles22.value);
        inglaterra.golesContra = inglaterra.golesContra + parseInt(goles22.value);
    }
    
    
    if (parseInt(goles23.value) >= 0) {
            iran.golesFavor = iran.golesFavor + parseInt(goles23.value);
            eeuu.golesContra = eeuu.golesContra + parseInt(goles23.value)
    }       
    
    if (parseInt(goles24.value) >= 0 ) {
            eeuu.golesFavor = eeuu.golesFavor + parseInt(goles24.value);
            iran.golesContra = iran.golesContra + parseInt(goles24.value);
    }   
   
    if (parseInt(goles13.value) > parseInt(goles14.value)) {
                
         inglaterra.puntos = inglaterra.puntos + 3
         iran.puntos = iran.puntos + 0
    } else if (parseInt(goles13.value) == parseInt(goles14.value)) {
        inglaterra.puntos = inglaterra.puntos + 1
        iran.puntos = iran.puntos + 1
    } else {
        inglaterra.puntos = inglaterra.puntos + 0
        iran.puntos = iran.puntos + 3
    }

       
    if (parseInt(goles15.value) > parseInt(goles16.value)) {            
    eeuu.puntos = eeuu.puntos + 3
    escocia.puntos = escocia.puntos + 0        
} else if (parseInt(goles15.value) == parseInt(goles16.value)) {
    eeuu.puntos = eeuu.puntos + 1
    escocia.puntos = escocia.puntos + 1
} else {
    eeuu.puntos = eeuu.puntos + 0
    escocia.puntos = escocia.puntos + 3
}

if (parseInt(goles17.value) > parseInt(goles18.value)) {
    inglaterra.puntos = inglaterra.puntos + 3
    eeuu.puntos = eeuu.puntos + 0
} else if (parseInt(goles17.value) == parseInt(goles18.value)) {
    inglaterra.puntos = inglaterra.puntos + 1
    eeuu.puntos = eeuu.puntos + 1
} else {
    inglaterra.puntos = inglaterra.puntos + 0
    eeuu.puntos = eeuu.puntos + 3
}
                                   
if (parseInt(goles19.value) > parseInt(goles20.value)) {
            iran.puntos = iran.puntos + 3
            escocia.puntos = escocia.puntos + 0
} else if (parseInt(goles19.value) == parseInt(goles20.value)) {
    iran.puntos = iran.puntos + 1
    escocia.puntos = escocia.puntos + 1
} else {
    iran.puntos = iran.puntos + 0
    escocia.puntos = escocia.puntos + 3
}
                        
if (parseInt(goles21.value) > parseInt(goles22.value)) {
        inglaterra.puntos = inglaterra.puntos + 3
        escocia.puntos = escocia.puntos + 0
} else if (parseInt(goles21.value) == parseInt(goles22.value)) {
    inglaterra.puntos = inglaterra.puntos + 1
    escocia.puntos = escocia.puntos + 1
} else {
    inglaterra.puntos = inglaterra.puntos + 0
    escocia.puntos = escocia.puntos + 3
}
                    
if (parseInt(goles23.value) > parseInt(goles24.value)) {
    iran.puntos = iran.puntos + 3
    eeuu.puntos = eeuu.puntos + 0
} else if (parseInt(goles23.value) == parseInt(goles24.value)) {
    iran.puntos = iran.puntos + 1
    eeuu.puntos = eeuu.puntos + 1
} else {
    iran.puntos = iran.puntos + 0
    eeuu.puntos = eeuu.puntos + 3
}


    inglaterra.diferencia = inglaterra.golesFavor - inglaterra.golesContra
    iran.diferencia = iran.golesFavor - iran.golesContra
    eeuu.diferencia = eeuu.golesFavor - eeuu.golesContra
    escocia.diferencia = escocia.golesFavor - escocia.golesContra



    grupoB.sort(
        function(a,b) {
            if (b.puntos == a.puntos) {
                return b.diferencia - a.diferencia;
            }
            return b.puntos > a.puntos ? 1 : -1;
    })



    let clasificado1B = document.getElementById("clasi1B")
    clasificado1B.innerText = grupoB[0].pais;
    let clasificado2B = document.getElementById("clasi2B")
    clasificado2B.innerText = grupoB[1].pais;
    let terceroB = document.getElementById("terB")
    terceroB.innerText = grupoB[2].pais;
    let cuartoB = document.getElementById("cuarB")
    cuartoB.innerText = grupoB[3].pais;
    let puntos1B = document.getElementById("pts1B")
    puntos1B.innerText = grupoB[0].puntos;
    let puntos2B = document.getElementById("pts2B")
    puntos2B.innerText = grupoB[1].puntos;
    let puntos3B = document.getElementById("pts3B")
    puntos3B.innerText = grupoB[2].puntos;
    let puntos4B = document.getElementById("pts4B")
    puntos4B.innerText = grupoB[3].puntos;
    let favor1B = document.getElementById("gf1B")
    favor1B.innerText = grupoB[0].golesFavor;
    let favor2B = document.getElementById("gf2B")
    favor2B.innerText = grupoB[1].golesFavor;
    let favor3B = document.getElementById("gf3B")
    favor3B.innerText = grupoB[2].golesFavor;
    let favor4B = document.getElementById("gf4B")
    favor4B.innerText = grupoB[3].golesFavor;
    let contra1B = document.getElementById("gc1B")
    contra1B.innerText = grupoB[0].golesContra;
    let contra2B = document.getElementById("gc2B")
    contra2B.innerText = grupoB[1].golesContra;
    let contra3B = document.getElementById("gc3B")
    contra3B.innerText = grupoB[2].golesContra;
    let contra4B = document.getElementById("gc4B")
    contra4B.innerText = grupoB[3].golesContra;
    let difGol1B = document.getElementById("df1B")
    difGol1B.innerText = grupoB[0].diferencia;
    let difGol2B = document.getElementById("df2B")
    difGol2B.innerText = grupoB[1].diferencia;
    let difGol3B = document.getElementById("df3B")
    difGol3B.innerText = grupoB[2].diferencia;
    let difGol4B = document.getElementById("df4B")
    difGol4B.innerText = grupoB[3].diferencia;


let vGol13 = parseInt(goles13.value);
let vGol14 = parseInt(goles14.value);
let vGol15 = parseInt(goles15.value);
let vGol16 = parseInt(goles16.value);
let vGol17 = parseInt(goles17.value);
let vGol18 = parseInt(goles18.value);
let vGol19 = parseInt(goles19.value);
let vGol20 = parseInt(goles20.value);
let vGol21 = parseInt(goles21.value);
let vGol22 = parseInt(goles22.value);
let vGol23 = parseInt(goles23.value);
let vGol24 = parseInt(goles24.value);

const golesB = { vGol13, vGol14, vGol15, vGol16, vGol17, vGol18, vGol19, vGol20, vGol21, vGol22, vGol23, vGol24 }

const guardaGolesB = JSON.stringify(golesB)
localStorage.setItem("golesGrupoB", guardaGolesB);

const grupoBterminado = JSON.stringify(grupoB)
localStorage.setItem("grupoBresultados", grupoBterminado);

Toastify({

    text: "Cargaste a los partidos del GRUPO B con exito",
    
    duration: 3000
    
    }).showToast();

})


localStorage.hasOwnProperty("golesGrupoB") === true && deployGolesB();
localStorage.hasOwnProperty("golesGrupoB") === true && deployArrayB();

function deployGolesB() {
    const golesRecuperadosB = JSON.parse(localStorage.getItem("golesGrupoB"))

    goles13.value = golesRecuperadosB.vGol13;
    goles14.value = golesRecuperadosB.vGol14;
    goles15.value = golesRecuperadosB.vGol15;
    goles16.value = golesRecuperadosB.vGol16;
    goles17.value = golesRecuperadosB.vGol17;
    goles18.value = golesRecuperadosB.vGol18;
    goles19.value = golesRecuperadosB.vGol19;
    goles20.value = golesRecuperadosB.vGol20;
    goles21.value = golesRecuperadosB.vGol21;
    goles22.value = golesRecuperadosB.vGol22;
    goles23.value = golesRecuperadosB.vGol23;
    goles24.value = golesRecuperadosB.vGol24;

    
}

function deployArrayB() {
    const grupoBrecuperado = JSON.parse(localStorage.getItem("grupoBresultados"))

    let clasificado1B = document.getElementById("clasi1B")
    clasificado1B.innerText = grupoBrecuperado[0].pais;
    let clasificado2B = document.getElementById("clasi2B")
    clasificado2B.innerText = grupoBrecuperado[1].pais;
    let terceroB = document.getElementById("terB")
    terceroB.innerText = grupoBrecuperado[2].pais;
    let cuartoB = document.getElementById("cuarB")
    cuartoB.innerText = grupoBrecuperado[3].pais;
    let puntos1B = document.getElementById("pts1B")
    puntos1B.innerText = grupoBrecuperado[0].puntos;
    let puntos2B = document.getElementById("pts2B")
    puntos2B.innerText = grupoBrecuperado[1].puntos;
    let puntos3B = document.getElementById("pts3B")
    puntos3B.innerText = grupoBrecuperado[2].puntos;
    let puntos4B = document.getElementById("pts4B")
    puntos4B.innerText = grupoBrecuperado[3].puntos;
    let favor1B = document.getElementById("gf1B")
    favor1B.innerText = grupoBrecuperado[0].golesFavor;
    let favor2B = document.getElementById("gf2B")
    favor2B.innerText = grupoBrecuperado[1].golesFavor;
    let favor3B = document.getElementById("gf3B")
    favor3B.innerText = grupoBrecuperado[2].golesFavor;
    let favor4B = document.getElementById("gf4B")
    favor4B.innerText = grupoBrecuperado[3].golesFavor;
    let contra1B = document.getElementById("gc1B")
    contra1B.innerText = grupoBrecuperado[0].golesContra;
    let contra2B = document.getElementById("gc2B")
    contra2B.innerText = grupoBrecuperado[1].golesContra;
    let contra3B = document.getElementById("gc3B")
    contra3B.innerText = grupoBrecuperado[2].golesContra;
    let contra4B = document.getElementById("gc4B")
    contra4B.innerText = grupoBrecuperado[3].golesContra;
    let difGol1B = document.getElementById("df1B")
    difGol1B.innerText = grupoBrecuperado[0].diferencia;
    let difGol2B = document.getElementById("df2B")
    difGol2B.innerText = grupoBrecuperado[1].diferencia;
    let difGol3B = document.getElementById("df3B")
    difGol3B.innerText = grupoBrecuperado[2].diferencia;
    let difGol4B = document.getElementById("df4B")
    difGol4B.innerText = grupoBrecuperado[3].diferencia;
}

document.getElementById(`borrarDataB`).addEventListener(`click`, () =>  {
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
                        localStorage.clear();
                        for (let index = 0; index <4; index++) {
                            grupoB[index].puntos = 0;
                            grupoB[index].golesFavor = 0;
                            grupoB[index].golesContra = 0;
                            grupoB[index].diferencia = 0;
                        }
                        let clasificado1B = document.getElementById("clasi1B")
                        clasificado1B.innerText = grupoB[0].pais;
                        let clasificado2B = document.getElementById("clasi2B")
                        clasificado2B.innerText = grupoB[1].pais;
                        let terceroB = document.getElementById("terB")
                        terceroB.innerText = grupoB[2].pais;
                        let cuartoB = document.getElementById("cuarB")
                        cuartoB.innerText = grupoB[3].pais;
                        let puntos1B = document.getElementById("pts1B")
                        puntos1B.innerText = grupoB[0].puntos;
                        let puntos2B = document.getElementById("pts2B")
                        puntos2B.innerText = grupoB[1].puntos;
                        let puntos3B = document.getElementById("pts3B")
                        puntos3B.innerText = grupoB[2].puntos;
                        let puntos4B = document.getElementById("pts4B")
                        puntos4B.innerText = grupoB[3].puntos;
                        let favor1B = document.getElementById("gf1B")
                        favor1B.innerText = grupoB[0].golesFavor;
                        let favor2B = document.getElementById("gf2B")
                        favor2B.innerText = grupoB[1].golesFavor;
                        let favor3B = document.getElementById("gf3B")
                        favor3B.innerText = grupoB[2].golesFavor;
                        let favor4B = document.getElementById("gf4B")
                        favor4B.innerText = grupoB[3].golesFavor;
                        let contra1B = document.getElementById("gc1B")
                        contra1B.innerText = grupoB[0].golesContra;
                        let contra2B = document.getElementById("gc2B")
                        contra2B.innerText = grupoB[1].golesContra;
                        let contra3B = document.getElementById("gc3B")
                        contra3B.innerText = grupoB[2].golesContra;
                        let contra4B = document.getElementById("gc4B")
                        contra4B.innerText = grupoB[3].golesContra;
                        let difGol1B = document.getElementById("df1B")
                        difGol1B.innerText = grupoB[0].diferencia;
                        let difGol2B = document.getElementById("df2B")
                        difGol2B.innerText = grupoB[1].diferencia;
                        let difGol3B = document.getElementById("df3B")
                        difGol3B.innerText = grupoB[2].diferencia;
                        let difGol4B = document.getElementById("df4B")
                        difGol4B.innerText = grupoB[3].diferencia;

                        goles13.value = 0;
                        goles14.value = 0;
                        goles15.value = 0;
                        goles16.value = 0;
                        goles17.value = 0;
                        goles18.value = 0;
                        goles19.value = 0;
                        goles20.value = 0;
                        goles21.value = 0;
                        goles22.value = 0;
                        goles23.value = 0;
                        goles24.value = 0;
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

const grupoBrecuperado = JSON.parse(localStorage.getItem("grupoBresultados"))

export { grupoBrecuperado }