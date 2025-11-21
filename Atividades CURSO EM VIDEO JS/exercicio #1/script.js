function carregar(){
    const msg = window.document.getElementById('msg')
    const img = window.document.getElementById('imagem')
    const bodyStyle = document.body.style
    const data = new Date()
    const hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        img.setAttribute('src','img/manha.png')
        bodyStyle.backgroundColor = '#a6f5a2'
    } else if (hora >= 12 && hora < 18){
        img.setAttribute('src','img/tarde.png')
        bodyStyle.backgroundColor = '#eb9d21'
    } else {
        img.setAttribute('src','img/noite.png')
        bodyStyle.backgroundColor = '#170387'
    }
}