import { Heading, Text } from "@chakra-ui/react";
import { ICityWeatherData } from "../../Forecast";

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
          src={`http://openweathermap.org/img/wn/${cityData.weather[0].icon}.png`}
          alt="weather icon"
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
