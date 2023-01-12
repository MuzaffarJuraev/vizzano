import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../redux";
const UseWrapper = ({ children }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  );
};

export default UseWrapper;
