import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

import effraRegularTtf from "assets/fonts/Effra-Regular.ttf";
import effraRegularEot from "assets/fonts/Effra-Regular.eot";
import effraRegularWoff from "assets/fonts/Effra-Regular.woff";
import effraRegularWoff2 from "assets/fonts/Effra-Regular.woff2";
import effraBoldTtf from "assets/fonts/Effra-Bold.ttf";
import effraBoldEot from "assets/fonts/Effra-Bold.eot";
import effraBoldWoff from "assets/fonts/Effra-Bold.woff";
import effraBoldWoff2 from "assets/fonts/Effra-Bold.woff2";

const effra = {
  fontFamily: "Effra",
  fontStyle: "normal",
  fontWeight: "normal",
  src: `
    url(${effraRegularEot}),
    url(${effraRegularEot}?#iefix') format('embedded-opentype'),
    url(${effraRegularWoff2}) format('woff2'),
    url(${effraRegularWoff}) format('woff'),
    url(${effraRegularTtf}) format('ttf')
  `
};

const effraBold = {
  fontFamily: "Effra",
  fontStyle: "normal",
  fontWeight: "bold",
  src: `
      url(${effraBoldEot}),
      url(${effraBoldEot}?#iefix') format('embedded-opentype'),
      url(${effraBoldWoff2}) format('woff2'),
      url(${effraBoldWoff}) format('woff'),
      url(${effraBoldTtf}) format('ttf')
    `
};

let theme = createMuiTheme({
  typography: {
    fontSize: 15,
    fontFamily: "Effra, sans-serif"
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [effra, effraBold]
      }
    }
  }
});

theme = responsiveFontSizes(theme);

theme.typography.body1 = {
  ...theme.typography.body1,
  color: "#616161"
};

export default theme;
