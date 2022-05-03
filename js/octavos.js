import { grupoArecuperado } from "./grupoA.js";
import { grupoBrecuperado } from "./grupoB.js";
import { grupoCrecuperado } from "./grupoC.js";
import { grupoDrecuperado } from "./grupoD.js";
import { grupoErecuperado } from "./grupoE.js";
import { grupoFrecuperado } from "./grupoF.js";
import { grupoGrecuperado } from "./grupoG.js";
import { grupoHrecuperado } from "./grupoH.js";


let img1a = document.getElementById("img1a");
let img2a = document.getElementById("img2a");
let img1b = document.getElementById("img1b");
let img2b = document.getElementById("img2b");
let img1c = document.getElementById("img1c");
let img2c = document.getElementById("img2c");
let img1d = document.getElementById("img1d");
let img2d = document.getElementById("img2d");
let img1e = document.getElementById("img1e");
let img2e = document.getElementById("img2e");
let img1f = document.getElementById("img1f");
let img2f = document.getElementById("img2f");
let img1g = document.getElementById("img1g");
let img2g = document.getElementById("img2g");
let img1h = document.getElementById("img1h");
let img2h = document.getElementById("img2h");

let nombre1a = document.getElementById("1a");
let nombre2a = document.getElementById("2a");
let nombre1b = document.getElementById("1b");
let nombre2b = document.getElementById("2b");
let nombre1c = document.getElementById("1c");
let nombre2c = document.getElementById("2c");
let nombre1d = document.getElementById("1d");
let nombre2d = document.getElementById("2d");
let nombre1e = document.getElementById("1e");
let nombre2e = document.getElementById("2e");
let nombre1f = document.getElementById("1f");
let nombre2f = document.getElementById("2f");
let nombre1g = document.getElementById("1g");
let nombre2g = document.getElementById("2g");
let nombre1h = document.getElementById("1h");
let nombre2h = document.getElementById("2h");





let botonGenerador = document.getElementById ("botonGenerador");
botonGenerador.addEventListener ("click", function (){

img1a.src = "../assets/img/escudos/"+grupoArecuperado[0].id+".png"
img2a.src = "../assets/img/escudos/"+grupoArecuperado[1].id+".png"
img1b.src = "../assets/img/escudos/"+grupoBrecuperado[0].id+".png"
img2b.src = "../assets/img/escudos/"+grupoBrecuperado[1].id+".png"
img1c.src = "../assets/img/escudos/"+grupoCrecuperado[0].id+".png"
img2c.src = "../assets/img/escudos/"+grupoCrecuperado[1].id+".png"
img1d.src = "../assets/img/escudos/"+grupoDrecuperado[0].id+".png"
img2d.src = "../assets/img/escudos/"+grupoDrecuperado[1].id+".png"
img1e.src = "../assets/img/escudos/"+grupoErecuperado[0].id+".png"
img2e.src = "../assets/img/escudos/"+grupoErecuperado[1].id+".png"
img1f.src = "../assets/img/escudos/"+grupoFrecuperado[0].id+".png"
img2f.src = "../assets/img/escudos/"+grupoFrecuperado[1].id+".png"
img1g.src = "../assets/img/escudos/"+grupoGrecuperado[0].id+".png"
img2g.src = "../assets/img/escudos/"+grupoGrecuperado[1].id+".png"
img1h.src = "../assets/img/escudos/"+grupoHrecuperado[0].id+".png"
img2h.src = "../assets/img/escudos/"+grupoHrecuperado[1].id+".png"

nombre1a.innerText = grupoArecuperado[0].pais
nombre2a.innerText = grupoArecuperado[1].pais
nombre1b.innerText = grupoBrecuperado[0].pais
nombre2b.innerText = grupoBrecuperado[1].pais
nombre1c.innerText = grupoCrecuperado[0].pais
nombre2c.innerText = grupoCrecuperado[1].pais
nombre1d.innerText = grupoDrecuperado[0].pais
nombre2d.innerText = grupoDrecuperado[1].pais
nombre1e.innerText = grupoErecuperado[0].pais
nombre2e.innerText = grupoErecuperado[1].pais
nombre1f.innerText = grupoFrecuperado[0].pais
nombre2f.innerText = grupoFrecuperado[1].pais
nombre1g.innerText = grupoGrecuperado[0].pais
nombre2g.innerText = grupoGrecuperado[1].pais
nombre1h.innerText = grupoHrecuperado[0].pais
nombre2h.innerText = grupoHrecuperado[1].pais

Toastify({

    text: "Generaste los 8vos de final con exito",
    
    duration: 3000
    
    }).showToast();

})


