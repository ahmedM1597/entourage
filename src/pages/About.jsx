import React from "react";
import PropTypes from 'prop-types';
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Helmet } from "react-helmet";
import { generateMetadata } from "components/Metadata";
import PageAppBar from "components/PageAppBar";
import seo from "data/seo.json";
import aboutUs from "data/aboutUs.json";
const aboutUsImage = "/assets/images/about-us.png";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background: "rgba(255, 255, 255, 1.0)"
  },
  leftPanel: {
    height: "100%",
    background: "darkgray",
    backgroundImage: `url(${aboutUsImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    [theme.breakpoints.down("xs")]: {
      height: "40vh"
    }
  },
  rightPanel: {
    display: "flex",
    flexDirection: "column",
    overflow: "auto",
    height: "100%",
    background: "white",
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    [theme.breakpoints.down("xs")]: {
      height: "unset",
      paddingLeft: 0,
      paddingRight: 0
    }
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    background: "white"
  },
  contentFiller: {
    flexGrow: 1,
    [theme.breakpoints.down("xs")]: {
      flexGrow: 0
    }
  },
  content: {},
  contentTitle: {
    fontWeight: "bold"
  },
  contentTitleStroke: {
    color: "white",
    "-webkit-text-stroke-color": "black",
    "-webkit-text-stroke-width": "thin"
  }
}));

const AboutUs = ({ onToggleMenu }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Helmet>
        <title>{seo.pages.about.title}</title>
        {generateMetadata(seo.pages.about)}
      </Helmet>
      <Grid container style={{ height: "100%" }}>
        <Grid item xs={12} sm={6} className={classes.leftPanel}></Grid>
        <Grid item xs={12} sm={6} className={classes.rightPanel}>
          <PageAppBar onToggleMenu={onToggleMenu} />
          <div className={classes.contentContainer}>
            <div className={classes.contentFiller} />
            <div className={classes.content}>
              <Typography variant="h1" className={classes.contentTitle}>
                ABO<span className={classes.contentTitleStroke}>U</span>T US
              </Typography>
              {aboutUs && aboutUs.paragraphs && aboutUs.paragraphs.map((paragraph, index) => (
                <React.Fragment key={index}>
                  <Typography variant="body1">{paragraph}</Typography>
                  <br />
                </React.Fragment>
              ))}
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

AboutUs.propTypes = {
  onToggleMenu: PropTypes.func
};

export default AboutUs;
