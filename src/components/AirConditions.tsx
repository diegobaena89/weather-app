import { Container, Text } from "@chakra-ui/react";

export const AirConditions = ({ airConditionsData }: any) => {
  return (
    <Container
      border="1px solid #e2e2e2"
      backgroundColor={"#f8f8f8"}
      className="air-conditions"
      borderRadius={10}
      maxWidth={"100vw"}
    >
      {airConditionsData.main ? (
        <>
          <Text fontSize="lg">Umidade: {airConditionsData.main.humidity}%</Text>
          <Text fontSize="lg">
            Sensação Térmica: {airConditionsData.main.feels_like}MPH
          </Text>
          <Text fontSize="lg">Vento: {airConditionsData.wind.speed}</Text>
          <Text fontSize="lg">UV Index: {airConditionsData.wind.deg}º</Text>
        </>
      ) : null}
    </Container>
  );
};
