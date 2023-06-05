import axios from "axios";

const BASE_URL = "https://localhost:5000/api/";

export const api = axios.create({
	baseURL: BASE_URL,
});
