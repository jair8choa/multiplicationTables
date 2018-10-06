const fs = require('fs');

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`Err --base -b: ${base} no es un validor valido`);
            return;
        } else if (!Number(limite)) {
            reject(`Err --limite -l: ${limite} no es un validor valido`);
            return;
        }
        for (let num = 1; !(num > limite); num++) {
            resolve(console.log(`${ base }*${ num }=`.blue, `${ base*num }`.bgBlue));
        }
    })
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`Err --base -b: ${base} no es un validor valido`);
            return;
        } else if (!Number(limite)) {
            reject(`Err --limite -l: ${limite} no es un validor valido`);
            return;
        }
        let data = '';
        for (let num = 1; !(num > limite); num++) {
            data += `${ base }*${ num }=${ base*num }\n`;
        }

        fs.writeFile(`multi/tabla-${base}-${limite}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${base}.txt`);
            }
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla,
}