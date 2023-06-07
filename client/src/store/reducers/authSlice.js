import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginRequest, signupRequest } from "../actions/authAction";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const initialState = {
	user: {},
	isLoggedIn: false,
	isLoading: false,
	error: null,
};

export const login = createAsyncThunk(
	"auth/login",
	async (credentials, { rejectWithValue }) => {
		try {
			const { email, password } = credentials.form;
			const response = await loginRequest(email, password);
			console.log(response);
			return response;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

export const signup = createAsyncThunk(
	"auth/signup",
	async (credentials, { rejectWithValue }) => {
		try {
			const { name, username, email, sexe, password } = credentials.form;
			const response = await signupRequest(
				name,
				username,
				email,
				sexe,
				password
			);
			return response.user;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		logout(state) {
			state.user = null;
			state.isLoggedIn = false;
			state.error = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(login.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(login.fulfilled, (state, action) => {
				state.isLoading = false;
				state.user = action.payload;
				state.isLoggedIn = true;
				cookies.set("user", state.user);
				window.location.reload = "/";
			})
			.addCase(login.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
				console.log(state.error);
			})
			.addCase(signup.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(signup.fulfilled, (state, action) => {
				state.isLoading = false;
				state.user = action.payload;
				state.isLoggedIn = true;
			})
			.addCase(signup.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
