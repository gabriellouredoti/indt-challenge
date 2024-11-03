import { BaseTextFieldProps } from "@mui/material";
import { UseFormRegisterReturn } from "react-hook-form";

export interface PasswordFieldProps extends BaseTextFieldProps {
	label: string;
	type?: string;
	error?: string | any;
	helperText?: string;
	register: UseFormRegisterReturn;
}
