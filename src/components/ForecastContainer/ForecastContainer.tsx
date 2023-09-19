import { Container, Text, Divider } from "@chakra-ui/react";
import React from "react";
import { IForecastData, IForecastDay } from "../Forecast";

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
          </React.Fragment>
        );
      })}
    </Container>
  );
};
