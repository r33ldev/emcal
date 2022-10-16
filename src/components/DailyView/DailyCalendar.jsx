import { useDispatch, useSelector } from "react-redux";
import { setCurrentView } from "../../redux/appslice";
import { getCurrentMinute, getDayData, getMinutes } from "../../utils/utility";
import Time from "../Shared/Time";
import Week from "../Shared/Week";

const DailyCalendar = () => {
  const dispatch = useDispatch();
  function handleBack() {
    dispatch(setCurrentView("Monthly"));
  }
  const { currentDay } = useSelector((state) => state.app);
  const dayData = getDayData(currentDay);
  const MINUTES = getMinutes();
  const currentMinute = getCurrentMinute();
  console.table("table: ", MINUTES, currentMinute);

  return (
    <div style={{ height: "calc(100vh-34px)" }}>
      <button onClick={handleBack} className='mt-6'>
        <span className='material-icons-outlined cursor-pointer text-gray-600 mx-2'>
          <span className='material-symbols-outlined'>arrow_back</span>
        </span>
      </button>
      <div className='absolute w-full mt-[5.3rem] pl-28 z-10'>
        {MINUTES.map((min) => (
          <div className='flex'>
            {min === currentMinute && (
              <p className='rounded-full h-[1rem] w-[1rem] bg-[blue] f-[9rem] mt-[-.4rem]'>
                &nbsp;
              </p>
            )}
            <p
              className={`border border-[blue] ${
                min === currentMinute ? "visible" : "invisible"
              } w-full mb-[.845rem]`}
            ></p>
          </div>
        ))}
      </div>
      {dayData.map((day, idx) => {
        const dayToShow = [day];
        if (idx === 0) return <Week currentWeek={dayToShow} />;
        return (
          <div className='relative z-0'>
            <Time currentWeek={day} index={idx} />
          </div>
        );
      })}
    </div>
  );
};

export default DailyCalendar;
