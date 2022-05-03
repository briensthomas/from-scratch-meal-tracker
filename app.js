// import functions and grab DOM elements
import { renderIngredientsList } from './utils.js';
const ingredientForm = document.getElementById('add-ingredient');

const ingredientsList = document.getElementById('ingredients-list');
const removeIngredientButton = document.getElementById('remove-ingredient');
// let state
let ingredientsArray = [];
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

ingredientForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const ingredientData = new FormData(ingredientForm);

    let ingredients = {
        name: ingredientData.get('ingredient-name'),
        quantity: ingredientData.get('ingredient-quantity'),
        measurement: ingredientData.get('ingredient-measurement'),
    };
    ingredientsArray.push(ingredients);
    console.log('logging ingredients', ingredientsArray);
    displayIngredientsList();
    ingredientForm.reset();
});

const displayIngredientsList = () => {
    ingredientsList.textContent = '';
    for (let item of ingredientsArray) {
        const li = renderIngredientsList(item);
        ingredientsList.append(li);
    }
};

removeIngredientButton.addEventListener('click', () => {
    ingredientsArray.pop();
    console.log(ingredientsArray);
    displayIngredientsList();
});