import { api } from "../../common/url";

export const getTeamsMembers = async (uid) => {
	try {
		const response = await api.get(`/trading/getCustomerTeam/${uid}`);
		return response.data;
	} catch (error) {
		throw new Error(error.response.data.message);
	}
};
