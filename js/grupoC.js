const argentina = {
    id: 9,
    pais: "Argentina",
    puntos: 0,
    golesFavor: 0,
    golesContra: 0,
    diferencia: 0
}

const arabia = {
    id: 10,
    pais: "Arabia Saudita",
    puntos: 0,
    golesFavor: 0,
    golesContra: 0,
    diferencia: 0
}

const mexico = {
    id: 11,
    pais: "Mexico",
    puntos: 0,
    golesFavor: 0,
    golesContra: 0,
    diferencia: 0
}

const polonia = {
    id: 12,
    pais: "Polonia",
    puntos: 0,
    golesFavor: 0,
    golesContra: 0,
    diferencia: 0
}

const grupoC = [argentina, arabia, mexico, polonia]

let goles25 = document.getElementById("g25");
let goles26 = document.getElementById("g26");
let goles27 = document.getElementById("g27");
let goles28 = document.getElementById("g28");
let goles29 = document.getElementById("g29");
let goles30 = document.getElementById("g30");
let goles31 = document.getElementById("g31");
let goles32 = document.getElementById("g32");
let goles33 = document.getElementById("g33");
let goles34 = document.getElementById("g34");
let goles35 = document.getElementById("g35");
let goles36 = document.getElementById("g36");


let botonDeCargaC = document.getElementById("cargaDataC");
botonDeCargaC.addEventListener ("click", function () {
   
    for (let index = 0; index <4; index++) {
        grupoC[index].puntos = 0;
        grupoC[index].golesFavor = 0;
        grupoC[index].golesContra = 0;
        grupoC[index].diferencia = 0;
    }

    argentina.golesFavor = argentina.golesFavor + parseInt(goles25.value) + parseInt(goles29.value) + parseInt(goles33.value);
    argentina.golesContra = argentina.golesContra + parseInt(goles26.value) + parseInt(goles30.value) + parseInt(goles34.value);

    arabia.golesFavor = arabia.golesFavor + parseInt(goles26.value) + parseInt(goles31.value) + parseInt(goles35.value);
    arabia.golesContra = arabia.golesContra + parseInt(goles25.value) + parseInt(goles32.value) + parseInt(goles36.value);

    mexico.golesFavor = mexico.golesFavor + parseInt(goles27.value) + parseInt(goles30.value) + parseInt(goles36.value);
    mexico.golesContra = mexico.golesContra + parseInt(goles28.value) + parseInt(goles29.value) + parseInt(goles35.value);
    
    polonia.golesFavor = polonia.golesFavor + parseInt(goles28.value) + parseInt(goles32.value) + parseInt(goles34.value);
    polonia.golesContra = polonia.golesContra + parseInt(goles27.value) + parseInt(goles31.value) + parseInt(goles33.value);
   
    if (parseInt(goles25.value) > parseInt(goles26.value)) {
                
         argentina.puntos = argentina.puntos + 3
         arabia.puntos = arabia.puntos + 0
    } else if (parseInt(goles25.value) == parseInt(goles26.value)) {
        argentina.puntos = argentina.puntos + 1
         arabia.puntos = arabia.puntos + 1
    } else {
        argentina.puntos = argentina.puntos + 0
         arabia.puntos = arabia.puntos + 3
    }

       
    if (parseInt(goles27.value) > parseInt(goles28.value)) {            
    mexico.puntos = mexico.puntos + 3
    polonia.puntos = polonia.puntos + 0        
} else if (parseInt(goles27.value) == parseInt(goles28.value)) {
    mexico.puntos = mexico.puntos + 1
    polonia.puntos = polonia.puntos + 1 
} else {
    mexico.puntos = mexico.puntos + 0
    polonia.puntos = polonia.puntos + 3 
}

if (parseInt(goles29.value) > parseInt(goles30.value)) {
    argentina.puntos = argentina.puntos + 3
    mexico.puntos = mexico.puntos + 0
} else if (parseInt(goles29.value) == parseInt(goles30.value)) {
    argentina.puntos = argentina.puntos + 1
    mexico.puntos = mexico.puntos + 1
} else {
    argentina.puntos = argentina.puntos + 0
    mexico.puntos = mexico.puntos + 3
}
                                   
if (parseInt(goles31.value) > parseInt(goles32.value)) {
            arabia.puntos = arabia.puntos + 3
            polonia.puntos = polonia.puntos + 0
} else if (parseInt(goles31.value) == parseInt(goles32.value)) {
    arabia.puntos = arabia.puntos + 1
            polonia.puntos = polonia.puntos + 1
} else {
    arabia.puntos = arabia.puntos + 0
            polonia.puntos = polonia.puntos + 3
}
                        
if (parseInt(goles33.value) > parseInt(goles34.value)) {
        argentina.puntos = argentina.puntos + 3
        polonia.puntos = polonia.puntos + 0
} else if (parseInt(goles33.value) == parseInt(goles34.value)) {
    argentina.puntos = argentina.puntos + 1
        polonia.puntos = polonia.puntos + 1
} else {
    argentina.puntos = argentina.puntos + 0
        polonia.puntos = polonia.puntos + 3
}
                    
if (parseInt(goles35.value) > parseInt(goles36.value)) {
    arabia.puntos = arabia.puntos + 3
    mexico.puntos = mexico.puntos + 0
} else if (parseInt(goles35.value) == parseInt(goles36.value)) {
    arabia.puntos = arabia.puntos + 1
    mexico.puntos = mexico.puntos + 1
} else {
    arabia.puntos = arabia.puntos + 0   
    mexico.puntos = mexico.puntos + 3
}


for (let index = 0; index <4; index++) {
    grupoC[index].diferencia = grupoC[index].golesFavor - grupoC[index].golesContra;  
}



    grupoC.sort(
        function(a,b) {
            if (b.puntos == a.puntos) {
                return b.diferencia - a.diferencia;
            }
            return b.puntos > a.puntos ? 1 : -1;
    })

    let clasificado1C = document.getElementById("clasi1C")
    clasificado1C.innerText = grupoC[0].pais;
    let clasificado2C = document.getElementById("clasi2C")
    clasificado2C.innerText = grupoC[1].pais;
    let terceroC = document.getElementById("terC")
    terceroC.innerText = grupoC[2].pais;
    let cuartoC = document.getElementById("cuarC")
    cuartoC.innerText = grupoC[3].pais;
    let puntos1C = document.getElementById("pts1C")
    puntos1C.innerText = grupoC[0].puntos;
    let puntos2C = document.getElementById("pts2C")
    puntos2C.innerText = grupoC[1].puntos;
    let puntos3C = document.getElementById("pts3C")
    puntos3C.innerText = grupoC[2].puntos;
    let puntos4C = document.getElementById("pts4C")
    puntos4C.innerText = grupoC[3].puntos;
    let favor1C = document.getElementById("gf1C")
    favor1C.innerText = grupoC[0].golesFavor;
    let favor2C = document.getElementById("gf2C")
    favor2C.innerText = grupoC[1].golesFavor;
    let favor3C = document.getElementById("gf3C")
    favor3C.innerText = grupoC[2].golesFavor;
    let favor4C = document.getElementById("gf4C")
    favor4C.innerText = grupoC[3].golesFavor;
    let contra1C = document.getElementById("gc1C")
    contra1C.innerText = grupoC[0].golesContra;
    let contra2C = document.getElementById("gc2C")
    contra2C.innerText = grupoC[1].golesContra;
    let contra3C = document.getElementById("gc3C")
    contra3C.innerText = grupoC[2].golesContra;
    let contra4C = document.getElementById("gc4C")
    contra4C.innerText = grupoC[3].golesContra;
    let difGol1C = document.getElementById("df1C")
    difGol1C.innerText = grupoC[0].diferencia;
    let difGol2C = document.getElementById("df2C")
    difGol2C.innerText = grupoC[1].diferencia;
    let difGol3C = document.getElementById("df3C")
    difGol3C.innerText = grupoC[2].diferencia;
    let difGol4C = document.getElementById("df4C")
    difGol4C.innerText = grupoC[3].diferencia;


let vGol25 = parseInt(goles25.value);
let vGol26 = parseInt(goles26.value);
let vGol27 = parseInt(goles27.value);
let vGol28 = parseInt(goles28.value);
let vGol29 = parseInt(goles29.value);
let vGol30 = parseInt(goles30.value);
let vGol31 = parseInt(goles31.value);
let vGol32 = parseInt(goles32.value);
let vGol33 = parseInt(goles33.value);
let vGol34 = parseInt(goles34.value);
let vGol35 = parseInt(goles35.value);
let vGol36 = parseInt(goles36.value);

const golesC = { vGol25, vGol26, vGol27, vGol28, vGol29, vGol30, vGol31, vGol32, vGol33, vGol34, vGol35, vGol36 }

const guardaGolesC = JSON.stringify(golesC)
localStorage.setItem("golesGrupoC", guardaGolesC);

const grupoCterminado = JSON.stringify(grupoC)
localStorage.setItem("grupoCresultados", grupoCterminado);

Toastify({

    text: "Cargaste a los partidos del GRUPO C con exito",
    
    duration: 3000
    
    }).showToast();

})


