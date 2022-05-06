const portugal = {
    id: 29,
    pais: "Portugal",
    puntos: 0,
    golesFavor: 0,
    golesContra: 0,
    diferencia: 0
}

const ghana = {
    id: 30,
    pais: "Ghana",
    puntos: 0,
    golesFavor: 0,
    golesContra: 0,
    diferencia: 0
}

const uruguay = {
    id: 31,
    pais: "Uruguay",
    puntos: 0,
    golesFavor: 0,
    golesContra: 0,
    diferencia: 0
}

const corea = {
    id: 32,
    pais: "Corea del Sur",
    puntos: 0,
    golesFavor: 0,
    golesContra: 0,
    diferencia: 0
}

const grupoH = [portugal, ghana, uruguay, corea]

let goles85 = document.getElementById("g85");
let goles86 = document.getElementById("g86");
let goles87 = document.getElementById("g87");
let goles88 = document.getElementById("g88");
let goles89 = document.getElementById("g89");
let goles90 = document.getElementById("g90");
let goles91 = document.getElementById("g91");
let goles92 = document.getElementById("g92");
let goles93 = document.getElementById("g93");
let goles94 = document.getElementById("g94");
let goles95 = document.getElementById("g95");
let goles96 = document.getElementById("g96");


let botonDeCargaH = document.getElementById("cargaDataH");
botonDeCargaH.addEventListener ("click", function () {
   
    for (let index = 0; index <4; index++) {
        grupoH[index].puntos = 0;
        grupoH[index].golesFavor = 0;
        grupoH[index].golesContra = 0;
        grupoH[index].diferencia = 0;
    }

        portugal.golesFavor = portugal.golesFavor + parseInt(goles85.value) + parseInt(goles89.value) + parseInt(goles93.value);
        portugal.golesContra = portugal.golesContra + parseInt(goles86.value) + parseInt(goles90.value) + parseInt(goles94.value);

        ghana.golesFavor = ghana.golesFavor + parseInt(goles86.value) + parseInt(goles91.value) + parseInt(goles95.value);
        ghana.golesContra = ghana.golesContra + parseInt(goles85.value) + parseInt(goles92.value) + parseInt(goles96.value);

        uruguay.golesFavor = uruguay.golesFavor + parseInt(goles87.value) + parseInt(goles90.value) + parseInt(goles96.value);
        uruguay.golesContra = uruguay.golesContra + parseInt(goles88.value) + parseInt(goles89.value) + parseInt(goles95.value);
    
        corea.golesFavor = corea.golesFavor + parseInt(goles88.value) + parseInt(goles92.value) + parseInt(goles94.value);
        corea.golesContra = corea.golesContra + parseInt(goles87.value) + parseInt(goles91.value) + parseInt(goles93.value);
   
    if (parseInt(goles85.value) > parseInt(goles86.value)) {           
         portugal.puntos = portugal.puntos + 3
         ghana.puntos = ghana.puntos + 0
    } else if (parseInt(goles85.value) == parseInt(goles85.value)) {
        portugal.puntos = portugal.puntos + 1
         ghana.puntos = ghana.puntos + 1
    } else {
        portugal.puntos = portugal.puntos + 0
         ghana.puntos = ghana.puntos + 3
    }

       
    if (parseInt(goles87.value) > parseInt(goles88.value)) {            
    uruguay.puntos = uruguay.puntos + 3
    corea.puntos = corea.puntos + 0        
} else if (parseInt(goles87.value) == parseInt(goles88.value)) {
    uruguay.puntos = uruguay.puntos + 1
    corea.puntos = corea.puntos + 1
} else {
    uruguay.puntos = uruguay.puntos + 0
    corea.puntos = corea.puntos + 3
}

if (parseInt(goles89.value) > parseInt(goles90.value)) {
    portugal.puntos = portugal.puntos + 3
    uruguay.puntos = uruguay.puntos + 0
} else if (parseInt(goles89.value) == parseInt(goles90.value)) {
    portugal.puntos = portugal.puntos + 1
    uruguay.puntos = uruguay.puntos + 1
} else {
    portugal.puntos = portugal.puntos + 0
    uruguay.puntos = uruguay.puntos + 3
}
                                   
if (parseInt(goles91.value) > parseInt(goles92.value)) {
    ghana.puntos = ghana.puntos + 3
    corea.puntos = corea.puntos + 0
} else if (parseInt(goles91.value) == parseInt(goles92.value)) {
    ghana.puntos = ghana.puntos + 1
    corea.puntos = corea.puntos + 1
} else {
    ghana.puntos = ghana.puntos + 0
    corea.puntos = corea.puntos + 3
}    
                        
if (parseInt(goles93.value) > parseInt(goles94.value)) {
        portugal.puntos = portugal.puntos + 3
        corea.puntos = corea.puntos + 0
} else if (parseInt(goles93.value) == parseInt(goles94.value)) {
    portugal.puntos = portugal.puntos + 1
        corea.puntos = corea.puntos + 1
} else {
    portugal.puntos = portugal.puntos + 0
        corea.puntos = corea.puntos + 3
}
                    
if (parseInt(goles95.value) > parseInt(goles96.value)) {
    ghana.puntos = ghana.puntos + 3
    uruguay.puntos = uruguay.puntos + 0
} else if (parseInt(goles95.value) == parseInt(goles96.value)) {
    ghana.puntos = ghana.puntos + 1
    uruguay.puntos = uruguay.puntos + 1
} else {
    ghana.puntos = ghana.puntos + 0
    uruguay.puntos = uruguay.puntos + 3
}

    for (let index = 0; index <4; index++) {
        grupoH[index].diferencia = grupoH[index].golesFavor - grupoH[index].golesContra;  
    }

    

    grupoH.sort(
        function(a,b) {
            if (b.puntos == a.puntos) {
                return b.diferencia - a.diferencia;
            }
            return b.puntos > a.puntos ? 1 : -1;
    })

    let clasificado1H = document.getElementById("clasi1H")
    clasificado1H.innerText = grupoH[0].pais;
    let clasificado2H = document.getElementById("clasi2H")
    clasificado2H.innerText = grupoH[1].pais;
    let terceroH = document.getElementById("terH")
    terceroH.innerText = grupoH[2].pais;
    let cuartoH = document.getElementById("cuarH")
    cuartoH.innerText = grupoH[3].pais;
    let puntos1H = document.getElementById("pts1H")
    puntos1H.innerText = grupoH[0].puntos;
    let puntos2H = document.getElementById("pts2H")
    puntos2H.innerText = grupoH[1].puntos;
    let puntos3H = document.getElementById("pts3H")
    puntos3H.innerText = grupoH[2].puntos;
    let puntos4H = document.getElementById("pts4H")
    puntos4H.innerText = grupoH[3].puntos;
    let favor1H = document.getElementById("gf1H")
    favor1H.innerText = grupoH[0].golesFavor;
    let favor2H = document.getElementById("gf2H")
    favor2H.innerText = grupoH[1].golesFavor;
    let favor3H = document.getElementById("gf3H")
    favor3H.innerText = grupoH[2].golesFavor;
    let favor4H = document.getElementById("gf4H")
    favor4H.innerText = grupoH[3].golesFavor;
    let contra1H = document.getElementById("gc1H")
    contra1H.innerText = grupoH[0].golesContra;
    let contra2H = document.getElementById("gc2H")
    contra2H.innerText = grupoH[1].golesContra;
    let contra3H = document.getElementById("gc3H")
    contra3H.innerText = grupoH[2].golesContra;
    let contra4H = document.getElementById("gc4H")
    contra4H.innerText = grupoH[3].golesContra;
    let difGol1H = document.getElementById("df1H")
    difGol1H.innerText = grupoH[0].diferencia;
    let difGol2H = document.getElementById("df2H")
    difGol2H.innerText = grupoH[1].diferencia;
    let difGol3H = document.getElementById("df3H")
    difGol3H.innerText = grupoH[2].diferencia;
    let difGol4H = document.getElementById("df4H")
    difGol4H.innerText = grupoH[3].diferencia;

    let img1h = document.getElementById("img1h");
    let img2h = document.getElementById("img2h");

    let nombre1h = document.getElementById("1h");
    let nombre2h = document.getElementById("2h");

    img1h.src = "../assets/img/escudos/"+grupoH[0].id+".png"
    img2h.src = "../assets/img/escudos/"+grupoH[1].id+".png"

    nombre1h.innerText = grupoHrecuperado[0].pais
    nombre2h.innerText = grupoHrecuperado[1].pais


let vGol85 = parseInt(goles85.value);
let vGol86 = parseInt(goles86.value);
let vGol87 = parseInt(goles87.value);
let vGol88 = parseInt(goles88.value);
let vGol89 = parseInt(goles89.value);
let vGol90 = parseInt(goles90.value);
let vGol91 = parseInt(goles91.value);
let vGol92 = parseInt(goles92.value);
let vGol93 = parseInt(goles93.value);
let vGol94 = parseInt(goles94.value);
let vGol95 = parseInt(goles95.value);
let vGol96 = parseInt(goles96.value);

const golesH = { vGol85, vGol86, vGol87, vGol88, vGol89, vGol90, vGol91, vGol92, vGol93, vGol94, vGol95, vGol96 }

const guardaGolesH = JSON.stringify(golesH)
localStorage.setItem("golesGrupoH", guardaGolesH);

const grupoHterminado = JSON.stringify(grupoH)
localStorage.setItem("grupoHresultados", grupoHterminado);

Toastify({

    text: "Cargaste a los partidos del GRUPO H con exito",
    
    duration: 3000
    
    }).showToast();

})


