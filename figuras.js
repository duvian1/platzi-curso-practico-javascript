//código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}

//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return lado * lado;
}

//console.log("El área del cuadrado es: " + areaCuadrado + "cm");

console.groupEnd();

//código del triangulo
console.group("Triangulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log(
//     "Los lados del triángulo miden: "
//     + ladoTriangulo1 + "cm, "
//     + ladoTriangulo2 + "cm, "
//     + baseTriangulo + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triangulo es: " + alturaTriangulo + "cm");

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
// console.log("El area del triangulo es: " + areaTriangulo + "cm^2");

function perimetroTriangulo(lado1, lado2, base3) {
    return lado1 + lado2 + base3;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

console.groupEnd();

//código del circulo
console.group("Circulos");

//Radio
//const radioCirculo = 4;

//Diámetro
//const diametroCirculo = radioCirculo * 2;

//PI
const PI = Math.PI;

//circuferencia
//const perimetroCirculo = diametroCirculo * PI;

//Area
//const areaCirculo = (radioCirculo * radioCirculo) * PI;

// console.log("El radio del circulo  es: " + radioCirculo + "cm");
// console.log("El diametro del circulo  es: " + diametroCirculo + "cm");
// console.log("PI es: " + PI);
// console.log("El perimeto del circulo  es: " + perimetroCirculo + "cm");
// console.log("El area del circulo  es: " + areaCirculo + "cm^2");

function diametroCirculo(radio) {
    return radio * 2;
}

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();

//Áqui se interactua con el html
function calcularPermitroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);

}

//funciones para calcular perimetro,area y altura del triangulo
function calcularPermitroTriangulo() {
    debugger
    const inputLado1 = document.getElementById("InputLado1");
    const inputLado2 = document.getElementById("InputLado2");
    const base = document.getElementById("InputLado3");
    const lado1 = inputLado1.value;
    const lado2 = inputLado2.value;
    const lado3 = base.value;
    const perimetroTria = perimetroTriangulo(lado1, lado2, lado3);
    alert(perimetroTria);
}


function calcularAreaTriangulo() {
    const altura = document.getElementById("InputAltura");
    const base = document.getElementById("InputLado3");
    const areaT = areaTriangulo(base.value, altura.value);
    alert(areaT);
}

//funciones para calcular circulo
function calcularDiametroCirculo() {
    const radio = document.getElementById("InputRadio");   
    alert(diametroCirculo(radio.value));
}

function calcularPerimetroCirculo() {
    const radio = document.getElementById("InputRadio");   
    alert(perimetroCirculo(radio.value));

}

function calcularAreaCirculo() {
    const radio = document.getElementById("InputRadio");   
    alert(areaCirculo(radio.value));
}






