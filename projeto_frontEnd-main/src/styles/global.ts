import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        font-weight: 400;
    }

    html{
        width: 100vw;
        height: 100vh;
        background-color: ${props => props.theme['gray-900']};

        /* display: flex;
        justify-content: center;
        align-items: center; */
    }

    body{
        overflow-x: hidden;
    }

    body, input, textarea, button {
        font-weight: 400;
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
    }
  
    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }
`