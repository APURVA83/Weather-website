var inputvalue = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var wrapper = document.querySelector('.wrapper');
var city = document.querySelector('#cityoutput');
var description = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var apik = "63a90ae96d390ec37d6c1252f5a86e1a";

function convertion(val) {
    return (val - 273).toFixed(3);
}

btn.addEventListener('click', function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=' + apik)
        .then(res => res.json())
        .then(data => {
            var nameval = data['name'];
            var descrip = data['weather'][0]['description'];
            var temperature = data['main']['temp'];
            var wndspeed = data['wind']['speed'];

            // Update the HTML content
            city.innerHTML = 'Weather Report of <span>' + nameval + '<span>';
            temp.innerHTML = 'Temperature: <span>' + convertion(temperature) + '°C</span>';
            description.innerHTML = 'Sky Conditions: <span>' + descrip + '</span>';
            wind.innerHTML = 'Wind Speed: <span>' + wndspeed + ' m/s</span>';

            // Show the .wrapper element
            wrapper.style.display = 'block';
        })
        .catch(err => alert('You entered wrong city name'));
});
