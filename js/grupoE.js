const espana = {
    id: 17,
    pais: "España",
    puntos: 0,
    golesFavor: 0,
    golesContra: 0,
    diferencia: 0
}

const costaRica = {
    id: 18,
    pais: "Costa Rica",
    puntos: 0,
    golesFavor: 0,
    golesContra: 0,
    diferencia: 0
}

const alemania = {
    id: 19,
    pais: "Alemania",
    puntos: 0,
    golesFavor: 0,
    golesContra: 0,
    diferencia: 0
}

const japon = {
    id: 20,
    pais: "Japon",
    puntos: 0,
    golesFavor: 0,
    golesContra: 0,
    diferencia: 0
}

const grupoE = [espana, costaRica, alemania, japon]

let goles49 = document.getElementById("g49");
let goles50 = document.getElementById("g50");
let goles51 = document.getElementById("g51");
let goles52 = document.getElementById("g52");
let goles53 = document.getElementById("g53");
let goles54 = document.getElementById("g54");
let goles55 = document.getElementById("g55");
let goles56 = document.getElementById("g56");
let goles57 = document.getElementById("g57");
let goles58 = document.getElementById("g58");
let goles59 = document.getElementById("g59");
let goles60 = document.getElementById("g60");


let botonDeCargaE = document.getElementById("cargaDataE");
botonDeCargaE.addEventListener ("click", function () {
   
    for (let index = 0; index <4; index++) {
        grupoE[index].puntos = 0;
        grupoE[index].golesFavor = 0;
        grupoE[index].golesContra = 0;
        grupoE[index].diferencia = 0;
    }

        espana.golesFavor = espana.golesFavor + parseInt(goles49.value) + parseInt(goles53.value) + parseInt(goles57.value);
        espana.golesContra = espana.golesContra + parseInt(goles50.value) + parseInt(goles54.value) + parseInt(goles58.value);

        costaRica.golesFavor = costaRica.golesFavor + parseInt(goles50.value) + parseInt(goles55.value) + parseInt(goles59.value);
        costaRica.golesContra = costaRica.golesContra + parseInt(goles49.value) + parseInt(goles56.value) + parseInt(goles60.value);

        alemania.golesFavor = alemania.golesFavor + parseInt(goles51.value) + parseInt(goles54.value) + parseInt(goles60.value);
        alemania.golesContra = alemania.golesContra + parseInt(goles52.value) + parseInt(goles53.value) + parseInt(goles59.value);
    
        japon.golesFavor = japon.golesFavor + parseInt(goles52.value) + parseInt(goles56.value) + parseInt(goles58.value);
        japon.golesContra = japon.golesContra + parseInt(goles51.value) + parseInt(goles55.value) + parseInt(goles57.value);
   
    if (parseInt(goles49.value) > parseInt(goles50.value)) {           
         espana.puntos = espana.puntos + 3
         costaRica.puntos = costaRica.puntos + 0
    } else if (parseInt(goles49.value) == parseInt(goles50.value)) {
        espana.puntos = espana.puntos + 1
         costaRica.puntos = costaRica.puntos + 1
    } else {
        espana.puntos = espana.puntos + 0
         costaRica.puntos = costaRica.puntos + 3
    }

       
    if (parseInt(goles51.value) > parseInt(goles52.value)) {            
    alemania.puntos = alemania.puntos + 3
    japon.puntos = japon.puntos + 0        
} else if (parseInt(goles51.value) == parseInt(goles52.value)) {
    alemania.puntos = alemania.puntos + 1
    japon.puntos = japon.puntos + 1
} else {
    alemania.puntos = alemania.puntos + 0
    japon.puntos = japon.puntos + 3
}

if (parseInt(goles53.value) > parseInt(goles54.value)) {
    espana.puntos = espana.puntos + 3
    alemania.puntos = alemania.puntos + 0
} else if (parseInt(goles53.value) == parseInt(goles54.value)) {
    espana.puntos = espana.puntos + 1
    alemania.puntos = alemania.puntos + 1
} else {
    espana.puntos = espana.puntos + 0
    alemania.puntos = alemania.puntos + 3
}
                                   
if (parseInt(goles55.value) > parseInt(goles56.value)) {
    costaRica.puntos = costaRica.puntos + 3
    japon.puntos = japon.puntos + 0
} else if (parseInt(goles55.value) == parseInt(goles56.value)) {
    costaRica.puntos = costaRica.puntos + 1
    japon.puntos = japon.puntos + 1
} else {
    costaRica.puntos = costaRica.puntos + 0
    japon.puntos = japon.puntos + 3
}
                        
if (parseInt(goles57.value) > parseInt(goles58.value)) {
        espana.puntos = espana.puntos + 3
        japon.puntos = japon.puntos + 0
} else if (parseInt(goles57.value) == parseInt(goles58.value)) {
    espana.puntos = espana.puntos + 1
        japon.puntos = japon.puntos + 1
} else {
    espana.puntos = espana.puntos + 0
        japon.puntos = japon.puntos + 3
}
                    
if (parseInt(goles59.value) > parseInt(goles60.value)) {
    costaRica.puntos = costaRica.puntos + 3
    alemania.puntos = alemania.puntos + 0
} else if (parseInt(goles59.value) == parseInt(goles60.value)) {
    costaRica.puntos = costaRica.puntos + 1
    alemania.puntos = alemania.puntos + 1
} else {
    costaRica.puntos = costaRica.puntos + 0
    alemania.puntos = alemania.puntos + 3
}


for (let index = 0; index <4; index++) {
    grupoE[index].diferencia = grupoE[index].golesFavor - grupoE[index].golesContra;  
}


    grupoE.sort(
        function(a,b) {
            if (b.puntos == a.puntos) {
                return b.diferencia - a.diferencia;
            }
            return b.puntos > a.puntos ? 1 : -1;
    })

    let clasificado1E = document.getElementById("clasi1E")
    clasificado1E.innerText = grupoE[0].pais;
    let clasificado2E = document.getElementById("clasi2E")
    clasificado2E.innerText = grupoE[1].pais;
    let terceroE = document.getElementById("terE")
    terceroE.innerText = grupoE[2].pais;
    let cuartoE = document.getElementById("cuarE")
    cuartoE.innerText = grupoE[3].pais;
    let puntos1E = document.getElementById("pts1E")
    puntos1E.innerText = grupoE[0].puntos;
    let puntos2E = document.getElementById("pts2E")
    puntos2E.innerText = grupoE[1].puntos;
    let puntos3E = document.getElementById("pts3E")
    puntos3E.innerText = grupoE[2].puntos;
    let puntos4E = document.getElementById("pts4E")
    puntos4E.innerText = grupoE[3].puntos;
    let favor1E = document.getElementById("gf1E")
    favor1E.innerText = grupoE[0].golesFavor;
    let favor2E = document.getElementById("gf2E")
    favor2E.innerText = grupoE[1].golesFavor;
    let favor3E = document.getElementById("gf3E")
    favor3E.innerText = grupoE[2].golesFavor;
    let favor4E = document.getElementById("gf4E")
    favor4E.innerText = grupoE[3].golesFavor;
    let contra1E = document.getElementById("gc1E")
    contra1E.innerText = grupoE[0].golesContra;
    let contra2E = document.getElementById("gc2E")
    contra2E.innerText = grupoE[1].golesContra;
    let contra3E = document.getElementById("gc3E")
    contra3E.innerText = grupoE[2].golesContra;
    let contra4E = document.getElementById("gc4E")
    contra4E.innerText = grupoE[3].golesContra;
    let difGol1E = document.getElementById("df1E")
    difGol1E.innerText = grupoE[0].diferencia;
    let difGol2E = document.getElementById("df2E")
    difGol2E.innerText = grupoE[1].diferencia;
    let difGol3E = document.getElementById("df3E")
    difGol3E.innerText = grupoE[2].diferencia;
    let difGol4E = document.getElementById("df4E")
    difGol4E.innerText = grupoE[3].diferencia;


let vGol49 = parseInt(goles49.value);
let vGol50 = parseInt(goles50.value);
let vGol51 = parseInt(goles51.value);
let vGol52 = parseInt(goles52.value);
let vGol53 = parseInt(goles53.value);
let vGol54 = parseInt(goles54.value);
let vGol55 = parseInt(goles55.value);
let vGol56 = parseInt(goles56.value);
let vGol57 = parseInt(goles57.value);
let vGol58 = parseInt(goles58.value);
let vGol59 = parseInt(goles59.value);
let vGol60 = parseInt(goles60.value);

const golesE = { vGol49, vGol50, vGol51, vGol52, vGol53, vGol54, vGol55, vGol56, vGol57, vGol58, vGol59, vGol60 }

const guardaGolesE = JSON.stringify(golesE)
localStorage.setItem("golesGrupoE", guardaGolesE);

const grupoEterminado = JSON.stringify(grupoE)
localStorage.setItem("grupoEresultados", grupoEterminado);

Toastify({

    text: "Cargaste a los partidos del GRUPO E con exito",
    
    duration: 3000
    
    }).showToast();

})


