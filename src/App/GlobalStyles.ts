import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
: root {
  //color
  --shade-0: #000;
  --shade-1: #4e4c4c;
  --shade-2: #575858;
  --shade-3: #F4F7FD;
  --shade-4: #fff;
  --button-color: #4495ff;
  --header-color: #777;
  --hr-color: rgba(153,155,156,0.5);
  --shadow: #d1d1d4;

  //font-size
  --header-font: 16px;

  --sp-1: 1px;
  --sp-2: 2px;
  --sp-4: 4px;
  --sp-8: 8px;
  --sp-12: 12px;
  --sp-16: 16px;
  --sp-24: 24px;
  --sp-32: 32px;

  body {
    padding: 0;
    margin: 0;
    background: var(--shade-4);
    color: var(--shade-1);
    font-family: GraphikRegular;
  };

  @font-face {
    font-family: serif;  
    src: url('/fonts/PTSerif-Regular.ttf');
  }

  @font-face {
    font-family: GraphikRegular;  
    src: url('/fonts/GraphikRegular.otf');
  }

  @font-face {
    font-family: GraphikMedium;  
    src: url('/fonts/GraphikMedium.otf');
  }

  @font-face {
    font-family: GraphikBold;  
    src: url('/fonts/GraphikBold.otf');
  }
  
}

`;

export default GlobalStyles;
