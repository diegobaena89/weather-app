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