localStorage.hasOwnProperty("golesGrupoE") === true && deployGolesE();
localStorage.hasOwnProperty("golesGrupoE") === true && deployArrayE();

function deployGolesE() {
    const golesRecuperadosE = JSON.parse(localStorage.getItem("golesGrupoE"))

    goles49.value = golesRecuperadosE.vGol49;
    goles50.value = golesRecuperadosE.vGol50;
    goles51.value = golesRecuperadosE.vGol51;
    goles52.value = golesRecuperadosE.vGol52;
    goles53.value = golesRecuperadosE.vGol53;
    goles54.value = golesRecuperadosE.vGol54;
    goles55.value = golesRecuperadosE.vGol55;
    goles56.value = golesRecuperadosE.vGol56;
    goles57.value = golesRecuperadosE.vGol57;
    goles58.value = golesRecuperadosE.vGol58;
    goles59.value = golesRecuperadosE.vGol59;
    goles60.value = golesRecuperadosE.vGol60;

    
}

function deployArrayE() {
    const grupoErecuperado = JSON.parse(localStorage.getItem("grupoEresultados"))

    let clasificado1E = document.getElementById("clasi1E")
    clasificado1E.innerText = grupoErecuperado[0].pais;
    let clasificado2E = document.getElementById("clasi2E")
    clasificado2E.innerText = grupoErecuperado[1].pais;
    let terceroE = document.getElementById("terE")
    terceroE.innerText = grupoErecuperado[2].pais;
    let cuartoE = document.getElementById("cuarE")
    cuartoE.innerText = grupoErecuperado[3].pais;
    let puntos1E = document.getElementById("pts1E")
    puntos1E.innerText = grupoErecuperado[0].puntos;
    let puntos2E = document.getElementById("pts2E")
    puntos2E.innerText = grupoErecuperado[1].puntos;
    let puntos3E = document.getElementById("pts3E")
    puntos3E.innerText = grupoErecuperado[2].puntos;
    let puntos4E = document.getElementById("pts4E")
    puntos4E.innerText = grupoErecuperado[3].puntos;
    let favor1E = document.getElementById("gf1E")
    favor1E.innerText = grupoErecuperado[0].golesFavor;
    let favor2E = document.getElementById("gf2E")
    favor2E.innerText = grupoErecuperado[1].golesFavor;
    let favor3E = document.getElementById("gf3E")
    favor3E.innerText = grupoErecuperado[2].golesFavor;
    let favor4E = document.getElementById("gf4E")
    favor4E.innerText = grupoErecuperado[3].golesFavor;
    let contra1E = document.getElementById("gc1E")
    contra1E.innerText = grupoErecuperado[0].golesContra;
    let contra2E = document.getElementById("gc2E")
    contra2E.innerText = grupoErecuperado[1].golesContra;
    let contra3E = document.getElementById("gc3E")
    contra3E.innerText = grupoErecuperado[2].golesContra;
    let contra4E = document.getElementById("gc4E")
    contra4E.innerText = grupoErecuperado[3].golesContra;
    let difGol1E = document.getElementById("df1E")
    difGol1E.innerText = grupoErecuperado[0].diferencia;
    let difGol2E = document.getElementById("df2E")
    difGol2E.innerText = grupoErecuperado[1].diferencia;
    let difGol3E = document.getElementById("df3E")
    difGol3E.innerText = grupoErecuperado[2].diferencia;
    let difGol4E = document.getElementById("df4E")
    difGol4E.innerText = grupoErecuperado[3].diferencia;
}

