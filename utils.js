export function renderIngredientsList(item) {
    const li = document.createElement('li');
    li.textContent = `${item.name} ${item.quantity} ${item.measurement}`;
    return li;
}