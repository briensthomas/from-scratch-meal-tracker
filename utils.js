export function renderIngredientsList(item) {
    const li = document.createElement('li');
    li.textContent = `${item.name} ${item.quantity} ${item.measurement}`;
    return li;
}

export function renderMealsList(meal) {
    const li = document.createElement('li');
    li.textContent = `${meal.name} - ${meal.totalIngredients} ingredients`;
    return li;
}