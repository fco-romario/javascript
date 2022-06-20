function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if ( hora >= 0 && hora < 12) {
        img.src = "img-dia.jpg"
        document.body.style.background = '#fdc68d'
        
    } else if (hora >=12 && hora <= 18) {
        img.src = "img-tarde.jpg"
        document.body.style.background = '#6e3f45'
    }else {
        img.src = "img-noite.jpg"
        document.body.style.background = "#171e3b"
    }
}