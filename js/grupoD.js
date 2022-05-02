const francia = {
    pais: "Francia",
    puntos: 0,
    golesFavor: 0,
    golesContra: 0,
    diferencia: 0
}

const peru = {
    pais: "Peru",
    puntos: 0,
    golesFavor: 0,
    golesContra: 0,
    diferencia: 0
}

const dinamarca = {
    pais: "Dinamarca",
    puntos: 0,
    golesFavor: 0,
    golesContra: 0,
    diferencia: 0
}

const tunez = {
    pais: "Tunez",
    puntos: 0,
    golesFavor: 0,
    golesContra: 0,
    diferencia: 0
}

const grupoD = [francia, peru, dinamarca, tunez]

let goles37 = document.getElementById("g37");
let goles38 = document.getElementById("g38");
let goles39 = document.getElementById("g39");
let goles40 = document.getElementById("g40");
let goles41 = document.getElementById("g41");
let goles42 = document.getElementById("g42");
let goles43 = document.getElementById("g43");
let goles44 = document.getElementById("g44");
let goles45 = document.getElementById("g45");
let goles46 = document.getElementById("g46");
let goles47 = document.getElementById("g47");
let goles48 = document.getElementById("g48");


let botonDeCargaD = document.getElementById("cargaDataD");
botonDeCargaD.addEventListener ("click", function () {
   
    for (let index = 0; index <4; index++) {
        grupoD[index].puntos = 0;
        grupoD[index].golesFavor = 0;
        grupoD[index].golesContra = 0;
        grupoD[index].diferencia = 0;
    }

    if (parseInt(goles37.value) >= 0) {
        francia.golesFavor = francia.golesFavor + parseInt(goles37.value);
        peru.golesContra = peru.golesContra + parseInt(goles37.value);
    }



    if (parseInt(goles38.value) >= 0 ) {
        peru.golesFavor = peru.golesFavor + parseInt(goles38.value);
        francia.golesContra = francia.golesContra + parseInt(goles38.value);
    }
    


    if (parseInt(goles39.value) >= 0) {
        dinamarca.golesFavor = dinamarca.golesFavor + parseInt(goles39.value);
        tunez.golesContra = tunez.golesContra + parseInt(goles39.value)
    }     



    if (parseInt(goles40.value) >= 0 ) {
        tunez.golesFavor = tunez.golesFavor + parseInt(goles40.value);
        dinamarca.golesContra = dinamarca.golesContra + parseInt(goles40.value);
    }
    


    if (parseInt(goles41.value) >= 0) {
        francia.golesFavor = dinamarca.golesFavor + parseInt(goles41.value);
        dinamarca.golesContra = dinamarca.golesContra + parseInt(goles41.value)
    }     

    
    if (parseInt(goles42.value) >= 0 ) {
        dinamarca.golesFavor = dinamarca.golesFavor + parseInt(goles42.value);
        francia.golesContra = francia.golesContra + parseInt(goles42.value);
    }


    if (parseInt(goles43.value) >= 0) {
        peru.golesFavor = peru.golesFavor + parseInt(goles43.value);
        tunez.golesContra = tunez.golesContra + parseInt(goles43.value)
    }     


    
    if (parseInt(goles44.value) >= 0 ) {
        tunez.golesFavor = tunez.golesFavor + parseInt(goles44.value);
        peru.golesContra = peru.golesContra + parseInt(goles44.value);
    }   



    if (parseInt(goles45.value) >= 0) {
        francia.golesFavor = francia.golesFavor + parseInt(goles45.value);
        tunez.golesContra = tunez.golesContra + parseInt(goles45.value)
    }     
    
    

    if (parseInt(goles46.value) >= 0 ) {
        tunez.golesFavor = tunez.golesFavor + parseInt(goles46.value);
        francia.golesContra = francia.golesContra + parseInt(goles46.value);
    }
    
    
    if (parseInt(goles47.value) >= 0) {
            peru.golesFavor = peru.golesFavor + parseInt(goles47.value);
            dinamarca.golesContra = dinamarca.golesContra + parseInt(goles47.value)
    }       
    
    if (parseInt(goles48.value) >= 0 ) {
            dinamarca.golesFavor = dinamarca.golesFavor + parseInt(goles48.value);
            peru.golesContra = peru.golesContra + parseInt(goles48.value);
    }   
   
    if (parseInt(goles37.value) > parseInt(goles38.value)) {
                
         francia.puntos = francia.puntos + 3
         peru.puntos = peru.puntos + 0
    } else if (parseInt(goles37.value) == parseInt(goles38.value)) {
        francia.puntos = francia.puntos + 1
         peru.puntos = peru.puntos + 1
    } else {
        francia.puntos = francia.puntos + 0
         peru.puntos = peru.puntos + 3
    }

       
    if (parseInt(goles39.value) > parseInt(goles40.value)) {            
    dinamarca.puntos = dinamarca.puntos + 3
    tunez.puntos = tunez.puntos + 0        
} else if (parseInt(goles39.value) == parseInt(goles40.value)) {
    dinamarca.puntos = dinamarca.puntos + 1
    tunez.puntos = tunez.puntos + 1
} else {
    dinamarca.puntos = dinamarca.puntos + 0
    tunez.puntos = tunez.puntos + 3
}

if (parseInt(goles41.value) > parseInt(goles42.value)) {
    francia.puntos = francia.puntos + 3
    dinamarca.puntos = dinamarca.puntos + 0
} else if (parseInt(goles41.value) == parseInt(goles42.value)) {
    francia.puntos = francia.puntos + 1
    dinamarca.puntos = dinamarca.puntos + 1
} else {
    francia.puntos = francia.puntos + 0
    dinamarca.puntos = dinamarca.puntos + 3
}
                                   
if (parseInt(goles43.value) > parseInt(goles44.value)) {
            peru.puntos = peru.puntos + 3
            tunez.puntos = tunez.puntos + 0
} else if (parseInt(goles43.value) == parseInt(goles44.value)) {
    peru.puntos = peru.puntos + 1
            tunez.puntos = tunez.puntos + 1
} else {
    peru.puntos = peru.puntos + 0
            tunez.puntos = tunez.puntos + 3
}
                        
if (parseInt(goles45.value) > parseInt(goles46.value)) {
        francia.puntos = francia.puntos + 3
        tunez.puntos = tunez.puntos + 0
} else if (parseInt(goles45.value) == parseInt(goles46.value)) {
    francia.puntos = francia.puntos + 1
        tunez.puntos = tunez.puntos + 1
} else {
    francia.puntos = francia.puntos + 0
        tunez.puntos = tunez.puntos + 3
}
                    
if (parseInt(goles47.value) > parseInt(goles48.value)) {
    peru.puntos = peru.puntos + 3
    dinamarca.puntos = dinamarca.puntos + 0
} else if (parseInt(goles47.value) == parseInt(goles48.value)) {
    peru.puntos = peru.puntos + 1
    dinamarca.puntos = dinamarca.puntos + 1
} else {
    peru.puntos = peru.puntos + 0
    dinamarca.puntos = dinamarca.puntos + 3
}


    francia.diferencia = francia.golesFavor - francia.golesContra
    peru.diferencia = peru.golesFavor - peru.golesContra
    dinamarca.diferencia = dinamarca.golesFavor - dinamarca.golesContra
    tunez.diferencia = tunez.golesFavor - tunez.golesContra



    grupoD.sort(
        function(a,b) {
            if (b.puntos == a.puntos) {
                return b.diferencia - a.diferencia;
            }
            return b.puntos > a.puntos ? 1 : -1;
    })

    let clasificado1D = document.getElementById("clasi1D")
    clasificado1D.innerText = grupoD[0].pais;
    let clasificado2D = document.getElementById("clasi2D")
    clasificado2D.innerText = grupoD[1].pais;
    let terceroD = document.getElementById("terD")
    terceroD.innerText = grupoD[2].pais;
    let cuartoD = document.getElementById("cuarD")
    cuartoD.innerText = grupoD[3].pais;
    let puntos1D = document.getElementById("pts1D")
    puntos1D.innerText = grupoD[0].puntos;
    let puntos2D = document.getElementById("pts2D")
    puntos2D.innerText = grupoD[1].puntos;
    let puntos3D = document.getElementById("pts3D")
    puntos3D.innerText = grupoD[2].puntos;
    let puntos4D = document.getElementById("pts4D")
    puntos4D.innerText = grupoD[3].puntos;
    let favor1D = document.getElementById("gf1D")
    favor1D.innerText = grupoD[0].golesFavor;
    let favor2D = document.getElementById("gf2D")
    favor2D.innerText = grupoD[1].golesFavor;
    let favor3D = document.getElementById("gf3D")
    favor3D.innerText = grupoD[2].golesFavor;
    let favor4D = document.getElementById("gf4D")
    favor4D.innerText = grupoD[3].golesFavor;
    let contra1D = document.getElementById("gc1D")
    contra1D.innerText = grupoD[0].golesContra;
    let contra2D = document.getElementById("gc2D")
    contra2D.innerText = grupoD[1].golesContra;
    let contra3D = document.getElementById("gc3D")
    contra3D.innerText = grupoD[2].golesContra;
    let contra4D = document.getElementById("gc4D")
    contra4D.innerText = grupoD[3].golesContra;
    let difGol1D = document.getElementById("df1D")
    difGol1D.innerText = grupoD[0].diferencia;
    let difGol2D = document.getElementById("df2D")
    difGol2D.innerText = grupoD[1].diferencia;
    let difGol3D = document.getElementById("df3D")
    difGol3D.innerText = grupoD[2].diferencia;
    let difGol4D = document.getElementById("df4D")
    difGol4D.innerText = grupoD[3].diferencia;


let vGol37 = parseInt(goles37.value);
let vGol38 = parseInt(goles38.value);
let vGol39 = parseInt(goles39.value);
let vGol40 = parseInt(goles40.value);
let vGol41 = parseInt(goles41.value);
let vGol42 = parseInt(goles42.value);
let vGol43 = parseInt(goles43.value);
let vGol44 = parseInt(goles44.value);
let vGol45 = parseInt(goles45.value);
let vGol46 = parseInt(goles46.value);
let vGol47 = parseInt(goles47.value);
let vGol48 = parseInt(goles48.value);

const golesD = { vGol37, vGol38, vGol39, vGol40, vGol41, vGol42, vGol43, vGol44, vGol45, vGol46, vGol47, vGol48 }

const guardaGolesD = JSON.stringify(golesD)
localStorage.setItem("golesGrupoD", guardaGolesD);

const grupoDterminado = JSON.stringify(grupoD)
localStorage.setItem("grupoDresultados", grupoDterminado);

Toastify({

    text: "Cargaste a los partidos del GRUPO D con exito",
    
    duration: 3000
    
    }).showToast();

})


