import React, { useState } from "react";
import { TextField, Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../store/reducers/authSlice";
import { validationSchema } from "../validation/validationSchemaSignIn";
import { validateForm } from "../../../common/utils";
import { Link } from "react-router-dom";

const initialState = {
	name: "",
	username: "",
	sexe: "Male",
	password: "",
	confirmPassword: "",
};

const Input = styled(TextField)(({ theme }) => ({
	marginTop: 5,
	marginBottom: 5,
}));
function Signin() {
	const dispatch = useDispatch();
	const errorRequest = useSelector((state) => state.auth.error);
	const isLoading = useSelector((state) => state.auth.isLoading);
	const [form, setForm] = useState(initialState);
	const [errors, setErrors] = React.useState({});

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const validationErrors = await validateForm(form, validationSchema);
		setErrors(validationErrors);
		if (Object.keys(validationErrors).length === 0) {
			dispatch(login({ form }));
		}
	};

	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			height="100vh"
			mt={4}
			mb={4}
			width="auto">
			<Box
				p={2}
				sx={{ width: "40%", border: "1px solid #eaeaea", borderRadius: "6px" }}>
				<Typography variant="subtitle2" fullWidth>
					Welcome back &#x270B;!
				</Typography>
				<Typography variant="h5" mt={1} sx={{ fontWieght: "600" }}>
					Sign up the account
				</Typography>
				<Typography
					variant="subtitle2"
					mt={1}
					sx={{ color: "red", textAlign: "center" }}>
					{errorRequest}
				</Typography>
				<form onSubmit={handleSubmit} style={{ marginTop: "8px" }}>
					<Typography variant="caption" fullWidth>
						email*
					</Typography>
					<Input
						name="email"
						value={form.email}
						onChange={handleChange}
						error={!!errors.email}
						helperText={errors.email}
						label="enter your email*"
						fullWidth
					/>
					<Typography variant="caption" fullWidth>
						password*
					</Typography>
					<Input
						name="password"
						type="password"
						value={form.password}
						onChange={handleChange}
						error={!!errors.password}
						helperText={errors.password}
						label="enter your confirmation password*"
						fullWidth
					/>
					<Button type="submit" variant="contained" fullWidth>
						{!isLoading ? "continue" : "loading ..."}
					</Button>
					<Box mt={2} sx={{ textAlign: "center" }}>
						<Typography variant="caption">
							Don't have an account{" "}
							<Link to="/signup" sx={{ color: "blue" }}>
								Sign up
							</Link>
						</Typography>
					</Box>
				</form>
			</Box>
		</Box>
	);
}

export default Signin;
