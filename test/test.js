import funciones from "../lib/funciones.js"

console.log('-------------------------------------------------------------')
console.log('transformarStringEnArrayDeNumeros')
console.log(funciones.transformarStringEnArrayDeNumeros('123 | 456 | 789 | 1bc | 10', ' | '))

console.log('-------------------------------------------------------------')
console.log('transformarArrayDeNumerosAUnSoloString')
console.log(funciones.transformarArrayDeNumerosAUnSoloString([123, 456, 789, 10], ','))

console.log('-------------------------------------------------------------')
console.log('combinarDosArrays')
console.log(funciones.combinarDosArrays([1,3,5,10], [2,3,8,11]))

console.log('-------------------------------------------------------------')
console.log('combinarNArrays')
console.log(funciones.combinarNArrays([[1, 10], [2, 3, 15, 16], [4], [6, 7, 13]]))

console.log('-------------------------------------------------------------')
console.log('leerArchivoComoString')
console.log(funciones.leerArchivoComoString('./files/hola.txt'))

console.log('-------------------------------------------------------------')
console.log('escribirTextoEnArchivo')
funciones.escribirTextoEnArchivo('./files/chau.txt', 'chau', false)

console.log('-------------------------------------------------------------')
funciones.escribirTextoEnArchivo('./files/chau.txt', 'chau', true)