const weekleForecastMock = {
  cod: "200",
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1695168000,
      main: {
        temp: 21.84,
        feels_like: 21.15,
        temp_min: 21.84,
        temp_max: 22.17,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1010,
        humidity: 41,
        temp_kf: -0.33,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02n",
        },
      ],
      clouds: {
        all: 17,
      },
      wind: {
        speed: 2.76,
        deg: 360,
        gust: 2.76,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-09-20 00:00:00",
    },
    {
      dt: 1695168001,
      main: {
        temp: 21.84,
        feels_like: 21.15,
        temp_min: 21.84,
        temp_max: 22.17,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1010,
        humidity: 41,
        temp_kf: -0.33,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02n",
        },
      ],
      clouds: {
        all: 17,
      },
      wind: {
        speed: 2.76,
        deg: 360,
        gust: 2.76,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-09-21 00:00:00",
    },
  ],
  city: {
    id: 264371,
    name: "Athens",
    coord: {
      lat: 37.9795,
      lon: 23.7162,
    },
    country: "GR",
    population: 729137,
    timezone: 10800,
    sunrise: 1695183043,
    sunset: 1695227214,
  },
};
