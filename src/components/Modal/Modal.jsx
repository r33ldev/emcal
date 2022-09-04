import { Modal } from 'antd';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeEventModal, setEventDetails } from '../../redux/appslice';
import { DatePicker, Input, Button } from 'antd';
import Tags from './sub-component/Tags';
import { saveState } from '../../redux/localStorage';
const EventModal = () => {
  const { RangePicker } = DatePicker;
  const dispatch = useDispatch();
  const { selectedDay, eventDetails } = useSelector((state) => state.app);
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [dates, setDates] = useState(selectedDay.format('D MMM, YYYY'));
  const [eventTitle, setEventTitle] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const { TextArea } = Input;
  function handleDatePickerChange(e) {
    const pickedDate = e;
    if (pickedDate.length === 2) {
      setOpenDatePicker(false);
      dispatch(setEventDetails({ dates: pickedDate, ...eventDetails }));
      const firstDate = pickedDate[0].format('D');
      const secondDate = pickedDate[1].format('D MMM, YYYY');
      setDates(firstDate + ' - ' + secondDate);
    }
  }
  function handleSaveEvent() {
    const eventData = {
      dates: eventDetails.dates,
      tags: eventDetails.tags,
      eventTitle,
      eventDescription,
    };
    saveState(eventData);
    console.log('data: ', eventData);
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
            <div
              className='flex'
              onClick={() => setOpenDatePicker(!openDatePicker)}
            >
              <p className='text-2xl font-bold'>{dates}</p>
              <span className='material-icons-outlined'>
                keyboard_arrow_down
              </span>
            </div>

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
        <div className='flex gap-4 mt-7'>
          <button className='border rounded-full py-1 px-4 text-lg'>
            Yesterday
          </button>
          <button className='border rounded-full py-1 px-4 text-lg'>
            Today
          </button>
          <button className='border rounded-full py-1 px-4 text-lg'>
            Tomorrow
          </button>
        </div>
        <div className='mt-7'>
          <label htmlFor='title'>Event Title</label>
          <Input
            className='rounded-lg mt-3'
            placeholder='Event title'
            onChange={(e) => setEventTitle(e.target.value)}
          />
        </div>
        <div className='mt-7'>
          <label htmlFor='title'>Event Desscription</label>
          <TextArea
            rows={4}
            placeholder='Event descripton'
            maxLength={200}
            className='rounded-lg mt-3'
            onChange={(e) => setEventDescription(e.target.value)}
          />
        </div>
        <div className='mt-7'>
          <Tags />
        </div>
        <div className='mt-14'>
          <Button
            type='primary'
            className='bg-blue-600 w-full'
            onClick={handleSaveEvent}
          >
            Add event
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default EventModal;
