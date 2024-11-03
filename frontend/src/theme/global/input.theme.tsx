import { SxProps } from "@mui/material";
import { useTheme } from "styled-components";

export function InputTheme(isMultiline?: boolean): SxProps {
	const { colors: theme } = useTheme();

	return {
		"&": {
			"&:hover": {
				fieldset: {
					borderColor: `${theme.primary[700]} !important`,
				},

				".Mui-disabled": {
					borderColor: `${theme.input.disabled}  !important`,
				},
			},

			"& input, & textarea": {
				paddingLeft: 0,
				paddingRight: 0,
				fontSize: "clamp(1.7vh, 0.5rem + 4vh, 1.8vh)",
				fontFamily: "Inter Regular",

				"&:-webkit-autofill": {
					//cor do texto quando usa autofill
					WebkitTextFillColor: `${theme.input.text}`,
					border: "none",
					boxShadow: "none",
				},

				"&::placeholder": {
					fontFamily: "Inter Regular",
					fontSize: "clamp(1.7vh, 0.5rem + 4vh, 1.8vh)",
					transition: "color 0.3s ease-in-out",
					color: `${theme.input.placeholder}  !important`,
					opacity: 1, // evita que a cor do placeholder fique mais clara
				},
			},

			".MuiInputBase-root": {
				"& .Mui-disabled": {
					"-webkit-text-fill-color": theme.input.disabled,
				},

				color: `${theme.input.text}`,
				height: isMultiline ? "auto" : "5vh",
				borderRadius: isMultiline ? "1vh" : "2vh",
				backgroundColor: "#fff",
				paddingRight: "1.2vw !important",
				paddingLeft: "1.2vw !important",
				fontSize: "clamp(1.7vh, 0.5rem + 4vh, 1.8vh)",
				fontFamily: "Inter Regular",

				".MuiAutocomplete-endAdornment": {
					right: "1.1vw",
				},

				"@media screen and (max-width: 3840px) and (min-height: 2160px)":
					{
						height: isMultiline ? "auto" : "4vh !important",
					},

				"@media screen and (max-width: 2048px) and (min-height: 1080px)":
					{
						height: isMultiline ? "auto" : "4vh !important",
						paddingRight: "2vh !important",
						paddingLeft: "2vh !important",
					},

				"@media screen and (max-width: 1920px) and (min-height: 1080px)":
					{
						height: isMultiline ? "auto" : "3.5vh !important",
						paddingRight: "0.6vh !important",
						paddingLeft: "0.6vh !important",
					},
			},

			".Mui-focused": {
				fieldset: {
					borderColor: `${theme.primary[700]} !important`,
					boxShadow: `0px 0px 16px ${theme.input.successShadow}`,
				},

				"&.Mui-error": {
					fieldset: {
						boxShadow: `0px 0px 16px ${theme.input.errorShadow} !important`,
					},
				},
			},

			".Mui-disabled": {
				fieldset: {
					borderColor: `${theme.input.disabled}  !important`,
				},
			},

			".Mui-error": {
				"& input, & textarea": {
					"&::placeholder": {
						color: `${theme.actions.error}  !important`,
					},
				},
				fieldset: {
					borderColor: `${theme.actions.error}  !important`,
				},
				color: `${theme.actions.error}  !important`,
			},

			fieldset: {
				borderColor: `${theme.input.border}  !important`,
				borderWidth: "1.5px",
			},
		},
	};
}
