import { useState, useEffect, useCallback } from "react";
import {sheAPIKEY, sheAPIURL } from "../utils/contants";
import { Coordinates, SheWeather } from "../interfaces/she-weather.interface";

interface StateType {
    isLoading: boolean;
    data: SheWeather | null
}

const useForecast = (coords: Coordinates) => {
    const [state, setState] = useState<StateType>({
        isLoading: true,
        data: null
    })

    const getData = useCallback(async () => {
        const { longitude, latitude } = coords;
        try {
            const url = `${sheAPIURL}?lat=${latitude}&lon=${longitude}&key=${sheAPIKEY}&units=metric`;
            
            const response = await fetch(url);
            const json = await response.json();
            setState({ data: json, isLoading: false });
        } catch (e) {
            console.error(e);
            setState({ ...state, isLoading: false });
        }

    }, [coords]);

    useEffect(() => {
        // getData();
    }, [coords]);

    return state;
}

export default useForecast;