const belgica = {
    id: 21,
    pais: "Belgica",
    puntos: 0,
    golesFavor: 0,
    golesContra: 0,
    diferencia: 0
}

const canada = {
    id: 22,
    pais: "Canada",
    puntos: 0,
    golesFavor: 0,
    golesContra: 0,
    diferencia: 0
}

const marruecos = {
    id: 23,
    pais: "Marruecos",
    puntos: 0,
    golesFavor: 0,
    golesContra: 0,
    diferencia: 0
}

const croacia = {
    id: 24,
    pais: "Croacia",
    puntos: 0,
    golesFavor: 0,
    golesContra: 0,
    diferencia: 0
}

const grupoF = [belgica, canada, marruecos, croacia]

let goles61 = document.getElementById("g61");
let goles62 = document.getElementById("g62");
let goles63 = document.getElementById("g63");
let goles64 = document.getElementById("g64");
let goles65 = document.getElementById("g65");
let goles66 = document.getElementById("g66");
let goles67 = document.getElementById("g67");
let goles68 = document.getElementById("g68");
let goles69 = document.getElementById("g69");
let goles70 = document.getElementById("g70");
let goles71 = document.getElementById("g71");
let goles72 = document.getElementById("g72");


let botonDeCargaF = document.getElementById("cargaDataF");
botonDeCargaF.addEventListener ("click", function () {
   
    for (let index = 0; index <4; index++) {
        grupoF[index].puntos = 0;
        grupoF[index].golesFavor = 0;
        grupoF[index].golesContra = 0;
        grupoF[index].diferencia = 0;
    }

        belgica.golesFavor = belgica.golesFavor + parseInt(goles61.value) + parseInt(goles65.value) + parseInt(goles69.value);
        belgica.golesContra = belgica.golesContra + parseInt(goles62.value) + parseInt(goles66.value) + parseInt(goles70.value);

        canada.golesFavor = canada.golesFavor + parseInt(goles62.value) + parseInt(goles67.value) + parseInt(goles71.value);
        canada.golesContra = canada.golesContra + parseInt(goles61.value) + parseInt(goles68.value) + parseInt(goles72.value);

        marruecos.golesFavor = marruecos.golesFavor + parseInt(goles63.value) + parseInt(goles66.value) + parseInt(goles72.value);
        marruecos.golesContra = marruecos.golesContra + parseInt(goles64.value) + parseInt(goles65.value) + parseInt(goles71.value);
    
        croacia.golesFavor = croacia.golesFavor + parseInt(goles64.value) + parseInt(goles68.value) + parseInt(goles70.value);
        croacia.golesContra = croacia.golesContra + parseInt(goles63.value) + parseInt(goles67.value) + parseInt(goles69.value);
   
    if (parseInt(goles61.value) > parseInt(goles62.value)) {           
         belgica.puntos = belgica.puntos + 3
         canada.puntos = canada.puntos + 0
    } else if (parseInt(goles61.value) == parseInt(goles62.value)) {
        belgica.puntos = belgica.puntos + 1
         canada.puntos = canada.puntos + 1
    } else {
        belgica.puntos = belgica.puntos + 0
         canada.puntos = canada.puntos + 3
    }

       
    if (parseInt(goles63.value) > parseInt(goles64.value)) {            
    marruecos.puntos = marruecos.puntos + 3
    croacia.puntos = croacia.puntos + 0        
} else if (parseInt(goles63.value) == parseInt(goles64.value)) {
    marruecos.puntos = marruecos.puntos + 1
    croacia.puntos = croacia.puntos + 1 
} else {
    marruecos.puntos = marruecos.puntos + 0
    croacia.puntos = croacia.puntos + 3
}

if (parseInt(goles65.value) > parseInt(goles66.value)) {
    belgica.puntos = belgica.puntos + 3
    marruecos.puntos = marruecos.puntos + 0
} else if (parseInt(goles65.value) == parseInt(goles66.value)) {
    belgica.puntos = belgica.puntos + 1
    marruecos.puntos = marruecos.puntos + 1
} else {
    belgica.puntos = belgica.puntos + 3
    marruecos.puntos = marruecos.puntos + 0
}
                                   
if (parseInt(goles67.value) > parseInt(goles68.value)) {
    canada.puntos = canada.puntos + 3
    croacia.puntos = croacia.puntos + 0
} else if (parseInt(goles67.value) == parseInt(goles68.value)) {
    canada.puntos = canada.puntos + 1
    croacia.puntos = croacia.puntos + 1
} else {
    canada.puntos = canada.puntos + 0
    croacia.puntos = croacia.puntos + 3
}
                        
if (parseInt(goles69.value) > parseInt(goles70.value)) {
        belgica.puntos = belgica.puntos + 3
        croacia.puntos = croacia.puntos + 0
} else if (parseInt(goles69.value) == parseInt(goles70.value)) {
    belgica.puntos = belgica.puntos + 1
        croacia.puntos = croacia.puntos + 1
} else {
    belgica.puntos = belgica.puntos + 0
        croacia.puntos = croacia.puntos + 3
}
                    
if (parseInt(goles71.value) > parseInt(goles72.value)) {
    canada.puntos = canada.puntos + 3
    marruecos.puntos = marruecos.puntos + 0
} else if (parseInt(goles71.value) == parseInt(goles72.value)) {
    canada.puntos = canada.puntos + 1
    marruecos.puntos = marruecos.puntos + 1
} else {
    canada.puntos = canada.puntos + 0
    marruecos.puntos = marruecos.puntos + 3
}


    belgica.diferencia = belgica.golesFavor - belgica.golesContra
    canada.diferencia = canada.golesFavor - canada.golesContra
    marruecos.diferencia = marruecos.golesFavor - marruecos.golesContra
    croacia.diferencia = croacia.golesFavor - croacia.golesContra



    grupoF.sort(
        function(a,b) {
            if (b.puntos == a.puntos) {
                return b.diferencia - a.diferencia;
            }
            return b.puntos > a.puntos ? 1 : -1;
    })

    let clasificado1F = document.getElementById("clasi1F")
    clasificado1F.innerText = grupoF[0].pais;
    let clasificado2F = document.getElementById("clasi2F")
    clasificado2F.innerText = grupoF[1].pais;
    let terceroF = document.getElementById("terF")
    terceroF.innerText = grupoF[2].pais;
    let cuartoF = document.getElementById("cuarF")
    cuartoF.innerText = grupoF[3].pais;
    let puntos1F = document.getElementById("pts1F")
    puntos1F.innerText = grupoF[0].puntos;
    let puntos2F = document.getElementById("pts2F")
    puntos2F.innerText = grupoF[1].puntos;
    let puntos3F = document.getElementById("pts3F")
    puntos3F.innerText = grupoF[2].puntos;
    let puntos4F = document.getElementById("pts4F")
    puntos4F.innerText = grupoF[3].puntos;
    let favor1F = document.getElementById("gf1F")
    favor1F.innerText = grupoF[0].golesFavor;
    let favor2F = document.getElementById("gf2F")
    favor2F.innerText = grupoF[1].golesFavor;
    let favor3F = document.getElementById("gf3F")
    favor3F.innerText = grupoF[2].golesFavor;
    let favor4F = document.getElementById("gf4F")
    favor4F.innerText = grupoF[3].golesFavor;
    let contra1F = document.getElementById("gc1F")
    contra1F.innerText = grupoF[0].golesContra;
    let contra2F = document.getElementById("gc2F")
    contra2F.innerText = grupoF[1].golesContra;
    let contra3F = document.getElementById("gc3F")
    contra3F.innerText = grupoF[2].golesContra;
    let contra4F = document.getElementById("gc4F")
    contra4F.innerText = grupoF[3].golesContra;
    let difGol1F = document.getElementById("df1F")
    difGol1F.innerText = grupoF[0].diferencia;
    let difGol2F = document.getElementById("df2F")
    difGol2F.innerText = grupoF[1].diferencia;
    let difGol3F = document.getElementById("df3F")
    difGol3F.innerText = grupoF[2].diferencia;
    let difGol4F = document.getElementById("df4F")
    difGol4F.innerText = grupoF[3].diferencia;


let vGol61 = parseInt(goles61.value);
let vGol62 = parseInt(goles62.value);
let vGol63 = parseInt(goles63.value);
let vGol64 = parseInt(goles64.value);
let vGol65 = parseInt(goles65.value);
let vGol66 = parseInt(goles66.value);
let vGol67 = parseInt(goles67.value);
let vGol68 = parseInt(goles68.value);
let vGol69 = parseInt(goles69.value);
let vGol70 = parseInt(goles70.value);
let vGol71 = parseInt(goles71.value);
let vGol72 = parseInt(goles72.value);

const golesF = { vGol61, vGol62, vGol63, vGol64, vGol65, vGol66, vGol67, vGol68, vGol69, vGol70, vGol71, vGol72 }

const guardaGolesF = JSON.stringify(golesF)
localStorage.setItem("golesGrupoF", guardaGolesF);

const grupoFterminado = JSON.stringify(grupoF)
localStorage.setItem("grupoFresultados", grupoFterminado);

Toastify({

    text: "Cargaste a los partidos del GRUPO F con exito",
    
    duration: 3000
    
    }).showToast();

})


