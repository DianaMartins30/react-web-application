import "./App.css";
import CurrentWeather from "./components/current-weather/current-weather";
import Search from "./components/search/search";
import { WEATHER_API_URL } from "./api";
import { WEATHER_API_KEY } from "./api";
import { useState } from "react";
import Forecast from "./components/forecast/forecast";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handlerOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();
        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  };

  console.log(currentWeather);
  console.log(forecast);

  return (
    <div className="App">
      <div className=" max-w-5xl my-5 mx-auto p-4">
        <p className="text-my-dark-purple text-6xl font-bold my-12">
          check the weather{" "}
        </p>
        <Search className="m-4" onSearchChange={handlerOnSearchChange} />
        <div className="flex flex-col md:flex-row md:justify-between md:space-x-4">
          <div className="md:grow">
            {currentWeather && (
              <p className="text-my-dark-purple text-6xl font-bold my-8 mb-16">
                today
              </p>
            )}
            {currentWeather && (
              <CurrentWeather data={currentWeather} className="w-auto" />
            )}
          </div>
          <div>
            {forecast && (
              <p className="text-my-dark-purple text-6xl font-bold my-8 mb-16">
                next-week
              </p>
            )}
            {forecast && <Forecast data={forecast} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
