# christmas-challenge-2024
I am creating a project where I will train all the skills while learning on School of Code Bootcamp



I want to create a site to showcase what I’ve learned so far and provide a space to practice and develop new skills. I have completed 4 weeks of the School of Code Intensive Bootcamp—8 more to go! 😎

Idea: Create Kids favourite recipes!


Brief list of topicks covered: 
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


Tickets:
UI
T1: Create Main Page
    - index.html
    - scripts.js
    - styles.css
create title and 2 buttons: 
button1- recipe
button2- my favourites

T2: Recipe section(when button1 is clicked)
-when clicked on button "recipe" title, list of ingriedients, instructions and picture will appear
-button3- ❤️ favourite

T3: Favourites section (when button2 is clicked)
-show list of favourites recipes
button4- name of favourite recipe- when clicked on "button4" title, list of ingriedients, instructions and picture will appear, 
button5-❌ delete from favourites button (next to the title)

T4:
functionality -> js


SERVER

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





create REST API server
    technical requirements:
        *javascript
        *node.js
        *UI: none(check postman/API responses)
        *create a JSON file with your data. Here's 3 examples of sites you can find cool data: Kaggle, Google Datasets, and Awesome Datasets 












