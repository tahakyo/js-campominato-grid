// Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

// Genero numeri da 1 -->100 
const gridSize = 100;
const gridArray = generateGridNumber(gridSize);
// per ogni numero creo un grid-item
const gridContainer = document.querySelector(".grid-container");
for (let i = 0; i < gridArray.length; i++) {
    // creo un elemento html
    const newElement = document.createElement('div')

    // creo lo span con il numero 
    newElement.innerHTML = `<span>${gridArray[i]}</span>`
    // assegno la classe grid-item
    newElement.classList.add("grid-item");
    // aggiungo all'elemento appena creato la gestione del click
    newElement.addEventListener("click", function() {
        this.classList.add("active");
    })
    // appendo questo elemento al contenitore
    gridContainer.append(newElement);

}
// functions

function generateGridNumber(gridNumberQuantity) {
    // creo un array per generarci dentro il numero di celle corrispondente al grid size
    const arrayNumber = [];
    // genero i numeri corrsipondenti al grid size
    for (let i = 1; i <= gridNumberQuantity; i++) {
        const cellNumber = i;
    // faccio il push dei numeri generati dentro l array
        arrayNumber.push(cellNumber);
    }
    return arrayNumber;
}
