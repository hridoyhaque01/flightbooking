import { Provider } from "react-redux";
import "./App.css";
import Booking from "./components/Booking";
import Header from "./components/Header";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Booking />
    </Provider>
  );
}

export default App;
