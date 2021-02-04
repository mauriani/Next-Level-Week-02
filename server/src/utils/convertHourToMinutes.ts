export default function convertHourToMinutes(time: string) {
  // 8 : 00
  //transformar em formato numérico
  const [hour, minutes] = time.split(":").map(Number);
  const timeInMinutes = hour * 60 + minutes;

  return timeInMinutes;
}
