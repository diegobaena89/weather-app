export interface IDataResponse {
  coord?: coordProps;
  weather?: IWeatherProps[];
  base?: string;
  main?: IMainProps;
  visibility?: number;
  wind?: IWindProps;
  clouds?: ICloudsProps;
  dt?: number;
  sys?: ISysProps;
  timezone?: number;
  id?: number;
  name?: string;
  cod?: number;
}

export interface coordProps {
  lon?: number;
  lat?: number;
}

export interface IWeatherProps {
  id?: number;
  main?: string;
  description?: string;
  icon?: string;
}

export interface IMainProps {
  temp?: number;
  feels_like?: number;
  temp_min?: number;
  temp_max?: number;
  pressure?: number;
  humidity?: number;
}

export interface IWindProps {
  speed?: number;
  deg?: number;
}

export interface ICloudsProps {
  all?: number;
}

export interface ISysProps {
  type?: number;
  id?: number;
  country?: string;
  sunrise?: number;
  sunset?: number;
}

export interface IWeatherData {
  cod: string;
  message: number;
  cnt: number;
  list: WeatherItem[];
  city: CityInfo;
}

export interface WeatherItem {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  visibility: number;
  pop: number;
  sys: {
    pod: string;
  };
  dt_txt: string;
}

interface CityInfo {
  id: number;
  name: string;
  coord: {
    lat: number;
    lon: number;
  };
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}
