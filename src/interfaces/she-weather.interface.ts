export interface SheWeather {
  city: string;
  country: string;
  coordinates: Coordinates;
  condition: Condition;
  temperature: Temperature;
  wind: Wind;
  time: number;
}

export interface Wind {
  speed: number;
  degree: number;
}

export interface Temperature {
  current: number;
  humidity: number;
  feels_like: number;
  pressure: number;
}

export interface Condition {
  description: string;
  icon_url: string;
  icon: string;
}

export interface Coordinates {
  longitude: number;
  latitude: number;
}