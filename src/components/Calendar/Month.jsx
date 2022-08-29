import React from 'react';
import Day from './Day';
export default function Month({ month }) {
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  return (
    <div className='text-xl' style={{ height: 'calc(80vh)' }}>
      <div className='m-5  justify-center text-center grid grid-cols-7 grid-rows-1'>
        {weekdays.map((day) => (
          <p className='mt-1 flex justify-center'>{day}</p>
        ))}
      </div>
      <div className='flex-1 grid grid-cols-7 grid-rows-5 h-full'>
        {month.map((row, i) => (
          <React.Fragment key={i}>
            {row.map((day, idx) => (
              <Day day={day} key={idx} rowIdx={i} />
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
