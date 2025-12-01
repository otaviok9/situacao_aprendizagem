function calcular() {
    let res = document.getElementById('res')
    let V = Number(document.getElementById('V').value)
    let rUm = Number(document.getElementById('rUm').value)
    let rDois = Number(document.getElementById('rDois').value)
    let rTres = Number(document.getElementById('rTres').value)
if(V === 0 & rUm === 0 & rDois === 0 & rTres === 0){
    res.innerHTML = `Não foi possível calcular, pois está faltando Dados`
}else{
    let rParalelo = (rDois * rTres) / (rDois + rTres)
    let rTotal = rUm + rParalelo
    
    let corrente1 = V / rTotal
    let corrente2 = (rTres * corrente1) / (rDois + rTres)
    let corrente3 = corrente1 - corrente2
    
    let potencia1 = rUm * (corrente1 * corrente1)
    let potencia2 = rDois * (corrente2 * corrente2)
    let potencia3 = rTres * (corrente3 * corrente3)
    
    let tensao1 = rUm * corrente1
    let tensao2 = rDois * corrente2
    let tensao3 = rTres * corrente3
    
    res.innerHTML = ""  
    
    res.innerHTML += `A Resistência em Paralelo é: ${rParalelo.toFixed(3)}<br>`
    res.innerHTML += `A Resistência Total é: ${rTotal.toFixed(3)}<br><br>`
    
    res.innerHTML += `A Corrente da Resistência Um é: ${corrente1.toFixed(3)}<br>`
    res.innerHTML += `A Corrente da Resistência Dois é: ${corrente2.toFixed(3)}<br>`
    res.innerHTML += `A Corrente da Resistência Três é: ${corrente3.toFixed(3)}<br><br>`
    
    res.innerHTML += `A Potência dissipada do Resistor Um é: ${potencia1.toFixed(3)}<br>`
    res.innerHTML += `A Potência dissipada do Resistor Dois é: ${potencia2.toFixed(3)}<br>`
    res.innerHTML += `A Potência dissipada do Resistor Três é: ${potencia3.toFixed(3)}<br><br>`
    
    res.innerHTML += `A Tensão do Resistor Um é: ${tensao1.toFixed(3)}<br>`
    res.innerHTML += `A Tensão do Resistor Dois é: ${tensao2.toFixed(3)}<br>`
    res.innerHTML += `A Tensão do Resistor Três é: ${tensao3.toFixed(3)}<br><br><br><br>`
    
    }
    
}

function principal() {
calcular()
}