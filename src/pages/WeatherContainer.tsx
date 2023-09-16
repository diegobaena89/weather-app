import { Container, Heading, Input, Text } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

export const WeatherContainer = () => {
  const [location, setLocation] = useState("");
  const [data, setData] = useState<any>({});
  const undefinedCity = data.name !== undefined;

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
          <Container
            border="1px solid #e2e2e2"
            className="weather-shown"
            borderRadius={10}
            maxWidth={"100vw"}
          >
            <Heading as="h3" size="lg">
              {data.name}
            </Heading>
            {data.weather ? (
              <>
                <Text fontSize="md">{data.weather[0].description}</Text>
              </>
            ) : null}
            {data.main ? (
              <>
                <Heading as="h3" size="2xl">
                  {data.main?.temp}º
                </Heading>
              </>
            ) : null}
          </Container>
          <Container
            border="1px solid #e2e2e2"
            backgroundColor={"#f8f8f8"}
            className="todays-forecast"
            borderRadius={10}
            maxWidth={"100vw"}
          >
            5
          </Container>
          <Container
            border="1px solid #e2e2e2"
            backgroundColor={"#f8f8f8"}
            className="air-conditions"
            borderRadius={10}
            maxWidth={"100vw"}
          >
            {data.main ? (
              <>
                <Text fontSize="lg">Umidade: {data.main.humidity}%</Text>
                <Text fontSize="lg">
                  Sensação Térmica: {data.main.feels_like}MPH
                </Text>
                <Text fontSize="lg">Vento: {data.wind.speed}</Text>
                <Text fontSize="lg">UV Index: {data.wind.deg}º</Text>
              </>
            ) : null}
          </Container>
          <Container
            border="1px solid #e2e2e2"
            backgroundColor={"#f8f8f8"}
            className="forecast-container"
            borderRadius={10}
            maxWidth={"50vw"}
          >
            5
          </Container>
        </div>
      </Container>
    </div>
  );
};