localStorage.hasOwnProperty("golesGrupoC") === true && deployGolesC();
localStorage.hasOwnProperty("golesGrupoC") === true && deployArrayC();

function deployGolesC() {
    const golesRecuperadosC = JSON.parse(localStorage.getItem("golesGrupoC"))

    goles25.value = golesRecuperadosC.vGol25;
    goles26.value = golesRecuperadosC.vGol26;
    goles27.value = golesRecuperadosC.vGol27;
    goles28.value = golesRecuperadosC.vGol28;
    goles29.value = golesRecuperadosC.vGol29;
    goles30.value = golesRecuperadosC.vGol30;
    goles31.value = golesRecuperadosC.vGol31;
    goles32.value = golesRecuperadosC.vGol32;
    goles33.value = golesRecuperadosC.vGol33;
    goles34.value = golesRecuperadosC.vGol34;
    goles35.value = golesRecuperadosC.vGol35;
    goles36.value = golesRecuperadosC.vGol36;

    
}

function deployArrayC() {
    const grupoCrecuperado = JSON.parse(localStorage.getItem("grupoCresultados"))

    let clasificado1C = document.getElementById("clasi1C")
    clasificado1C.innerText = grupoCrecuperado[0].pais;
    let clasificado2C = document.getElementById("clasi2C")
    clasificado2C.innerText = grupoCrecuperado[1].pais;
    let terceroC = document.getElementById("terC")
    terceroC.innerText = grupoCrecuperado[2].pais;
    let cuartoC = document.getElementById("cuarC")
    cuartoC.innerText = grupoCrecuperado[3].pais;
    let puntos1C = document.getElementById("pts1C")
    puntos1C.innerText = grupoCrecuperado[0].puntos;
    let puntos2C = document.getElementById("pts2C")
    puntos2C.innerText = grupoCrecuperado[1].puntos;
    let puntos3C = document.getElementById("pts3C")
    puntos3C.innerText = grupoCrecuperado[2].puntos;
    let puntos4C = document.getElementById("pts4C")
    puntos4C.innerText = grupoCrecuperado[3].puntos;
    let favor1C = document.getElementById("gf1C")
    favor1C.innerText = grupoCrecuperado[0].golesFavor;
    let favor2C = document.getElementById("gf2C")
    favor2C.innerText = grupoCrecuperado[1].golesFavor;
    let favor3C = document.getElementById("gf3C")
    favor3C.innerText = grupoCrecuperado[2].golesFavor;
    let favor4C = document.getElementById("gf4C")
    favor4C.innerText = grupoCrecuperado[3].golesFavor;
    let contra1C = document.getElementById("gc1C")
    contra1C.innerText = grupoCrecuperado[0].golesContra;
    let contra2C = document.getElementById("gc2C")
    contra2C.innerText = grupoCrecuperado[1].golesContra;
    let contra3C = document.getElementById("gc3C")
    contra3C.innerText = grupoCrecuperado[2].golesContra;
    let contra4C = document.getElementById("gc4C")
    contra4C.innerText = grupoCrecuperado[3].golesContra;
    let difGol1C = document.getElementById("df1C")
    difGol1C.innerText = grupoCrecuperado[0].diferencia;
    let difGol2C = document.getElementById("df2C")
    difGol2C.innerText = grupoCrecuperado[1].diferencia;
    let difGol3C = document.getElementById("df3C")
    difGol3C.innerText = grupoCrecuperado[2].diferencia;
    let difGol4C = document.getElementById("df4C")
    difGol4C.innerText = grupoCrecuperado[3].diferencia;
}

