const carregar = () => {
    var msg = window.document.getElementById('msg')
    var msg2 = window.document.getElementById('msg2')
    var img = window.document.getElementById('imagem')
    var login = window.document.getElementById('login')
    var senha = window.document.getElementById('senha')
    var data = new Date()
    var hora = data.getHours()
    var minutes = data.getMinutes()
    msg.innerHTML = `${hora} horas e ${minutes} minutos`
    msg2.innerHTML = `Bem Vindo`
    if(hora >=0 && hora < 12){
        //bom dia
        img.src = 'elliotp.png'
        document.body.style.background = '#c2c2c2'
    } else if(hora >= 12 && hora < 18){
        //boa tarde
        img.src = 'elliotp.png'
        document.body.style.background = '#c2c2c2'
    } else {
        //boa noite
        img.src = 'elliotp.png'
        document.body.style.background = '#343434'
    }
}




