import React from "react";
import {
	Select,
	MenuItem,
	FormControl,
	InputLabel,
	FormHelperText,
} from "@mui/material";
import { CustomSelectProps } from "./types";

const CustomSelect: React.FC<CustomSelectProps> = ({
	options,
	register,
	error,
	value,
	onChange,
}) => {
	return (
		<FormControl fullWidth error={!!error?.message} variant="filled">
			<InputLabel id="custom-select-label">
				Selecione uma opção
			</InputLabel>
			<Select
				labelId="custom-select-label"
				id="custom-select"
				{...register}
				value={value}
				onChange={onChange}
			>
				{options?.length &&
					options?.map((option) => (
						<MenuItem key={option.id} value={option.id}>
							{option.description}
						</MenuItem>
					))}
			</Select>
			{error?.message && <FormHelperText>{error.message}</FormHelperText>}
		</FormControl>
	);
};

export default CustomSelect;
