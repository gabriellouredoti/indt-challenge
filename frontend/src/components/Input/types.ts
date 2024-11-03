import { TextFieldProps } from "@mui/material";
import { UseFormRegisterReturn } from "react-hook-form";

export interface PasswordFieldProps extends TextFieldProps {
	label: string;
	type?: string;
	error?: string;
	helperText?: string;
	register: UseFormRegisterReturn;
}
