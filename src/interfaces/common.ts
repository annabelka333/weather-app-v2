export interface CoordsType {
  lon: number;
  lat: number;
}

export interface WindType {
  speed: number;
  deg: number;
  gust: number;
}

export interface MainType {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}