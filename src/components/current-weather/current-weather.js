const CurrentWeather = ({ data }) => {
  return (
    <div>
      <div class="py-4 px-8 bg-white shadow-lg rounded-lg">
        <div class="flex justify-center -mt-16">
          <img
            class="w-20 h-20 object-cover rounded-full border-2 border-my-dark-purple p-2  bg-white"
            src={`icons/${data.weather[0].icon}.png`}
          />
        </div>
        <div>
          <div class="flex justify-between">
            <div>
              <h2 class="text-gray-800 text-xl font-bold">{data.city}</h2>
              <p class="text-gray-800 text-xl font-semibold">
                {data.weather[0].description}
              </p>
            </div>
            <div>
              <h2 class="text-my-purple text-3xl font-bold">
                {Math.round(data.main.temp)}ºC
              </h2>
            </div>
          </div>

          <div class=" mt-4 text-gray-600 border-t-2 border-my-dark-purple">
            <p class="text-gray-800 text-lg font-semibold mt-2">Details</p>
            <div class="flex justify-between">
              <div>Feels like</div>
              <div class="text-my-dark-purple font-bold">
                {Math.round(data.main.feels_like)}ºC
              </div>
            </div>
            <div class="flex justify-between">
              <div>Humidity</div>
              <div class="text-my-dark-purple font-bold">
                {Math.round(data.main.humidity)}%
              </div>
            </div>
            <div class="flex justify-between">
              <div>Max/Min</div>
              <div class="text-my-dark-purple font-bold">
                {Math.round(data.main.temp_max)}/{Math.round(data.main.temp_min)}ºC
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
