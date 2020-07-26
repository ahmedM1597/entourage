import React from "react";
import PropTypes from "prop-types";
import { Box, useMediaQuery } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Helmet } from "react-helmet";

import PageAppBar from "components/PageAppBar";
import BackIcon from "@material-ui/icons/ArrowBack";
import LinkButton from "components/LinkButton";

import { generateMetadata } from "components/Metadata";
import seo from "data/seo.json";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    minHeight: "100vh",
    background: "#573E95",
    [theme.breakpoints.down("sm")]: {
      overflowX: "hidden",
      padding: 0,
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    alignItems: "center",
  },
  title: {
    fontFamily: "'Comfortaa', cursive",
    fontSize: theme.typography.h1.fontSize,
    color: "#EBAF59",
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "bold",
    marginBottom: theme.spacing(6),
    [theme.breakpoints.down("md")]: {
      fontSize: theme.typography.h2.fontSize,
      marginBottom: theme.spacing(4),
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.h2.fontSize,
      marginBottom: theme.spacing(4),
    },
  },
  contactUsButton: {
    fontFamily: "'Comfortaa', cursive",
    fontWeight: "bold",
    fontSize: "110%",
    background: "#EBAF59",
    color: "#573E95",
    borderRadius: theme.spacing(4),
    minWidth: 300,
    height: 60,
  },
}));

const Team = () => {
  const classes = useStyles();
  const history = useHistory();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down("md"));

  console.log("isTablet? ", isTablet);

  return (
    <div className={classes.root}>
      <Helmet>
        <title>{seo.pages.events.title}</title>
        {generateMetadata(seo.pages.team)}
      </Helmet>

      <PageAppBar
        onToggleMenu={() => history.goBack()}
        menuIcon={<BackIcon fontSize="large" />}
        light
      />
      <div className={classes.contentContainer}>
        {/* <Typography variant="h1" className={classes.title}>
          Solutions
        </Typography> */}
        <a href="//www.eve.tech" target="_blank" rel="noopener noreferrer">
          <img src="assets/tech/eve/eve-virtual.png" width={128} />
        </a>
        {isMobile ? (
          <Box textAlign="center">
            <img src="assets/tech/eve/mobile.png" width="500px" />
          </Box>
        ) : isTablet ? (
          <Box textAlign="center">
            <img src="assets/tech/eve/desktop.png" width="100%" />
          </Box>
        ) : (
          <img src="assets/tech/eve/desktop.png" />
        )}
        <LinkButton to="/contact-us" label="Contact Us" className={classes.contactUsButton} />
      </div>
    </div>
  );
};
Team.propTypes = {
  onToggleMenu: PropTypes.func,
};
export default Team;