const octavos1 = [grupoArecuperado[0], grupoBrecuperado[1]]
const octavos2 = [grupoCrecuperado[0], grupoDrecuperado[1]]
const octavos3 = [grupoErecuperado[0], grupoFrecuperado[1]]
const octavos4 = [grupoGrecuperado[0], grupoHrecuperado[1]]
const octavos5 = [grupoBrecuperado[0], grupoArecuperado[1]]
const octavos6 = [grupoDrecuperado[0], grupoCrecuperado[1]]
const octavos7 = [grupoFrecuperado[0], grupoErecuperado[1]]
const octavos8 = [grupoHrecuperado[0], grupoGrecuperado[1]]

let gol1a = document.getElementById("1aG90")
let pen1a = document.getElementById("1aGP")
pen1a.disabled = true;
let gol2a = document.getElementById("2aG90")
let pen2a = document.getElementById("2aGP")
pen2a.disabled = true;
let gol1b = document.getElementById("1bG90")
let pen1b = document.getElementById("1bGP")
pen1b.disabled = true;
let gol2b = document.getElementById("2bG90")
let pen2b = document.getElementById("2bGP")
pen2b.disabled = true;
let gol1c = document.getElementById("1cG90")
let pen1c = document.getElementById("1cGP")
pen1c.disabled = true;
let gol2c = document.getElementById("2cG90")
let pen2c = document.getElementById("2cGP")
pen2c.disabled = true;
let gol1d = document.getElementById("1dG90")
let pen1d = document.getElementById("1dGP")
pen1d.disabled = true;
let gol2d = document.getElementById("2dG90")
let pen2d = document.getElementById("2dGP")
pen2d.disabled = true;
let gol1e = document.getElementById("1eG90")
let pen1e = document.getElementById("1eGP")
pen1e.disabled = true;
let gol2e = document.getElementById("2eG90")
let pen2e = document.getElementById("2eGP")
pen2e.disabled = true;
let gol1f = document.getElementById("1fG90")
let pen1f = document.getElementById("1fGP")
pen1f.disabled = true;
let gol2f = document.getElementById("2fG90")
let pen2f = document.getElementById("2fGP")
pen2f.disabled = true;
let gol1g = document.getElementById("1gG90")
let pen1g = document.getElementById("1gGP")
pen1g.disabled = true;
let gol2g = document.getElementById("2gG90")
let pen2g = document.getElementById("2gGP")
pen2g.disabled = true;
let gol1h = document.getElementById("1hG90")
let pen1h = document.getElementById("1hGP")
pen1h.disabled = true;
let gol2h = document.getElementById("2hG90")
let pen2h = document.getElementById("2hGP")
pen2h.disabled = true;

gol1a.addEventListener("change", revision1())
gol2b.addEventListener("change", revision1())

function revision1 () {
        gol1a.addEventListener("input", function () {
            gol2b.addEventListener("input", function () {
                if (parseInt(gol1a.value) == parseInt(gol2b.value)) {
                    pen1a.disabled = false;
                    pen2b.disabled = false;
                } else {
                    pen1a.disabled = true;
                    pen2b.disabled = true;
                }
            } )
        })
}

