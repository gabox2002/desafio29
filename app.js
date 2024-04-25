const fs = require("fs");
const util = require("util");

const readFile = () => {
    const file = fs.readFileSync("./desafio29.txt");
    const data = file.toString();
    const processInfo = util.inspect(process);
    const rows = data.split(/\r?\n/);
    const matriz = rows
        .filter((row) => row.trim() !== "")
        .map((row) => row.split(" "));
    console.log(matriz);
    console.log(`Información del proceso: ${processInfo}`);

    const lineCount = matriz.length;
    console.log(`Números de líneas: ${lineCount}`);

    const totalWords = matriz.reduce((acc, row) => acc + row.length, 0);
    console.log(`Número de palabras: ${totalWords}`);

    const charCount = data.replace(/\s/g, "").length;
    console.log(`Número de caracteres: ${charCount}`);
};

readFile();
