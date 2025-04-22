import dayjs from 'dayjs'

export function GreetingMessages() { 
  const currentHour = dayjs().hour();

  if (currentHour < 12) {
    return "Bom dia";
  } else if (currentHour < 18) {
    return "Boa tarde";
  } else {
    return "Boa noite";
  }
}