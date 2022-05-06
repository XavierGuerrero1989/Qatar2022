const brasil = {
    id: 25,
    pais: "Brasil",
    puntos: 0,
    golesFavor: 0,
    golesContra: 0,
    diferencia: 0
}

const serbia = {
    id: 26,
    pais: "Serbia",
    puntos: 0,
    golesFavor: 0,
    golesContra: 0,
    diferencia: 0
}

const suiza = {
    id: 27,
    pais: "Suiza",
    puntos: 0,
    golesFavor: 0,
    golesContra: 0,
    diferencia: 0
}

const camerun = {
    id: 28,
    pais: "Camerun",
    puntos: 0,
    golesFavor: 0,
    golesContra: 0,
    diferencia: 0
}

const grupoG = [brasil, serbia, suiza, camerun]

let goles73 = document.getElementById("g73");
let goles74 = document.getElementById("g74");
let goles75 = document.getElementById("g75");
let goles76 = document.getElementById("g76");
let goles77 = document.getElementById("g77");
let goles78 = document.getElementById("g78");
let goles79 = document.getElementById("g79");
let goles80 = document.getElementById("g80");
let goles81 = document.getElementById("g81");
let goles82 = document.getElementById("g82");
let goles83 = document.getElementById("g83");
let goles84 = document.getElementById("g84");


