import React from "react";
import { useDispatch } from "react-redux";
import { setCurrentView } from "../../redux/appslice";
import { getWeekData } from "../../utils/utility";
import Time from "./Time";
import Week from "./Week";
const WeekCalendar = () => {
  const dispatch = useDispatch();
  function handleBack() {
    dispatch(setCurrentView("Monthly"));
  }
  const weekData = getWeekData();
  return (
    <div style={{ height: "calc(100vh-34px)" }}>
      <button onClick={handleBack} className='mt-6'>
        <span className='material-icons-outlined cursor-pointer text-gray-600 mx-2'>
          <span className='material-symbols-outlined'>arrow_back</span>
        </span>
      </button>
      {/* <Week currentWeek={weekData} />
      <Time time={hours} /> */}
      {weekData.map((week, idx) => {
        if (idx === 0) return <Week currentWeek={week} />;
        return <Time currentWeek={week} index={idx} />;
      })}
    </div>
  );
};

export default WeekCalendar;
