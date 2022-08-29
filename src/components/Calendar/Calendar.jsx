import React, { useEffect, useState } from 'react';
import { getMonth } from '../../utils/utility';
import Month from './Month';
import { useSelector } from 'react-redux';
const Calendar = () => {
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  const { currentMonthIndex } = useSelector((state) => state.app);
  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIndex));
  }, [currentMonthIndex]);
  return (
    <div style={{ height: 'calc(100vh-34px)' }}>
      <Month month={currenMonth} />
    </div>
  );
};

export default Calendar;
