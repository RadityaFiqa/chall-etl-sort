const data = require('./data.json');

function comparearraykey(key) {
    return function innerSort(a, b) {
        const varA = a[key];
        const varB = b[key];
        let comparison = 0;
        if (varA > varB) {
            comparison = 1;
        } else if (varA < varB) {
            comparison = -1;
        }
        return comparison
    };
}

console.log('----DATA JSON AWAL---');
console.log(data);
console.log('\n\n---SORT BY KEY ID---');
const sortid = data.sort(comparearraykey('id'));
//PRINT SORT ARRAY BY KEY NAMA AS REQUEST
for (i = 0; i < sortid.length; i++) {
    console.log(`${sortid[i].id} - ${sortid[i].nama} - ${sortid[i].umur}`)
}
console.log('\n\n---SORT BY KEY NAMA---');
const sortnama = data.sort(comparearraykey('nama'));
//PRINT SORT ARRAY BY KEY NAMA AS REQUEST
for (i = 0; i < sortnama.length; i++) {
    console.log(`${sortnama[i].id} - ${sortnama[i].nama} - ${sortnama[i].umur}`)
}
console.log('\n\n---SORT BY KEY UMUR---');
const sortumur = data.sort(comparearraykey('umur'));
//PRINT SORT ARRAY BY KEY NAMA AS REQUEST
for (i = 0; i < sortumur.length; i++) {
    console.log(`${sortumur[i].id} - ${sortumur[i].nama} - ${sortumur[i].umur}`)
}
