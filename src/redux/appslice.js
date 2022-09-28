import { createSlice } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

const month = dayjs().month();

const initialState = {
  data: {},
  currentMonthIndex: month,
  selectedDay: null,
  eventModalIsOpen: false,
  eventDetails: {},
  currentView: 'month'
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
    setEventDetails(state,action) {
      state.eventDetails = action.payload
    },
    setCurrentView(state,action){
      state.currentView = action.payload
    }
  },
});

export const {
  setCurrentMonthIndex,
  setSelectedDay,
  openEventModal,
  closeEventModal,
  setEventDetails,
  setCurrentView,
} = appSlice.actions;
export default appSlice.reducer;