let botonDeCargaG = document.getElementById("cargaDataG");
botonDeCargaG.addEventListener ("click", function () {
   
    for (let index = 0; index <4; index++) {
        grupoG[index].puntos = 0;
        grupoG[index].golesFavor = 0;
        grupoG[index].golesContra = 0;
        grupoG[index].diferencia = 0;
    }

        brasil.golesFavor = brasil.golesFavor + parseInt(goles73.value) + parseInt(goles77.value) + parseInt(goles81.value);
        brasil.golesContra = brasil.golesContra + parseInt(goles74.value) + parseInt(goles78.value) + parseInt(goles82.value);

        serbia.golesFavor = serbia.golesFavor + parseInt(goles74.value) + parseInt(goles79.value) + parseInt(goles83.value);
        serbia.golesContra = serbia.golesContra + parseInt(goles73.value) + parseInt(goles80.value) + parseInt(goles84.value);

        suiza.golesFavor = suiza.golesFavor + parseInt(goles75.value) + parseInt(goles78.value) + parseInt(goles84.value);
        suiza.golesContra = suiza.golesContra + parseInt(goles76.value) + parseInt(goles77.value) + parseInt(goles83.value);
    
        camerun.golesFavor = camerun.golesFavor + parseInt(goles76.value) + parseInt(goles80.value) + parseInt(goles82.value);
        camerun.golesContra = camerun.golesContra + parseInt(goles75.value) + parseInt(goles79.value) + parseInt(goles81.value);
   
    if (parseInt(goles73.value) > parseInt(goles74.value)) {           
         brasil.puntos = brasil.puntos + 3
         serbia.puntos = serbia.puntos + 0
    } else if (parseInt(goles73.value) == parseInt(goles74.value)) {
        brasil.puntos = brasil.puntos + 1
        serbia.puntos = serbia.puntos + 1
    } else {
        brasil.puntos = brasil.puntos + 0
        serbia.puntos = serbia.puntos + 3
    }

       
    if (parseInt(goles75.value) > parseInt(goles76.value)) {            
    suiza.puntos = suiza.puntos + 3
    camerun.puntos = camerun.puntos + 0        
} else if (parseInt(goles75.value) == parseInt(goles76.value)) {
    suiza.puntos = suiza.puntos + 1
    camerun.puntos = camerun.puntos + 1  
} else {
    suiza.puntos = suiza.puntos + 0
    camerun.puntos = camerun.puntos + 3  
}

if (parseInt(goles77.value) > parseInt(goles78.value)) {
    brasil.puntos = brasil.puntos + 3
    suiza.puntos = suiza.puntos + 0
} else if (parseInt(goles77.value) == parseInt(goles78.value)) {
    brasil.puntos = brasil.puntos + 1
    suiza.puntos = suiza.puntos + 1
} else {
    brasil.puntos = brasil.puntos + 0
    suiza.puntos = suiza.puntos + 3
}
                                   
if (parseInt(goles79.value) > parseInt(goles80.value)) {
    serbia.puntos = serbia.puntos + 3
    camerun.puntos = camerun.puntos + 0
} else if (parseInt(goles79.value) == parseInt(goles80.value)) {
    serbia.puntos = serbia.puntos + 1
    camerun.puntos = camerun.puntos + 1
} else {
    serbia.puntos = serbia.puntos + 0
    camerun.puntos = camerun.puntos + 3
}    
                        
if (parseInt(goles81.value) > parseInt(goles82.value)) {
        brasil.puntos = brasil.puntos + 3
        camerun.puntos = camerun.puntos + 0
} else if (parseInt(goles81.value) == parseInt(goles82.value)) {
    brasil.puntos = brasil.puntos + 1
    camerun.puntos = camerun.puntos + 1
} else {
    brasil.puntos = brasil.puntos + 0
    camerun.puntos = camerun.puntos + 3
}
                    
if (parseInt(goles83.value) > parseInt(goles84.value)) {
    serbia.puntos = serbia.puntos + 3
    suiza.puntos = suiza.puntos + 0
} else if (parseInt(goles83.value) == parseInt(goles84.value)) {
    serbia.puntos = serbia.puntos + 1
    suiza.puntos = suiza.puntos + 1
} else {
    serbia.puntos = serbia.puntos + 0
    suiza.puntos = suiza.puntos + 3
}


  
for (let index = 0; index <4; index++) {
    grupoG[index].diferencia = grupoG[index].golesFavor - grupoG[index].golesContra;  
}



    grupoG.sort(
        function(a,b) {
            if (b.puntos == a.puntos) {
                return b.diferencia - a.diferencia;
            }
            return b.puntos > a.puntos ? 1 : -1;
    })

    let clasificado1G = document.getElementById("clasi1G")
    clasificado1G.innerText = grupoG[0].pais;
    let clasificado2G = document.getElementById("clasi2G")
    clasificado2G.innerText = grupoG[1].pais;
    let terceroG = document.getElementById("terG")
    terceroG.innerText = grupoG[2].pais;
    let cuartoG = document.getElementById("cuarG")
    cuartoG.innerText = grupoG[3].pais;
    let puntos1G = document.getElementById("pts1G")
    puntos1G.innerText = grupoG[0].puntos;
    let puntos2G = document.getElementById("pts2G")
    puntos2G.innerText = grupoG[1].puntos;
    let puntos3G = document.getElementById("pts3G")
    puntos3G.innerText = grupoG[2].puntos;
    let puntos4G = document.getElementById("pts4G")
    puntos4G.innerText = grupoG[3].puntos;
    let favor1G = document.getElementById("gf1G")
    favor1G.innerText = grupoG[0].golesFavor;
    let favor2G = document.getElementById("gf2G")
    favor2G.innerText = grupoG[1].golesFavor;
    let favor3G = document.getElementById("gf3G")
    favor3G.innerText = grupoG[2].golesFavor;
    let favor4G = document.getElementById("gf4G")
    favor4G.innerText = grupoG[3].golesFavor;
    let contra1G = document.getElementById("gc1G")
    contra1G.innerText = grupoG[0].golesContra;
    let contra2G = document.getElementById("gc2G")
    contra2G.innerText = grupoG[1].golesContra;
    let contra3G = document.getElementById("gc3G")
    contra3G.innerText = grupoG[2].golesContra;
    let contra4G = document.getElementById("gc4G")
    contra4G.innerText = grupoG[3].golesContra;
    let difGol1G = document.getElementById("df1G")
    difGol1G.innerText = grupoG[0].diferencia;
    let difGol2G = document.getElementById("df2G")
    difGol2G.innerText = grupoG[1].diferencia;
    let difGol3G = document.getElementById("df3G")
    difGol3G.innerText = grupoG[2].diferencia;
    let difGol4G = document.getElementById("df4G")
    difGol4G.innerText = grupoG[3].diferencia;

    let img1g = document.getElementById("img1g");
    let img2g = document.getElementById("img2g");

    let nombre1g = document.getElementById("1g");
    let nombre2g = document.getElementById("2g");

    img1g.src = "../assets/img/escudos/"+grupoG[0].id+".png"
    img2g.src = "../assets/img/escudos/"+grupoG[1].id+".png"

    nombre1g.innerText = grupoG[0].pais
    nombre2g.innerText = grupoG[1].pais

let vGol73 = parseInt(goles73.value);
let vGol74 = parseInt(goles74.value);
let vGol75 = parseInt(goles75.value);
let vGol76 = parseInt(goles76.value);
let vGol77 = parseInt(goles77.value);
let vGol78 = parseInt(goles78.value);
let vGol79 = parseInt(goles79.value);
let vGol80 = parseInt(goles80.value);
let vGol81 = parseInt(goles81.value);
let vGol82 = parseInt(goles82.value);
let vGol83 = parseInt(goles83.value);
let vGol84 = parseInt(goles84.value);

const golesG = { vGol73, vGol74, vGol75, vGol76, vGol77, vGol78, vGol79, vGol80, vGol81, vGol82, vGol83, vGol84 }

const guardaGolesG = JSON.stringify(golesG)
localStorage.setItem("golesGrupoG", guardaGolesG);

const grupoGterminado = JSON.stringify(grupoG)
localStorage.setItem("grupoGresultados", grupoGterminado);

Toastify({

    text: "Cargaste a los partidos del GRUPO G con exito",
    
    duration: 3000
    
    }).showToast();

})


