// Snack - 1
// 1 - Creare un array di oggetti: 
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. 
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal Snack

const arrayBici = [
    {
        nome: 'Bianchi',
        peso: 16
    },
    {
        nome: 'Mountain bike',
        peso: 15
    },
    {
        nome: 'Venom',
        peso: 19
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
// 2 - Creare un array di oggetti di squadre di calcio. 
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. 
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. 
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. 
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const squadreCalcio = [
    {
        squadra: 'Samarcanda',
        punti: 0,
        falli: 0
    },
    {
        squadra: 'Belfast',
        punti: 0,
        falli: 0
    },
    {
        squadra: 'Leningrado',
        punti: 0,
        falli: 0
    },
    {
        squadra: 'New Amsterdam',
        punti: 0,
        falli: 0
    }
];

for( let i = 0; i < squadreCalcio.length; i++ ) {
    let thisSquadra = squadreCalcio[i];

    // Punti fatti
    thisSquadra.punti = numeroRandom(1, 100);

    // Falli subiti
    thisSquadra.falli = numeroRandom(100, 300);

};

// Destructuring
//
// const [primoElemento, secondoElemento, terzoElemento, quartoElemento] = squadreCalcio;
let nuoveSquadre = [];
for ( let i = 0; i < squadreCalcio.length; i++) {
    let thisSquadra = squadreCalcio[i];

    let {squadra, falli} = thisSquadra;

    const oggettoNuoveSquadre = {
        squadra,
        falli
    };

    nuoveSquadre.push(oggettoNuoveSquadre);
};

console.log(nuoveSquadre);

// Funzione
//
function numeroRandom (min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};