import styled from 'styled-components';

const activeColor = '#EFFFFA';

const textOnPrimary = '#000000';
const textOnPrimaryInverted = '#0D0C1D';

const disabled = '#B1B1B1';
const disabledText = '#3E3D3D';

const Input = styled.input`
	padding: 0.8em;
	margin: 0.2em;
	color: #283618;
	background: #fefae0;
	border: none;
	border-radius: 3px;
	color: ${textOnPrimary};
	width: 30vw;
	max-width: 1200px;
	min-width: 250px;

	&:focus {
		background-color: ${activeColor};
		color: ${textOnPrimaryInverted};
		outline: 2px solid ${activeColor};
		outline-offset: 1px;
	}

	&:active {
		background-color: ${activeColor};
		color: ${textOnPrimaryInverted};
	}
	&:disabled {
		background-color: ${disabled};
		color: ${disabledText};
		cursor: not-allowed;
	}
`;

export default Input;
