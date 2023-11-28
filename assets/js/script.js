var button = document.getElementById('button')
var userInput = document.getElementById('form1');


// function search() {
//     var apiKey = "c994a9739d6f85220d0662ea56c8f64b";
//     var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+userInput+"&limit=1&appid="+apiKey;
//     fetch(queryURL);
//         // .then(response => response.json())
//         // .then(data => console.log(data))
//     // console.log(response);
//     console.log(userInput.val);
//     console.log(queryURL);

// }

button.addEventListener('click', function() {
    const fetchpromise = fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + userInput.value + "&units=imperial&appid=c994a9739d6f85220d0662ea56c8f64b");
    fetchpromise.then((response) => response.json());
    fetchpromise.then((response) => {
        console.log(response);
    })
    fetchpromise.then(data => {
        for (let i = 0; i < 5; i++) {
           document.getElementById('day' + (i+1)).innerHTML = data.list[i].dt;
           document.getElementById('image' + (i+1)).src ="https://openweathermap.org/img/wn/" +data.list[i].weather.icon+ ".png"
           document.getElementById('temp' +(i+1)).innerHTML = data.list[i].main.temp;
           document.getElementById('humid' +(i+1)).innerHTML = data.list[i].main.humidity;
           document.getElementById('wind' +(i+1)).innerHTML = data.list[i].wind.speed
            
        }
    })

    console.log(userInput.value);
    localStorage.setItem('city', userInput.value)
})
    
    
