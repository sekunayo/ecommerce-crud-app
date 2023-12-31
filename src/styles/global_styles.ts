export const globalStyles = `
:root {
  font-size: 1rem;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  scroll-behavior: smooth;
  -webkit-text-size-adjust: 100%;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  margin: 0;
  direction: rtl;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Playfair Display";
}

main {
  display: block;
}

hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}

pre {
  font-family: monospace, monospace; 
  font-size: 1rem;
}

a {
  background-color: transparent;
  text-decoration: none;
}

abbr[title] {
  border-bottom: none;
  text-decoration: underline;
  text-decoration: underline dotted;
}

b,
strong {
  font-weight: bolder;
}

small {
  font-size: 80%;
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

code,
kbd,
samp {
  font-family: monospace, monospace; 
  font-size: 1rem; 
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

img {
  border-style: none;
  display: block;
  border: none;
  outline: none;
  max-width: 100%;
  height: auto;
}

button,
input,
optgroup,
select,
textarea {
  margin: 0;
  font-family: inherit;
  outline: none;
}

button,
input {
  overflow: visible;
}

button,
select {
  text-transform: none;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -wwebkit-appearance: button;
  appearance: button;
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
}

[type="number"] {
  -moz-appearance: textfield;
}

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

legend {
  box-sizing: border-box;
  color: inherit;
  display: table;
  max-width: 100%;
  padding: 0;
  white-space: normal;
}

progress {
  vertical-align: baseline;
}

textarea {
  overflow: auto;
}

[type="checkbox"],
[type="radio"],
[type="date"] {
  box-sizing: border-box;
  padding: 0;
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;

  &::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }
}

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}

details {
  display: block;
}

summary {
  display: list-item;
}

template {
  display: none;
}

[hidden] {
  display: none;
}

ul,
ol {
  padding: 0;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
ol,
figure,
blockquote,
dl,
dd {
  margin: 0;
  padding: 0;
}

p {
  font-family: "Playfair Display";
  display: block;
  margin-block-start: 0;
  margin-block-end: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
  font-family: "Playfair Display";
}

ul,
ol,
li {
  list-style: none;
  padding: 0;
}

img:not([alt]) {
  filter: blur(10px);
}

table {
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  border: 1px solid;
}

button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
}

button:focus,
button:hover {
  outline: none;
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

.react-datepicker-wrapper{
  width: 100%,
  height: 48px
}

.react-datepicker__header{
  border: none !important;
  background-color: transparent !important;
  padding: 8px 0px 32px 0px !important;
}

.react-datepicker{
  border: none !important;
  padding: 31px 20px;
}

.react-datepicker__day{
  color: #0C0E16 !important;
  font-family: Playfair Display !important;
  font-size: 15px !important;
  font-style: normal !important;
  font-weight: 700 !important;
  line-height: 15px !important;
  letter-spacing: -0.25px !important;
}

.react-datepicker__day--selected{
  color: #7C5DFA !important;
  background-color: transparent !important;
}

.react-datepicker__day-names{
  display: none;
}

.react-datepicker__navigation{
  top: 40px !important;
}

.react-datepicker__input-container input{
  padding-left: 20px;
  color: #0C0E16;
  font-family: Playfair Display;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 15px; 
  letter-spacing: -0.25px;
}

.react-datepicker__input-container input:placeholder: {
  color: "#0C0E16"
}

body::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.example {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
`