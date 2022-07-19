import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const WEAK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();

  const forecastDays = WEAK_DAYS.slice(dayInAWeek, WEAK_DAYS.length).concat(
    WEAK_DAYS.slice(0, dayInAWeek)
  );
  console.log(forecastDays);
  return (
    <>
      <Accordion  allowZeroExpanded>
        {data.list.splice(0, 7).map((item, index) => (
          <AccordionItem className="py-1 md:py-2 bg-white shadow-lg rounded-lg my-4" key={index}>
            <AccordionItemHeading>
              <AccordionItemButton className="m-8">
                <div>
                  <div>
                    <div>
                      <div className="flex justify-between">
                        <div className="flex flex-row items-center">
                            <img
                              className="w-20 h-20 object-cover rounded-full border-2 border-my-dark-purple p-2"
                              src={`icons/${item.weather[0].icon}.png`}
                            />
                            <div className="mx-4">
                              <h2 className="text-gray-800 text-xl font-bold">
                                {forecastDays[index]}
                              </h2>
                              <p className="text-gray-800 text-xl font-semibold">
                                {item.weather[0].description}
                              </p>
                          </div>
                        </div>
                        <div>
                          <h2 className="text-my-purple text-3xl font-bold">
                            {Math.round(item.main.temp)}ºC
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="m-12">
              <div className=" mt-4 text-gray-600 border-t-2 border-my-dark-purple">
                <p className="text-gray-800 text-lg font-semibold mt-2">Details</p>
                <div className="flex justify-between">
                  <div>Feels like</div>
                  <div className="text-my-dark-purple font-bold">
                    {Math.round(item.main.feels_like)}ºC
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>Humidity</div>
                  <div className="text-my-dark-purple font-bold">
                    {Math.round(item.main.humidity)}%
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>Max/Min</div>
                  <div className="text-my-dark-purple font-bold">
                    {Math.round(item.main.temp_max)}/
                    {Math.round(item.main.temp_min)}ºC
                  </div>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