localStorage.hasOwnProperty("golesGrupoH") === true && deployGolesH();
localStorage.hasOwnProperty("golesGrupoH") === true && deployArrayH();

function deployGolesH() {
    const golesRecuperadosH = JSON.parse(localStorage.getItem("golesGrupoH"))

    goles85.value = golesRecuperadosH.vGol85;
    goles86.value = golesRecuperadosH.vGol86;
    goles87.value = golesRecuperadosH.vGol87;
    goles88.value = golesRecuperadosH.vGol88;
    goles89.value = golesRecuperadosH.vGol89;
    goles90.value = golesRecuperadosH.vGol90;
    goles91.value = golesRecuperadosH.vGol91;
    goles92.value = golesRecuperadosH.vGol92;
    goles93.value = golesRecuperadosH.vGol93;
    goles94.value = golesRecuperadosH.vGol94;
    goles95.value = golesRecuperadosH.vGol95;
    goles96.value = golesRecuperadosH.vGol96;

}

function deployArrayH() {
    const grupoHrecuperado = JSON.parse(localStorage.getItem("grupoHresultados"))

    let clasificado1H = document.getElementById("clasi1H")
    clasificado1H.innerText = grupoHrecuperado[0].pais;
    let clasificado2H = document.getElementById("clasi2H")
    clasificado2H.innerText = grupoHrecuperado[1].pais;
    let terceroH = document.getElementById("terH")
    terceroH.innerText = grupoHrecuperado[2].pais;
    let cuartoH = document.getElementById("cuarH")
    cuartoH.innerText = grupoHrecuperado[3].pais;
    let puntos1H = document.getElementById("pts1H")
    puntos1H.innerText = grupoHrecuperado[0].puntos;
    let puntos2H = document.getElementById("pts2H")
    puntos2H.innerText = grupoHrecuperado[1].puntos;
    let puntos3H = document.getElementById("pts3H")
    puntos3H.innerText = grupoHrecuperado[2].puntos;
    let puntos4H = document.getElementById("pts4H")
    puntos4H.innerText = grupoHrecuperado[3].puntos;
    let favor1H = document.getElementById("gf1H")
    favor1H.innerText = grupoHrecuperado[0].golesFavor;
    let favor2H = document.getElementById("gf2H")
    favor2H.innerText = grupoHrecuperado[1].golesFavor;
    let favor3H = document.getElementById("gf3H")
    favor3H.innerText = grupoHrecuperado[2].golesFavor;
    let favor4H = document.getElementById("gf4H")
    favor4H.innerText = grupoHrecuperado[3].golesFavor;
    let contra1H = document.getElementById("gc1H")
    contra1H.innerText = grupoHrecuperado[0].golesContra;
    let contra2H = document.getElementById("gc2H")
    contra2H.innerText = grupoHrecuperado[1].golesContra;
    let contra3H = document.getElementById("gc3H")
    contra3H.innerText = grupoHrecuperado[2].golesContra;
    let contra4H = document.getElementById("gc4H")
    contra4H.innerText = grupoHrecuperado[3].golesContra;
    let difGol1H = document.getElementById("df1H")
    difGol1H.innerText = grupoHrecuperado[0].diferencia;
    let difGol2H = document.getElementById("df2H")
    difGol2H.innerText = grupoHrecuperado[1].diferencia;
    let difGol3H = document.getElementById("df3H")
    difGol3H.innerText = grupoHrecuperado[2].diferencia;
    let difGol4H = document.getElementById("df4H")
    difGol4H.innerText = grupoHrecuperado[3].diferencia;
}

