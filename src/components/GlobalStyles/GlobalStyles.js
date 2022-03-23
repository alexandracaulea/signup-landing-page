import { createGlobalStyle } from 'styled-components';
import 'normalize.css';

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
}

html {
  --light--color: #f9fcfb;
  --dark--color: #444444;
  --hot--pink: #fa4252;
  --dark--black: #222831;
  --dark--blue: #35477d;
  --dark-purple: #3e206d;
  --purple--gradient: linear-gradient(to right, #4a00e0, #8e2de2);
}

:focus {
  outline: 2px solid var(--dark-purple);
}

body {
  color: var(--dark--color);
  font-family: 'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
`;

export default GlobalStyles;
