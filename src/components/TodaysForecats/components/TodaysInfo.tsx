import React from "react";
import { ForecastItem } from "../../Forecast";
import { Container, Text, Divider } from "@chakra-ui/react";

export const TodaysInfo = ({
  day,
  index,
  daysHour,
}: {
  day: ForecastItem;
  index: number;
  daysHour: string[];
}) => {
  const showAmOrPm = (hour: string) => {
    const hourInt = parseInt(hour);
    if (hourInt > 12) {
      return `${hourInt - 12} PM`;
    } else {
      return `${hourInt} AM`;
    }
  };

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
    </>
  );
};
