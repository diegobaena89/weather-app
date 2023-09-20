export const showAmOrPm = (hour: string) => {
  const hourInt = parseInt(hour);
  if (hourInt > 12) {
    return `${hourInt - 12} PM`;
  } else {
    return `${hourInt} AM`;
  }
};
