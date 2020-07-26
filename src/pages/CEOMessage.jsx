import React from "react";
import PropTypes from 'prop-types';
import { Typography, Grid, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Helmet } from "react-helmet";

import PageAppBar from "components/PageAppBar";
import seo from "data/seo.json";
import ceoMessage from "data/ceoMessage.json";
import { generateMetadata } from "components/Metadata";

const ceoImageUrl = "/assets/images/ceo-message.jpg";
const ceoMdImageUrl = "/assets/images/ceo-message@md.jpg";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    [theme.breakpoints.up("sm")]: {
      minHeight: "100vh",
      background: "darkgray",
      backgroundImage: `url(${ceoImageUrl})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      //   backgroundPosition: "top center"
      // },
      // [theme.breakpoints.only("md")]: {
      backgroundPosition: "top left"
    },
    [theme.breakpoints.down('lg')]: {
      backgroundImage: `url(${ceoMdImageUrl})`
    }
  },
  leftPanel: {
    height: "100%",
    [theme.breakpoints.down("xs")]: {
      height: "40vh",
      background: "darkgray",
      backgroundImage: `url(${ceoImageUrl})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    }
  },
  rightPanel: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    [theme.breakpoints.down("xs")]: {
      height: "unset",
      paddingLeft: 0,
      paddingRight: 0,
      background: "white"
    }
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    [theme.breakpoints.down("xs")]: {
      background: "white"
    }
  },
  contentFiller: {
    flexGrow: 0
  },
  content: {
    [theme.breakpoints.up("sm")]: {
      "& p": { color: "white" }
    }
  },
  contentTitle: {
    //color: "#2B2B2B",
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    //marginTop: theme.spacing(7),
    marginBottom: theme.spacing(3.5),
    marginLeft: -2,
    [theme.breakpoints.down("xs")]: {
      color: "#2B2B2B",
      marginBottom: theme.spacing(2),
      paddingLeft: 0,
      paddingRight: 0
    }
  },
  contentSubtitle: {
    fontWeight: "bold",
    color: "white",
    [theme.breakpoints.down("xs")]: {
      color: "black"
    }
  },
  signatureName: {
    fontWeight: "bold",
    color: "white",
    [theme.breakpoints.down("xs")]: {
      color: "#555555"
    }
  },
  signatureTitle: {
    fontWeight: "bold",
    color: "white",
    [theme.breakpoints.down("xs")]: {
      color: "#555555"
    }
  },
  signatureSubtitle: {
    fontWeight: "bold",
    color: "white",
    [theme.breakpoints.down("xs")]: {
      color: "#555555"
    }
    //marginTop: theme.spacing(-0.5)
  }
}));

const CeoMessage = ({ onToggleMenu }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Helmet>
        <title>{seo.pages.ceoMessage.title}</title>
        {generateMetadata(seo.pages.clients)}
      </Helmet>
      <Hidden lgUp xsDown>
        <PageAppBar onToggleMenu={onToggleMenu} light />
      </Hidden>
      <Grid container style={{ height: "100%" }}>
        <Hidden only={["sm", "md"]}>
          <Grid item xs={12} md={6} className={classes.leftPanel}>
            {/* <img src={aboutUsImage} className={classes.image} /> */}
          </Grid>
        </Hidden>
        <Grid item xs={12} md={6} className={classes.rightPanel}>
          <Hidden mdDown>
            <PageAppBar onToggleMenu={onToggleMenu} light />
          </Hidden>
          <Hidden smUp>
            <PageAppBar onToggleMenu={onToggleMenu} />
          </Hidden>
          <div className={classes.contentContainer}>
            <div className={classes.contentFiller} />
            <div className={classes.content}>
              <Typography variant="h1" className={classes.contentTitle}>
                {ceoMessage.title}
              </Typography>
              {ceoMessage.subtitle && (
                <React.Fragment>
                  <Typography variant="h6" className={classes.contentSubtitle}>
                    {ceoMessage.subtitle}
                  </Typography>
                  <br />
                </React.Fragment>
              )}
              {ceoMessage.paragraphs && ceoMessage.paragraphs.map((paragraph, index) => (
                <React.Fragment key={index}>
                  <Typography variant="body1">
                    {paragraph}
                  </Typography>
                  <br />
                </React.Fragment>
              ))}

              <Typography variant="h5" className={classes.signatureName}>
                {ceoMessage.signatureName}
              </Typography>
              <Typography variant="body1" className={classes.signatureTitle}>
                {ceoMessage.signatureTitle}
              </Typography>
              <Typography variant="body2" className={classes.signatureSubtitle}>
                {ceoMessage.signatureSubtitle1}
              </Typography>
              <Typography variant="body2" className={classes.signatureSubtitle}>
                {ceoMessage.signatureSubtitle2}
              </Typography>
              <br />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

CeoMessage.propTypes = {
  onToggleMenu: PropTypes.func
};
export default CeoMessage;
