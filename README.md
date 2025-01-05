# christmas-challenge-2024
I am creating a project where I will train all the skills while learning on School of Code Bootcamp



I want to create a site to showcase what I’ve learned so far and provide a space to practice and develop new skills. I have completed 4 weeks of the School of Code Intensive Bootcamp—8 more to go! 😎

Idea: Create website with favourite recipes!




Tickets:
UI
T1: Create Main Page and link the following
    - index.html✅
    - script.js✅
    - style.css✅
create title and 2 buttons: 
button1- recipe ✅
button2- my favourites✅

T2: Recipe section(when button1 is clicked)✅ - WORKS!!!!!!!🔥
-when clicked on button "recipe" title✅, list of ingriedients✅, instructions✅ and picture will appear✅
-button3- ❤️ favourite ✅

T3: Favourites section (when button2 is clicked)
-show list of favourites recipes✅

button4- name of favourite recipe in the list ✅- when clicked on "button4" title, list of ingriedients, instructions and picture will appear, 
button5-"delete from favourites" delete from favourites button (next to the title) ✅

T4:
functionality -> js






Website:
Create simple welcome website: "Kids favourite meals"
files to be made: 
    style.css
    script.js
        connect button to action
        connect display boxes to action

        fetch data from external API 
            *select a free public API. (https://github.com/public-apis/public-apis)
            *verify your API
            *buid application   
                -define your core features
                -sketch a basic UI layout
                -identify which data points will be used
            *development phase
                -set your project structure
                -implement the fetch request
                ```javascript
                        async function fetchData() {
                            try {
                            const response = await fetch('your-api-endpoint');
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
                        ```
                -create DOM elements to display the data
                -add error handling and loading states


    index.html
        create and manipulate DOM
            display box - "Recipe of the day:
                buttonHeart - ❤️

            display pic box

            display box - "list of favourites"

            display box with listed "list of favourites"

        


(Check if files are comunicating between each other)



SERVER

 // create RESTful API Server
  //database info downloaded in json format
  //create js, json, gitignore instal in vscode
  //npm install express
  // api endpoints to check on postman
  // helper functions - ?

create REST API server
    technical requirements:
        *javascript
        *node.js
        *UI: none(check postman/API responses)
        *create a JSON file with your data. Here's 3 examples of sites you can find cool data: Kaggle, Google Datasets, and Awesome Datasets 






//Common CSS Properties for Images
Here are some common properties you might use:

width & height: Control the dimensions.
border: Add borders (solid, dashed, dotted, etc.).
border-radius: Create rounded corners.
box-shadow: Add shadows.
filter: Apply effects like grayscale or blur.
css
Copy code







Brief list of topicks covered so far:
* Learning how to learn
* VSCode
* Git
* GitHub
* JavaScript Fundamentals
* Variables
* Loops
* Objects
* Arrays
* Functions
* The DOM
* Events
* Fetch
* Postman
* Tapping into APIs
* Creating APIs
* Servers
* NodeJS
* Express
* HTTP Methods
* REST