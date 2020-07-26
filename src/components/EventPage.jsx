import React, { useState } from "react";
import { Typography, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

import BackIcon from "@material-ui/icons/ArrowBack";
import PageAppBar from "components/PageAppBar";
import Gallery from "components/Gallery";
import LinkButton from "components/LinkButton";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    overflow: "hidden",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background: "rgba(255, 255, 255, 1.0)",
    [theme.breakpoints.down("sm")]: {
      overflowY: "auto",
    },
  },
  noScroll: {
    overflow: "hidden",
    position: "fixed",
  },
  appBar: {
    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
    },
  },
  leftPanel: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    [theme.breakpoints.down("xs")]: {
      height: "50%",
      minHeight: 400,
    },
  },
  rightPanel: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    background: "white",
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  contentContainer: {
    overflow: "auto",
    display: "flex",
    flexDirection: "column",
    flex: 1,
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    background: "white",
  },
  contentFiller: {
    flexGrow: 0,
  },
  content: {},
  contentTitle: {
    textTransform: "uppercase",
    fontWeight: "bold",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3),
    marginLeft: -2,
    [theme.breakpoints.down("sm")]: {
      height: "unset",
      marginTop: "unset",
      marginBottom: theme.spacing(2),
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  contentSubtitle: {
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "black",
  },
}));

const Event = ({
  titles,
  subtitle,
  paragraphs,
  gallery,
  seo,
  onToggleMenu,
  onClosePath,
  children,
}) => {
  const classes = useStyles();
  const history = useHistory();
  const [isMediaOpen, setIsMediaOpen] = useState(false);

  return (
    <div className={`${classes.root} ${isMediaOpen === true ? classes.noScroll : ""}`}>
      <Grid container style={{ height: "100%" }}>
        <Grid item xs={12} md={6} className={classes.leftPanel}>
          <Gallery
            mediaList={gallery}
            onOpenMedia={() => {
              setIsMediaOpen(true);
            }}
            onCloseMedia={() => setIsMediaOpen(false)}
          />
        </Grid>
        <Grid item xs={12} md={6} className={classes.rightPanel}>
          <PageAppBar
            onToggleMenu={() => history.goBack()}
            menuIcon={<BackIcon fontSize="large" />}
            onClosePath={onClosePath}
            className={classes.appBar}
          />
          <div className={classes.contentContainer}>
            <div className={classes.contentFiller} />
            <div className={classes.content}>
              <Typography variant="h2" className={classes.contentTitle}>
                {titles?.map((title, index) => (
                  <span key={index}>
                    {title}
                    <br />
                  </span>
                ))}
                {subtitle && (
                  <Typography variant="h4" className={classes.contentSubtitle}>
                    {subtitle}
                  </Typography>
                )}
              </Typography>
              {paragraphs?.map((paragraph, index) => (
                <React.Fragment key={index}>
                  <Typography variant="body1">{paragraph}</Typography>
                  <br />
                </React.Fragment>
              ))}
              {children}
            </div>
            <Box display="flex" justifyContent="center" mt={4} mb={4}>
              <LinkButton to="/contact-us" label="Contact Us" className={classes.contactUsButton} />
            </Box>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Event;
