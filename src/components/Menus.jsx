import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Drawer, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";

import VideoBackground from "components/VideoBackground";
import Source from "components/VideoSource";
import SocialLinks from "./SocialLinks";

const poster = "/assets/images/menu_image.png";
const videoBackground = "/assets/videos/menu_video.mp4";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiDrawer-paperAnchorTop": {
      height: "100%"
    }
  },
  content: {
    height: "100%",
    padding: theme.spacing(4),
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      padding: 0,
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2)
    }
  },
  appBar: {
    background: "transparent"
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "#4f4c4c"
  },
  menuContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    marginBottom: 0,
    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-evenly",
      textAlign: "center"
    }
  },
  menuItem: {
    marginBottom: theme.spacing(-2),
    paddingLeft: 36,
    "& a": {
      color: "#4f4c4c",
      textDecoration: "none",
      textTransform: "uppercase",
      fontWeight: "bold",
      lineHeight: 1
    },
    "& a:hover": {
      color: "#222222"
    },
    [theme.breakpoints.down("sm")]: {
      padding: 0,
      marginBottom: theme.spacing(4)
    }
  },
  socialLinksContainer: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      paddingTop: theme.spacing(1)
    }
  }
}));

const Menus = ({ open, onToggleMenu }) => {
  const classes = useStyles();
  return (
    <Drawer
      anchor="top"
      transitionDuration={400}
      open={open}
      onClose={onToggleMenu}
      className={classes.root}
    >
      <div className={classes.content}>
        <AppBar position="static" className={classes.appBar} elevation={0}>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={onToggleMenu}
            >
              <CloseIcon fontSize="large" />
            </IconButton>
          </Toolbar>
        </AppBar>
        <div className={classes.menuContainer}>
          <Grid container>
            <Grid item xs={12} md={8}>
              <Typography component="div" variant="h2" className={classes.menuItem}>
                <Link to="/about-us" onClick={onToggleMenu}>
                  About Us
                </Link>
              </Typography>
              <Typography component="div" variant="h2" className={classes.menuItem}>
                <Link to="/ceo-message" onClick={onToggleMenu}>
                  CEO&apos;s Journey
                </Link>
              </Typography>
              <Typography component="div" variant="h2" className={classes.menuItem}>
                <Link to="/work" onClick={onToggleMenu}>
                  Services
                </Link>
              </Typography>
              <Typography component="div" variant="h2" className={classes.menuItem}>
                <Link to="/team" onClick={onToggleMenu}>
                  Team
                </Link>
              </Typography>
              <Typography component="div" variant="h2" className={classes.menuItem}>
                <Link to="/clients" onClick={onToggleMenu}>
                  Clients
                </Link>
              </Typography>
              <Typography component="div" variant="h2" className={classes.menuItem}>
                <a
                  href="//blog.entourageintl.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onToggleMenu}
                >
                  Blog
                </a>
              </Typography>
              <Typography component="div" variant="h2" className={classes.menuItem}>
                <Link to="/contact-us" onClick={onToggleMenu}>
                  Contact
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} className={classes.socialLinksContainer}>
              <Box mb={-1}>
                <SocialLinks />
              </Box>
            </Grid>
          </Grid>
        </div>
      </div>

      <VideoBackground poster={poster}>
        <Source src={videoBackground} type="video/mp4" />
        <Source src={videoBackground} type="video/ogg" />
      </VideoBackground>
    </Drawer>
  );
};

export default React.memo(Menus);
