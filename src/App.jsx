import WeatherForecast from "./WeatherForecast";
import { weatherForecasts } from "./data";
import "./App.css";
import "./WeatherForecast.css";



const App = () => {

  return (
    <>
      <h1>Local Weather</h1>
      <section>
        {weatherForecasts.map((forecast, i) => (
          <WeatherForecast key={i} forecast={forecast}/>
        ))}
      </section>
    </>
  );
};

export default App;
