
let city = prompt("Вкажіть місто, яке Вас цікавить", "Lviv");


fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`)
.then(res => res.json())
.then(data => {    
        let tempV = data.main.temp
        let hum = data.main.humidity
        let press = data.main.pressure
        let descr = data.weather[0].description    
        let icon = data.weather[0].icon    
        let windSpeed = data.wind.speed
        let windDeg = data.wind.deg    

    let weathTemp = document.querySelector(".temp")
    let weathPres = document.querySelector(".pressure")
    let weathHum = document.querySelector(".humidity")
    let weathDescr = document.querySelector(".description")
    let weathIcon = document.querySelector(".icon")
    let weathWindSpeed = document.querySelector(".speed")
    let weathWindDeg = document.querySelector(".deg")
    let cityValue = document.querySelector(".city")
    
    
    weathTemp.innerHTML = "Temperature: " + tempV + " C"
    weathPres.innerHTML = "Pressure: " + press + " Bar"
    weathHum.innerHTML = "Humidity: " + hum + " %"
    weathDescr.innerHTML = descr
    // weathIcon.innerHTML = icon
    weathWindSpeed.innerHTML = "Wind speed: " + windSpeed + " m/s"
    weathWindDeg.innerHTML = "Wind direction: " + windDeg + " degrees"
    cityValue.innerHTML = city
})

