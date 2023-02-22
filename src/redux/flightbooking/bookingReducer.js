// inital value

import { ADDBOOKING, DELETEBOOKING } from "./actionTypes";

const initialState = [];

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDBOOKING:
      return [...state, action.payload];
    case DELETEBOOKING:
      return state.filter((currentBooking) => currentBooking.id !== action.id);
    default:
      return state;
  }
};

export default bookingReducer;
