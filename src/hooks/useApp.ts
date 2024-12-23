import { useEffect, useState } from "react";
import { sheAPIKEY, sheAPIURL } from "../utils/contants";
import { SheWeather } from "../interfaces/she-weather.interface";

interface StateType {
    isLoading: boolean;
    data: SheWeather | null;
    city: string;
}


const useApp = () => {    
    const [state, setState] = useState<StateType>({
        isLoading: true,
        data: null,
        city: 'Valencia',
    });

    const getData = async () => {
        try {
            const response = await fetch(`${sheAPIURL}?query=${state.city}&key=${sheAPIKEY}&units=metric`);
            const json = await response.json();
            setState({
                ...state,
                isLoading: false,
                data: json,
            });
        } catch (e) {
            console.error(e);
            setState({ ...state, isLoading: false });
        }
    };

    useEffect(() => {
        getData();
    }, [state.city]);

    const handleCity = (value: string) => {

        console.log('CITY: ', value);
       

            setState({ ...state, isLoading: true, city: value });
    };


    return {
        ...state,
        handleCity
    };
}

export default useApp;