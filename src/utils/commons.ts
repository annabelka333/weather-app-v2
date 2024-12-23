export function isDaytime(sunrise:number, sunset:number):boolean {
    const now = Date.now();
    const sunriseMs = sunrise * 1000;
    const sunsetMs = sunset * 1000;
    return now >= sunriseMs && now < sunsetMs;
}

export function maxTemperature(max: number):string {
    const temperature = Math.round(max);
    return `${temperature}°`;
}
  
export function minTemperature(min: number):string {
    const temperature = Math.round(min);
    return `${temperature}°`;
  }

export function weekDay(timestamp: number):string {
    const date = new Date(timestamp * 1000);
    const day = date.getDay();
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

  return days[day];
}