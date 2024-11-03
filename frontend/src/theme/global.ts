import { createGlobalStyle } from "styled-components";
import InterThin from "../assets/fonts/inter-v13-latin-100.woff2";
import InterRegular from "../assets/fonts/inter-v13-latin-regular.woff2";
import InterMedium from "../assets/fonts/inter-v13-latin-500.woff2";
import InterSemiBold from "../assets/fonts/inter-v13-latin-600.woff2";
import InterBold from "../assets/fonts/inter-v13-latin-700.woff2";

export const GlobalStyles = createGlobalStyle`

	@font-face {
		font-family: 'Inter Thin';
		src: url(${InterThin}) format("woff2");
	}

	@font-face {
		font-family: 'Inter Regular';
		src: url(${InterRegular}) format("woff2");
	}

	@font-face {
		font-family: 'Inter Medium';
		src: url(${InterMedium}) format("woff2");
	}

	@font-face {
		font-family: 'Inter SemiBold';
		src: url(${InterSemiBold}) format("woff2");
	}

	@font-face {
		font-family: 'Inter Bold';
		src: url(${InterBold}) format("woff2");
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		scroll-behavior: smooth;
		font-weight: normal;
		font-family: "Inter Regular", sans-serif;
	}


	body {
		background: ${({ theme }) => theme.colors.common.background};
		width: 100%;
		height: 100vh;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		overflow-y: hidden;
	}

	::-webkit-scrollbar {
		width: 10px;
		height: 10px;
		transition: all 0.2s ease-in;
	}

	::-webkit-scrollbar-thumb {
		background: #ccc;
		border-radius: 10px;
		transition: all 0.2s ease-in;
	}


	a{
		cursor: pointer;
	}

	button {
		cursor: pointer;

		&:hover {
			opacity: 0.9;
			filter: brightness(0.9);
		}

		&:disabled {
			background-color: #c6c6c6;
			color: #ffffff;
			border: none;

			&:hover {
				background-color: #c6c6c6;
			}

			&:active {
				background-color: #c6c6c6;
			}

		}
	}

	button, input {
		outline: 0;
	}

	h1, h2, h3, h4, h5, h6 {
		color: #575757;
		font-weight: bold;
	}

	p, small, sub {
		color: #575757;
	}

	h1 {
		font-size:24px;
	}

	h2 {
		font-size: 20px;
	}

	h5 {
		font-size: 14px;
	}

	small {
		color: #575757;
		font-size: 0.65rem;
		font-weight: 400;
	}

	input[type=password]::-ms-clear{
		display: none;
	}

	input[type=password]::-ms-reveal{
		display: none;
	}

	input:-webkit-autofill,
	input:-webkit-autofill:hover,
	input:-webkit-autofill:focus,
	textarea:-webkit-autofill,
	textarea:-webkit-autofill:hover
	textarea:-webkit-autofill:focus,
	select:-webkit-autofill,
	select:-webkit-autofill:hover,
	select:-webkit-autofill:focus
	{
		border: 1px solid white;
		/* -webkit-text-fill-color: yellow ; */
		-webkit-box-shadow: 0 0 0px 1000px #1212120A inset;
		transition: background-color 5000s ease-in-out 0s;
	}
`;
