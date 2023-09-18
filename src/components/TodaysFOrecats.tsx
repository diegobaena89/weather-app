import { Container, Text } from "@chakra-ui/react";

export const TodaysForecats = ({ forecastToday }: any) => {
  return (
    <Container
      backgroundColor={"#f8f8f8"}
      className="todays-forecast"
      borderRadius={10}
      maxWidth={"100vw"}
      padding={5}
    >
      <Text as="b" color="#7a7a7a" fontSize="md">
        TODAY'S FORECAST
      </Text>
      <div>test</div>
    </Container>
  );
};
