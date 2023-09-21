import { Container, Text } from "@chakra-ui/react";
import React from "react";
import { IForecastData, IForecastDay } from "../Forecast";
import { ForecastInfo } from "./components/ForecastInfo";
import { getDayOfWeek } from "../../utils/getDaysOfWeek";
import { filterObjectsWithDifferentDays } from "../../utils/filterObjectsWithDifferentDays";

export const ForecastContainer = ({
  forecastSevenDays,
}: {
  forecastSevenDays: IForecastData;
}) => {
  if (!forecastSevenDays?.list) {
    return null;
  }

  const filteredDays = filterObjectsWithDifferentDays(forecastSevenDays);
  const dtTxtList = filteredDays.map((day: any) => day.dt_txt);
  const forecastDay = dtTxtList.map((date: any) => getDayOfWeek(date));

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
      {filteredDays?.map((day: IForecastDay, index: number) => {
        return (
          <React.Fragment key={day.dt}>
            <ForecastInfo day={day} index={index} forecastDay={forecastDay} />
          </React.Fragment>
        );
      })}
    </Container>
  );
};