gol1c.addEventListener("change", revision2())
gol2d.addEventListener("change", revision2())

function revision2 () {
        gol1c.addEventListener("input", function () {
            gol2d.addEventListener("input", function () {
                if (parseInt(gol1c.value) == parseInt(gol2d.value)) {
                    pen1c.disabled = false;
                    pen2d.disabled = false;
                } else {
                    pen1c.disabled = true;
                    pen2d.disabled = true;
                }
            } )
        })
}

gol1e.addEventListener("change", revision3())
gol2f.addEventListener("change", revision3())

function revision3 () {
        gol1e.addEventListener("input", function () {
            gol2f.addEventListener("input", function () {
                if (parseInt(gol1e.value) == parseInt(gol2f.value)) {
                    pen1e.disabled = false;
                    pen2f.disabled = false;
                } else {
                    pen1e.disabled = true;
                    pen2f.disabled = true;
                }
            } )
        })
}

gol1g.addEventListener("change", revision4())
gol2h.addEventListener("change", revision4())

function revision4 () {
        gol1g.addEventListener("input", function () {
            gol2h.addEventListener("input", function () {
                if (parseInt(gol1g.value) == parseInt(gol2h.value)) {
                    pen1g.disabled = false;
                    pen2h.disabled = false;
                } else {
                    pen1g.disabled = true;
                    pen2h.disabled = true;
                }
            } )
        })
}


gol1b.addEventListener("change", revision5())
gol2a.addEventListener("change", revision5())        

function revision5 () {
        gol1b.addEventListener("input", function () {
            gol2a.addEventListener("input", function () {
                if (parseInt(gol1b.value) == parseInt(gol2a.value)) {
                    pen1b.disabled = false;
                    pen2a.disabled = false;
                } else {
                    pen1b.disabled = true;
                    pen2a.disabled = true;
                }
            } )
        })
}

gol1d.addEventListener("change", revision6())
gol2c.addEventListener("change", revision6())        

function revision6 () {
        gol1d.addEventListener("input", function () {
            gol2c.addEventListener("input", function () {
                if (parseInt(gol1d.value) == parseInt(gol2c.value)) {
                    pen1d.disabled = false;
                    pen2c.disabled = false;
                } else {
                    pen1d.disabled = true;
                    pen2c.disabled = true;
                }
            } )
        })
}

gol1f.addEventListener("change", revision7())
gol2e.addEventListener("change", revision7())        

function revision7 () {
        gol1f.addEventListener("input", function () {
            gol2e.addEventListener("input", function () {
                if (parseInt(gol1f.value) == parseInt(gol2e.value)) {
                    pen1f.disabled = false;
                    pen2e.disabled = false;
                } else {
                    pen1f.disabled = true;
                    pen2e.disabled = true;
                }
            } )
        })
}

gol1h.addEventListener("change", revision8())
gol2g.addEventListener("change", revision8())        

function revision8 () {
        gol1h.addEventListener("input", function () {
            gol2g.addEventListener("input", function () {
                if (parseInt(gol1h.value) == parseInt(gol2g.value)) {
                    pen1h.disabled = false;
                    pen2g.disabled = false;
                } else {
                    pen1h.disabled = true;
                    pen2g.disabled = true;
                }
            } )
        })
}

