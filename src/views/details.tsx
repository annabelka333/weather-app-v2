import { FC } from "react";
import Temperature from "../components/temperature";
import FormattedDate from "../components/today";
import WeatherIcon from "../components/icon";
import { SheWeather } from "../interfaces/she-weather.interface";

const Detail:FC<{data: SheWeather}> = ({data}) => {
  console.log('WeatherInfo: ', data);

  const { description, icon } = data.condition;
  const { humidity, current } = data.temperature;
  const windSpeed = data.wind.speed;
  
  return (
    <div className="WeatherInfo">
      <h1>{data.city}</h1>
      <ul>
        <li>
          {" "}
          <FormattedDate date={data.time} />
        </li>
        <li className="text-capitalize">{description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex">
            <div className="float-left">
              <WeatherIcon code={icon} size={52} />
            </div>

            <div className="float-left mr-2">
              <Temperature celsius={current} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity:{humidity}%</li>
            <li>Wind:{Math.round(windSpeed)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Detail;