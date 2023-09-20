import React from "react";
import { ForecastItem } from "../../Forecast";
import { Container, Text, Divider } from "@chakra-ui/react";
import { getCustomWeatherIcon } from "../../../utils/getCustomWeatherIcons";
import { showAmOrPm } from "../../../utils/showAmOrPm";

export const TodaysInfo = ({
  day,
  index,
  daysHour,
}: {
  day: ForecastItem;
  index: number;
  daysHour: string[];
}) => {
  return (
    <>
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
              src={getCustomWeatherIcon(day.weather[0].icon)}
              alt={day.weather[0].description}
            />

            <Text as="b" fontSize="lg">
              {day.main.temp_min.toFixed()}°C
            </Text>
          </div>
        </Container>
        {index !== 6 && <Divider orientation="vertical" />}
      </React.Fragment>
    </>
  );
};
