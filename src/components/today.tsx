import { FC } from "react";
import { weekDay } from "../utils/commons";

const FormattedDate: FC<{ date: number }> = ({ date }) => {
    const today = new Date(date * 1000);

    const day = weekDay(date);
    const hh = today.getHours();
    const mm = today.getMinutes();

    const hours = hh < 10 ? `0${hh}` : hh;
    const minutes = mm < 10 ? `0${mm}` : mm;

    return (
        <div>
            {day} {hours}:{minutes}
        </div>
    );
}

export default FormattedDate;
