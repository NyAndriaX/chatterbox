import { api } from "./api";

export const loginRequest = async (email, password) => {
	try {
		const response = await api.post("/userRequest/login", {
			email,
			password,
		});
		return response.data;
	} catch (error) {
		throw new Error(error.response.data.message);
	}
};

export const signupRequest = async (name, username, email, sexe, password) => {
	try {
		const response = await api.post("/userRequest/signup/", {
			name,
			username,
			email,
			sexe,
			password,
		});
		return response.data;
	} catch (error) {
		throw new Error(error.response.data.message);
	}
};
