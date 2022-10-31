import dayjs from "dayjs";
var weekday = require("dayjs/plugin/weekday");
dayjs.extend(weekday);
export const getMonth = (month = dayjs().month(), year) => {
  month = Math.floor(month);
  year = year || dayjs().year();
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

export const getYear = (year = dayjs().year()) => {
  year = Math.floor(year);
  let currentMonthCount = -1;
  const monthMatrix = new Array(12).fill(null).map(() => {
    currentMonthCount++;
    return getMonth(currentMonthCount, year);
  });
  return monthMatrix;
};

export const getWeekData = (week) => {
  week = Math.floor(week);
  const weekMatrix = new Array(25).fill([]).map((el, idx) => {
    let current = -1;
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
  return weekMatrix;
};

export const getDayData = (day = dayjs(new Date()).day()) => {
  const dayMatrix = new Array(25).fill([]).map((e, idx) => {
    if (idx === 0) return dayjs(day);
    return new Array(7).fill(null).map(() => {
      return new Array(6).fill(null).map((el, i) => {
        return i;
      });
    });
  });
  return dayMatrix;
};

export const getMinutes = () => {
  return new Array(144).fill(null).map((x, y) => {
    return y + 1;
  });
};

export function getCurrentMinute() {
  const minute = new Date().getMinutes() + 1; // 0 - 60
  const hour = new Date().getHours() + 1; // 0 - 24
  const x = minute * hour;
  console.log("xy: ", hour, minute, x, x / 10);
  return Math.floor(x / 10);
}
export function getCurrentDay(day) {
  return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
    ? "border border-2 border-[#0E689D]"
    : " border-gray-200";
}
