import { WeatherItem } from "../pages/Weather";

export function filterObjectsWithDifferentDays(data: { list: WeatherItem[] }) {
  if (!data?.list || data.list.length === 0) {
    return [];
  }

  let previousDay = "";
  const filteredList = [];

  for (const element of data.list) {
    const currentDate = element.dt_txt.split(" ")[0];

    if (currentDate !== previousDay) {
      filteredList.push(element);
      if (filteredList.length === 7) {
        break;
      }
    }

    previousDay = currentDate;
  }

  return filteredList;
}
