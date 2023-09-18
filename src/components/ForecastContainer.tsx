import { Container, Text, Divider } from "@chakra-ui/react";

export const ForecastContainer = ({ forecastSevenDays }: any) => {
  if (!forecastSevenDays?.list) {
    return null;
  }

  const firstSevenDays = forecastSevenDays.list.slice(0, 7);
  // convert the dt property to a date and get only the week day
  const forecastDay = new Date(firstSevenDays[0].dt * 1000).toLocaleDateString(
    "en-US",
    { weekday: "long" }
  );

  return (
    <Container
      backgroundColor={"#f8f8f8"}
      className="forecast-container"
      borderRadius={10}
      maxWidth={"50vw"}
      padding={5}
    >
      <Text as="b" color="#7a7a7a" fontSize="lg">
        7-DAY FORECAST
      </Text>
      {firstSevenDays.map((day: any) => {
        return (
          <>
            <Container
              key={day.dt}
              className="forecast-day"
              padding={5}
              borderRadius={10}
              marginTop={5}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text as="b" color="#7a7a7a" fontSize="lg">
                {forecastDay}
              </Text>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`}
                  alt={day.weather[0].description}
                />
                <Text as="b" color="#7a7a7a" fontSize="lg">
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
      })}
    </Container>
  );
};
