import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authSlice";
import tradingReducer from "./reducers/tradingSlice";

const store = configureStore({
	reducer: {
		auth: authReducer,
		members: tradingReducer,
	},
});

export default store;
