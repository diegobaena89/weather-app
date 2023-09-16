import { Container, Input } from "@chakra-ui/react";

type WeatherData = {
  response: {};
};

export const WeatherContainer = ({ response }: WeatherData) => {
  console.log("RESPONSE", response);
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
        />
        <div className="content-container">
          <Container
            border="1px solid #e2e2e2"
            className="weather-shown"
            borderRadius={10}
            maxWidth={"100vw"}
          >
            5
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
            5
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
