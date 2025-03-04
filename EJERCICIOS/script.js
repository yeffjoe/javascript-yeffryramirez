// Función para verificar si una persona es mayor o menor de edad

/*function verificarEdad(edad) {
    if (edad >= 18) {
        document.write("Eres mayor de edad.");
    } else {
        document.write("Eres menor de edad.");
    }
}

// Ejemplo 1
let edad = prompt("Ingresa tu edad:");
verificarEdad(parseInt(edad));*/





// Función para comparar dos números A y B

/*function compararNumeros(A, B) {
    if (A > B) {
        document.write("A es mayor que B.");
    } else if (A < B) {
        document.write("A es menor que B.");
    } else {
        document.write("A es igual a B.");
    }
}

// Ejemplo 3
let A = prompt("Ingresa el valor de A:");
let B = prompt("Ingresa el valor de B:");
compararNumeros(parseInt(A), parseInt(B));*/



// Función para determinar el estado del peso de una persona


/*function determinarEstadoPeso(peso) {
    // Verificar el rango del peso y mostrar el mensaje correspondiente
    if (peso <= 40) {
        document.write("Persona baja de peso.");
    } else if (peso >= 41 && peso <= 70) {
        document.write("Persona peso promedio.");
    } else {
        document.write("Persona con sobrepeso.");
    }
}

// Ejemplo 5
let peso = prompt("Ingresa tu peso en kilogramos:");
determinarEstadoPeso(parseFloat(peso));*/




// Función para comparar las edades de dos personas

/*function compararEdades(nombre1, edad1, nombre2, edad2) {
    // Verificar cuál de las dos personas tiene más edad
    if (edad1 > edad2) {
        document.write(nombre1 + " tiene más edad que " + nombre2 + ".");
    } else if (edad1 < edad2) {
        document.write(nombre2 + " tiene más edad que " + nombre1 + ".");
    } else {
        document.write(nombre1 + " y " + nombre2 + " tienen la misma edad.");
    }
}

// Ejemplo de 9

let nombre1 = prompt("Ingresa el nombre de la primera persona:");
let edad1 = prompt("Ingresa la edad de " + nombre1 + ":");

let nombre2 = prompt("Ingresa el nombre de la segunda persona:");
let edad2 = prompt("Ingresa la edad de " + nombre2 + ":");

compararEdades(nombre1, parseInt(edad1), nombre2, parseInt(edad2));*/







// Pedir dos números al usuario

/*let num1 = parseInt(prompt("Introduce el primer número:"));
let num2 = parseInt(prompt("Introduce el segundo número:"));

// Validar si los valores ingresados son números
if (isNaN(num1) || isNaN(num2)) {
    console.log("Por favor, ingresa números válidos.");
} else {
    // Verificar las condiciones
    if (num1 === num2) {
        // Si los números son iguales, multiplicarlos
        console.log("El resultado de la multiplicación es: " + (num1 * num2));
    } else if (num1 > num2) {
        // Si el primer número es mayor que el segundo, restarlos
        console.log("El resultado de la resta es: " + (num1 - num2));
    } else {
        // Si el primer número es menor que el segundo, sumarlos
        console.log("El resultado de la suma es: " + (num1 + num2));
    }
}*/



// Pedir los datos al usuario
/*let peso = parseFloat(prompt("Introduce tu peso en kilogramos:"));
let altura = parseFloat(prompt("Introduce tu altura en metros (por ejemplo, 1.75):"));

// Validar que el peso y la altura sean números positivos
if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    console.log("Por favor, ingresa valores válidos para el peso y la altura.");
} else {
    // Calcular el IMC
    let imc = peso / (altura * altura);

    // Mostrar el IMC calculado
    console.log("Tu IMC es: " + imc.toFixed(2));

    // Clasificar según el IMC
    if (imc < 18.5) {
        console.log("Estás bajo peso.");
    } else if (imc >= 18.5 && imc < 25) {
        console.log("Tienes un peso normal.");
    } else if (imc >= 25 && imc < 30) {
        console.log("Tienes sobrepeso.");
    } else {
        console.log("Tienes obesidad.");
    }
}*/
