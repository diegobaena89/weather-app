// utils/weatherIcons.js

// Importe as imagens personalizadas do diretório 'assets'
import sun from "../assets/sun.png";
import moon from "../assets/moon.png";
import cloud from "../assets/cloud.png";
import cloudy from "../assets/cloudy.png";
import rainyDay from "../assets/rainy-day.png";
import storm from "../assets/storm.png";

// Mapeie os códigos de ícones do OpenWeather para suas imagens correspondentes
const iconMapping = {
  "01d": sun, // Clear sky (dia)
  "01n": moon, // Clear sky (noite)
  "02d": cloudy, // Few clouds (dia)
  "02n": cloudy, // Few clouds (noite)
  "03d": cloud, // Scattered clouds (dia)
  "03n": cloud, // Scattered clouds (noite)
  "04d": cloud, // Broken clouds (dia)
  "04n": cloud, // Broken clouds (noite)
  "09d": rainyDay, // Shower rain (dia)
  "09n": rainyDay, // Shower rain (noite)
  "10d": rainyDay, // Rain (dia)
  "10n": rainyDay, // Rain (noite)
  "11d": storm, // Thunderstorm (dia)
  "11n": storm, // Thunderstorm (noite)
};

// Função que recebe o código do ícone e retorna a imagem correspondente
export const getCustomWeatherIcon = (iconCode: string) => {
  const customIcon = iconMapping[iconCode];
  return customIcon || sun; // Use o ícone padrão (sol) se não houver correspondência
};
