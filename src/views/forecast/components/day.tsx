
import React, { FC } from "react";
import { isDaytime, maxTemperature, minTemperature, weekDay } from "../../../utils/commons";
import { WeatherMap } from "../../../interfaces/weather.interface";
import WeatherIcon from "../../../components/icon";
// import "./DayNightWrapper.css";

interface PropsType{
    sunrise: number;
    sunset: number;
    children: React.ReactNode
}

const Day:FC<PropsType> = ({ sunrise, sunset, children }) => {
    const daytimeClass = isDaytime(sunrise, sunset) ? "daytime" : "night";
    return <div className={daytimeClass}>{children}</div>
}

const ForecastDay:FC<{data: WeatherMap}> = ({data}) => {
  console.log("Weather data:", data);
    const maxT = maxTemperature(data.main.temp_max);
    const minT = minTemperature(data.main.temp_min);
    const weekday = weekDay(data.dt).slice(3);

  return (
    <Day sunrise={data.sys.sunrise} sunset={data.sys.sunset}>
    <div>
      <div className="WeatherForecast-day">{weekday}</div>
      <WeatherIcon code={data.weather[0].icon} size={36} />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">
          {maxT}
        </span>
        <span className="-ml-1 opacity-60">
          {minT}
        </span>
        </div>
        
      </div>
    </Day>
  );
}


export default ForecastDay;