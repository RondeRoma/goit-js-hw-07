const allCategories = document.querySelectorAll('.item');
console.log(`В списке ${allCategories.length} категорий`)

allCategories.forEach(category=>{
    console.log(`Категория: ${category.querySelector('h2').textContent}`);
    console.log(`Количество элементов: ${category.querySelectorAll('li').length}`, );
});