import { createStore } from "redux";
import bookingReducer from "./flightbooking/bookingReducer";

const store = createStore(bookingReducer);

export default store;
