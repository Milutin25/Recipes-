const recipes = [
    {
        id: 1,
        title: "Spaghetti Carbonara",
        image: "images/spaghetti_carbonara.jpg",
        ingredients: ["Spaghetti", "Eggs", "Bacon", "Parmesan cheese", "Garlic", "Black pepper"],
        instructions: "Cook spaghetti according to package instructions. Meanwhile, fry bacon until crispy. In a bowl, whisk eggs, grated Parmesan cheese, minced garlic, and black pepper. Drain cooked spaghetti and toss in the egg mixture. Add cooked bacon and mix well. Serve hot."
    },
    {
        id: 2,
        title: "Chicken Alfredo",
        image: "images/chicken_alfredo.jpg",
        ingredients: ["Fettuccine", "Chicken breast", "Heavy cream", "Butter", "Garlic", "Parmesan cheese"],
        instructions: "Cook fettuccine according to package instructions. In a skillet, cook diced chicken breast until no longer pink. Add minced garlic and cook until fragrant. Pour in heavy cream and simmer until thickened. Stir in grated Parmesan cheese and cooked fettuccine. Serve hot."
    },
    {
        id: 3,
        title: "Pesto Pasta",
        image: "images/pesto_pasta.jpg",
        ingredients: ["Pasta of your choice", "Fresh basil leaves", "Pine nuts", "Garlic", "Parmesan cheese", "Olive oil", "Salt", "Black pepper"],
        instructions: "Cook pasta of your choice according to package instructions. In a food processor, combine fresh basil leaves, pine nuts, minced garlic, grated Parmesan cheese, olive oil, salt, and black pepper. Blend until smooth to make the pesto sauce. Toss cooked pasta with the pesto sauce until well coated. Serve warm or at room temperature."
    },
    {
        id: 4,
        title: "Lemon Garlic Shrimp Linguine",
        image: "images/lemon_garlic_shrimps.jpg",
        ingredients: ["Linguine pasta", "Shrimp", "Butter", "Olive oil", "Garlic", "Lemon juice", "Lemon zest", "Red pepper flakes", "Salt", "Black pepper", "Fresh parsley"],
        instructions: "Cook linguine pasta according to package instructions. In a skillet, heat butter and olive oil over medium heat. Add minced garlic and red pepper flakes, then cook until fragrant. Add shrimp and cook until pink and opaque. Stir in lemon juice and lemon zest, then season with salt and black pepper. Toss cooked linguine with the shrimp mixture and chopped fresh parsley. Serve immediately."
    },
    {
        id: 5,
        title: "Margherita Pizza",
        image: "images/margherita_pizza.jpg",
        ingredients: ["Pizza dough", "Tomato sauce", "Fresh mozzarella cheese", "Fresh basil leaves", "Olive oil", "Salt", "Black pepper"],
        instructions: "Preheat oven to 475°F (245°C). Roll out pizza dough on a baking sheet. Spread tomato sauce evenly over the dough. Tear fresh mozzarella cheese and distribute it over the sauce. Sprinkle with torn fresh basil leaves, then drizzle with olive oil. Season with salt and black pepper. Bake in the preheated oven for 12-15 minutes, or until crust is golden and cheese is bubbly. Slice and serve hot."
    },
    {
        id: 6,
        title: "Beef Tacos",
        image: "images/beef_tacos.jpg.",
        ingredients: ["Ground beef", "Taco seasoning", "Taco shells", "Lettuce", "Tomatoes", "Onions", "Shredded cheese", "Sour cream", "Salsa", "Avocado (optional)"],
        instructions: "In a skillet, cook ground beef over medium heat until browned. Drain excess fat and stir in taco seasoning according to package instructions. Heat taco shells according to package instructions. Assemble tacos by filling each shell with cooked ground beef, shredded lettuce, diced tomatoes, chopped onions, shredded cheese, sour cream, salsa, and sliced avocado if desired. Serve immediately."
    },
    {
        id: 7,
        title: "Chicken Stir-Fry",
        image: "images/chicken_stir_fry.jpg",
        ingredients: ["Chicken breast", "Vegetables (such as bell peppers, broccoli, carrots, and snap peas)", "Soy sauce", "Sesame oil", "Garlic", "Ginger", "Cornstarch", "Rice or noodles"],
        instructions: "Slice chicken breast into thin strips. In a wok or large skillet, heat sesame oil over medium-high heat. Add minced garlic and ginger, then stir-fry until fragrant. Add chicken strips and cook until no longer pink. Add chopped vegetables and stir-fry until tender-crisp. In a small bowl, mix soy sauce and cornstarch, then add to the wok. Cook until the sauce thickens and coats the chicken and vegetables. Serve hot over rice or noodles."
    }
];

const button = document.getElementById("submit"); 

button.addEventListener('click', () => {
    const searchRecipe = document.getElementById("searchInput").value.trim().toLowerCase();
    const displaySearchResult = document.getElementById("searchResults");
    let foundRecipes = []; 
    
    recipes.forEach(recipe => {
        let found = false;

        recipe.ingredients.forEach(ingredient => {
            const filterIngredient = ingredient.trim().toLowerCase(); 
            if (searchRecipe === filterIngredient) {
                foundRecipes.push(recipe); 
                found = true;
            }
        });
        if (found) { 
            displaySearchResult.innerHTML = "";
        }
    });

    if (foundRecipes.length === 0) {
        displaySearchResult.innerHTML = "No recipes found."
    } else { 
        foundRecipes.forEach(recipe => { 
        const listItem = document.createElement("li");
        listItem.className = "listItem"
        listItem.innerHTML += `
        <h3>${recipe.title}</h3>
        <img src="${recipe.image}" width=50% alt="${recipe.title}">
        <p>Ingredients: ${recipe.ingredients}</p>
        <p>${recipe.instructions}</p>
        <button onClick="addToFavorites(${recipe.id})">Add to favourites <i class="fa-regular fa-heart"></i></button>
        `;
        displaySearchResult.appendChild(listItem);
    });
    };
});

function addToFavorites(recipeId) {
    const recipe = recipes.find(recipe => recipe.id === recipeId);
    if (!recipe) return;

    const favoriteRecipesList = document.getElementById('favorites');
    const clonedRecipe = document.createElement('li');
    clonedRecipe.className = "cloned";
    clonedRecipe.innerHTML = `
        <h3>${recipe.title}</h3>
        <img src="${recipe.image}" alt="${recipe.title}" width="50%">
        `
    ;
    favoriteRecipesList.appendChild(clonedRecipe);
}

