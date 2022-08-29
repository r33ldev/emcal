import { createSlice } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

const month = dayjs().month();

const initialState = {
  data: {},
  currentMonthIndex: month,
  selectedDay: null,
  eventModalIsOpen: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setAppData(state, action) {
      state.data = action.payload;
    },
    clearAppData(state) {
      state.data = {};
    },
    setCurrentMonthIndex(state, action) {
      state.currentMonthIndex = action.payload;
    },
    setSelectedDay(state, action) {
      state.selectedDay = action.payload;
    },
    openEventModal(state) {
      state.eventModalIsOpen = true;
    },
    closeEventModal(state) {
      state.eventModalIsOpen = false;
    },
  },
});

export const {
  setCurrentMonthIndex,
  setSelectedDay,
  openEventModal,
  closeEventModal,
} = appSlice.actions;
export default appSlice.reducer;
