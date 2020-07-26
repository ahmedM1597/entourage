import React, { useState } from "react";
import { Typography, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

import BackIcon from "@material-ui/icons/ArrowBack";
import PageAppBar from "components/PageAppBar";

import LinkButton from "components/LinkButton";

const useStyles = makeStyles(theme => ({
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
      overflowY: "auto"
    }
  },
  noScroll: {
    overflow: "hidden",
    position: "fixed"
  },
  appBar: {
    [theme.breakpoints.down("sm")]: {
      marginTop: 0
    }
  },
  leftPanel: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    [theme.breakpoints.down("xs")]: {
      //height: "35%"
    }
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
      paddingRight: 0
    }
  },
  contentContainer: {
    overflow: "auto",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    flex: 1,
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    background: "white"
  },
  contentFiller: {
    flexGrow: 0
  },
  content: {
    width: "85%",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      width: "unset"
    },
    [theme.breakpoints.up("lg")]: {
      width: "70%"
    },
    [theme.breakpoints.up("xl")]: {
      width: "60%"
    }
  },
  contentLogo: {
    height: 176
  },
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
      paddingRight: 0
    }
  },
  contentSubtitle: {
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "black"
  },
  sectionTitle: {
    color: "#656565"
  },
  highlightsCard: {
    display: "flex",
    flexDirection: "column"
  },
  highlightsContainer: {
    background: "#656565",
    padding: theme.spacing(2),
    height: 110,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  highlightsText: {
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    lineHeight: 1.3
  },
  highlightsTitle: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#656565",
    padding: theme.spacing(1),
    marginBottom: theme.spacing(0.75),
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}));

const SocialEvent = ({
  logo,
  titles,
  subtitle,
  content,
  paragraphs,
  gallery,
  seo,
  onToggleMenu,
  onClosePath,
  children
}) => {
  const classes = useStyles();
  const history = useHistory();
  const [isMediaOpen, ] = useState(false);

  return (
    <div className={`${classes.root} ${isMediaOpen ? classes.noScroll : ""}`}>
      <Grid container style={{ height: "100%" }}>
        <Grid item xs={12} md={12} className={classes.leftPanel}>
          {/* <Gallery
            mediaList={gallery}
            onOpenMedia={() => setIsMediaOpen(true)}
            onCloseMedia={() => setIsMediaOpen(false)}
          /> */}
        </Grid>
        <Grid item xs={12} md={12} className={classes.rightPanel}>
          <PageAppBar
            onToggleMenu={() => history.goBack()}
            menuIcon={<BackIcon fontSize="large" />}
            onClosePath={onClosePath}
            className={classes.appBar}
          />
          <div className={classes.contentContainer}>
            <div className={classes.contentFiller} />
            <div className={classes.content}>
              <img className={classes.contentLogo} src={logo} alt="" />
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

              {paragraphs && paragraphs.map((paragraph, index) => (
                <React.Fragment key={index}>
                  <Typography variant="body1">{paragraph}</Typography>
                  <br />
                </React.Fragment>
              ))}

              {paragraphs && <br />}

              {content?.map((textData, index) => (
                <div key={index}>
                  <Typography variant="h6" className={classes.sectionTitle}>
                    <Box fontWeight="bold">{textData.title}</Box>
                  </Typography>
                  {textData.paragraphs?.map((paragraph, index) => (
                    <>
                      <Typography key={index} variant="body1">
                        {paragraph}
                      </Typography>
                      <br />
                    </>
                  ))}
                </div>
              ))}

              <Grid container spacing={2}>
                {gallery?.map((item, index) => (
                  <Grid key={index} item xs={12} sm={4} className={classes.highlightsCard}>
                    <img src={item.url} style={{ width: "100%" }} alt={item.alt} />
                    <Typography
                      variant="subtitle1"
                      component="div"
                      className={classes.highlightsTitle}
                    >
                      {item.title}
                    </Typography>
                    <Box className={classes.highlightsContainer}>
                      {item.highlights?.map((text, index) => (
                        <Typography variant="subtitle1" className={classes.highlightsText}>
                          {text}
                        </Typography>
                      ))}
                    </Box>
                  </Grid>
                ))}
              </Grid>
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

export default SocialEvent;
