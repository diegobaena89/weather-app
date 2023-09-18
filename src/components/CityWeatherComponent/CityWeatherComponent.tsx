import { Container, Heading, Text } from "@chakra-ui/react";
import "./CityWeatherComponent.css";
import { ICityWeatherData } from "../Forecast";

interface CityWeatherProps {
  cityData: ICityWeatherData;
}

export const CityWeatherComponent: React.FC<CityWeatherProps> = ({
  cityData,
}) => {
  console.log(cityData);
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
      {cityData.weather ? (
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
      ) : null}
      {cityData.main ? (
        <div className="degrees">
          <Heading as="h3" size="3xl">
            {cityData.main?.temp.toFixed()}º
          </Heading>
        </div>
      ) : null}
    </Container>
  );
};
