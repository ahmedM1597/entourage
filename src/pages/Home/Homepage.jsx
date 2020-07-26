import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Helmet } from "react-helmet";
import seo from "data/seo.json";
import MenuIcon from "@material-ui/icons/Menu";
import EntourageIcon from "components/Logos/Entourage";
import TgwIcon from "components/Logos/Tgw";
import { generateMetadata } from "components/Metadata";
import VideoBackground from "components/VideoBackground";
import Source from "components/VideoSource";
import HomepageText from "./components/TextAnimation";
import Modal from "./components/PopUpModal";

import isInternetExplorer from "../../utils/isIE";
const videoBackground = "/assets/videos/bg_video_v2.mp4";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    //minHeight: "100vh",
    background: "rgba(0, 0, 0, 0.2)",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1),
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  },
  appBar: {
    height: 64,
    background: "transparent",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  entourageIcon: {
    height: theme.spacing(12),
    marginTop: theme.spacing(7),
  },
  backgroundVideo: {
    //filter: "grayscale(1)"
  },
  title: {
    flexGrow: 1,
  },
  contentContainer: {
    marginTop: -64,
    marginBottom: -96,
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    height: 96,
  },
  tgwIcon: {
    height: 96,
    float: "right",
    paddingRight: theme.spacing(2),
  },
  introContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
    color: "white",
    fontSize: "3.3rem",
    fontWeight: "bold",
    width: "100%",
    padding: theme.spacing(4),
    [theme.breakpoints.down("xs")]: {
      width: "unset",
      fontSize: "2rem",
      textAlign: "center",
      alignItems: "center",
      padding: theme.spacing(2),
    },
  },
  introTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: "2rem",
  },
  introSubtitle: {
    color: "white",
  },
}));

const isIE = isInternetExplorer();

//const EVE_KEY = "eveModal";
const Homepage = ({ onToggleMenu }) => {
  const textPlayerRef = React.useRef();
  const videoPlayerRef = React.useRef();

  const classes = useStyles();
  // const showModalStorageValue = sessionStorage.getItem(EVE_KEY) || "true";
  // const [showModal, setShowModal] = useState(
  //   showModalStorageValue.toLowerCase() === "true" ? true : false
  // );

  // useEffect(() => {
  //   sessionStorage.setItem(EVE_KEY, showModal);
  // }, [showModal]);

  useEffect(() => {
    let handleVisibilityChange = (e) => {
      if (e.target.visibilityState === "visible") {
        textPlayerRef.current.play();
        videoPlayerRef.current.currentTime = 0;
        videoPlayerRef.current.play();
      } else if (e.target.visibilityState === "hidden") {
        textPlayerRef.current.stop();
        videoPlayerRef.current.pause();
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div>
      <Helmet>
        <title>{seo.main.title}</title>
        {generateMetadata(seo.main)}
      </Helmet>
      <VideoBackground videoClass={classes.backgroundVideo} ref={videoPlayerRef}>
        <Source src={videoBackground} type="video/mp4" />
        <Source src={videoBackground} type="video/ogg" />
      </VideoBackground>
      <div className={classes.root}>
        {/* {isIE === false && <Modal show={showModal} onDismiss={() => setShowModal(false)} />} */}
        <AppBar position="static" elevation={0} className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={(e) => onToggleMenu(e)}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
            <Typography variant="h6" className={classes.title}></Typography>
            <EntourageIcon className={classes.entourageIcon} />
          </Toolbar>
        </AppBar>
        <div className={classes.contentContainer}>
          <div className={classes.introContainer}>
            <HomepageText ref={textPlayerRef} />
          </div>
        </div>
        <div className={classes.footer}>
          <TgwIcon className={classes.tgwIcon} />
        </div>
      </div>
    </div>
  );
};
Homepage.propTypes = {
  onToggleMenu: PropTypes.func,
};
export default Homepage;
