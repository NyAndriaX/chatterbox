import * as yup from "yup";
export const validationSchema = yup.object({
	email: yup
		.string()
		.email("enter a valid email")
		.required("email is required"),
	password: yup
		.string()
		.required("password is required")
		.min(6, "Password should be of minimun 6 characters lenght")
		.default(null),
	name: yup.string().required("Name is required"),
	username: yup.string().required("Name is required"),
	sexe: yup.string().required("sexe is required"),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref("password"), null], "Passwords do not match")
		.required("Password confirmation is required"),
});
