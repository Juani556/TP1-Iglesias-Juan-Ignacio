import fs from 'fs';

function leerArchivoComoString(ruta) {

    return fs.readFileSync(ruta, 'utf-8')
}

function escribirTextoEnArchivo(ruta, texto, flag) {

    

    if (flag) {
        fs.writeFileSync(ruta, texto)
    } else {
        try {
            fs.writeFileSync(ruta, texto, {flag: 'r+'})
        } catch (ex) {
            console.log("El archivo no existe")
        }
    }
   
}

function transformarStringEnArrayDeNumeros(texto, separador) {

    let array = texto.split(separador)

    return array.filter((numero) => !isNaN(numero))
    
}

function transformarArrayDeNumerosAUnSoloString(numeros, separador) {
    return numeros.join(separador)
}

function combinarDosArrays(array1, array2) {

    let response = []

    let i = 0
    let j = 0
    let k = 0

    while (i < array1.length && j < array2.length) {

        if (array1[i] < array2[j]) {
            response[k++] = array1[i++]
        } else if (array2[j] < array1[i]) {
            response[k++] = array2[j++]
        } else {
            response[k++] = array1[i++]
            j++
        }
    }

    while (i < array1.length) {
        response[k++] = array1[i++]
    }

    while (j < array2.length) {
        response[k++] = array2[j++]
    }


        return response;
    }

function combinarNArrays(matrix) {
    let response = []

    let i = 0

    while (i < matrix.length) {
        
        response = combinarDosArrays(response, matrix[i++])

    }

    return response;

}

export default {
    leerArchivoComoString,
    escribirTextoEnArchivo,
    transformarArrayDeNumerosAUnSoloString,
    transformarStringEnArrayDeNumeros,
    combinarDosArrays,
    combinarNArrays
}