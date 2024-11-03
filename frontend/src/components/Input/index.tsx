import React, { useState } from "react";
import {
	TextField,
	InputAdornment,
	IconButton,
	TextFieldProps,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { UseFormRegisterReturn } from "react-hook-form";

interface PasswordFieldProps
	extends Omit<TextFieldProps, "error" | "helperText"> {
	label: string;
	type?: string;
	error?: string;
	helperText?: string;
	register: UseFormRegisterReturn;
}

const DefaultInput: React.FC<PasswordFieldProps> = ({
	label,
	type = "text",
	error,
	helperText,
	register,
	...props
}) => {
	const [showPassword, setShowPassword] = useState(false);

	const handleClickShowPassword = () => {
		setShowPassword((prevShow) => !prevShow);
	};

	return (
		<TextField
			{...register}
			label={label}
			type={type === "password" && !showPassword ? "password" : "text"}
			variant="filled"
			fullWidth
			error={!!error}
			helperText={error || helperText}
			InputProps={{
				endAdornment:
					type === "password" ? (
						<InputAdornment position="end">
							<IconButton
								onClick={handleClickShowPassword}
								edge="end"
							>
								{showPassword ? (
									<VisibilityOff />
								) : (
									<Visibility />
								)}
							</IconButton>
						</InputAdornment>
					) : undefined,
			}}
			{...props}
		/>
	);
};

export default DefaultInput;
