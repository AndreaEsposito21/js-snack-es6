// Snack - 1
// 1 Creare un array di oggetti: 
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. 
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal Snack

const arrayBici = [
    {
        nome: 'Bianchi',
        peso: 6
    },
    {
        nome: 'Mountain bike',
        peso: 11
    },
    {
        nome: 'Venom',
        peso: 9
    },
    {
        nome: 'Star Trek',
        peso: 14
    }
];

let biciLeggera = arrayBici[0];
for( let i = 0; i < arrayBici.length; i++ ) {
    let thisBici = arrayBici[i];

    if( thisBici.peso < biciLeggera.peso ) {
        biciLeggera = thisBici;
    }
}

// Destructuring
//
let { nome, peso} = biciLeggera;

// Template Literal
//
let bicicletta = `
    <h3>
        La bicicletta più leggera è:
    </h3>
    <ul>
        <li>
            ${nome}
        </li>

        <li>
            ${peso} kg
        </li>
    </ul>
`;

// Stampa
//
document.getElementById('testo').innerHTML = bicicletta;

// Snack - 2
// 2 Creare un array di oggetti di squadre di calcio. 
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. 
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. 
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. 
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.