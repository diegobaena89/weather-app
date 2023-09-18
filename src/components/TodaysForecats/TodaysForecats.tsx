import { Container, Divider, Text } from "@chakra-ui/react";

export const TodaysForecats = ({ forecastToday }: any) => {
  if (!forecastToday?.list) {
    return null;
  }

  const firstSevenDays = forecastToday.list.slice(0, 7);
  const daysHour = firstSevenDays.map((day: any) => {
    return day.dt_txt.split(" ")[1];
  });

  const showAmOrPm = (hour: any) => {
    const hourInt = parseInt(hour);
    if (hourInt > 12) {
      return `${hourInt - 12} PM`;
    } else {
      return `${hourInt} AM`;
    }
  };

  console.log(showAmOrPm(daysHour));

  return (
    <Container
      backgroundColor={"#f8f8f8"}
      className="todays-forecast"
      borderRadius={10}
      maxWidth={"100vw"}
      padding={5}
      display={"flex"}
      alignItems={"center"}
    >
      {firstSevenDays.map((day: any, index: any) => {
        console.log("INDEX", index);
        return (
          <>
            <Container
              key={day.dt}
              className="forecast-day"
              padding={5}
              borderRadius={10}
              display={"flex"}
              flexDirection={"row"}
            >
              <div style={{ maxWidth: "60px" }}>
                <Text as="b" color="#7a7a7a" fontSize="sm">
                  {showAmOrPm(daysHour[index])}
                </Text>

                <img
                  src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`}
                  alt={day.weather[0].description}
                />

                <Text as="b" color="#7a7a7a" fontSize="lg">
                  {day.main.temp_min.toFixed()}°C
                </Text>
              </div>
            </Container>
            {index !== 6 && <Divider orientation="vertical" />}
          </>
        );
      })}
    </Container>
  );
};
