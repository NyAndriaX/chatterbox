import * as yup from "yup";

const validationSchemaSignUp = yup.object({
	email: yup
		.string("enter your email")
		.email("enter a valid email")
		.required("email is required"),
	password: yup
		.string("enter your password")
		.required("password is required")
		.min(6, "Password should be of minimun 6 characters lenght"),
	name: yup.string("Enter your name").required("Name is required"),
	username: yup.string("Enter your name").required("Name is required"),
	sexe: yup.string("enter your sexe").required("sexe is required"),
	confirmPassword: yup
		.string("enter your confirmation Password")
		.oneOf([yup.ref("password"), null], "Passwords do not match")
		.required("Password confirmation is required"),
});

const validationSchemaSignIn = yup.object({
	email: yup
		.string("enter your email")
		.email("enter a valid email")
		.required("email is required"),
	password: yup
		.string("enter your password")
		.required("password is required")
		.min(6, "Password should be of minimun 6 characters lenght"),
});

export const validateForm = async (form, mode) => {
	let validationSchema;

	validationSchema =
		mode === "sign-in" ? validationSchemaSignIn : validationSchemaSignUp;

	try {
		await validationSchema.validate(form, { abortEarly: false });
		return {}; // Aucune erreur de validation
		console.log(arriver);
	} catch (validationErrors) {
		const errors = {};
		validationErrors.inner.forEach((error) => {
			errors[error.path] = error.message;
		});
		return errors; // Retourne les erreurs de validation
	}
};
