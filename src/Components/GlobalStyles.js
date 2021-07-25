import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
	${reset};
	a{
		text-decoration:none;
		color:inherit;
	}
	*{
		box-sizing:border-box;
	}
	body{
		font-size:12px;
		background-color:rgba(20,20,20,1);
		font-family:"kdg_Light";
		color:white;
		padding-top:50px;
	}
	@font-face {
		font-family: 'kdg_Light';
		src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts-20-12@1.0/kdg_Light.woff') format('woff');
		font-weight: normal;
		font-style: normal;
	}
`;

export default GlobalStyles;
