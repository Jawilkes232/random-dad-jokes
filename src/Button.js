import styled from 'styled-components';

const Button = styled.button`
	padding: 10px 30px;
	color: #effffa;
	background-color: #343078;
	border-radius: 15px 30px;
	outline: none;
	border: none;
	box-shadow: 1px 1px #effffa;
	&:active {
		background-color: #3e8e41;
		box-shadow: 0 5px #666;
		transform: translateY(4px);
	}
`;
export default Button;
