console.log("hello");

// Recipe section(when recipe button is clicked)
// we need to listen to even listner "click"
// when clicked we need to display the recipe title, list of ingriedients, instructions and picture
// create function called displayOneReipe,that will take event listner and fetch data function
// -button3- ❤️ favourite
const apiKey = "c5913eaac9ab46d8816d5024addb348a";

const recipes = document.getElementById("recipe");
recipes.addEventListener("click", displayOneRecipe);

//create display one recipe function
// fetch data from fetchData function() and save it in singleRecipe variable
async function displayOneRecipe(){
    const data = await fetchData();
    console.log(data.recipes[0].id)

    //display title
    const title = document.getElementById("title");
    title.textContent = data.recipes[0].title

    //display ingredients
    //const ingredients = document.getElementById("ingredients");
    

    //display list of ingredients
    const ingriedientsList = document.getElementById("ingredientsList");
    const extendedIngredients = data.recipes[0].extendedIngredients;
    for (let i = 0; i < extendedIngredients.length; i++){
    const ingredient = extendedIngredients[i].name
    const li = document.createElement("li");
    li.textContent = ingredient;
    ingriedientsList.appendChild(li);
    }


// for (let i = 0; i < extendedIngredients.length; i++) {
//     const ingredient = extendedIngredients[i].name; // Get the ingredient name
//     const li = document.createElement("li"); // Create a new list item
//     li.textContent = ingredient; // Set the text of the list item
//     ingredientsList.appendChild(li); // Append the list item to the ingredients list
// }


    //display istructions
    const instructions = document.getElementById("instructions");

    //display list of instructions
    const instructionsList = document.getElementById("instructionsList");

    //display image
    const image = document.getElementById("recipePicture");
    image.src = data.recipes[0].image

    
 
}
// async function displayTitle(){
//     const title = document.getElementById("title");
//     console.log(data.recipes[0].title)
// }





async function fetchData() {
    try {
      const response = await fetch(`https://api.spoonacular.com/recipes/random?number=1&apiKey=${apiKey}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      // Handle your data
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle any errors
    }
  }
