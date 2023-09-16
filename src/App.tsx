import React, { useState, useEffect } from "react";
import { WeatherContainer } from "./pages/WeatherContainer";
import { api } from "./utils/api";

function App() {
  const [lat, setLat] = useState<any>();
  const [long, setLong] = useState<any>([]);
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });

    const getWeather = async () => {
      const response = await fetch(
        `${api.base}weather?lat=${lat}&lon=${long}&units=metric&APPID=${api.key}`
      );
      const data = await response.json();
      setData(data);
    };
    getWeather();
  });
  return <WeatherContainer response={data} />;
}

export default App;
