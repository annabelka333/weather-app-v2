import { FC, useRef } from "react";
import useApp from "./hooks/useApp";
import Forecast from "./views/forecast";
import Detail from "./views/details";

const App:FC = () => {
  const {isLoading, handleCity, data } = useApp();

  const inputRef = useRef<HTMLInputElement | null>(null);

  const clickHandler = () => {
    const input = inputRef.current;
    if (input) {
      handleCity(input.value);
    }

  }

  if (isLoading) {
    return "Loading....";
  }

  return (
      <div className="container">
        <div className="Weather">
            <div className="row">
              <div className="col-9">
              <input
                ref={inputRef}
                  type="Search"
                  placeholder="Type a city... "
                className="form-control"
                name='city'
                />
              </div>
              <div className="col-3">
            <button
              onClick={clickHandler}
                  className="btn btn-primary w-100 hover-shadow"
                >Search</button>
              </div>
            </div>
        {
          data != null
            ? <>
              <Detail data={data} />
              <Forecast coords={data.coordinates} />
            </> 
            : <div>
              No results
            </div>
        }
          
        </div>
      </div>
    );
}

export default App;