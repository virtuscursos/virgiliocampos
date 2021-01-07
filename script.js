let val = document.getElementById ('txtn1')
let resultado = document.getElementById('res')
function calcular(){
    if(val.value.length == 0){
        window.alert ('Digite um valor')
        
    }
    val.value = ''
    val.focus()
    res.innerHTML = `Calculando...`
    
}
function relogio(){//essa função é um relógio no HTML
    let data = new Date();
    let hr = data.getHours();
    let min = data.getMinutes();
    let seg = data.getSeconds();

    let tempo_total = hr + ':' + min + ':' + seg;
    let tempo = document.getElementById('relógio')
    tempo.innerHTML = tempo_total;
}
setInterval(relogio,500)
