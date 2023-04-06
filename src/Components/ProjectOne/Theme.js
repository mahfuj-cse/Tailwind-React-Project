// theme: {
//     screens: {
//       sm: "480px",
//       md: "768px",
//       lg: "976px",
//       xl: "1440px",
//     },
//     extend: {
//       colors: {
//         brightRed: "hsl(12, 88%, 59%)",
//         brightRedLight: "hsl(12, 88%, 69%)",
//         brightRedSupLight: "hsl(12, 88%, 95%)",
//         darkBlue: "hsl(228, 39%, 23%)",
//         darkGrayishBlue: "hsl(227, 12%, 61%)",
//         veryDarkBlue: "hsl(233, 12%, 13%)",
//         veryPaleRed: "hsl(13, 100%, 96%)",
//         veryLightGray: "hsl(0, 0%, 98%)",
//       },
//     },
//   },



// index.css



// #cta {
//     background-image: url('./assets/bg-simplify-section-desktop.svg');
//     background-repeat: no-repeat;
//   }
  
//   @media (max-width: 576px) {
//     body {
//       background-position: 50px -50px;
//       background-size: 500px;
//     }
  
//     #cta {
//       background-image: url('./assets/bg-simplify-section-mobile.svg');
//     }
//   }
  
  
//   * Hamburger Menu */
//   .hamburger {
//     cursor: pointer;
//     width: 24px;
//     height: 24px;
//     transition: all 0.25s;
//     position: relative;
//   }
  
//   .hamburger-top,
//   .hamburger-middle,
//   .hamburger-bottom {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 24px;
//     height: 2px;
//     background: #000;
//     transform: rotate(0);
//     transition: all 0.5s;
//   }
  
//   .hamburger-middle {
//     transform: translateY(7px);
//   }
  
//   .hamburger-bottom {
//     transform: translateY(14px);
//   }
  
//   .open {
//     transform: rotate(90deg);
//     transform: translateY(0px);
//   }
  
//   .open .hamburger-top {
//     transform: rotate(45deg) translateY(6px) translate(6px);
//   }
  
//   .open .hamburger-middle {
//     display: none;
//   }
  
//   .open .hamburger-bottom {
//     transform: rotate(-45deg) translateY(6px) translate(-6px);
//   }