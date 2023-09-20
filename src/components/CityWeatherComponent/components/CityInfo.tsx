import { Heading, Text } from "@chakra-ui/react";
import { ICityWeatherData } from "../../Forecast";
import React from "react";
import { getCustomWeatherIcon } from "../../../utils/getCustomWeatherIcons";

export const CityInfo = ({ cityData }: { cityData: ICityWeatherData }) => {
  return (
    <>
      <div className="description">
        <Text fontSize="lg" color="#919191">
          {cityData.weather[0].description}
        </Text>
      </div>
      <div className="weather-icon">
        <img
          src={getCustomWeatherIcon(cityData.weather[0].icon)}
          alt="weather icon"
          width="50%"
        />
      </div>
    </>
  );
};

export const CityTemperature = ({
  cityData,
}: {
  cityData: ICityWeatherData;
}) => {
  return (
    <div className="degrees">
      <Heading as="h3" size="3xl">
        {cityData.main?.temp.toFixed()}º
      </Heading>
    </div>
  );
};
