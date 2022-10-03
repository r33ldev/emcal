import React from "react";
import { useDispatch } from "react-redux";
import { setCurrentView } from "../../redux/appslice";
import { getHours } from "../../utils/utility";
import Time from "./Time";
const WeekCalendar = () => {
  const dispatch = useDispatch();
  function handleBack() {
    dispatch(setCurrentView("month"));
  }

  const hours = getHours();

  return (
    <div style={{ height: "calc(100vh-34px)"}}>
      <button onClick={handleBack} className='mt-6 mb-14'>
        <span className='material-icons-outlined cursor-pointer text-gray-600 mx-2'>
          <span className='material-symbols-outlined'>arrow_back</span>
        </span>
      </button>
      <Time time={hours} />
    </div>
  );
};

export default WeekCalendar;
