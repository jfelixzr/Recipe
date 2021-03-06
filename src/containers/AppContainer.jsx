import React from "react";
import { Provider } from "react-redux";

import { store } from "../store/store";

import "bootswatch/dist/united/bootstrap.min.css";
import RouterApp from "../routers/AppRouter";

const AppContainer = () => {
  return (
    <Provider store={store}>
      <RouterApp />
    </Provider>
  );
};

export default AppContainer;
