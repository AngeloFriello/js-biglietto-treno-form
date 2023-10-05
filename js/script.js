// # calcolare il prezzo del biglietto del treno
// - chiedere al passeggero come si chiama
//     - creare una variabile che prenda dall'imput i dati dell'utente

let nameDOMElement = document.getElementById('name');
console.log(nameDOMElement);

// - chiedere al passeggero quanti km vuole percorrere
//     - creare una variabile che prenda dall'imput i dati dell'utente

let inputKmDOMElement = document.getElementById('kmdapercorrere');
console.log(inputKmDOMElement);

// - definire il prezzo al km base di (0.21$ al km)
//     - creare una variabile che indichi il prezzo fisso al km

let kmPrezzo = 0.21;
console.log(kmPrezzo);

// - indicare se il passeggero sia minorenne maggiorenne o over 65
//     - creare una variabile per lo sconto

let scontoDOMElement = document.getElementById('sconto');



// - creare un bottone che confermi i dati
//     - creare un evento collegato al bottone che inivia i dati alla variabile

let buttonDOMElement = document.getElementById('conferma');
console.dir(buttonDOMElement);


buttonDOMElement.addEventListener('click', function (event){

    event.preventDefault();

    const kmDaPercorrere = parseFloat(inputKmDOMElement.value);
	console.log(kmDaPercorrere);

    const utenteSconto = parseFloat(scontoDOMElement.value);

    if (scontoDOMElement.value == 0) {

        kmPrezzo = kmDaPercorrere * ((0.21 * 80) / 100 );

    } else if  (inputKmDOMElement.value == 1) {
        kmPrezzo = kmDaPercorrere * 0.21;

    } else { // (inputKmDOMElement.value == 2)

        kmPrezzo = kmDaPercorrere * ((0.21 * 60) / 100 );
    }


    let prezzoDOMElement = document.getElementById('prezzo');
    prezzoDOMElement.innerHTML = kmPrezzo.toFixed(2) + '&euro;';
})


// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65
// - far comparire il prezzo finale con lo sconto aplicato










