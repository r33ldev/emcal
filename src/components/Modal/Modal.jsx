import { Modal } from 'antd';
import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeEventModal } from '../../redux/appslice';
import { DatePicker } from 'antd';
const EventModal = () => {
  const { RangePicker } = DatePicker;
  const dispatch = useDispatch();
  const { selectedDay } = useSelector((state) => state.app);
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [dates, setDates] = useState(selectedDay.format('D MMM, YYYY'));
  function handleDatePickerChange(e) {
    const pickedDate = e;
    if (pickedDate.length === 2) {
      setOpenDatePicker(false);
      const firstDate = pickedDate[0].format('D');
      const secondDate = pickedDate[1].format('D MMM, YYYY');
      setDates(firstDate + ' - ' + secondDate);
    }
    console.log(pickedDate[0].format('D MMM, YYYY'));
  }
  return (
    <Modal
      style={{
        top: 0,
        margin: '0 0 0 auto',
      }}
      visible={true}
      closable={true}
      width='400px'
      footer={null}
      onCancel={() => dispatch(closeEventModal())}
      onOk={() => dispatch(closeEventModal())}
      title='Create an event'
    >
      <div className=' '>
        <div className='flex justify-between'>
          <div className='flex cursor-pointer'>
            <p onClick={() => setOpenDatePicker(!openDatePicker)}>{dates}</p>
            <span className='material-icons-outlined'>keyboard_arrow_down</span>

            <RangePicker
              open={openDatePicker}
              onChange={handleDatePickerChange}
              defaultValue={selectedDay}
            />
          </div>
          <p className=' cursor-pointer flex align-center'>
            <small className='underline'> View hours </small>
            <span className='material-icons-outlined text-2xl'>
              chevron_right
            </span>
          </p>
        </div>
        <div>
          
        </div>
      </div>
    </Modal>
  );
};

export default EventModal;
