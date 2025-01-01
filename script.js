console.log("hello");

// Recipe section(when recipe button is clicked)
// we need to listen to even listner "click"
// when clicked we need to display the recipe title, list of ingriedients, instructions and picture
// create function called displayOneReipe,that will take event listner and fetch data function
// -button3- ❤️ favourite

const recipes = document.getElementById("recipe");
recipes.addEventListener("click", displayOneRecipe);

async function displayOneRecipe(){
    const data = await fetchData()
    console.log(data.recipes[0].id)
}

const apiKey = "c5913eaac9ab46d8816d5024addb348a";

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
displayOneRecipe(data);