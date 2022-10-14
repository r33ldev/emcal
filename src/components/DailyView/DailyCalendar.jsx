import { useDispatch, useSelector } from "react-redux";
import { setCurrentView } from "../../redux/appslice";
import { getDayData } from "../../utils/utility";
import Time from "../WeekView/Time";
import Week from "../WeekView/Week";

const DailyCalendar = () => {
  const dispatch = useDispatch();
  function handleBack() {
    dispatch(setCurrentView("Monthly"));
  }
  const { currentDay } = useSelector((state) => state.app);
  const dayData = getDayData(currentDay);
  console.log('timenow: ', currentDay, dayData)
  return (
    <div style={{ height: "calc(100vh-34px)" }}>
      <button onClick={handleBack} className='mt-6'>
        <span className='material-icons-outlined cursor-pointer text-gray-600 mx-2'>
          <span className='material-symbols-outlined'>arrow_back</span>
        </span>
      </button>
      {dayData.map((day, idx) => {
        const dayToShow = [day];
        if (idx === 0) return <Week currentWeek={dayToShow} />;
        return <Time currentWeek={day} index={idx} />;
      })}
    </div>
  );
};

export default DailyCalendar;
