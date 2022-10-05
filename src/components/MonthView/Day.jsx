import { Checkbox } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { openEventModal, setSelectedDay } from '../../redux/appslice';
import { getCurrentDay } from '../../utils/utility';
const Day = ({ day }) => {
  const dispatch = useDispatch();
  const handleSelectADay = (e) => {
    dispatch(setSelectedDay(day));
    dispatch(openEventModal());
  };
  const onChange = () => {};
  return (
    <div
      onClick={handleSelectADay}
      className={`border  ${getCurrentDay(day)} flex flex-col items-center justify-center cursor-pointer relative`}
    >
      <header className={`flex flex-col items-center`}>
        <p className={` p-1 my-1 text-2xl text-center`}>
          {day.format('DD')}
        </p>
        <p className='absolute bottom-0 right-0'>
          <Checkbox onChange={onChange} />
        </p>
      </header>
    </div>
  );
};
export default Day;
