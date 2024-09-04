import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Global, css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';
import App from './App.jsx';

const baseStyle = css`
  ${emotionNormalize}
  @font-face {
    font-family: 'EF_jejudoldam';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2210-EF@1.0/EF_jejudoldam.woff2')
      format('opentype');
    font-weight: normal;
    font-style: normal;
  }
  html,
  body {
    font-family: 'EF_jejudoldam';
    padding: 0;
    margin: 0;
    background: white;
    min-height: 100%;
  }
`;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Global styles={baseStyle} />
    <App />
  </StrictMode>
);
