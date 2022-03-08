// El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas un lío. 😱

// Las cartas son una cadena de texto que incluyen regalos y paréntesis ().

// Para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran correctamente y que, además, no vayan vacíos.

// ¡Pero ojo! Porque el Grinch ha dejado llaves { y corchetes [ dentro de los paréntesis que hacen que no sean válidas. Por suerte sólo los ha dejado en medio de los paréntesis...

// Ejemplos:
// Crea una función que pasándole el texto de la carta, devuelva true si es válida y false si no lo es. ¡Y acaba con la travesura del Grinch!
const checkLetter = (letter) => {
    return (
        letter.indexOf("(") < letter.indexOf(")") &&
        !letter.includes("()") &&
        !letter.includes("{") &&
        !letter.includes("[") &&
        letter.includes("(") &&
        letter.includes(")")
    );
};
console.log(checkLetter("bici coche (balón) bici coche peluche"));
console.log(checkLetter("() bici"));
console.log(checkLetter("(peluche {) bici"));
console.log(checkLetter("bici coche (balón bici coche"));