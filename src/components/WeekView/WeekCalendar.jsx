import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentView } from "../../redux/appslice";
import { getWeekData } from "../../utils/utility";
import Time from "./Time";
import Week from "./Week";
const WeekCalendar = () => {
  const dispatch = useDispatch();
  function handleBack() {
    dispatch(setCurrentView("monthly"));
  }
  const [weekData, setWeekData] = useState(getWeekData());
  const { currentWeekIndex } = useSelector((state) => state.app);
  useEffect(() => {
    setWeekData(getWeekData(currentWeekIndex));
  }, [currentWeekIndex]);
  // const hours = getHours();

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
