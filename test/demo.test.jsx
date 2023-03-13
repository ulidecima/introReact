const mensaje1 = "  MENSAJE: HOLA MUNDO    ";
const mensaje2 = mensaje1.trim(); // .trim() se usa para quitar los espacios al principio y al final del string

test("Comprobando si mensaje1 y mensaje2 son iguales", () => {
  expect(mensaje1).not.toBe(mensaje2); // .not.toBe se usa para comparar si los parametros NO son iguales
});
