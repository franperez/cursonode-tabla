const colors = require('colors');
const { rejects } = require('assert');
const fs = require('fs');

const crearArchivo = async (base = 5, listar=false, hasta=10 ) => {
    try {


        let salida, consola = '';

        for (let i = 1; i <= hasta; i++) {
            salida += ` ${base} x ${i} = ${base * i}\n`;
            consola += ` ${base} ${'x'.green} ${i} = ${base * i}\n`;

        }
        if (listar=== true) {
            console.log('===================');
            console.log(colors.green(`== TABLA DEL ${base}   ==`));
            console.log('===================');
            console.log(consola);

        }
        fs.writeFileSync(`./salida/table-${base}.txt`, salida);
        // (resultado)
        // ? resolve(resultado)
        // : reject(err,'el archivo no fue creado')
        //console.log(`TABLA DEL ${base} CREADA`);
        return `TABLA DEL ${base} `

    } catch (error) {
        throw error

    }

}



// para exportar el archivo

module.exports = {
    crearArchivo
}