localStorage.hasOwnProperty("golesGrupoG") === true && deployGolesG();
localStorage.hasOwnProperty("golesGrupoG") === true && deployArrayG();

function deployGolesG() {
    const golesRecuperadosG = JSON.parse(localStorage.getItem("golesGrupoG"))

    goles73.value = golesRecuperadosG.vGol73;
    goles74.value = golesRecuperadosG.vGol74;
    goles75.value = golesRecuperadosG.vGol75;
    goles76.value = golesRecuperadosG.vGol76;
    goles77.value = golesRecuperadosG.vGol77;
    goles78.value = golesRecuperadosG.vGol78;
    goles79.value = golesRecuperadosG.vGol79;
    goles80.value = golesRecuperadosG.vGol80;
    goles81.value = golesRecuperadosG.vGol81;
    goles82.value = golesRecuperadosG.vGol82;
    goles83.value = golesRecuperadosG.vGol83;
    goles84.value = golesRecuperadosG.vGol84;

    
}

function deployArrayG() {
    const grupoGrecuperado = JSON.parse(localStorage.getItem("grupoGresultados"))

    let clasificado1G = document.getElementById("clasi1G")
    clasificado1G.innerText = grupoGrecuperado[0].pais;
    let clasificado2G = document.getElementById("clasi2G")
    clasificado2G.innerText = grupoGrecuperado[1].pais;
    let terceroG = document.getElementById("terG")
    terceroG.innerText = grupoGrecuperado[2].pais;
    let cuartoG = document.getElementById("cuarG")
    cuartoG.innerText = grupoGrecuperado[3].pais;
    let puntos1G = document.getElementById("pts1G")
    puntos1G.innerText = grupoGrecuperado[0].puntos;
    let puntos2G = document.getElementById("pts2G")
    puntos2G.innerText = grupoGrecuperado[1].puntos;
    let puntos3G = document.getElementById("pts3G")
    puntos3G.innerText = grupoGrecuperado[2].puntos;
    let puntos4G = document.getElementById("pts4G")
    puntos4G.innerText = grupoGrecuperado[3].puntos;
    let favor1G = document.getElementById("gf1G")
    favor1G.innerText = grupoGrecuperado[0].golesFavor;
    let favor2G = document.getElementById("gf2G")
    favor2G.innerText = grupoGrecuperado[1].golesFavor;
    let favor3G = document.getElementById("gf3G")
    favor3G.innerText = grupoGrecuperado[2].golesFavor;
    let favor4G = document.getElementById("gf4G")
    favor4G.innerText = grupoGrecuperado[3].golesFavor;
    let contra1G = document.getElementById("gc1G")
    contra1G.innerText = grupoGrecuperado[0].golesContra;
    let contra2G = document.getElementById("gc2G")
    contra2G.innerText = grupoGrecuperado[1].golesContra;
    let contra3G = document.getElementById("gc3G")
    contra3G.innerText = grupoGrecuperado[2].golesContra;
    let contra4G = document.getElementById("gc4G")
    contra4G.innerText = grupoGrecuperado[3].golesContra;
    let difGol1G = document.getElementById("df1G")
    difGol1G.innerText = grupoGrecuperado[0].diferencia;
    let difGol2G = document.getElementById("df2G")
    difGol2G.innerText = grupoGrecuperado[1].diferencia;
    let difGol3G = document.getElementById("df3G")
    difGol3G.innerText = grupoGrecuperado[2].diferencia;
    let difGol4G = document.getElementById("df4G")
    difGol4G.innerText = grupoGrecuperado[3].diferencia;
}

