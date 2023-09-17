import { Container, Text } from "@chakra-ui/react";
import { Drop, Sun, ThermometerSimple, Wind } from "@phosphor-icons/react";
import "./AirConditions.css";
import { AirConditionInfo } from "./components/AirConditionInfo";

export const AirConditions = ({ airConditionsData }: any) => {
  return (
    <Container
      backgroundColor={"#f8f8f8"}
      className="air-conditions"
      borderRadius={10}
      maxWidth={"100vw"}
      padding={5}
    >
      <Text as="b" color="#7a7a7a" fontSize="lg">
        Air Conditions
      </Text>

      {airConditionsData.main ? (
        <>
          <AirConditionInfo
            airInfo={`${airConditionsData.main.humidity}%`}
            infoText="Humidity:"
            icon={Drop}
            className="chance-of-rain"
          />

          <AirConditionInfo
            airInfo={`${airConditionsData.main.feels_like} hPa`}
            infoText="Real Feel:"
            icon={ThermometerSimple}
            className="real-feel"
          />

          <AirConditionInfo
            airInfo={`${airConditionsData.wind.speed} MPH`}
            infoText="Wind:"
            icon={Wind}
            className="wind"
          />

          <AirConditionInfo
            airInfo={`${airConditionsData.wind.deg}º`}
            infoText="UV Index:"
            icon={Sun}
            className="uv-index"
          />
        </>
      ) : null}
    </Container>
  );
};
