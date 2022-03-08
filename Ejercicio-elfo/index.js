// Transforma el texto a un objeto que contenga el nombre de cada regalo y las veces que aparece. Por ejemplo, si tenemos el texto:

// const carta = 'bici coche balón _playstation bici coche peluche'
// Al ejecutar el método debería devolver lo siguiente:

// const regalos = listGifts(carta)

// console.log(regalos)
// /*
// {
//   bici: 2,
//   coche: 2,
//   balón: 1,
//   peluche: 1
// }
// */
// Ten en cuenta que los tests pueden 
const carta = ' bici  coche balón _playstation bici coche peluche'


function listGifts(carta) {

    const cartaSpace = carta.trim()
    const regalosCarta = cartaSpace.split(" ");
    const listaRegalos = {};
    regalosCarta.map((eachGift) => {

        if (eachGift.charAt(0) != "_" && eachGift) {


            if (!listaRegalos[eachGift]) {
                listaRegalos[eachGift] = 1
            } else {
                ++listaRegalos[eachGift]
            }




        }

    })
    return listaRegalos
}



console.log(listGifts(carta))