document.getElementById(`borrarDataG`).addEventListener(`click`, () =>  {
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
                            grupoG[index].puntos = 0;
                            grupoG[index].golesFavor = 0;
                            grupoG[index].golesContra = 0;
                            grupoG[index].diferencia = 0;
                        }
                        let clasificado1G = document.getElementById("clasi1G")
                        clasificado1G.innerText = grupoG[0].pais;
                        let clasificado2G = document.getElementById("clasi2G")
                        clasificado2G.innerText = grupoG[1].pais;
                        let terceroG = document.getElementById("terG")
                        terceroG.innerText = grupoG[2].pais;
                        let cuartoG = document.getElementById("cuarG")
                        cuartoG.innerText = grupoG[3].pais;
                        let puntos1G = document.getElementById("pts1G")
                        puntos1G.innerText = grupoG[0].puntos;
                        let puntos2G = document.getElementById("pts2G")
                        puntos2G.innerText = grupoG[1].puntos;
                        let puntos3G = document.getElementById("pts3G")
                        puntos3G.innerText = grupoG[2].puntos;
                        let puntos4G = document.getElementById("pts4G")
                        puntos4G.innerText = grupoG[3].puntos;
                        let favor1G = document.getElementById("gf1G")
                        favor1G.innerText = grupoG[0].golesFavor;
                        let favor2G = document.getElementById("gf2G")
                        favor2G.innerText = grupoG[1].golesFavor;
                        let favor3G = document.getElementById("gf3G")
                        favor3G.innerText = grupoG[2].golesFavor;
                        let favor4G = document.getElementById("gf4G")
                        favor4G.innerText = grupoG[3].golesFavor;
                        let contra1G = document.getElementById("gc1G")
                        contra1G.innerText = grupoG[0].golesContra;
                        let contra2G = document.getElementById("gc2G")
                        contra2G.innerText = grupoG[1].golesContra;
                        let contra3G = document.getElementById("gc3G")
                        contra3G.innerText = grupoG[2].golesContra;
                        let contra4G = document.getElementById("gc4G")
                        contra4G.innerText = grupoG[3].golesContra;
                        let difGol1G = document.getElementById("df1G")
                        difGol1G.innerText = grupoG[0].diferencia;
                        let difGol2G = document.getElementById("df2G")
                        difGol2G.innerText = grupoG[1].diferencia;
                        let difGol3G = document.getElementById("df3G")
                        difGol3G.innerText = grupoG[2].diferencia;
                        let difGol4G = document.getElementById("df4G")
                        difGol4G.innerText = grupoG[3].diferencia;

                        goles73.value = 0;
                        goles74.value = 0;
                        goles75.value = 0;
                        goles76.value = 0;
                        goles77.value = 0;
                        goles78.value = 0;
                        goles79.value = 0;
                        goles80.value = 0;
                        goles81.value = 0;
                        goles82.value = 0;
                        goles83.value = 0;
                        goles84.value = 0;
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

const grupoGrecuperado = JSON.parse(localStorage.getItem("grupoGresultados"))

export { grupoGrecuperado }