document.getElementById(`borrarDataH`).addEventListener(`click`, () =>  {
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
                            grupoH[index].puntos = 0;
                            grupoH[index].golesFavor = 0;
                            grupoH[index].golesContra = 0;
                            grupoH[index].diferencia = 0;
                        }
                        let clasificado1H = document.getElementById("clasi1H")
    clasificado1H.innerText = grupoH[0].pais;
    let clasificado2H = document.getElementById("clasi2H")
    clasificado2H.innerText = grupoH[1].pais;
    let terceroH = document.getElementById("terH")
    terceroH.innerText = grupoH[2].pais;
    let cuartoH = document.getElementById("cuarH")
    cuartoH.innerText = grupoH[3].pais;
    let puntos1H = document.getElementById("pts1H")
    puntos1H.innerText = grupoH[0].puntos;
    let puntos2H = document.getElementById("pts2H")
    puntos2H.innerText = grupoH[1].puntos;
    let puntos3H = document.getElementById("pts3H")
    puntos3H.innerText = grupoH[2].puntos;
    let puntos4H = document.getElementById("pts4H")
    puntos4H.innerText = grupoH[3].puntos;
    let favor1H = document.getElementById("gf1H")
    favor1H.innerText = grupoH[0].golesFavor;
    let favor2H = document.getElementById("gf2H")
    favor2H.innerText = grupoH[1].golesFavor;
    let favor3H = document.getElementById("gf3H")
    favor3H.innerText = grupoH[2].golesFavor;
    let favor4H = document.getElementById("gf4H")
    favor4H.innerText = grupoH[3].golesFavor;
    let contra1H = document.getElementById("gc1H")
    contra1H.innerText = grupoH[0].golesContra;
    let contra2H = document.getElementById("gc2H")
    contra2H.innerText = grupoH[1].golesContra;
    let contra3H = document.getElementById("gc3H")
    contra3H.innerText = grupoH[2].golesContra;
    let contra4H = document.getElementById("gc4H")
    contra4H.innerText = grupoH[3].golesContra;
    let difGol1H = document.getElementById("df1H")
    difGol1H.innerText = grupoH[0].diferencia;
    let difGol2H = document.getElementById("df2H")
    difGol2H.innerText = grupoH[1].diferencia;
    let difGol3H = document.getElementById("df3H")
    difGol3H.innerText = grupoH[2].diferencia;
    let difGol4H = document.getElementById("df4H")
    difGol4H.innerText = grupoH[3].diferencia;

                        goles85.value = 0;
                        goles86.value = 0;
                        goles87.value = 0;
                        goles88.value = 0;
                        goles89.value = 0;
                        goles90.value = 0;
                        goles91.value = 0;
                        goles92.value = 0;
                        goles93.value = 0;
                        goles94.value = 0;
                        goles95.value = 0;
                        goles96.value = 0;
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

const grupoHrecuperado = JSON.parse(localStorage.getItem("grupoHresultados"))

export { grupoHrecuperado }