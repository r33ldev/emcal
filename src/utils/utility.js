import dayjs from "dayjs";
var weekday = require("dayjs/plugin/weekday");
dayjs.extend(weekday);
export const getMonth = (month = dayjs().month()) => {
  month = Math.floor(month);
  const year = dayjs().year();
  const firstDayOfMonth = dayjs(new Date(year, month, 1)).day();
  let currentMonthCount = 0 - firstDayOfMonth;

  const daysMatrix = new Array(5).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++;
      return dayjs(new Date(year, month, currentMonthCount));
    });
  });

  return daysMatrix;
};

export const getWeekData = (week) => {
  week = Math.floor(week)
  const weekMatrix = new Array(25).fill([]).map((el, idx) => {
    let current = 0;
    return new Array(7).fill(null).map((el, i) => {
      if (idx === 0) {
        current++;
        return dayjs().weekday(current);
      }
      return new Array(6).fill(null).map((el, i) => {
        return i;
      });
    });
  });
  console.log("getData: ", weekMatrix);
  return weekMatrix;
};

// export const getWeek = (week) => {
//   week = Math.floor(week);
//   let current = 0;
//   return new Array(5).fill([]).map(() => {
//     return new Array(7).fill(null).map(() => {
//       current++;
//       return dayjs().weekday(current);
//     });
//   });
// };

export function getCurrentDay(day) {
  return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
    ? "border border-blue-600 text-blue-600"
    : " border-gray-200";
}