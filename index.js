const body = document.querySelector("body");
const recipeListEl = document.createElement("ol"); // Create a unordered list element

const stepOneEl = document.createElement("li"); // Create a new list item element
stepOneEl.innerText = "Toast some bread"; // Update the text of the list item
recipeListEl.appendChild(stepOneEl); // Add the item as a child of the recipe list

const stepTwoEl = document.createElement("li"); // Repeat for the second instruction
stepTwoEl.innerText = "Spread butter on the toast";
recipeListEl.appendChild(stepTwoEl);

body.appendChild(recipeListEl); // Add the recipe list onto the body of the page

const addRecipe = (title, steps) => {
    const recipeTitle = document.createElement('p');
    recipeTitle.innerText = title;
    body.appendChild(recipeTitle);
    const recipe = document.createElement('ol');
    steps.map((step) => {
        const newStep = document.createElement('li');
        newStep.innerText = step;
        recipe.appendChild(newStep);
    });
    body.appendChild(recipe);
};

addRecipe('Birthday Cake Recipe!', ["Mix ingredients", "Bake for 20 mins", "Decorate!"]);

const button = document.querySelector('#joke');
button.addEventListener('click', () => {
    fetch('https://official-joke-api.appspot.com/random_joke')
    .then((response) => response.json())
    .then((response) => {
        const oldJoke = document.querySelector('#jokeSetup');
        if (oldJoke) {
            oldJoke.remove();
        }
        const oldJokePunchline = document.querySelector('#jokePunchline');
        if (oldJokePunchline) {
            oldJokePunchline.remove();
        }
        const randomJokeSetup = document.createElement('p');
        randomJokeSetup.id = 'jokeSetup';
        randomJokeSetup.innerText = response.setup;
        body.appendChild(randomJokeSetup);
        const randomJokePunchline = document.createElement('p');
        randomJokePunchline.id = 'jokePunchline';
        randomJokePunchline.innerText = response.punchline;
        body.appendChild(randomJokePunchline);
    });
})

todoButton = document.querySelector('#todo').addEventListener('click', () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((response) => {
        const todo = document.createElement('p');
        todo.innerText = response.title;
        body.appendChild(todo);
    })
})
