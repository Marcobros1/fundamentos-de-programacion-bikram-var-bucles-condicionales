//1. variable let declarada sin valor (queda undefined)
let variableSinValor;
console.log("1. variableSinValor =", variableSinValor);

//2. dos variables let con valores booleanos
let booleano1 = true;
let booleano2 = false;
console.log("2. booleano1 =", booleano1, "| booleano2 =", booleano2);

//3. const con el valor de PI
const PI = 3.14;
console.log("3. PI =", PI);

//4. const con el doble de PI
const TAU = 2 * PI;
console.log("4. TAU =", TAU);

//5. booleano1 and booleano2
let booleanoAnd = booleano1 && booleano2;
console.log("5. booleanoAnd =", booleanoAnd);

//6. no booleano1
let booleanoNot = !booleano1;
console.log("6. booleanoNot =", booleanoNot);

//7. (booleano1 or booleano2) and (booleano1 or (not booleano1 and not booleano2))
let booleanoMix0 =
    (booleano1 || booleano2) &&
    (booleano1 || (!booleano1 && !booleano2));
console.log("7. booleanoMix0 =", booleanoMix0);

//8. postincremento: resultadoDesp queda con el valor ANTES de incrementar
let incrementarDesp = 2;
let resultadoDesp = incrementarDesp++;
console.log("8. incrementarDesp =", incrementarDesp, "| resultadoDesp =", resultadoDesp);

//9. preincremento: resultadoAntes queda con el valor YA incrementado
let incrementarAntes = 2;
let resultadoAntes = ++incrementarAntes;
console.log("9. incrementarAntes =", incrementarAntes, "| resultadoAntes =", resultadoAntes);

//10. for incrementando hasta que contarHasta10_2 === 10
let contarHasta10_2 = 0;
for (; contarHasta10_2 !== 10; contarHasta10_2++) { }
console.log("10. contarHasta10_2 =", contarHasta10_2);

//11. 11 iteraciones: postI suma el valor de postJ++ (suma 0, 1, 2... 10)
let postI = 0;
let postJ = 0;
for (let k = 0; k < 11; k++) {
    postI += postJ++;
}
console.log("11. postI =", postI, "| postJ =", postJ);

//12. 10 iteraciones (i < 10): si i es par, se suma a sumaPares
let sumaPares = 0;
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        sumaPares += i;
    }
}
console.log("12. sumaPares =", sumaPares);

//13. variable let con un valor numérico cualquiera
let variableValorNumerico = 18;
console.log("13. variableValorNumerico =", variableValorNumerico);

//14. const con mi nombre
const MiNombre = "Marco";
console.log("14. MiNombre =", MiNombre);

//15. const con mi número favorito
const MiNumeroFav = 0;
console.log("15. Sí, mi número favorito es: ", MiNumeroFav, " por razones matemáticas que si quieres un día explico");

//16. booleano1 or booleano2
let booleanoOr = booleano1 || booleano2;
console.log("16. booleanoOr =", booleanoOr);

//17. (booleano1 and TAU/2 igual a PI) or (variableValorNumerico >= MiNumeroFav)
let booleanoMix1 =
    (booleano1 && TAU / 2 === PI) ||
    (variableValorNumerico >= MiNumeroFav);
console.log("17. booleanoMix1 =", booleanoMix1);

//18. 6 no es estrictamente igual que 9
let seisNoEsNueve = 6 !== 9;
console.log("18. seisNoEsNueve =", seisNoEsNueve);

//19. variableValorNumerico positivo o menor que -(MiNumeroFav * TAU)
let booleanoMix2 =
    variableValorNumerico > 0 ||
    variableValorNumerico < -(MiNumeroFav * TAU);
console.log("19. booleanoMix2 =", booleanoMix2);

//20. suma de MiNumeroFav y variableValorNumerico
let valorSuma = MiNumeroFav + variableValorNumerico;
console.log("20. valorSuma =", valorSuma);

//21. resta de MiNumeroFav menos variableValorNumerico
let valorResta = MiNumeroFav - variableValorNumerico;
console.log("21. valorResta =", valorResta);

//22. multiplicación de MiNumeroFav por variableValorNumerico
let valorMultiplicacion = MiNumeroFav * variableValorNumerico;
console.log("22. valorMultiplicacion =", valorMultiplicacion);

//23. división de MiNumeroFav entre 3
let valorDivision = MiNumeroFav / 3;
console.log("23. valorDivision =", valorDivision);

//24. while incrementando hasta que contarHasta10 === 10
let contarHasta10 = 0;
while (contarHasta10 !== 10) {
    contarHasta10++;
}
console.log("24. contarHasta10 =", contarHasta10);

//25. 11 iteraciones: preI suma el valor de ++preJ (suma 1, 2... 11)
let preI = 0;
let preJ = 0;
for (let k = 0; k < 11; k++) {
    preI += ++preJ;
}
console.log("25. preI =", preI, "| preJ =", preJ);

//26. 10 iteraciones (i < 10): si i es impar, se suma a sumaImpares
let sumaImpares = 0;
for (let i = 0; i < 10; i++) {
    if (i % 2 === 1) {
        sumaImpares += i;
    }
}
console.log("26. sumaImpares =", sumaImpares);
console.log("Si lees esto te lo agradezco de corazón, gracias por la paciencia que nos teneis en clase y por cuidarnos tan bien, seguir así :D");