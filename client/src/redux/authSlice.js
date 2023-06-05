import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginRequest, signupRequest } from "../api/authRequest";

const initialState = {
	user: null,
	isLoggedIn: false,
	isLoading: false,
	error: null,
};

export const login = createAsyncThunk(
	"auth/login",
	async (credentials, { rejectWithValue }) => {
		try {
			const { username, password } = credentials;
			const response = await loginRequest(username, password);
			return response.user;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

export const signup = createAsyncThunk(
	"auth/signup",
	async (credentials, { rejectWithValue }) => {
		try {
			const { username, password } = credentials;
			const response = await signupRequest(username, password);
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
			})
			.addCase(login.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
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
