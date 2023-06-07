export const validateForm = async (form, validationSchema) => {
	try {
		await validationSchema.validate(form, { abortEarly: false });
		return {};
	} catch (validationErrors) {
		const errors = {};
		validationErrors.inner.forEach((error) => {
			errors[error.path] = error.message;
		});
		return errors;
	}
};
