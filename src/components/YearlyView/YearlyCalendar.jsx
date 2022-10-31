import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { YEARS } from "../../utils/data";
import { getYear } from "../../utils/utility";
import Month from "../MonthlyView/Month";

const YearlyCalendar = () => {
  const [currentYear, setCurrentYear] = useState(getYear());
  const { currentYearIndex } = useSelector((state) => state.app);
  useEffect(() => {
    setCurrentYear(getYear(currentYearIndex));
  }, [currentYearIndex]);
  return (
    <div
      style={{ height: "calc(100vh-34px)" }}
      className='grid gap-16 grid-cols-2'
    >
      {currentYear.map((yearMonth, index) => (
        <div>
          <p className="text-3xl p-16 pb-0">{YEARS[index]}</p>
          <Month month={yearMonth} key={index} />
        </div>
      ))}
    </div>
  );
};

export default YearlyCalendar;