document.getElementById(`boton8vos`).addEventListener(`click`, () =>  { 
    if (parseInt(gol1a.value)>parseInt(gol2b.value)) {
        octavos1[0].puntos = 3
        octavos1[1].puntos = 0
    } else if (parseInt(gol1a.value) < parseInt(gol2b.value)) {
        octavos1[0].puntos = 0
        octavos1[1].puntos = 3
    } else if (parseInt(pen1a.value)>parseInt(pen2b.value)) {
        octavos1[0].puntos = 3
        octavos1[1].puntos = 0
    } else {
        octavos1[0].puntos = 0
        octavos1[1].puntos = 3
    }

    if (parseInt(gol1c.value)>parseInt(gol2d.value)) {
        octavos2[0].puntos = 3
        octavos2[1].puntos = 0
    } else if (parseInt(gol1c.value) < parseInt(gol2d.value)) {
        octavos2[0].puntos = 0
        octavos2[1].puntos = 3
    } else if (parseInt(pen1c.value)>parseInt(pen2d.value)) {
        octavos2[0].puntos = 3
        octavos2[1].puntos = 0
    } else {
        octavos2[0].puntos = 0
        octavos2[1].puntos = 3
    }

    if (parseInt(gol1e.value)>parseInt(gol2f.value)) {
        octavos3[0].puntos = 3
        octavos3[1].puntos = 0
    } else if (parseInt(gol1e.value) < parseInt(gol2f.value)) {
        octavos3[0].puntos = 0
        octavos3[1].puntos = 3
    } else if (parseInt(pen1e.value)>parseInt(pen2f.value)) {
        octavos3[0].puntos = 3
        octavos3[1].puntos = 0
    } else {
        octavos3[0].puntos = 0
        octavos3[1].puntos = 3
    }

    if (parseInt(gol1g.value)>parseInt(gol2h.value)) {
        octavos4[0].puntos = 3
        octavos4[1].puntos = 0
    } else if (parseInt(gol1g.value) < parseInt(gol2h.value)) {
        octavos4[0].puntos = 0
        octavos4[1].puntos = 3
    } else if (parseInt(pen1g.value)>parseInt(pen2h.value)) {
        octavos4[0].puntos = 3
        octavos4[1].puntos = 0
    } else {
        octavos4[0].puntos = 0
        octavos4[1].puntos = 3
    }

    if (parseInt(gol1b.value)>parseInt(gol2a.value)) {
        octavos5[0].puntos = 3
        octavos5[1].puntos = 0
    } else if (parseInt(gol1b.value) < parseInt(gol2a.value)) {
        octavos5[0].puntos = 0
        octavos5[1].puntos = 3
    } else if (parseInt(pen1b.value)>parseInt(pen2a.value)) {
        octavos5[0].puntos = 3
        octavos5[1].puntos = 0
    } else {
        octavos5[0].puntos = 0
        octavos5[1].puntos = 3
    }

    if (parseInt(gol1d.value)>parseInt(gol2c.value)) {
        octavos6[0].puntos = 3
        octavos6[1].puntos = 0
    } else if (parseInt(gol1d.value) < parseInt(gol2c.value)) {
        octavos6[0].puntos = 0
        octavos6[1].puntos = 3
    } else if (parseInt(pen1d.value)>parseInt(pen2c.value)) {
        octavos6[0].puntos = 3
        octavos6[1].puntos = 0
    } else {
        octavos6[0].puntos = 0
        octavos6[1].puntos = 3
    }

    if (parseInt(gol1f.value)>parseInt(gol2e.value)) {
        octavos7[0].puntos = 3
        octavos7[1].puntos = 0
    } else if (parseInt(gol1f.value) < parseInt(gol2e.value)) {
        octavos7[0].puntos = 0
        octavos7[1].puntos = 3
    } else if (parseInt(pen1f.value)>parseInt(pen2e.value)) {
        octavos7[0].puntos = 3
        octavos7[1].puntos = 0
    } else {
        octavos7[0].puntos = 0
        octavos7[1].puntos = 3
    }

    if (parseInt(gol1h.value)>parseInt(gol2g.value)) {
        octavos8[0].puntos = 3
        octavos8[1].puntos = 0
    } else if (parseInt(gol1h.value) < parseInt(gol2g.value)) {
        octavos8[0].puntos = 0
        octavos8[1].puntos = 3
    } else if (parseInt(pen1h.value)>parseInt(pen2g.value)) {
        octavos8[0].puntos = 3
        octavos8[1].puntos = 0
    } else {
        octavos8[0].puntos = 0
        octavos8[1].puntos = 3
    }


    octavos1.sort((a, b) => {
        if (b.puntos > a.puntos) {
            return 1;
        }
        if (b.puntos < a.puntos) {
            return -1;
        }
        return 0;
    })

    octavos2.sort((a, b) => {
        if (b.puntos > a.puntos) {
            return 1;
        }
        if (b.puntos < a.puntos) {
            return -1;
        }
        return 0;
    })
    
    octavos3.sort((a, b) => {
        if (b.puntos > a.puntos) {
            return 1;
        }
        if (b.puntos < a.puntos) {
            return -1;
        }
        return 0;
    })

    octavos4.sort((a, b) => {
        if (b.puntos > a.puntos) {
            return 1;
        }
        if (b.puntos < a.puntos) {
            return -1;
        }
        return 0;
    })

    octavos5.sort((a, b) => {
        if (b.puntos > a.puntos) {
            return 1;
        }
        if (b.puntos < a.puntos) {
            return -1;
        }
        return 0;
    })

    octavos6.sort((a, b) => {
        if (b.puntos > a.puntos) {
            return 1;
        }
        if (b.puntos < a.puntos) {
            return -1;
        }
        return 0;
    })

    octavos7.sort((a, b) => {
        if (b.puntos > a.puntos) {
            return 1;
        }
        if (b.puntos < a.puntos) {
            return -1;
        }
        return 0;
    })

    octavos8.sort((a, b) => {
        if (b.puntos > a.puntos) {
            return 1;
        }
        if (b.puntos < a.puntos) {
            return -1;
        }
        return 0;
    })


    const ganadores8vos = [octavos1[0], octavos2[0], octavos3[0], octavos4[0], octavos5[0], octavos6[0], octavos7[0], octavos8[0]]

    const guardaGanadores8vos = JSON.stringify(ganadores8vos)
    localStorage.setItem("ganadores8vos", guardaGanadores8vos);


    let valorg1a = parseInt(gol1a.value)
    let valorg2a = parseInt(gol2a.value)
    let valorg1b = parseInt(gol1b.value)
    let valorg2b = parseInt(gol2b.value)
    let valorg1c = parseInt(gol1c.value)
    let valorg2c = parseInt(gol2c.value)
    let valorg1d = parseInt(gol1d.value)
    let valorg2d = parseInt(gol2d.value)
    let valorg1e = parseInt(gol1e.value)
    let valorg2e = parseInt(gol2e.value)
    let valorg1f = parseInt(gol1f.value)
    let valorg2f = parseInt(gol2f.value)
    let valorg1g = parseInt(gol1g.value)
    let valorg2g = parseInt(gol2g.value)
    let valorg1h = parseInt(gol1h.value)
    let valorg2h = parseInt(gol2h.value)
    


    const goles8vos = [valorg1a, valorg2a, valorg1b, valorg2b, valorg1c, valorg2c, valorg1d, valorg2d, valorg1e, valorg2e, valorg1f, valorg2f, valorg1g, valorg2g, valorg1h, valorg2h]

    const guardaGoles8vos = JSON.stringify(goles8vos)
    localStorage.setItem("goles8vos", guardaGoles8vos);


    Toastify({

        text: "Cargaste los 8vos de final con exito",
        
        duration: 3000
        
        }).showToast();
})

