/*
    factorial de 10 con bucle while, if y break
*/

let f = 10;
let i = 1;
while (i <= 10) {
    f *= i;
    i++;
    if (f === 0) {
        console.log("Error");
        break;
    }
}
console.log(`el factorial de 10 es ${f}`);