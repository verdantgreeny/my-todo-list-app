import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Reset } from "styled-reset";
import App from "./App.jsx";
import store from "./redux/config/configStore";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Reset />
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
