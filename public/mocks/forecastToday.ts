const forecastMock = {
  cod: "200",
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1694973600,
      main: {
        temp: 292.06,
        feels_like: 291.94,
        temp_min: 292.06,
        temp_max: 294.06,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 937,
        humidity: 74,
        temp_kf: -2,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: {
        all: 40,
      },
      wind: {
        speed: 4.63,
        deg: 220,
        gust: 9.32,
      },
      visibility: 10000,
      pop: 0.34,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-09-17 18:00:00",
    },
    {
      dt: 1694984400,
      main: {
        temp: 292.08,
        feels_like: 291.75,
        temp_min: 292.08,
        temp_max: 292.13,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 939,
        humidity: 66,
        temp_kf: -0.05,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n",
        },
      ],
      clouds: {
        all: 40,
      },
      wind: {
        speed: 3.78,
        deg: 220,
        gust: 7.52,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-09-17 21:00:00",
    },
    {
      dt: 1694995200,
      main: {
        temp: 290.97,
        feels_like: 290.35,
        temp_min: 290.42,
        temp_max: 290.97,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 939,
        humidity: 59,
        temp_kf: 0.55,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n",
        },
      ],
      clouds: {
        all: 27,
      },
      wind: {
        speed: 5.27,
        deg: 219,
        gust: 10,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-09-18 00:00:00",
    },
    {
      dt: 1695006000,
      main: {
        temp: 288.83,
        feels_like: 288.18,
        temp_min: 288.83,
        temp_max: 288.83,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 939,
        humidity: 66,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 5,
      },
      wind: {
        speed: 4.31,
        deg: 227,
        gust: 8.63,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-09-18 03:00:00",
    },
    {
      dt: 1695016800,
      main: {
        temp: 288.6,
        feels_like: 288.13,
        temp_min: 288.6,
        temp_max: 288.6,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 939,
        humidity: 74,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: {
        all: 36,
      },
      wind: {
        speed: 3.38,
        deg: 229,
        gust: 6.53,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-09-18 06:00:00",
    },
    {
      dt: 1695027600,
      main: {
        temp: 289.75,
        feels_like: 289.35,
        temp_min: 289.75,
        temp_max: 289.75,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 942,
        humidity: 72,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 99,
      },
      wind: {
        speed: 4.74,
        deg: 227,
        gust: 6.77,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-09-18 09:00:00",
    },
    {
      dt: 1695038400,
      main: {
        temp: 292.21,
        feels_like: 291.71,
        temp_min: 292.21,
        temp_max: 292.21,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 943,
        humidity: 59,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 99,
      },
      wind: {
        speed: 5.26,
        deg: 234,
        gust: 6.2,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-09-18 12:00:00",
    },
    {
      dt: 1695049200,
      main: {
        temp: 294.01,
        feels_like: 293.43,
        temp_min: 294.01,
        temp_max: 294.01,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 942,
        humidity: 49,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 5.18,
        deg: 224,
        gust: 5.37,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-09-18 15:00:00",
    },
    {
      dt: 1695060000,
      main: {
        temp: 293.27,
        feels_like: 292.64,
        temp_min: 293.27,
        temp_max: 293.27,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 943,
        humidity: 50,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 95,
      },
      wind: {
        speed: 4.14,
        deg: 229,
        gust: 4.77,
      },
      visibility: 10000,
      pop: 0.03,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-09-18 18:00:00",
    },
    {
      dt: 1695070800,
      main: {
        temp: 291.56,
        feels_like: 290.89,
        temp_min: 291.56,
        temp_max: 291.56,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 944,
        humidity: 55,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 10,
      },
      wind: {
        speed: 2.86,
        deg: 237,
        gust: 3.97,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-09-18 21:00:00",
    },
    {
      dt: 1695081600,
      main: {
        temp: 290.71,
        feels_like: 290.01,
        temp_min: 290.71,
        temp_max: 290.71,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 944,
        humidity: 57,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 5,
      },
      wind: {
        speed: 0.35,
        deg: 181,
        gust: 1,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-09-19 00:00:00",
    },
    {
      dt: 1695092400,
      main: {
        temp: 289.65,
        feels_like: 288.95,
        temp_min: 289.65,
        temp_max: 289.65,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 943,
        humidity: 61,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.96,
        deg: 64,
        gust: 2.64,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-09-19 03:00:00",
    },
    {
      dt: 1695103200,
      main: {
        temp: 288.82,
        feels_like: 288.14,
        temp_min: 288.82,
        temp_max: 288.82,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 943,
        humidity: 65,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 2.82,
        deg: 46,
        gust: 3.53,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-09-19 06:00:00",
    },
    {
      dt: 1695114000,
      main: {
        temp: 291.67,
        feels_like: 291.01,
        temp_min: 291.67,
        temp_max: 291.67,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 944,
        humidity: 55,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 2.47,
        deg: 61,
        gust: 2.81,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-09-19 09:00:00",
    },
    {
      dt: 1695124800,
      main: {
        temp: 295.5,
        feels_like: 294.78,
        temp_min: 295.5,
        temp_max: 295.5,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 944,
        humidity: 38,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.16,
        deg: 97,
        gust: 1.55,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-09-19 12:00:00",
    },
    {
      dt: 1695135600,
      main: {
        temp: 297.28,
        feels_like: 296.61,
        temp_min: 297.28,
        temp_max: 297.28,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 942,
        humidity: 33,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.72,
        deg: 163,
        gust: 2.41,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-09-19 15:00:00",
    },
    {
      dt: 1695146400,
      main: {
        temp: 296.59,
        feels_like: 295.96,
        temp_min: 296.59,
        temp_max: 296.59,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 941,
        humidity: 37,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 6,
      },
      wind: {
        speed: 2.05,
        deg: 236,
        gust: 2.71,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-09-19 18:00:00",
    },
    {
      dt: 1695157200,
      main: {
        temp: 295.25,
        feels_like: 294.56,
        temp_min: 295.25,
        temp_max: 295.25,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 941,
        humidity: 40,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 59,
      },
      wind: {
        speed: 1.47,
        deg: 308,
        gust: 2.07,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-09-19 21:00:00",
    },
    {
      dt: 1695168000,
      main: {
        temp: 293.74,
        feels_like: 293.06,
        temp_min: 293.74,
        temp_max: 293.74,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 940,
        humidity: 46,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n",
        },
      ],
      clouds: {
        all: 47,
      },
      wind: {
        speed: 2.49,
        deg: 112,
        gust: 3.96,
      },
      visibility: 10000,
      pop: 0.02,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-09-20 00:00:00",
    },
    {
      dt: 1695178800,
      main: {
        temp: 291.78,
        feels_like: 291.55,
        temp_min: 291.78,
        temp_max: 291.78,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 940,
        humidity: 71,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 62,
      },
      wind: {
        speed: 1.98,
        deg: 98,
        gust: 2.33,
      },
      visibility: 10000,
      pop: 0.04,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-09-20 03:00:00",
    },
    {
      dt: 1695189600,
      main: {
        temp: 290.83,
        feels_like: 290.51,
        temp_min: 290.83,
        temp_max: 290.83,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 939,
        humidity: 71,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 57,
      },
      wind: {
        speed: 2.15,
        deg: 46,
        gust: 2.47,
      },
      visibility: 10000,
      pop: 0.09,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-09-20 06:00:00",
    },
    {
      dt: 1695200400,
      main: {
        temp: 293.13,
        feels_like: 292.75,
        temp_min: 293.13,
        temp_max: 293.13,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 940,
        humidity: 60,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 12,
      },
      wind: {
        speed: 1.41,
        deg: 127,
        gust: 1.06,
      },
      visibility: 10000,
      pop: 0.34,
      rain: {
        "3h": 0.15,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2023-09-20 09:00:00",
    },
    {
      dt: 1695211200,
      main: {
        temp: 297.14,
        feels_like: 296.64,
        temp_min: 297.14,
        temp_max: 297.14,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 940,
        humidity: 40,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02d",
        },
      ],
      clouds: {
        all: 11,
      },
      wind: {
        speed: 2.94,
        deg: 221,
        gust: 3.75,
      },
      visibility: 10000,
      pop: 0.18,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-09-20 12:00:00",
    },
    {
      dt: 1695222000,
      main: {
        temp: 298.75,
        feels_like: 298.1,
        temp_min: 298.75,
        temp_max: 298.75,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 939,
        humidity: 28,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 9,
      },
      wind: {
        speed: 5.26,
        deg: 229,
        gust: 5.64,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-09-20 15:00:00",
    },
    {
      dt: 1695232800,
      main: {
        temp: 296.67,
        feels_like: 295.97,
        temp_min: 296.67,
        temp_max: 296.67,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 939,
        humidity: 34,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02d",
        },
      ],
      clouds: {
        all: 23,
      },
      wind: {
        speed: 6.11,
        deg: 238,
        gust: 7.9,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-09-20 18:00:00",
    },
    {
      dt: 1695243600,
      main: {
        temp: 295.33,
        feels_like: 294.54,
        temp_min: 295.33,
        temp_max: 295.33,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 939,
        humidity: 36,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 65,
      },
      wind: {
        speed: 5.07,
        deg: 241,
        gust: 8.81,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-09-20 21:00:00",
    },
    {
      dt: 1695254400,
      main: {
        temp: 292.64,
        feels_like: 291.82,
        temp_min: 292.64,
        temp_max: 292.64,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 938,
        humidity: 45,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 63,
      },
      wind: {
        speed: 5.35,
        deg: 232,
        gust: 9.85,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-09-21 00:00:00",
    },
    {
      dt: 1695265200,
      main: {
        temp: 290.74,
        feels_like: 289.94,
        temp_min: 290.74,
        temp_max: 290.74,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 937,
        humidity: 53,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 95,
      },
      wind: {
        speed: 5.63,
        deg: 231,
        gust: 9.44,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-09-21 03:00:00",
    },
    {
      dt: 1695276000,
      main: {
        temp: 289.1,
        feels_like: 288.4,
        temp_min: 289.1,
        temp_max: 289.1,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 936,
        humidity: 63,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 98,
      },
      wind: {
        speed: 5.57,
        deg: 238,
        gust: 8.71,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-09-21 06:00:00",
    },
    {
      dt: 1695286800,
      main: {
        temp: 290.11,
        feels_like: 289.53,
        temp_min: 290.11,
        temp_max: 290.11,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 937,
        humidity: 64,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 6.4,
        deg: 234,
        gust: 7.33,
      },
      visibility: 10000,
      pop: 0.07,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-09-21 09:00:00",
    },
    {
      dt: 1695297600,
      main: {
        temp: 290.78,
        feels_like: 290.35,
        temp_min: 290.78,
        temp_max: 290.78,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 937,
        humidity: 67,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 6.35,
        deg: 240,
        gust: 7.4,
      },
      visibility: 10000,
      pop: 0.1,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-09-21 12:00:00",
    },
    {
      dt: 1695308400,
      main: {
        temp: 291.34,
        feels_like: 290.94,
        temp_min: 291.34,
        temp_max: 291.34,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 936,
        humidity: 66,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 6.78,
        deg: 245,
        gust: 8.93,
      },
      visibility: 10000,
      pop: 0.25,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-09-21 15:00:00",
    },
    {
      dt: 1695319200,
      main: {
        temp: 291.13,
        feels_like: 290.97,
        temp_min: 291.13,
        temp_max: 291.13,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 936,
        humidity: 76,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 6.54,
        deg: 243,
        gust: 8.47,
      },
      visibility: 10000,
      pop: 0.2,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-09-21 18:00:00",
    },
    {
      dt: 1695330000,
      main: {
        temp: 290.61,
        feels_like: 290.42,
        temp_min: 290.61,
        temp_max: 290.61,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 937,
        humidity: 77,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.95,
        deg: 252,
        gust: 7.85,
      },
      visibility: 10000,
      pop: 0.32,
      rain: {
        "3h": 0.12,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2023-09-21 21:00:00",
    },
    {
      dt: 1695340800,
      main: {
        temp: 290.63,
        feels_like: 289.87,
        temp_min: 290.63,
        temp_max: 290.63,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 936,
        humidity: 55,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.71,
        deg: 288,
        gust: 6.06,
      },
      visibility: 10000,
      pop: 0.27,
      rain: {
        "3h": 0.13,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2023-09-22 00:00:00",
    },
    {
      dt: 1695351600,
      main: {
        temp: 289.45,
        feels_like: 288.47,
        temp_min: 289.45,
        temp_max: 289.45,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 935,
        humidity: 51,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.92,
        deg: 309,
        gust: 5.67,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-09-22 03:00:00",
    },
    {
      dt: 1695362400,
      main: {
        temp: 288.06,
        feels_like: 286.99,
        temp_min: 288.06,
        temp_max: 288.06,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 936,
        humidity: 53,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 98,
      },
      wind: {
        speed: 3.36,
        deg: 330,
        gust: 5.05,
      },
      visibility: 10000,
      pop: 0.03,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-09-22 06:00:00",
    },
    {
      dt: 1695373200,
      main: {
        temp: 289.44,
        feels_like: 288.33,
        temp_min: 289.44,
        temp_max: 289.44,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 937,
        humidity: 46,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02d",
        },
      ],
      clouds: {
        all: 17,
      },
      wind: {
        speed: 2.71,
        deg: 326,
        gust: 3.1,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-09-22 09:00:00",
    },
    {
      dt: 1695384000,
      main: {
        temp: 292.74,
        feels_like: 291.67,
        temp_min: 292.74,
        temp_max: 292.74,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 937,
        humidity: 35,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 9,
      },
      wind: {
        speed: 2.05,
        deg: 304,
        gust: 3.07,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-09-22 12:00:00",
    },
    {
      dt: 1695394800,
      main: {
        temp: 294.01,
        feels_like: 292.99,
        temp_min: 294.01,
        temp_max: 294.01,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 937,
        humidity: 32,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 5,
      },
      wind: {
        speed: 7.2,
        deg: 313,
        gust: 8.07,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-09-22 15:00:00",
    },
  ],
  city: {
    id: 3117735,
    name: "Madrid",
    coord: {
      lat: 40.4165,
      lon: -3.7026,
    },
    country: "ES",
    population: 1000000,
    timezone: 7200,
    sunrise: 1694930226,
    sunset: 1694974922,
  },
};
