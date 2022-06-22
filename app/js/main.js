window.onload = init;

function init() {
    let grauCilDir = document.getElementById("grauCilDir");
    let grauCilEsq = document.getElementById("grauCilEsq");
    let grauEsfDir = document.getElementById("grauEsfDir");
    let grauEsfEsq = document.getElementById("grauEsfEsq");
    let valor1 = document.getElementById("valor1");
    let valor2 = document.getElementById("valor2");
    let valor3 = document.getElementById("valor3");
    let valor4 = document.getElementById("valor4");


    grauCilDir.oninput = function () {
        valor1.innerHTML = this.value;
    }
    grauCilEsq.oninput = function () {
        valor2.innerHTML = this.value;
    }
    grauEsfDir.oninput = function () {
        valor3.innerHTML = this.value;
    }
    grauEsfEsq.oninput = function () {
        valor4.innerHTML = this.value;
    }
}

function selecionaOculos() {
    let grauCilDir = document.getElementById("grauCilDir");
    let grauCilEsq = document.getElementById("grauCilEsq");
    let grauEsfEsq = document.getElementById("grauEsfEsq");
    let grauEsfDir = document.getElementById("grauEsfDir");
    if ((grauCilDir.value < -2 || grauCilEsq.value < -2))
        return alert("Voce pode usar o Vision!");
    if ((grauEsfDir.value < -12 || grauEsfEsq.value < -12))
        return alert("Voce pode usar o Vision!");
    if ((grauEsfDir.value >-3 || grauEsfEsq.value >-3))
    return alert("Voce pode usar o Vision!");
    else
        return alert("Voce pode usar o Prime!");
}


