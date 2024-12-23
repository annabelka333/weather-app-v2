import { CoordsType, MainType, WindType } from "./common";

export interface WeatherMap {
  coord: CoordsType;
  weather: Weather[];
  base: string;
  main: MainType;
  visibility: number;
  wind: WindType;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

interface Sys {
  country: string;
  sunrise: number;
  sunset: number;
}

interface Clouds {
  all: number;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}
