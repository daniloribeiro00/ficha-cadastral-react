import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    @media (max-width: 800px) {
	body {
		width: 1200px; 
        zoom: 50%;
	}
}

    body {
        font: 16px Roboto, sans-serif;
        min-height: 100%;
    }

    h1, p, span, label, select, input, button {
        font-family: 'Open Sans', sans-serif;
    }

    #root {
        margin: 0 auto;
    }

    button {
        cursor: pointer;
    }
`;