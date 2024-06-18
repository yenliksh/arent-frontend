import { createGlobalStyle } from 'styled-components';

import { colors } from '../themes/default/colors';
import { typography } from './typography';

export const GlobalStyle = createGlobalStyle`
  body {
    min-height: 320px;
    margin: 0;
    padding: 0;
    font-family: "Euclid Circular B", Verdana, sans-serif;
    font-style: normal;
    background-color: ${() => colors.greyScale[0]};

    ${() => typography.body_24_16_regular}
  }

  html,
  body {
    padding: 0;
    margin: 0;
  }



  .visually-hidden,
  input[type="checkbox"].visually-hidden,
  input[type="radio"].visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  li {
    list-style: none;
  }


  html {
  box-sizing: border-box;
}
 
*,
*::before,
*::after {
  box-sizing: border-box;
  font-family: "Euclid Circular B", sans-serif;

  box-sizing: inherit;
}

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  outline: none;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}
strong {
  font-weight: bold;
}
input,
textarea {
  outline: none;
  font: inherit;
  border: 0;
  background: 0;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
button {
  padding: 0;
  border: 0;
  background: 0;
  font: inherit;
}
button:not([disabled]) {
  cursor: pointer;
}
button:disabled {
  cursor: not-allowed;
}
button:focus {
  outline: 0;
}
picture {
  display: block;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
svg {
  display: block;
}
pre {
  white-space: pre-wrap;
}
`;
