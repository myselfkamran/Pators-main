import { configureStore } from "@reduxjs/toolkit";

import modalsReducer from "./slices/modal";

const store = configureStore({
  reducer: { modal: modalsReducer },
});

export default store;
