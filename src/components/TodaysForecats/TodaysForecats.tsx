import { Container } from "@chakra-ui/react";
import { ForecastItem, IForecastData, IForecastDay } from "../Forecast";
import { TodaysInfo } from "./components/TodaysInfo";
import React from "react";

export const TodaysForecats = ({
  forecastToday,
}: {
  forecastToday: IForecastData;
}) => {
  if (!forecastToday?.list) {
    return null;
  }

  const firstSevenDays = forecastToday?.list.slice(0, 7);
  const daysHour = firstSevenDays.map((day: IForecastDay) => {
    return day.dt_txt.split(" ")[1];
  });

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
      {firstSevenDays.map((day: ForecastItem, index: number) => {
        return (
          <TodaysInfo
            key={day?.dt_txt}
            day={day}
            index={index}
            daysHour={daysHour}
          />
        );
      })}
    </Container>
  );
};
