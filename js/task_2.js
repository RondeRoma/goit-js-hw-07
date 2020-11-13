const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
  const ulIngredients = document.querySelector('#ingredients');
  const list = ingredients.map(ingredient=>{
      const liIngredients = document.createElement('li');
      liIngredients.textContent = ingredient;
      return liIngredients
  });
  console.log(list);
  ulIngredients.append(...list);