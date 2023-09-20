import React, { useState } from "react";
import { Container, Input } from "@chakra-ui/react";
import axios from "axios";
import { CityWeatherComponent } from "../components/CityWeatherComponent/CityWeatherComponent";
import { TodaysForecats } from "../components/TodaysForecats/TodaysForecats";
import { AirConditions } from "../components/AirConditions/AirConditions";
import { ForecastContainer } from "../components/ForecastContainer/ForecastContainer";

export const WeatherContainer = () => {
  const [location, setLocation] = useState("");
  const [data, setData] = useState<any>({});
  const [forecast, setForecast] = useState<any>({});

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
    location
  )}&units=metric&appid=5d61e221a7e29ce7dcf2b4a96c455609`;

  const apiForecastUrl = `https://api.openweathermap.org/data/2.5/forecast?&q=${encodeURIComponent(
    location
  )}&units=metric&appid=5d61e221a7e29ce7dcf2b4a96c455609`;

  const searchLocation = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      Promise.allSettled([axios.get(apiUrl), axios.get(apiForecastUrl)]).then(
        (results: any) => {
          const [weatherData, forecastData] = results;
          setData(weatherData.value.data);
          setForecast(forecastData.value.data);
        }
      );
    }
  };

  return (
    <div className="weather-container">
      <Container
        maxWidth={"55vw"}
        minWidth={"60vw"}
        maxHeight={"auto"}
        borderRadius={15}
        backgroundColor={"#fff"}
        padding="20px"
        boxShadow={"0 0 10px rgba(0, 0, 0, 0.2)"}
      >
        <Input
          placeholder="Search for cities"
          backgroundColor={"#f8f8f8"}
          size="lg"
          marginBottom={7}
          maxWidth={"35vw"}
          onKeyPress={searchLocation}
          value={location}
          border="none"
          onChange={(event) => setLocation(event.target.value)}
          fontSize={20}
          color={"#919191"}
        />
        <div className="content-container">
          <CityWeatherComponent cityData={data} />
          <TodaysForecats forecastToday={forecast} />
          <AirConditions airConditionsData={data} />
          <ForecastContainer forecastSevenDays={forecast} />
        </div>
      </Container>
    </div>
  );
};
