import React from "react";
import { deleteBooking } from "../../redux/flightbooking/action";
import TableHead from "./TableHead";
import TableRows from "./TableRows";

export default function Preview({ state, dispatch }) {
  const deleteBookingHandler = (id) => {
    dispatch(deleteBooking(id));
  };

  return (
    <div className="table-container">
      <table className="booking-table">
        <TableHead />
        <tbody className="divide-y divide-gray-300/20" id="lws-previewBooked">
          {state.length > 0 &&
            state.map((currentState) => (
              <TableRows
                key={currentState.id}
                state={currentState}
                handleClick={deleteBookingHandler}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
}
