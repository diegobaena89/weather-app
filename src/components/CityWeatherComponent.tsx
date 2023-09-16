import { Container, Heading, Text } from "@chakra-ui/react";

export const CityWeatherComponent = ({ cityData }: any) => {
  return (
    <Container
      border="1px solid #e2e2e2"
      className="weather-shown"
      borderRadius={10}
      maxWidth={"100vw"}
    >
      <Heading as="h3" size="lg">
        {cityData.name}
      </Heading>
      {cityData.weather ? (
        <>
          <Text fontSize="md">{cityData.weather[0].description}</Text>
        </>
      ) : null}
      {cityData.main ? (
        <>
          <Heading as="h3" size="2xl">
            {cityData.main?.temp}º
          </Heading>
        </>
      ) : null}
    </Container>
  );
};
