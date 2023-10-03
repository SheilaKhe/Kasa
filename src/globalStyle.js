import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
*, ::before, ::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

}


body {
    width: 100%;
    height: 100%; 
    margin: 0 auto;
    font-family: 'Montserrat', sans-serif;
}


main {
    min-width: 100%;
    min-height: 100%;
    &::after {
        content: "";
        display: block;
        }
}
`

export default GlobalStyle
