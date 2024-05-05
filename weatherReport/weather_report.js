function showweatherDetails(event) {
  event.preventDefault();

  const latitude = document.getElementById("latitude").value;
  const longitude = document.getElementById("longitude").value;
  const apiKey = "put your apikey here";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const weatherInfo = document.getElementById("weatherInfo");
      weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
    <p>Temperature: ${data.main.temp} &#8457;</p>
    <p>Weather: ${data.weather[0].description}</p>`;
    })
    .catch((error) => {
      console.error("Error Fetching weather:", error);
      const weatherInfo = document.getElementById("weatherInfo");
      weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
    });
}

document
  .getElementById("weatherForm")
  .addEventListener("submit", showweatherDetails);
