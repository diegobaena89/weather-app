import { Container, Heading, Text } from "@chakra-ui/react";
import "./CityWeatherComponent.css";
import { ICityWeatherData } from "../Forecast";
import { CityInfo, CityTemperature } from "./components/CityInfo";
import React from "react";

interface CityWeatherProps {
  cityData: ICityWeatherData;
}

export const CityWeatherComponent: React.FC<CityWeatherProps> = ({
  cityData,
}) => {
  return (
    <Container
      className="weather-shown"
      borderRadius={10}
      maxWidth={"100vw"}
      padding={5}
    >
      <div className="city-name">
        <Heading as="h3" size="2xl">
          {cityData.name}
        </Heading>
      </div>
      {cityData.weather ? <CityInfo cityData={cityData} /> : null}
      {cityData.main ? <CityTemperature cityData={cityData} /> : null}
    </Container>
  );
};
