import React from "react";
import ReactGA from "react-ga";
import { Helmet } from "react-helmet";

//import "./App.css";
import seo from "data/seo.json";
import Pages from "./pages";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import theme from "assets/theme";

const App: React.FC = () => {
  ReactGA.initialize(seo.googleAnalytics.id);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Helmet>
        <title>{seo.main.title}</title>
        {/* <meta name="description" content={seo.main.description} />
        <meta name="keywords" content={seo.main.keywords.join(',')} /> */}
        <meta name="google-site-verification" content={seo.googleSiteVerification.id} />
      </Helmet>
      <Pages />
    </ThemeProvider>
  );
};

export default App;
