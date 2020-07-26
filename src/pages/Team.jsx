import React from "react";
import PropTypes from 'prop-types';
import { Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Helmet } from "react-helmet";

import PageAppBar from "components/PageAppBar";
import { generateMetadata } from "components/Metadata";
import seo from "data/seo.json";
import { grey } from "@material-ui/core/colors";

const teamImageUrl = "/assets/images/team.png";

const useStyles = makeStyles(theme => ({
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
    bottom: 0,
    left: 0,
    background: "darkgray",
    backgroundImage: `url(${teamImageUrl})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    [theme.breakpoints.down("sm")]: {
      // height: "100vh",
      // minHeight: 700,
      overflowX: "hidden",
      padding: 0,
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2)
    },
    "@media screen and (max-height: 690px)": {
      height: "100vh",
      minHeight: 700
    }
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    alignItems: "center"
  },
  title: {
    fontSize: theme.typography.h1.fontSize,
    color: grey[200],
    textAlign: "center",
    marginBottom: theme.spacing(6),
    [theme.breakpoints.down("md")]: {
      fontSize: theme.typography.h2.fontSize,
      marginBottom: theme.spacing(4)
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.h2.fontSize,
      marginBottom: theme.spacing(4)
    }
  },
  tagTitle: {
    textAlign: "right",
    fontWeight: "bold",
    fontSize: "6rem",
    marginBottom: theme.spacing(-4),
    color: theme.palette.common.white,
    [theme.breakpoints.down("md")]: {
      fontSize: "5rem"
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "4rem",
      marginBottom: theme.spacing(-3)
    }
  },
  tagSubtitle: {
    marginTop: theme.spacing(-1.5),
    fontSize: "2rem",
    textAlign: "right",
    color: theme.palette.common.white,
    [theme.breakpoints.down("md")]: {
      fontSize: "1.6rem"
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.2rem",
      marginTop: theme.spacing(-1)
    }
  }
}));

const Team = ({ onToggleMenu }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Helmet>
        <title>{seo.pages.team.title}</title>
        {generateMetadata(seo.pages.team)}
      </Helmet>

      <PageAppBar onToggleMenu={onToggleMenu} light />
      <div className={classes.contentContainer}>
        <Box flex={1} width={{ xs: "100%", sm: "90%", xl: "80%" }} position="relative">
          <Box position="absolute" top="35%" left={0}>
            <Typography className={classes.tagTitle}>300+</Typography>
            <Typography className={classes.tagSubtitle}>successful</Typography>
            <Typography className={classes.tagSubtitle}>stories</Typography>
          </Box>
          <Box position="absolute" top="10%" left={{ xs: "20%", md: "30%" }}>
            <Typography className={classes.tagTitle}>6+</Typography>
            <Typography className={classes.tagSubtitle}>cities</Typography>
          </Box>
          <Box position="absolute" top={{ xs: "65%", sm: "60%", md: "55%" }} left="40%">
            <Typography className={classes.tagTitle}>20+</Typography>
            <Typography className={classes.tagSubtitle}>nationalities</Typography>
          </Box>
          <Box position="absolute" top="5%" right={{ xs: "10%", sm: "20%", lg: "30%" }}>
            <Typography className={classes.tagTitle}>60+</Typography>
            <Typography className={classes.tagSubtitle}>marketing</Typography>
            <Typography className={classes.tagSubtitle}>experts</Typography>
          </Box>
          <Box position="absolute" top="40%" right="5%">
            <Typography className={classes.tagTitle}>10+</Typography>
            <Typography className={classes.tagSubtitle}>years captivating</Typography>
            <Typography className={classes.tagSubtitle}>the region</Typography>
          </Box>
        </Box>
        <Typography variant="h1" className={classes.title}>
          The team you want on your side, <br />
          your entourage
        </Typography>
      </div>
    </div>
  );
};
Team.propTypes = {
  onToggleMenu: PropTypes.func
};
export default Team;
