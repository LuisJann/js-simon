/*Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri spariscono e l'utente deve inserire, uno alla volta, 
i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei 
numeri da indovinare sono stati individuati. */

const minNum = 1;
const maxNum = 99;
const totalNum = 5; 
const timer = 3000;

const rndNumber = document.querySelector(".numbers");
console.log(rndNumber);
//genriamo i numeri casuali che dovrà memorizzare l'utente
//generatore numeri casuali
const numberArray = generateRndNumbersArray(totalNum, minNum, maxNum,)
console.log(numberArray);
rndNumber.innerHTML += `${numberArray}`


//nascondiamo i numeri
setTimeout(function(){
    rndNumber.innerHTML = "";
}, timer);

//chiediamo all'utente questi numeri
setTimeout(function() {

    // Chiedere all'utente i numeri memorizzati e salvarli nell'array
    const userNumbers = getUserNumbers(totalNum);
    console.log(userNumbers);

    // Verificare quali numeri sono stati indovinati, salvare i numeri indovinati un un'array
    const guessedNumbers = findCommonElements(numberArray, userNumbers);
    console.log(guessedNumbers);

    // Stampare l'output con la quantità di numeri indovinati e i numeri stessi
    printResult(guessedNumbers);

}, timer + 1000);



// FUNCTIONS
/**
 * Description: generiamo un array di numeri random non duplicati 
 * @param {number} arrayLength: la lunghezza dell'array finale
 * @param {number} min: il minore
 * @param {number} max: il maggiore
 * @returns {Array} array di numeri generato
 */
 function generateRndNumbersArray(arrayLength, min, max) {
    const rndNumber = [];
    while (rndNumber.length < arrayLength) {
      const newNumber = getRndInteger(min, max);
      if (!rndNumber.includes(newNumber)) {
          rndNumber.push(newNumber);
      }
    }
    return rndNumber;
    console.log(rndNumber);
  }

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Description: chiediamo 5 numeri all'utente e li agggiungiamo ad un array vuoto
 * @param {number} totalNum - numero di tentativi dati all'utente
 * @returns {Array} numeri inseriti dall'utente
 */
 function getUserNumbers(totalNum) {
    const userNumArray = [];
    for (let i = 0; i < totalNum; i++) {
        const userNumber = parseInt(prompt("Dimmi un numero"));
        userNumArray.push(userNumber);
    }
    return userNumArray;
}

/**
 * Description: confrontiamo i due array e controlliamo se sono uguali
 * @param {Array} firstArray - primo array 
 * @param {Array} secondArray - il secondo array 
 * @returns {Array} l'array di numeri in comune
 */
 function findCommonElements(firstArray, secondArray) {
    const result = [];
    // Ciclare il primo array, per ogni elemento dell'array
    for (let i = 0; i < firstArray.length; i++) {
        // Se questo elemento è incluso nel secondo array
        const thisElement = firstArray[i];
        if (secondArray.includes(thisElement)) {
            // Lo pusho nell'array risultante
            result.push(thisElement);
        }
    }
    return result;
}

/**
 * Description: Stampa i numeri indovinati e la loro quantità
 * @param {any} resultArray - array di numeri da stampare
 */
 function printResult(resultArray) {
    document.querySelector(".result").innerHTML = `Hai indovinato ${resultArray.length} numeri: ${resultArray}`;
}