localStorage.hasOwnProperty("golesGrupoF") === true && deployGolesF();
localStorage.hasOwnProperty("golesGrupoF") === true && deployArrayF();

function deployGolesF() {
    const golesRecuperadosF = JSON.parse(localStorage.getItem("golesGrupoF"))

    goles61.value = golesRecuperadosF.vGol61;
    goles62.value = golesRecuperadosF.vGol62;
    goles63.value = golesRecuperadosF.vGol63;
    goles64.value = golesRecuperadosF.vGol64;
    goles65.value = golesRecuperadosF.vGol65;
    goles66.value = golesRecuperadosF.vGol66;
    goles67.value = golesRecuperadosF.vGol67;
    goles68.value = golesRecuperadosF.vGol68;
    goles69.value = golesRecuperadosF.vGol69;
    goles70.value = golesRecuperadosF.vGol70;
    goles71.value = golesRecuperadosF.vGol71;
    goles72.value = golesRecuperadosF.vGol72;

    
}

function deployArrayF() {
    const grupoFrecuperado = JSON.parse(localStorage.getItem("grupoFresultados"))

    let clasificado1F = document.getElementById("clasi1F")
    clasificado1F.innerText = grupoFrecuperado[0].pais;
    let clasificado2F = document.getElementById("clasi2F")
    clasificado2F.innerText = grupoFrecuperado[1].pais;
    let terceroF = document.getElementById("terF")
    terceroF.innerText = grupoFrecuperado[2].pais;
    let cuartoF = document.getElementById("cuarF")
    cuartoF.innerText = grupoFrecuperado[3].pais;
    let puntos1F = document.getElementById("pts1F")
    puntos1F.innerText = grupoFrecuperado[0].puntos;
    let puntos2F = document.getElementById("pts2F")
    puntos2F.innerText = grupoFrecuperado[1].puntos;
    let puntos3F = document.getElementById("pts3F")
    puntos3F.innerText = grupoFrecuperado[2].puntos;
    let puntos4F = document.getElementById("pts4F")
    puntos4F.innerText = grupoFrecuperado[3].puntos;
    let favor1F = document.getElementById("gf1F")
    favor1F.innerText = grupoFrecuperado[0].golesFavor;
    let favor2F = document.getElementById("gf2F")
    favor2F.innerText = grupoFrecuperado[1].golesFavor;
    let favor3F = document.getElementById("gf3F")
    favor3F.innerText = grupoFrecuperado[2].golesFavor;
    let favor4F = document.getElementById("gf4F")
    favor4F.innerText = grupoFrecuperado[3].golesFavor;
    let contra1F = document.getElementById("gc1F")
    contra1F.innerText = grupoFrecuperado[0].golesContra;
    let contra2F = document.getElementById("gc2F")
    contra2F.innerText = grupoFrecuperado[1].golesContra;
    let contra3F = document.getElementById("gc3F")
    contra3F.innerText = grupoFrecuperado[2].golesContra;
    let contra4F = document.getElementById("gc4F")
    contra4F.innerText = grupoFrecuperado[3].golesContra;
    let difGol1F = document.getElementById("df1F")
    difGol1F.innerText = grupoFrecuperado[0].diferencia;
    let difGol2F = document.getElementById("df2F")
    difGol2F.innerText = grupoFrecuperado[1].diferencia;
    let difGol3F = document.getElementById("df3F")
    difGol3F.innerText = grupoFrecuperado[2].diferencia;
    let difGol4F = document.getElementById("df4F")
    difGol4F.innerText = grupoFrecuperado[3].diferencia;
}

