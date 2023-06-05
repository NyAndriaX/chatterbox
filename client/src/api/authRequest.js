import { api } from "./api";

export const loginRequest = async (username, password) => {
	try {
		const response = await api.post("/userRequest/login", {
			username,
			password,
		});
		return response.data;
	} catch (error) {
		throw new Error(error.response.data.message);
	}
};

export const signupRequest = async (username, password) => {
	try {
		const response = await api.post("/userRequest/signup", {
			username,
			password,
		});
		return response.data;
	} catch (error) {
		throw new Error(error.response.data.message);
	}
};
