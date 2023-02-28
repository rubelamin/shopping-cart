// import CartBody from "./components/CartBody";
import { Provider } from "react-redux";
import store from "./redux/store";
import MainBody from "./components/MainBody";
import NavBar from "./components/NavBar";
import CartBody from "./components/CartBody";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(true);

  const showHandler = (e) => {
    setShow(e);
  };

  return (
    <Provider store={store}>
      <NavBar handleView={showHandler} />
      {show ? <MainBody /> : <CartBody />}
    </Provider>
  );
}

export default App;
