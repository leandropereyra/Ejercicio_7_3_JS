const hoy = new Date()

const fechaNacimiento = new Date(1983, 10, 25)

const comparativa = hoy > fechaNacimiento
console.log('Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento: ' + comparativa)

const diaNacimiento = fechaNacimiento.getDate()
console.log('Una variable que contenga el día de tu nacimiento: ' + diaNacimiento)

const mesNacimiento = fechaNacimiento.getMonth()
console.log('Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0): ' + mesNacimiento)

const anyoNacimiento = fechaNacimiento.getFullYear()
console.log('Una variable que contenga el año de tu nacimiento (con 4 dígitos): ' + anyoNacimiento)