localStorage.hasOwnProperty("golesGrupoD") === true && deployGolesD();
localStorage.hasOwnProperty("golesGrupoD") === true && deployArrayD();

function deployGolesD() {
    const golesRecuperadosD = JSON.parse(localStorage.getItem("golesGrupoD"))

    goles37.value = golesRecuperadosD.vGol37;
    goles38.value = golesRecuperadosD.vGol38;
    goles39.value = golesRecuperadosD.vGol39;
    goles40.value = golesRecuperadosD.vGol40;
    goles41.value = golesRecuperadosD.vGol41;
    goles42.value = golesRecuperadosD.vGol42;
    goles43.value = golesRecuperadosD.vGol43;
    goles44.value = golesRecuperadosD.vGol44;
    goles45.value = golesRecuperadosD.vGol45;
    goles46.value = golesRecuperadosD.vGol46;
    goles47.value = golesRecuperadosD.vGol47;
    goles48.value = golesRecuperadosD.vGol48;

    
}

function deployArrayD() {
    const grupoDrecuperado = JSON.parse(localStorage.getItem("grupoDresultados"))

    let clasificado1D = document.getElementById("clasi1D")
    clasificado1D.innerText = grupoDrecuperado[0].pais;
    let clasificado2D = document.getElementById("clasi2D")
    clasificado2D.innerText = grupoDrecuperado[1].pais;
    let terceroD = document.getElementById("terD")
    terceroD.innerText = grupoDrecuperado[2].pais;
    let cuartoD = document.getElementById("cuarD")
    cuartoD.innerText = grupoDrecuperado[3].pais;
    let puntos1D = document.getElementById("pts1D")
    puntos1D.innerText = grupoDrecuperado[0].puntos;
    let puntos2D = document.getElementById("pts2D")
    puntos2D.innerText = grupoDrecuperado[1].puntos;
    let puntos3D = document.getElementById("pts3D")
    puntos3D.innerText = grupoDrecuperado[2].puntos;
    let puntos4D = document.getElementById("pts4D")
    puntos4D.innerText = grupoDrecuperado[3].puntos;
    let favor1D = document.getElementById("gf1D")
    favor1D.innerText = grupoDrecuperado[0].golesFavor;
    let favor2D = document.getElementById("gf2D")
    favor2D.innerText = grupoDrecuperado[1].golesFavor;
    let favor3D = document.getElementById("gf3D")
    favor3D.innerText = grupoDrecuperado[2].golesFavor;
    let favor4D = document.getElementById("gf4D")
    favor4D.innerText = grupoDrecuperado[3].golesFavor;
    let contra1D = document.getElementById("gc1D")
    contra1D.innerText = grupoDrecuperado[0].golesContra;
    let contra2D = document.getElementById("gc2D")
    contra2D.innerText = grupoDrecuperado[1].golesContra;
    let contra3D = document.getElementById("gc3D")
    contra3D.innerText = grupoDrecuperado[2].golesContra;
    let contra4D = document.getElementById("gc4D")
    contra4D.innerText = grupoDrecuperado[3].golesContra;
    let difGol1D = document.getElementById("df1D")
    difGol1D.innerText = grupoDrecuperado[0].diferencia;
    let difGol2D = document.getElementById("df2D")
    difGol2D.innerText = grupoDrecuperado[1].diferencia;
    let difGol3D = document.getElementById("df3D")
    difGol3D.innerText = grupoDrecuperado[2].diferencia;
    let difGol4D = document.getElementById("df4D")
    difGol4D.innerText = grupoDrecuperado[3].diferencia;
}

