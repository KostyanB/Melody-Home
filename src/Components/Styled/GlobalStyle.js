import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle `
    @font-face {
        font-family: "Bebas Neue";
        src: local("BebasNeueRegular"), url("../fonts/BebasNeueRegular.woff2") format("woff2"),
            url("../fonts/BebasNeueRegular.woff") format("woff");
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Roboto';
        src: local('Roboto'), local('Roboto-Regular'), url('../fonts/Roboto.woff2') format('woff2'),
            url('../fonts/Roboto.woff') format('woff'), url('../fonts/Roboto.ttf') format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Roboto';
        src: local('Roboto Bold'), local('Roboto-Bold'), url('../fonts/Robotobold.woff2') format('woff2'),
            url('../fonts/Robotobold.woff') format('woff'), url('../fonts/Robotobold.ttf') format('truetype');
        font-weight: 700;
        font-style: normal;
    }

    :root {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;

    }

    * {
        padding: 0;
        margin: 0;
        border: 0;
    }

    *, *::before, *::after {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

    :focus, :active {
        outline: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        -webkit-tap-highlight-color: transparent;
        -moz-tap-highlight-color: transparent;
    }

    a:focus, a:active {
        outline: none;
    }

    nav, footer, header, aside {
        display: block;
    }

    html, body {
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
        overflow: hidden;
        line-height: 1;
        font-size: 16px;
        font-family: "Bebas Neue", Arial, sans-serif;
        font-weight: 400;
        color: black;
        -ms-text-size-adjust: 100%;
        -moz-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;

    }
    #root {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    input, button, textarea, optgroup, select {
        font: inherit;
        cursor: pointer;
        margin: 0;
        padding: 0;
    }

    input:-ms-clear {
        display: none;
    }

    button::-moz-focus-inner {
        padding: 0;
        border: 0;
    }

    a, a:visited {
        text-decoration: none;
        cursor: pointer;
    }

    a:hover {
        text-decoration: none;
    }

    ul li {
        list-style: none;
    }

    img {
        vertical-align: top;
        max-width: 100%;
        height: auto;
    }

    h1, h2, h3, h4, h5, h6, p, ul, ol, figure, figcaption {
        font-size: inherit;
        font-weight: inherit;
        padding: 0;
        margin: 0;
    }

    body {
        overflow-y: auto;
    }

    .show-floor>path, .show-apts>path {
        opacity: 0;
        cursor: pointer;
    }
    .show-floor>path:hover, .show-apts>path:hover {
        opacity: 1;
    }
    path.active-path {
        opacity: 1;
    }
    .logo-img:hover {
        fill: #3595F6;
    }
    div.is-open {
        opacity: 1;
        transform: scale(1);
    }
    a.active-link {
        color: #3596F5;
        text-decoration: underline;
    }
`;