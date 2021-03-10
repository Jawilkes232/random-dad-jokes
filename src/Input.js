import styled from 'styled-components';

const activeColor = '#dda15e';

const textOnPrimary = '#000000';
const textOnPrimaryInverted = '#ffffff';

const disabled = '#B1B1B1';
const disabledText = '#3E3D3D';

const Input = styled.input`
	padding: 0.5em;
	margin: 0.5em;
	color: #283618;
	background: #fefae0;
	border: none;
	border-radius: 3px;
	color: ${textOnPrimary};

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
// export default function Form({ handleChange, searchString }) {
// 	const inputRef = React.useRef();
// 	return (
// 		<Input
// 			ref={inputRef}
// 			onMouseEnter={() => {
// 				inputRef.current.focus();
// 			}}

// 		/>
// 	);
// }
export default Input;
