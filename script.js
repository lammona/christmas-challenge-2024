console.log("hello");

// Recipe section(when recipe button is clicked)
// we need to listen to even listner "click"
// when clicked we need to display the recipe title, list of ingriedients, instructions and picture
// create function called displayOneReipe,that will take event listner and fetch data function
// -button3- ❤️ favourite
const apiKey = "c5913eaac9ab46d8816d5024addb348a";

const recipes = document.getElementById("recipe");
recipes.addEventListener("click", displayOneRecipe);
let randomRecipe = null;

//create display one recipe function
// fetch data from fetchData function() and save it in singleRecipe variable
async function displayOneRecipe(){
    const data = await fetchData();
    console.log(data.recipes[0].id)
    randomRecipe = data.recipes[0];

    //display title
    const title = document.getElementById("title");
    title.textContent =  randomRecipe.title

    //display list of ingredients
    const ingriedientsList = document.getElementById("ingredientsList");
    const extendedIngredients =  randomRecipe.extendedIngredients;
    for (let i = 0; i < extendedIngredients.length; i++){
        const ingredient = extendedIngredients[i].original
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

    // //display list of instructions - there arent any instructions provided in api
    // const instructionsList = document.getElementById("instructionsList");

        //display image
        const image = document.getElementById("recipePicture");
        image.src =  randomRecipe.image

    }      

    const listFavourites =[];

    const favourites = document.getElementById("updateFavourite");
    favourites.addEventListener("click", updateFavourites);
    //create new function updateFav to update array list of favourites
    //create empty arr listFavourites which will be updated when button "updateFavourites" will be clicked

    function updateFavourites(){
        if (randomRecipe === null){
            return;
        }else if (isInFavourites()){
            return;
        }else{
            listFavourites.push(randomRecipe); 
            displayFavourites();
        }
    }
   
    function isInFavourites(){
        for (let i = 0; i < listFavourites.length; i++ ){
            if(listFavourites[i].id === randomRecipe.id){
                return true;
            }
        }
        return false;
    }
  
    function displayFavourites(){
        const favouritesDisplay = document.getElementById("favouritesDisplay");

        for (let i = 0; i < listFavourites.length; i++){
            const li = document.createElement("li");
            li.textContent = listFavourites[i].title;
            favouritesDisplay.appendChild(li);
        }
    }


// function favouritesList(){
//     if (favourites){
// listFav.push(displayOneRecipe.title)
// const favList = document.getElementById("favouritesDisplay");
// const li = document.createElement("li");
// li.textContent = listFavourites;
// ///favList.appendChild(li)
//     }

// }



// Ticket 3 Favourites section (when "favourites" button is clicked)
// 
// create function favourites            which will display list of favourites recepies
// add event listner to favourites button
// inside that function create array which will hold all of favourites recipes by title 
// append favourites array every time when favourites button is clicked
//
//-show list of favourites recipes


// button4- name of favourite recipe- when clicked on "button4" title, list of ingriedients, instructions and picture will appear, 
// button5-❌ delete from favourites button (next to the title)




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


 
