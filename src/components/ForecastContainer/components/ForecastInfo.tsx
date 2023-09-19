import { Container, Text, Divider } from "@chakra-ui/react";
import { IForecastDay } from "../../Forecast";

export const ForecastInfo = ({
  day,
  index,
  forecastDay,
}: {
  day: IForecastDay;
  index: number;
  forecastDay: string[];
}) => {
  return (
    <>
      <Container
        key={day.dt}
        className="forecast-day"
        padding={5}
        borderRadius={10}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "15px",
        }}
      >
        <Text as="b" color="#c7c7c7" fontSize="lg">
          {forecastDay[index]}
        </Text>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`}
            alt={day.weather[0].description}
          />
          <Text as="b" fontSize="md" margin="0px 8px">
            {day.weather[0].description}
          </Text>
        </div>
        <div>
          <Text as="b" color="#7a7a7a" fontSize="lg">
            {day.main.temp_min.toFixed()}°C
          </Text>
          <Text as="b" color="#7a7a7a" fontSize="lg">
            /
          </Text>
          <Text as="b" color="#c7c7c7" fontSize="lg">
            {day.main.temp_max.toFixed()}°C
          </Text>
        </div>
      </Container>
      <Divider />
    </>
  );
};
