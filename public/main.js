const cityName = document.getElementById("cityName")
const submitBtn = document.getElementById("submitBtn")
const city_name = document.getElementById("city_name")

const temperature = document.getElementById("temperature");
const temp_status = document.getElementById("temp_status");




const day = document.getElementById("day");
// const date = document.getElementById("date");
var weekday = new Array(7)
weekday[0] = "Sun"
weekday[1] = "Mon"
weekday[2] = "Tue"
weekday[3] = "Wed"
weekday[4] = "Thrs"
weekday[5] = "Fri"
weekday[6] = "Sat"
let currentDate = new Date();


var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

var now = new Date();
day.innerHTML = `${weekday[currentDate.getDay()]} || ${now.getDate()} || ${months[now.getMonth()]} `


















const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityName.value;

    if (cityVal === "") {
        city_name.innerText = `Please write City Name before Search`
        temperature.innerText = 0;
        temp_status.innerHTML = '<i class="fas fa-sun " style="color: yellow;"></i>'
    }
    else {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=57ce85823974200cb412db852fb58ee1`
            const response = await fetch(url)
            const data = await response.json();
            const arrData = [data];
            city_name.innerText = `${arrData[0].name} , ${arrData[0].sys.country}`
            temperature.innerText = parseInt(arrData[0].main.temp - 273);

            const tempp = arrData[0].weather[0].main

            if (tempp == "Sunny") {
                temp_status.innerHTML = '<i class="fas fa-sun " style="color: yellow;"></i>'
            }
            else if (tempp == "clouds") {
                temp_status.innerHTML = '<i class="fas fa-cloud" style="color: #fff;"></i>'
            }
            else if (tempp == "Smoke") {
                temp_status.innerHTML = '<i class="fas fa-cloud" style="color: #fff;"></i>'
            }
            else if (tempp == "Haze") {
                temp_status.innerHTML = '<i class="fas fa-cloud" style="color: #fff;"></i>'
            }
            else if (tempp == "Rainy") {
                temp_status.innerHTML = '<i class="fas fa-cloud-showers-heavy" style="color: #fff;"></i>'
            }
        }

        catch {
            city_name.innerText = `Please enter the city Name properly`
            temperature.innerText = 0;

        }
    }
}
cityVal = " ";

submitBtn.addEventListener("click", getInfo);