document.getElementById(`borrarDataC`).addEventListener(`click`, () =>  {
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
                            grupoC[index].puntos = 0;
                            grupoC[index].golesFavor = 0;
                            grupoC[index].golesContra = 0;
                            grupoC[index].diferencia = 0;
                        }
                        let clasificado1C = document.getElementById("clasi1C")
                        clasificado1C.innerText = grupoC[0].pais;
                        let clasificado2C = document.getElementById("clasi2C")
                        clasificado2C.innerText = grupoC[1].pais;
                        let terceroC = document.getElementById("terC")
                        terceroC.innerText = grupoC[2].pais;
                        let cuartoC = document.getElementById("cuarC")
                        cuartoC.innerText = grupoC[3].pais;
                        let puntos1C = document.getElementById("pts1C")
                        puntos1C.innerText = grupoC[0].puntos;
                        let puntos2C = document.getElementById("pts2C")
                        puntos2C.innerText = grupoC[1].puntos;
                        let puntos3C = document.getElementById("pts3C")
                        puntos3C.innerText = grupoC[2].puntos;
                        let puntos4C = document.getElementById("pts4C")
                        puntos4C.innerText = grupoC[3].puntos;
                        let favor1C = document.getElementById("gf1C")
                        favor1C.innerText = grupoC[0].golesFavor;
                        let favor2C = document.getElementById("gf2C")
                        favor2C.innerText = grupoC[1].golesFavor;
                        let favor3C = document.getElementById("gf3C")
                        favor3C.innerText = grupoC[2].golesFavor;
                        let favor4C = document.getElementById("gf4C")
                        favor4C.innerText = grupoC[3].golesFavor;
                        let contra1C = document.getElementById("gc1C")
                        contra1C.innerText = grupoC[0].golesContra;
                        let contra2C = document.getElementById("gc2C")
                        contra2C.innerText = grupoC[1].golesContra;
                        let contra3C = document.getElementById("gc3C")
                        contra3C.innerText = grupoC[2].golesContra;
                        let contra4C = document.getElementById("gc4C")
                        contra4C.innerText = grupoC[3].golesContra;
                        let difGol1C = document.getElementById("df1C")
                        difGol1C.innerText = grupoC[0].diferencia;
                        let difGol2C = document.getElementById("df2C")
                        difGol2C.innerText = grupoC[1].diferencia;
                        let difGol3C = document.getElementById("df3C")
                        difGol3C.innerText = grupoC[2].diferencia;
                        let difGol4C = document.getElementById("df4C")
                        difGol4C.innerText = grupoC[3].diferencia;

                        goles25.value = 0;
                        goles26.value = 0;
                        goles27.value = 0;
                        goles28.value = 0;
                        goles29.value = 0;
                        goles30.value = 0;
                        goles31.value = 0;
                        goles32.value = 0;
                        goles33.value = 0;
                        goles34.value = 0;
                        goles35.value = 0;
                        goles36.value = 0;
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

const grupoCrecuperado = JSON.parse(localStorage.getItem("grupoCresultados"))

export { grupoCrecuperado }