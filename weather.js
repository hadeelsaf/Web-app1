//determine the constant of the id function, because HTML can’t be used directly in JavaScript
var inputval = document.querySelector('#cityinput')
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var descrip = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
apik = "3045dd712ffe6e702e3245525ac7fa38"
//convert the temperature scale from Kelvin to Celsius
function convertion(val)
{
  return (val - 273).toFixed(2)
}
//get the data with the help of the fetch method
btn.addEventListener('click', function(){
  console.log("hello");
    //The weather data comes from this API
    inputval = document.querySelector('#cityinput').textContent;
    console.log(inputval);
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apik)
  .then(res => res.json()).then(data => {
    //get the data from the API and store it in different constants
    console.log(data);
    var nameval = data['name']
    var descrip = data['weather']['0']['description']
    var tempature = data['main']['temp']
    var wndspd = data['wind']['speed']
    //set the data that needs to be displayed using HTML
    city.textContent =`Weather of <span>${nameval}<span>`
    temp.textContent = `Temperature: <span>${ convertion(tempature)} C</span>`
    description.textContent = `Sky Conditions: <span>${descrip}<span>`
    wind.textContent = `Wind Speed: <span>${wndspd} km/h<span>`
  })
  //An error message appears. This message is displayed when we don’t enter a city name or when we enter the wrong name
  .catch(err => alert('You entered Wrong city name'))
})