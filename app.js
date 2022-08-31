'use restrict'

function trocarCor(){
    const cores = document.getElementById('cores').value.toUpperCase()
    document.body.style.backgroundColor = `#${cores}`

    if(cores == 'VERMELHO'){
        body.style.backgroundColor = '#ff0000'
    }
    else if(cores == 'VERDE'){
        body.style.backgroundColor = '#00ff00'
    }
    else if(cores == 'AZUL'){
        body.style.backgroundColor = '#0000ff'
    }
    else if(cores == 'AMARELO'){
        body.style.backgroundColor = '#eead2d'
    }


}



const botao = document.getElementById('botao').addEventListener('return',trocarCor)

