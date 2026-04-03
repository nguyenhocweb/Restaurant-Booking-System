
export const isHour_minute_Now = (open_time: string, close_time: string) => {
    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    const [openH, openM] = open_time.split(":").map(Number);
    const [closeH, closeM] = close_time.split(":").map(Number);

    const openMinutes = openH * 60 + openM;
    const closeMinutes = closeH * 60 + closeM;
    // Case bình thường (10:00 → 22:00)
    if (openMinutes <= closeMinutes) {
        return currentMinutes >= openMinutes && currentMinutes <= closeMinutes;
    }

    // Case qua ngày (22:00 → 02:00)
    return (
        currentMinutes >= openMinutes ||
        currentMinutes <= closeMinutes
    );
}
export const isDay = (week: number) => {
  const now = new Date();
  const currentDay = now.getDay(); // 0 - 6

  return currentDay === week;
};
const numberWeek = [
  "Chủ nhật", // 0
  "Thứ 2",    // 1
  "Thứ 3",    // 2
  "Thứ 4",    // 3
  "Thứ 5",    // 4
  "Thứ 6",    // 5
  "Thứ 7",    // 6
];
export const isNumberWeek=(Week:number)=>{
   return numberWeek[Week]
}

export const isSameDay = (d1: Date, d2: Date) => {
  return (
    d1.getDate() === d2.getDate() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getFullYear() === d2.getFullYear()
  );
};