localStorage.hasOwnProperty("goles8vos") === true && deployGoles8vos();

function deployGoles8vos() {
    const goles8vosRecuperados = JSON.parse(localStorage.getItem("goles8vos"))
    console.log(goles8vosRecuperados);

    gol1a.value = goles8vosRecuperados[0]
    gol2a.value = goles8vosRecuperados[1]
    gol1b.value = goles8vosRecuperados[2]
    gol2b.value = goles8vosRecuperados[3]
    gol1c.value = goles8vosRecuperados[4]
    gol2c.value = goles8vosRecuperados[5]
    gol1d.value = goles8vosRecuperados[6]
    gol2d.value = goles8vosRecuperados[7]
    gol1e.value = goles8vosRecuperados[8]
    gol2e.value = goles8vosRecuperados[9]
    gol1f.value = goles8vosRecuperados[10]
    gol2f.value = goles8vosRecuperados[11]
    gol1g.value = goles8vosRecuperados[12]
    gol2g.value = goles8vosRecuperados[13]
    gol1h.value = goles8vosRecuperados[14]
    gol2h.value = goles8vosRecuperados[15]
  

    img1a.src = "../assets/img/escudos/"+grupoArecuperado[0].id+".png"
    img2a.src = "../assets/img/escudos/"+grupoArecuperado[1].id+".png"
    img1b.src = "../assets/img/escudos/"+grupoBrecuperado[0].id+".png"
    img2b.src = "../assets/img/escudos/"+grupoBrecuperado[1].id+".png"
    img1c.src = "../assets/img/escudos/"+grupoCrecuperado[0].id+".png"
    img2c.src = "../assets/img/escudos/"+grupoCrecuperado[1].id+".png"
    img1d.src = "../assets/img/escudos/"+grupoDrecuperado[0].id+".png"
    img2d.src = "../assets/img/escudos/"+grupoDrecuperado[1].id+".png"
    img1e.src = "../assets/img/escudos/"+grupoErecuperado[0].id+".png"
    img2e.src = "../assets/img/escudos/"+grupoErecuperado[1].id+".png"
    img1f.src = "../assets/img/escudos/"+grupoFrecuperado[0].id+".png"
    img2f.src = "../assets/img/escudos/"+grupoFrecuperado[1].id+".png"
    img1g.src = "../assets/img/escudos/"+grupoGrecuperado[0].id+".png"
    img2g.src = "../assets/img/escudos/"+grupoGrecuperado[1].id+".png"
    img1h.src = "../assets/img/escudos/"+grupoHrecuperado[0].id+".png"
    img2h.src = "../assets/img/escudos/"+grupoHrecuperado[1].id+".png"

    nombre1a.innerText = grupoArecuperado[0].pais
    nombre2a.innerText = grupoArecuperado[1].pais
    nombre1b.innerText = grupoBrecuperado[0].pais
    nombre2b.innerText = grupoBrecuperado[1].pais
    nombre1c.innerText = grupoCrecuperado[0].pais
    nombre2c.innerText = grupoCrecuperado[1].pais
    nombre1d.innerText = grupoDrecuperado[0].pais
    nombre2d.innerText = grupoDrecuperado[1].pais
    nombre1e.innerText = grupoErecuperado[0].pais
    nombre2e.innerText = grupoErecuperado[1].pais
    nombre1f.innerText = grupoFrecuperado[0].pais
    nombre2f.innerText = grupoFrecuperado[1].pais
    nombre1g.innerText = grupoGrecuperado[0].pais
    nombre2g.innerText = grupoGrecuperado[1].pais
    nombre1h.innerText = grupoHrecuperado[0].pais
    nombre2h.innerText = grupoHrecuperado[1].pais

}


document.getElementById(`botonReset8vos`).addEventListener(`click`, () =>  {
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
                        localStorage.removeItem("goles8vos");
                        gol1a.value = 0
                        gol2a.value = 0
                        gol1b.value = 0
                        gol2b.value = 0
                        gol1c.value = 0
                        gol2c.value = 0
                        gol1d.value = 0
                        gol2d.value = 0
                        gol1e.value = 0
                        gol2e.value = 0
                        gol1f.value = 0
                        gol2f.value = 0
                        gol1g.value = 0
                        gol2g.value = 0
                        gol1h.value = 0
                        gol2h.value = 0
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