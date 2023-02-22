import { ADDBOOKING, DELETEBOOKING } from "./actionTypes";

export const addBooking = (value) => {
  return {
    type: ADDBOOKING,
    payload: value,
  };
};

export const deleteBooking = (id) => {
  return {
    id,
    type: DELETEBOOKING,
  };
};