document.getElementById(`borrarDataD`).addEventListener(`click`, () =>  {
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
                            grupoD[index].puntos = 0;
                            grupoD[index].golesFavor = 0;
                            grupoD[index].golesContra = 0;
                            grupoD[index].diferencia = 0;
                        }
                        let clasificado1D = document.getElementById("clasi1D")
                        clasificado1D.innerText = grupoD[0].pais;
                        let clasificado2D = document.getElementById("clasi2D")
                        clasificado2D.innerText = grupoD[1].pais;
                        let terceroD = document.getElementById("terD")
                        terceroD.innerText = grupoD[2].pais;
                        let cuartoD = document.getElementById("cuarD")
                        cuartoD.innerText = grupoD[3].pais;
                        let puntos1D = document.getElementById("pts1D")
                        puntos1D.innerText = grupoD[0].puntos;
                        let puntos2D = document.getElementById("pts2D")
                        puntos2D.innerText = grupoD[1].puntos;
                        let puntos3D = document.getElementById("pts3D")
                        puntos3D.innerText = grupoD[2].puntos;
                        let puntos4D = document.getElementById("pts4D")
                        puntos4D.innerText = grupoD[3].puntos;
                        let favor1D = document.getElementById("gf1D")
                        favor1D.innerText = grupoD[0].golesFavor;
                        let favor2D = document.getElementById("gf2D")
                        favor2D.innerText = grupoD[1].golesFavor;
                        let favor3D = document.getElementById("gf3D")
                        favor3D.innerText = grupoD[2].golesFavor;
                        let favor4D = document.getElementById("gf4D")
                        favor4D.innerText = grupoD[3].golesFavor;
                        let contra1D = document.getElementById("gc1D")
                        contra1D.innerText = grupoD[0].golesContra;
                        let contra2D = document.getElementById("gc2D")
                        contra2D.innerText = grupoD[1].golesContra;
                        let contra3D = document.getElementById("gc3D")
                        contra3D.innerText = grupoD[2].golesContra;
                        let contra4D = document.getElementById("gc4D")
                        contra4D.innerText = grupoD[3].golesContra;
                        let difGol1D = document.getElementById("df1D")
                        difGol1D.innerText = grupoD[0].diferencia;
                        let difGol2D = document.getElementById("df2D")
                        difGol2D.innerText = grupoD[1].diferencia;
                        let difGol3D = document.getElementById("df3D")
                        difGol3D.innerText = grupoD[2].diferencia;
                        let difGol4D = document.getElementById("df4D")
                        difGol4D.innerText = grupoD[3].diferencia;

                        goles37.value = 0;
                        goles38.value = 0;
                        goles39.value = 0;
                        goles40.value = 0;
                        goles41.value = 0;
                        goles42.value = 0;
                        goles43.value = 0;
                        goles44.value = 0;
                        goles45.value = 0;
                        goles46.value = 0;
                        goles47.value = 0;
                        goles48.value = 0;
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

export { grupoD }