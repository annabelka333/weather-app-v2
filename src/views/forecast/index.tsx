import { FC } from "react";

import useForecast from "../../hooks/useForecast";
import { Coordinates } from "../../interfaces/she-weather.interface";

const Forecast: FC<{coords: Coordinates}> = ({coords}) => {
    const { isLoading, data } = useForecast(coords);

  console.log('Forecast', data);

  if (isLoading) {
    return "Loading ...";
  }

  return (
    <div className="WeatherForecast">
      <div className="row">
        {/* {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })} */}
      </div>
    </div>
  );
}

export default Forecast;