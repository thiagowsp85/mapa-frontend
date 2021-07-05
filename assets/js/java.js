const senhaChama = document.querySelector('.senhachama');
const caixaChama = document.querySelector('.caixachama');
const senhaCliente = document.querySelector('.senha-cliente');
const botaoComum = document.querySelector('.btn--comum');
const botaoRapido = document.querySelector('.btn--rapido');
const botaoPrioritario = document.querySelector('.btn--prioritario');
const botaoCaixa_1 = document.querySelector('.btn--caixa1');
const botaoCaixa_2 = document.querySelector('.btn--caixa2');
const botaoCaixa_3 = document.querySelector('.btn--caixa3');
const botaoCaixa_4 = document.querySelector('.btn--caixa4');
const filaComum = []
const filaPrioritario = []
const filaRapido = []
let cont = 0

function addSenhaComum(event) {
    cont++
    if (event.target.innerText === 'Comum') {

        filaComum.push('C-' + cont)
        console.log(filaComum)
        senhaCliente.innerText = `C-${cont}`
    }

}

function addSenhaRapido(event) {
    cont++
    if (event.target.innerText === 'Rápido') {

        filaRapido.push('R-' + cont)
        senhaCliente.innerText = `R-${cont}`
    }
    console.log(filaRapido)
}

function addSenhaPrioritario(event) {
    cont++
    if (event.target.innerText === 'Prioritário') {

        filaPrioritario.push('P-' + cont)
        senhaCliente.innerText = `P-${cont}`
    }
    console.log(filaPrioritario)
}



function caixa1() {
    if (event.target.innerText === 'Caixa 1') {
        if (filaPrioritario.length > 0) {
            let chamada = filaPrioritario.shift()
            senhaChama.innerText = chamada
            caixaChama.innerText = 'Caixa 1'
        } else {
            if (filaRapido.length > 0) {
                let chamada = filaRapido.shift()
                senhaChama.innerText = chamada
                caixaChama.innerText = 'Caixa 1'
            } else {
                if (filaComum.length > 0) {
                    let chamada = filaComum.shift()
                    senhaChama.innerText = chamada
                    caixaChama.innerText = 'Caixa 1'
                } else {
                    senhaChama.innerText = ' '
                    caixaChama.innerText = ' '
                }
            }
        }
    }
}

function caixa2() {
    if (event.target.innerText === 'Caixa 2') {
        if (filaRapido.length > 0) {
            let chamada = filaRapido.shift()
            senhaChama.innerText = chamada
            caixaChama.innerText = 'Caixa 2'
        } else {
            if (filaPrioritario.length > 0) {
                let chamada = filaPrioritario.shift()
                senhaChama.innerText = chamada
                caixaChama.innerText = 'Caixa 2'
            } else {
                if (filaComum.length > 0) {
                    let chamada = filaComum.shift()
                    senhaChama.innerText = chamada
                    caixaChama.innerText = 'Caixa 2'
                } else {
                    senhaChama.innerText = ' '
                    caixaChama.innerText = ' '
                }
            }
        }
    }
}

function caixa3() {
    if (event.target.innerText === 'Caixa 3') {
        if (filaRapido.length > 0) {
            let chamada = filaRapido.shift()
            senhaChama.innerText = chamada
            caixaChama.innerText = 'Caixa 3'
        } else {
            if (filaPrioritario.length > 0) {
                let chamada = filaPrioritario.shift()
                senhaChama.innerText = chamada
                caixaChama.innerText = 'Caixa 3'
            } else {
                if (filaComum.length > 0) {
                    let chamada = filaComum.shift()
                    senhaChama.innerText = chamada
                    caixaChama.innerText = 'Caixa 3'
                } else {
                    senhaChama.innerText = ' '
                    caixaChama.innerText = ' '
                }
            }
        }
    }
}

function caixa4() {
    if (event.target.innerText === 'Caixa 4') {
        if (filaComum.length > 0) {
            let chamada = filaComum.shift()
            senhaChama.innerText = chamada
            caixaChama.innerText = 'Caixa 4'
        } else {
            if (filaPrioritario.length > 0) {
                let chamada = filaPrioritario.shift()
                senhaChama.innerText = chamada
                caixaChama.innerText = 'Caixa 4'
            } else {
                if (filaRapido.length > 0) {
                    let chamada = filaRapido.shift()
                    senhaChama.innerText = chamada
                    caixaChama.innerText = 'Caixa 4'
                } else {
                    senhaChama.innerText = ' '
                    caixaChama.innerText = ' '
                }
            }
        }
    }
}
botaoCaixa_1.addEventListener("click", (event) => { caixa1(event) })
botaoCaixa_2.addEventListener("click", (event) => { caixa2(event) })
botaoCaixa_3.addEventListener("click", (event) => { caixa3(event) })
botaoCaixa_4.addEventListener("click", (event) => { caixa4(event) })


botaoComum.addEventListener("click", (event) => { addSenhaComum(event) })
botaoRapido.addEventListener("click", (event) => { addSenhaRapido(event) })
botaoPrioritario.addEventListener("click", (event) => { addSenhaPrioritario(event) })
document.addEventListener('contextmenu', event => event.preventDefault());
document.onkeydown = function(e) {
    if (e.keyCode == 123) { return false; }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 73) { return false; }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 74) { return false; }
    if (e.ctrlKey && e.keyCode == 85) { return false; }
}


//SINAL AO CLICAR

let context,
    oscillator,
    contextGain,
    x = 0;

const botaocaixa = document.querySelector(".btn--caixa1");
const botaocaixa2 = document.getElementById("caixa2");
const botaocaixa3 = document.getElementById("caixa3");
const botaocaixa4 = document.getElementById("caixa4");

function start() {
    context = new AudioContext();
    oscillator = context.createOscillator();
    contextGain = context.createGain();

    oscillator.connect(contextGain);
    contextGain.connect(context.destination);
    oscillator.start(0);
}

function stop() {
    start();
    contextGain.gain.exponentialRampToValueAtTime(
        0.00001,
        context.currentTime + x
    );
}

botaocaixa.addEventListener("click", function() {
    x = 5;
    stop();
});
botaocaixa2.addEventListener("click", function() {
    x = 5;
    stop();
});
botaocaixa3.addEventListener("click", function() {
    x = 5;
    stop();
});
botaocaixa4.addEventListener("click", function() {
    x = 5;
    stop();
});