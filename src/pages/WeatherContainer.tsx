import { Container, Heading, Input, Text } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { CityWeatherComponent } from "../components/CityWeatherComponent";
import { TodaysForecats } from "../components/TodaysFOrecats";
import { AirConditions } from "../components/AirConditions";
import { ForecastContainer } from "../components/ForecastCOntainer";

export const WeatherContainer = () => {
  const [location, setLocation] = useState("");
  const [data, setData] = useState<any>({});

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
    location
  )}&appid=5d61e221a7e29ce7dcf2b4a96c455609`;

  const searchLocation = (event: any) => {
    if (event.key === "Enter") {
      axios.get(apiUrl).then((response: any) => {
        setData(response.data);
        console.log(response.data);
      });
    }
  };

  return (
    <div className="weather-container">
      <Container
        height={"70vh"}
        maxWidth={"70vw"}
        borderRadius={15}
        border="1px solid #e2e2e2"
        backgroundColor={"#fff"}
        padding="20px"
      >
        <Input
          placeholder="Search for cities"
          backgroundColor={"#f8f8f8"}
          size="lg"
          marginBottom={7}
          maxWidth={"41vw"}
          onKeyPress={searchLocation}
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        />
        <div className="content-container">
          <CityWeatherComponent cityData={data} />
          <TodaysForecats />
          <AirConditions airConditionsData={data} />
          <ForecastContainer />
        </div>
      </Container>
    </div>
  );
};
