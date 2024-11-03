import { motion } from "framer-motion";
import styled from "styled-components";

export const ContainerBox = styled.div`
	position: absolute;
	right: 0;
	z-index: 99999;
`;

export const Box = styled(motion.div)`
	display: flex;
	justify-content: space-between;
	align-items: center;

	opacity: 1;
	padding: 1vh 1vw;
	gap: 0.5vw;
	margin-top: 3vh;
	margin-right: 3vh;
	border-radius: 1vh;

	p {
		font-family: "Inter Regular", sans-serif;
		font-size: 0.85vw;
	}

	svg {
		height: 2.8vh;
		width: 2.8vh;
	}
`;

export const BoxIcon = styled.div`
	display: flex;
	gap: 0.5rem;
`;
