
const API_KEY = `d2f4a269e003b26f47993a0f6c2f371e`

const lodeWeatherInfo = city => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    .then(res => res.json())
    .then(data => displayWeatherInfo(data))
}

 const displayWeatherInfo = info => {
    console.log(info.weather[0].description);
    setInnerTextById("temp", info.main.temp)
    setInnerTextById("w_info", info.main.temp)
 }

 // set innner text by id funciton---------//
 const setInnerTextById = (id, text) => {
    const tempreture = document.getElementById(id);
    tempreture.innerText = text;
 }

 document.getElementById('btn_search').addEventListener('click' , function(){

    // get input 
    const input_field =  document.getElementById('input_field');
    const city = input_field.value;
    document.getElementById('city_name').innerText = city;

    lodeWeatherInfo(city);
 } )

lodeWeatherInfo('dhaka')