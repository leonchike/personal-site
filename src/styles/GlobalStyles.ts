import { createGlobalStyle } from "styled-components";

import { COLORS, WEIGHTS, FAMILIES, QUERIES } from "./styleConstants";

const GlobalStyles = createGlobalStyle`
  /* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}
/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}
main {
  width: 100%;
}
/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'] {
  list-style: none;
  padding: 0;
  margin: 0;
}
/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}
/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.65;
}
/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}
a{
  color: inherit;
  text-decoration: none;
}
a:hover {
  opacity: 0.8;
}
/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}
/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}
/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
html {
  /*
    Silence the warning about missing Reach Dialog styles
  */
  --reach-dialog: 1;
}
html, body, #root, #__next {
  height: 100%;
}
/* DESIGN TOKENS */
html {
  --color-white: ${COLORS.white};
  --color-black: ${COLORS.black};
  --color-offblack: ${COLORS.offblack};
  --color-page-background: ${COLORS.pageBackground};
  --color-gray-100: ${COLORS.gray[100]};
  --color-gray-300: ${COLORS.gray[300]};
  --color-gray-500: ${COLORS.gray[500]};
  --color-gray-700: ${COLORS.gray[700]};
  --color-gray-900: ${COLORS.gray[900]};
  --color-primary: ${COLORS.primary};
  --color-secondary: ${COLORS.secondary};
  --color-green: ${COLORS.green};
  --color-orange: ${COLORS.orange};
  --color-urgent: ${COLORS.urgent};
  --font-weight-light: ${WEIGHTS.light};
  --font-weight-normal: ${WEIGHTS.normal};
  --font-weight-bold: ${WEIGHTS.bold};
  --font-weight-heavy: ${WEIGHTS.heavy};
  --font-family-serif: ${FAMILIES.serif};
  --blog-width: 48rem;

  font-size: 14px;
  @media ${QUERIES.tabletAndUp} {
    font-size: 16px;
  }
  @media ${QUERIES.laptopAndUp} {
    font-size: 18px;
  }
}
body {
  // font styles are set on _app.tsx
  /* font-family: var(--font-family-sans-serif); */
  font-variation-settings: 'slnt' 0;
  color: var(--color-offblack);
  background-color: var(--color-page-background);
}
/*
  Remove default button styles. We'll provide our own at the
  component level
*/
button {
  display: block;
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;
  font: inherit;
  color: inherit;
}
/*
  Changing the default link styles to match the design
*/
::selection {
  color: var(--color-white);
  background: var(--color-offblack); /* WebKit/Blink Browsers */
}
::-moz-selection {
  color: var(--color-white);
  background: var(--color-offblack); /* Gecko Browsers */
}


/* 
  Class based styling for markdown content
*/
.markdown-column-grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }

  div {
    width: 100%;
    height: 100%;
    /* display: flex;
    align-items: flex-start; */

    img {
      width: 100%;
      height: 100%;
    }
  }
}

.markdown-image-cover {
  object-fit: cover;
}

.markdown-image-contain {
  object-fit: contain;
}

.markdown-spacer {
  height: 2.5rem;

  @media ${QUERIES.tabletAndUp} {
    height: 5rem;
  }
}

.markdown-grid-content-description-layout {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: 0.7fr 1fr;
    grid-gap: 3rem;
  }

  div {
    width: 100%;
    height: 100%;
    /* display: flex;
    align-items: flex-start; */

    img {
      width: 100%;
      height: 100%;
    }
  }
}

.markdown-spacer-small{
  height: 1rem;

  @media ${QUERIES.tabletAndUp} {
    height: 2rem;
  }
}

.markdown-external-link {
  display: inline-block;
  background-color: var(--color-gray-100);
  padding: 0.9rem 1.5rem 0.9rem 1.5rem;
  font-weight: 500;
  font-size: calc(17 / 16 * 1rem);
  line-height: 1;
  letter-spacing: 0.03rem;
  
  span {
    &::after {
      content: "↗";
    display: inline-block;
    padding-inline-start: 0.25rem;
    transform: translate3d(0rem, -0.05rem, 0);
    transition: transform 300ms ease;
    }

    &:hover::after {
    transform: translate3d(0.2rem, -0.25rem, 0);
    transition: transform 300ms ease;
  }
  }
}

.markdown-footnote {
  display: inline-block;
  color: var(--color-gray-700);
  font-size: calc(15 / 16 * 1rem);
}
`;

export default GlobalStyles;
