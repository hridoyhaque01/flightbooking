import React, { useState } from "react";
import { frame, vector1, vector3 } from "../../img/Images";
import { addBooking } from "../../redux/flightbooking/action";

export default function Form({ state, dispatch }) {
  let isTrue = false;

  const [values, setValues] = useState({
    id: new Date().getTime().toString(),
    from: "",
    to: "",
    date: "",
    guests: "",
    bookedClass: "",
  });

  const formHandler = (event) => {
    event.preventDefault();

    if (state.length === 3) {
      isTrue = true;
      alert("You have added the maximum number of booking");
      return;
    } else {
      isTrue = false;
    }

    const id = new Date().getTime().toString();
    setValues({ ...values, id: id });
    dispatch(addBooking(values));
  };

  const handleChange = (event) => {
    switch (event.target.name) {
      case "from":
        return setValues({ ...values, from: event.target.value });
      case "to":
        return setValues({ ...values, to: event.target.value });
      case "date":
        return setValues({ ...values, date: event.target.value });
      case "guests":
        return setValues({ ...values, guests: event.target.value });
      case "ticketClass":
        return setValues({ ...values, bookedClass: event.target.value });
      default:
        return values;
    }
  };

  return (
    <div className="mt-[160px] mx-4 md:mt-[160px] relative">
      <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
        <form className="first-hero lws-inputform">
          {/*  From  */}
          <div className="des-from">
            <p>Destination From</p>
            <div className="flex flex-row">
              <img src={frame} alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="from"
                id="lws-from"
                required
                onChange={handleChange}
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option>Dhaka</option>
                <option>Sylhet</option>
                <option>Saidpur</option>
                <option>Cox's Bazar</option>
              </select>
            </div>
          </div>
          {/*  To  */}

          <div className="des-from">
            <p>Destination To</p>
            <div className="flex flex-row">
              <img src={frame} alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="to"
                id="lws-to"
                onChange={handleChange}
                required
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option>Dhaka</option>
                <option>Sylhet</option>
                <option>Saidpur</option>
                <option>Cox's Bazar</option>
              </select>
            </div>
          </div>

          {/*  Date  */}
          <div className="des-from">
            <p>Journey Date</p>
            <input
              type="date"
              className="outline-none px-2 py-2 w-full date"
              name="date"
              id="lws-date"
              onChange={handleChange}
              required
            />
          </div>

          {/*  Guests  */}

          <div className="des-from">
            <p>Guests</p>
            <div className="flex flex-row">
              <img src={vector1} alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="guests"
                id="lws-guests"
                onChange={handleChange}
                required
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option value="1">1 Person</option>
                <option value="2">2 Persons</option>
                <option value="3">3 Persons</option>
                <option value="4">4 Persons</option>
              </select>
            </div>
          </div>

          {/*  Class  */}

          <div className="des-from !border-r-0">
            <p>Class</p>
            <div className="flex flex-row">
              <img src={vector3} alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="ticketClass"
                id="lws-ticketClass"
                onChange={handleChange}
                required
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option>Business</option>
                <option>Economy</option>
              </select>
            </div>
          </div>

          {/* button  */}

          <button
            disabled={isTrue}
            className="addCity"
            type="submit"
            id="lws-addCity"
            onClick={formHandler}
          >
            <svg
              width="15px"
              height="15px"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            <span className="text-sm">Book</span>
          </button>
        </form>
      </div>
    </div>
  );
}
