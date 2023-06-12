import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getTeamsMembers } from "../actions/tradingAction";

const initialState = {
	membersTeam: {},
	isLoggedIn: false,
	isLoading: false,
	error: null,
};

export const fetchMembersTeam = createAsyncThunk(
	"auth/membersTeam",
	async (credentials, { rejectWithValue }) => {
		try {
			const response = await getTeamsMembers(credentials);
			return response;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

const tradingSlice = createSlice({
	name: "trading",
	initialState,
	reducers: {
		logout(state) {
			state.membersTeam = null;
			state.isLoggedIn = false;
			state.error = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchMembersTeam.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(fetchMembersTeam.fulfilled, (state, action) => {
				state.isLoading = false;
				state.membersTeam = action.payload;
				state.isLoggedIn = true;
			})
			.addCase(fetchMembersTeam.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

// export const { logout } = authSlice.actions;
export default tradingSlice.reducer;
