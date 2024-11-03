import styled from "styled-components";

export const LoginBox = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: "center";
	width: 50%;
	height: auto;
	padding: 4vw;
	border-radius: 1vw;
	background-color: #ffffff;
`;

export const Content = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100vh;
	padding: 8vw;
	background-color: #0c1c34;
	margin-top: 2vw;
`;

export const Row = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 1vw;
	width: 100%;
`;

export const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 6vh;
	border-radius: 0.3vw;
	padding: 2vh;
	background-color: #0290a4;
	color: #fff;
	border: none;
	font-size: 1.8vh;
`;

export const Label = styled.h1`
	color: #0290a4;
	font-size: 2vw;
	width: 100%;
	text-align: start;
`;

export const Subtitle = styled.h2`
	color: #0b2b25;
	font-size: 1vw;
	width: 100%;
	text-align: start;
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	width: 100%;
	height: 100%;
`;

export const Card = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	box-shadow: 0px 1px 4px #00000029;
	border-radius: 0.6vw;
`;
