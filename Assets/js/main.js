const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", (event) => {
    event.preventDefault();
    menu.classList.toggle("hidden");
});





//Get the APIform element from HTML & put an event when the button is clicked & prevent the page from reloading
document.getElementById("CallAPI").addEventListener("click",function (event) {
    event.preventDefault();

    //Get the value from user input
    var limit = document.getElementById("InputAPI").value;

    //Parameters:
    // limit (optional) - How many results to return. Must be between 1 and 30. Default is 1.

    // Headers:
    // X-Api-Key (required) - API Key associated with my account.
    //Convert the API data to text using Fetch object method
    fetch('https://api.api-ninjas.com/v1/jokes?limit=' + limit,
        {headers: {'X-Api-Key': 'uye+QpFeXftpZGuc3TffUw==75J23bChHm3ji5Kn'},
        })
        .then(function (response) {
            //The API call was successful
            return response.json();
        }).then(function (data) {
        //This is the JSON from our response
        displayData(data);
    }).catch(function (error) {
        //There was an error
        console.warn(error);
    })});


// Function to display API data in the "apiResults" div
function displayData(data) {
    var apiResultsDiv = document.getElementById("apiResults");

    // Clear previous content
    apiResultsDiv.innerHTML = '';

    // Process and display each joke from the API data
    data.forEach(function (joke) {
        // Create a new paragraph element for each joke
        var paragraph = document.createElement("p");
        var space =  document.createElement("br");

        // Set the text content of the paragraph to the joke
        paragraph.textContent = '"' + joke.joke + '"';


        // Append the paragraph to the "apiResults" div
        apiResultsDiv.appendChild(paragraph);
        apiResultsDiv.appendChild(space);

    });
}


