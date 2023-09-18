import { Container, Divider, Text } from "@chakra-ui/react";
import React from "react";
import { IForecastData, IForecastDay } from "../Forecast";

export const TodaysForecats = ({
  forecastToday,
}: {
  forecastToday: IForecastData;
}) => {
  if (!forecastToday?.list) {
    return null;
  }

  const firstSevenDays = forecastToday.list.slice(0, 7);
  const daysHour = firstSevenDays.map((day: IForecastDay) => {
    return day.dt_txt.split(" ")[1];
  });

  const showAmOrPm = (hour: string) => {
    const hourInt = parseInt(hour);
    if (hourInt > 12) {
      return `${hourInt - 12} PM`;
    } else {
      return `${hourInt} AM`;
    }
  };

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
      {firstSevenDays.map((day: IForecastDay, index: number) => {
        return (
          <React.Fragment key={day.dt_txt}>
            <Container
              className="forecast-day"
              padding={5}
              borderRadius={10}
              display={"flex"}
              flexDirection={"row"}
            >
              <div>
                <Text as="b" color="#7a7a7a" fontSize="sm">
                  {showAmOrPm(daysHour[index])}
                </Text>

                <img
                  src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`}
                  alt={day.weather[0].description}
                />

                <Text as="b" fontSize="lg">
                  {day.main.temp_min.toFixed()}°C
                </Text>
              </div>
            </Container>
            {index !== 6 && <Divider orientation="vertical" />}
          </React.Fragment>
        );
      })}
    </Container>
  );
};
