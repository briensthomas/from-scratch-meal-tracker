// import functions and grab DOM elements
import { renderIngredientsList, renderMealsList } from './utils.js';
const ingredientForm = document.getElementById('add-ingredient');
const ingredientsList = document.getElementById('ingredients-list');
const removeIngredientButton = document.getElementById('remove-ingredient');

const mealSubmitButton = document.getElementById('meal-submit');
const mealInput = document.getElementById('meal-input');
const mealsList = document.getElementById('meal-list');
// let state
let ingredientsArray = [];
let mealsArray = [];
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
    displayIngredientsList();
});

mealSubmitButton.addEventListener('click', () => {
    const name = mealInput.value;
    let totalIngredients = ingredientsArray.length;
    
    mealsArray.push({
        name,
        totalIngredients,
    });
    displayMealsList();
});

const displayMealsList = () => {
    mealsList.textContent = '';
    for (let meal of mealsArray) {
        const li = renderMealsList(meal);
        mealsList.append(li);
    }
};