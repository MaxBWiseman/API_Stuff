fetch("https://ci-swapi.herokuapp.com/api/")
    .then(response => response.text()) // or .json()
    .then(data => {
        document.getElementById("content").innerText = data;
    });
//this code is fetching data from the internet and displaying it on the page
//This is a good starting point for working with APIs