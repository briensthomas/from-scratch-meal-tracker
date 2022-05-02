// import functions and grab DOM elements
const ingredientForm = document.getElementById('add-ingredient');
const ingredientName = document.getElementById('ingredient-name');
const ingredientQuantity = document.getElementById('ingredient-quantity');
const ingredientMeasurement = document.getElementById('ingredient-measurement');
const ingredientSubmit = document.getElementById('ingredient-submit');

// let state
let ingredientList = [];
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

ingredientSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    const ingredientData = new FormData(ingredientForm);

    let ingredients = {
        name: ingredientData.get('ingredient-name'),
        quantity: ingredientData.get('ingredient-quantity'),
        measurement: ingredientData.get('ingredient-measurement'),
    };
    console.log('logging ingredients', ingredients);
});