document.getElementById(`borrarDataF`).addEventListener(`click`, () =>  {
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
                            grupoF[index].puntos = 0;
                            grupoF[index].golesFavor = 0;
                            grupoF[index].golesContra = 0;
                            grupoF[index].diferencia = 0;
                        }
                        let clasificado1F = document.getElementById("clasi1F")
    clasificado1F.innerText = grupoF[0].pais;
    let clasificado2F = document.getElementById("clasi2F")
    clasificado2F.innerText = grupoF[1].pais;
    let terceroF = document.getElementById("terF")
    terceroF.innerText = grupoF[2].pais;
    let cuartoF = document.getElementById("cuarF")
    cuartoF.innerText = grupoF[3].pais;
    let puntos1F = document.getElementById("pts1F")
    puntos1F.innerText = grupoF[0].puntos;
    let puntos2F = document.getElementById("pts2F")
    puntos2F.innerText = grupoF[1].puntos;
    let puntos3F = document.getElementById("pts3F")
    puntos3F.innerText = grupoF[2].puntos;
    let puntos4F = document.getElementById("pts4F")
    puntos4F.innerText = grupoF[3].puntos;
    let favor1F = document.getElementById("gf1F")
    favor1F.innerText = grupoF[0].golesFavor;
    let favor2F = document.getElementById("gf2F")
    favor2F.innerText = grupoF[1].golesFavor;
    let favor3F = document.getElementById("gf3F")
    favor3F.innerText = grupoF[2].golesFavor;
    let favor4F = document.getElementById("gf4F")
    favor4F.innerText = grupoF[3].golesFavor;
    let contra1F = document.getElementById("gc1F")
    contra1F.innerText = grupoF[0].golesContra;
    let contra2F = document.getElementById("gc2F")
    contra2F.innerText = grupoF[1].golesContra;
    let contra3F = document.getElementById("gc3F")
    contra3F.innerText = grupoF[2].golesContra;
    let contra4F = document.getElementById("gc4F")
    contra4F.innerText = grupoF[3].golesContra;
    let difGol1F = document.getElementById("df1F")
    difGol1F.innerText = grupoF[0].diferencia;
    let difGol2F = document.getElementById("df2F")
    difGol2F.innerText = grupoF[1].diferencia;
    let difGol3F = document.getElementById("df3F")
    difGol3F.innerText = grupoF[2].diferencia;
    let difGol4F = document.getElementById("df4F")
    difGol4F.innerText = grupoF[3].diferencia;

                        goles61.value = 0;
                        goles62.value = 0;
                        goles63.value = 0;
                        goles64.value = 0;
                        goles65.value = 0;
                        goles66.value = 0;
                        goles67.value = 0;
                        goles68.value = 0;
                        goles69.value = 0;
                        goles70.value = 0;
                        goles71.value = 0;
                        goles72.value = 0;
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

const grupoFrecuperado = JSON.parse(localStorage.getItem("grupoFresultados"))

export { grupoFrecuperado }