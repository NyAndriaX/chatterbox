import * as yup from "yup";

export const validationSchema = yup.object({
	email: yup
		.string("enter your email")
		.email("enter a valid email")
		.required("email is required"),
	password: yup
		.string("enter your password")
		.required("password is required")
		.min(6, "Password should be of minimun 6 characters lenght")
		.default(null),
});
