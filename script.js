console.log("hello");

// Recipe section(when recipe button is clicked)
// we need to listen to even listner "click"
// when clicked we need to display the recipe title, list of ingriedients, instructions and picture
// create function called displayOneReipe,that will take event listner and fetch data function
// -button3- ❤️ favourite
const apiKey = "c5913eaac9ab46d8816d5024addb348a";

const recipes = document.getElementById("recipe");
recipes.addEventListener("click", displayOneRecipe);

const myFavourites = document.getElementById("favourites");
myFavourites.addEventListener("click", displayFavourites);

let randomRecipe = null;

//create display one recipe function
// fetch data from fetchData function() and save it in singleRecipe variable
async function displayOneRecipe(){

    //show recepie section
    const recipeSection = document.getElementById("recipeSection");
    recipeSection.style.display = "block";

    //hide myfavourites section
    const myFavourites = document.getElementById("myFavouritesSection");
    myFavourites.style.display = "none";

    const data = await fetchData();
    console.log(data.recipes[0].id)
    randomRecipe = data.recipes[0];
    updateFavouritesButtonText();

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

    let listFavourites =[];

    const favourites = document.getElementById("updateFavourite");
    favourites.addEventListener("click", updateFavourites);
    //create new function updateFav to update array list of favourites
    //create empty arr listFavourites which will be updated when button "updateFavourites" will be clicked


//'update favourites' button to change when clicked to delete from favouries
// if randomRecipe is not null && is in favourites change "update button" writing to "delete from favourites"

    function updateFavourites(){
       if (randomRecipe === null){
            return;
        }else if (isInFavourites()){
            deleteFromFavourites();
        }else{
            listFavourites.push(randomRecipe); 
           // displayFavourites();
        }
        updateFavouritesButtonText()
    }
   
   
        // //crrate condition to change text of the button:
        // let updateFavText = document.getElementById("updateFavourite")
        // updateFavText.addEventListener("click", function)
        // let deleteFavText = document.getElementById("Delete from Favourites");
        // deleteFavText.addEventListener("click", function) 
       
    function updateFavouritesButtonText(){    
        const updateFavourite = document.getElementById("updateFavourite");
        if (isInFavourites()){
            updateFavourite.textContent = "Delete from Favourites";
               } else {
                updateFavourite.textContent = "Update Favourites";
               }
        //updateFavourite clicked, change text to "delete form favourites"
        //else, if delete from favourites, change text to "updatFavourite"
    }

    function deleteFromFavourites(){
        
        listFavourites = listFavourites.filter(recipe => recipe.id !== randomRecipe.id);
        //const deleteRecipe = document.getElementById("updateFavourite");
        //deleteRecipe.textContent = "Delete from Favourites";
       
    }


// // const people = [
//     { id: 1, name: "Alice" },
//     { id: 2, name: "Bob" },
//     { id: 3, name: "Charlie" }
// ];

// const idToRemove = 2;

// const updatedPeople = people.filter(person => person.id !== idToRemove);

// console.log(updatedPeople);
// // Output: 
// // [{ id: 1, name: "Alice" }, { id: 3, name: "Charlie" }]



    function isInFavourites(){
        for (let i = 0; i < listFavourites.length; i++ ){
            if(listFavourites[i].id === randomRecipe.id){
                return true;
            }
        }
        return false;
    }
  
    function displayFavourites(){
        const recipeSection = document.getElementById("recipeSection")
        recipeSection.style.display = "none";

        const myFavouritesSection = document.getElementById("myFavouritesSection")
        myFavouritesSection.style.display = "block";



        const favouritesDisplay = document.getElementById("favouritesDisplay");
        favouritesDisplay.replaceChildren();
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


 
