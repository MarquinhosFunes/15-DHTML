function eliminar(){
    let puntero = document.getElementById('parrafos')
    let valorPos = document.getElementById('posicion').value
    if (valorPos < puntero.children.length)
    puntero.removeChild(puntero.children[valorPos-1])
}