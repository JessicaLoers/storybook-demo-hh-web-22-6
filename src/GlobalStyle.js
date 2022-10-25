import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.5;
  margin: 0;
  padding: 20px;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}
h1,
h2,
h3 {
  line-height: 1.2;
}

body,
h1,
h2,
h3,
p {
  margin: 0;
}

ul,
ol {
  list-style: none;
  padding: 0;
  margin: 0;
}

ul li,
ol li {
  list-style: none;
  padding: 0;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

button {
  width: 700px
}


`;

export default GlobalStyle;