document.getElementById(`borrarDataE`).addEventListener(`click`, () =>  {
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
                            grupoE[index].puntos = 0;
                            grupoE[index].golesFavor = 0;
                            grupoE[index].golesContra = 0;
                            grupoE[index].diferencia = 0;
                        }
                        let clasificado1E = document.getElementById("clasi1E")
    clasificado1E.innerText = grupoE[0].pais;
    let clasificado2E = document.getElementById("clasi2E")
    clasificado2E.innerText = grupoE[1].pais;
    let terceroE = document.getElementById("terE")
    terceroE.innerText = grupoE[2].pais;
    let cuartoE = document.getElementById("cuarE")
    cuartoE.innerText = grupoE[3].pais;
    let puntos1E = document.getElementById("pts1E")
    puntos1E.innerText = grupoE[0].puntos;
    let puntos2E = document.getElementById("pts2E")
    puntos2E.innerText = grupoE[1].puntos;
    let puntos3E = document.getElementById("pts3E")
    puntos3E.innerText = grupoE[2].puntos;
    let puntos4E = document.getElementById("pts4E")
    puntos4E.innerText = grupoE[3].puntos;
    let favor1E = document.getElementById("gf1E")
    favor1E.innerText = grupoE[0].golesFavor;
    let favor2E = document.getElementById("gf2E")
    favor2E.innerText = grupoE[1].golesFavor;
    let favor3E = document.getElementById("gf3E")
    favor3E.innerText = grupoE[2].golesFavor;
    let favor4E = document.getElementById("gf4E")
    favor4E.innerText = grupoE[3].golesFavor;
    let contra1E = document.getElementById("gc1E")
    contra1E.innerText = grupoE[0].golesContra;
    let contra2E = document.getElementById("gc2E")
    contra2E.innerText = grupoE[1].golesContra;
    let contra3E = document.getElementById("gc3E")
    contra3E.innerText = grupoE[2].golesContra;
    let contra4E = document.getElementById("gc4E")
    contra4E.innerText = grupoE[3].golesContra;
    let difGol1E = document.getElementById("df1E")
    difGol1E.innerText = grupoE[0].diferencia;
    let difGol2E = document.getElementById("df2E")
    difGol2E.innerText = grupoE[1].diferencia;
    let difGol3E = document.getElementById("df3E")
    difGol3E.innerText = grupoE[2].diferencia;
    let difGol4E = document.getElementById("df4E")
    difGol4E.innerText = grupoE[3].diferencia;

                        goles49.value = 0;
                        goles50.value = 0;
                        goles51.value = 0;
                        goles52.value = 0;
                        goles53.value = 0;
                        goles54.value = 0;
                        goles55.value = 0;
                        goles56.value = 0;
                        goles57.value = 0;
                        goles58.value = 0;
                        goles59.value = 0;
                        goles60.value = 0;
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

const grupoErecuperado = JSON.parse(localStorage.getItem("grupoEresultados"))

export { grupoErecuperado }