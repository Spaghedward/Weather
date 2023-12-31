var searchBtn = document.getElementById('button')
var userInput = document.getElementById('form1');
var table = document.getElementById('table');
var existingSaved = JSON.parse(localStorage.getItem('saved')) ?? [];

// Created an event listener to fetch data from the open weather map based on the user input.
// Then the data is converted to JSON and the showdata function is called with data arguement.
searchBtn.addEventListener('click', function () {
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + userInput.value + "&units=imperial&exclude=hourly,minutely&appid=c994a9739d6f85220d0662ea56c8f64b").then
        (response => response.json()).then(data => {
            console.log(data);
            showData(data);
        })
})

// This function takes the different data from the fetch request and puts it in the desired element.
// Upon completion, the savesearch function is called.
function showData(data) {
    for (let i = 0; i < 6; i++) {
        document.getElementById('day' + (i + 1)).innerHTML = data.list[i].dt_txt;
        document.getElementById('image' + (i + 1)).src = ("https://openweathermap.org/img/wn/" + data.list[i].weather[0].icon + ".png")
        document.getElementById('temp' + (i + 1)).innerHTML = "Temp:  " + data.list[i].main.temp + ' F';
        document.getElementById('humid' + (i + 1)).innerHTML = "Humidity:  " + data.list[i].main.humidity + '%';
        document.getElementById('wind' + (i + 1)).innerHTML = "Wind Speed:  " + data.list[i].wind.speed + "MPH";

    }
    document.getElementById('city').innerHTML = userInput.value;
    savesearch();
}

// This function stores the user input in local storage and puts them in a list
//  under the search bar.  You should be able to click them and bring up their
// data, but I couldn't quite figure that out. My attempt is below.
function savesearch() {
    var savedCity = userInput.value;
    var existingSaved = JSON.parse(localStorage.getItem('saved')) ?? [];
    var newSaved = existingSaved.concat(savedCity)
    localStorage.setItem('saved', JSON.stringify(newSaved));
    for (var i = 0; i < newSaved.length; i++) {
        var li = document.createElement('li');
        var newButton = document.createElement("button");
        newButton.setAttribute('class', 'btn')
        newButton.setAttribute('type', 'button')
        newButton.innerHTML = newSaved[i];
        li.appendChild(newButton);
        table.appendChild(li);

    }
}


// button.addEventListener('click', function() {
//     fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + newButton.value + "&units=imperial&exclude=hourly,minutely&appid=c994a9739d6f85220d0662ea56c8f64b").then
//     (response => response.json()).then(data => {
//         console.log(data);
//         showData(data);
//     })
// })    


