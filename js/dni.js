const LETRAS_DNI = [
    "T",
    "R",
    "W",
    "A",
    "G",
    "M",
    "Y",
    "F",
    "P",
    "D",
    "X",
    "B",
    "N",
    "J",
    "Z",
    "S",
    "Q",
    "V",
    "H",
    "L",
    "C",
    "K",
    "E"
];

function averiguarLetra(numeroDni){
    var resto = numeroDni % 23;
    return LETRAS_DNI[resto]
}

function imprimir(numeroDNI){
    var letra = averiguarLetra(numeroDNI);
    document.write(`El DNI completo es ${numeroDNI}-${letra}.`);
    console.log(`El DNI completo es ${numeroDNI}-${letra}.`);
}

function dniCompleto(numeroDni){
    imprimir(numeroDni);
}

var numeroDNI = Number(prompt('Ingresa el número de DNI, por favor.'));

dniCompleto(numeroDNI);