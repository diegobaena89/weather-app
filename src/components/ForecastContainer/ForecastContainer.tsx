import { Container, Text, Divider } from "@chakra-ui/react";
import React from "react";
import { IForecastData, IForecastDay } from "../Forecast";
import { ForecastInfo } from "./components/ForecastInfo";

export const ForecastContainer = ({
  forecastSevenDays,
}: {
  forecastSevenDays: IForecastData;
}) => {
  if (!forecastSevenDays?.list) {
    return null;
  }

  const filteredDays: any = filterObjectsWithDifferentDays(forecastSevenDays);
  const dtTxtList = filteredDays.map((day: any) => day.dt_txt);
  const forecastDay = dtTxtList.map((date: any) => getDayOfWeek(date));

  function getDayOfWeek(dateString: string) {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const date = new Date(dateString);
    const dayIndex = date.getUTCDay();
    return daysOfWeek[dayIndex];
  }

  function filterObjectsWithDifferentDays(data: any) {
    if (!data || !data.list || data.list.length === 0) {
      return [];
    }

    let previousDay = "";
    const filteredList = [];

    for (let i = 0; i < data.list.length; i++) {
      const currentDate = data.list[i].dt_txt.split(" ")[0];

      if (currentDate !== previousDay) {
        filteredList.push(data.list[i]);
        if (filteredList.length === 7) {
          break;
        }
      }

      previousDay = currentDate;
    }

    return filteredList;
  }

  return (
    <Container
      backgroundColor={"#f8f8f8"}
      className="forecast-container"
      borderRadius={10}
      maxWidth={"50vw"}
      padding="30px 0px"
    >
      <Text as="b" color="#7a7a7a" fontSize="sm" marginLeft={4}>
        7-DAY FORECAST
      </Text>
      {filteredDays.map((day: IForecastDay, index: number) => {
        return (
          <React.Fragment key={day.dt}>
            <ForecastInfo day={day} index={index} forecastDay={forecastDay} />
          </React.Fragment>
        );
      })}
    </Container>
  );
};
