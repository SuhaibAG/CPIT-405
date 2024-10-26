
const input = document.getElementById("input");
const key = "77ff9dc89b424d489fc123202242610&"

const cityOut = document.getElementById("city")
const tempOut = document.getElementById("temp")
const windOut = document.getElementById("wind")

input.addEventListener("keyup", async function checkCity(e){ 
    if(e.key === 'Enter'){ 
        let city = input.value;
        console.log(city)
        let url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no"`
        try {

          const response = await fetch(url);

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const data = await response.json();
          console.log(data);
          
          cityOut.innerText = `City : ${data.location.name}`
          tempOut.innerText = `Tempreture : ${data.current.temp_c}`
          windOut.innerText = `Wind : ${data.current.wind_kph}`
      
        } catch (error) {
          console.error("Error fetching weather data:", error);
        }

      }

});