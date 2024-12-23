import { FC, useState } from "react";

const Temperature: FC<{ celsius: number }> = ({ celsius }) => {
    const [isFarenheit, setIsFarenheit] = useState(false);

    function handlerFarenheit() {
        setIsFarenheit(!isFarenheit);
    }

    const temperature = isFarenheit ? Math.round(celsius) : Math.round((celsius * 9) / 5 + 32);

    const classes = 'text-indigo-600 cursor-pointer';

    return (
        <div className="inline-flex flex-row">
            <p className="temperature">{temperature}</p>
            {
                isFarenheit
                    ? <div className="inline-flex flex-row">
                        °C |{" "}
                        <span onClick={handlerFarenheit} className={classes}>
                            °F
                        </span>
                    </div>
                    : <div className="inline-flex flex-row">
                        <span onClick={handlerFarenheit} className={classes}>
                            °C
                        </span>{" "}
                        | °F
                    </div>
            }
        </div>
    );

}

export default Temperature;