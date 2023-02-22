import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "./booking/Form";
import Preview from "./booking/Preview";

export default function Booking() {
  const booking = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <section>
      <Form state={booking} dispatch={dispatch} />
      <Preview state={booking} dispatch={dispatch} />
    </section>
  );
}
