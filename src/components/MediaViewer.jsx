import React, { useRef, useState, useEffect } from "react";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { animated, useTransition } from "react-spring";

import PlayIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import CloseIcon from "@material-ui/icons/ArrowBack";
import FullScreenIcon from "@material-ui/icons/Fullscreen";

const useStyles = makeStyles(theme => ({
  root: {
    willChange: "width, height, left, top",
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    background: "black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    zIndex: 99999,
    "& video": {
      width: "100%"
    }
  },
  appBar: {
    marginTop: theme.spacing(2),
    height: 64,
    background: "transparent"
  },
  leftButton: {
    color: "white",
    marginRight: theme.spacing(2),
    "& svg": {
      filter: "drop-shadow( 1px 1px 1px rgba(0, 0, 0, .7))"
    }
  },
  rightButton: {
    color: "white",
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
    "& svg": {
      fontSize: "4rem",
      filter: "drop-shadow( 1px 1px 1px rgba(0, 0, 0, .7))"
    }
  },
  bottomAppBar: {
    top: "auto",
    bottom: 0,
    marginBottom: theme.spacing(2),
    height: 64,
    background: "transparent"
  },
  bottomRightButton: {
    color: "white",
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(2),
    "& svg": {
      fontSize: "3rem",
      filter: "drop-shadow( 1px 1px 1px rgba(0, 0, 0, .7))"
    }
  },
  appBarFiller: {
    flexGrow: 1
  },
  image: {
    width: "100%",
    maxHeight: "100%",
    objectFit: "contain"
  }
}));

const MediaViewer = ({ isOpen, mediaUrl, mediaType, onClose, mediaAlt }) => {
  const classes = useStyles();
  const videoPlayer = useRef();
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (videoPlayer.current) {
      setIsPlaying(!videoPlayer.current.paused);
    }
  }, []);

  useEffect(() => {
    if (videoPlayer.current) {
      setIsPlaying(!videoPlayer.current.paused);
    }
  }, [videoPlayer]);

  // This is where our animation is created
  // we go from `opacity: 0` to `opacity: 1`
  const transition = useTransition(isOpen, null, {
    from: {
      opacity: 1,
      transform: "translate3d(100%,0,0)"
    },
    enter: {
      opacity: 1,
      transform: "translate3d(0%,0,0)"
    },
    leave: {
      opacity: 1,
      transform: "translate3d(100%,0,0)"
    }
  });

  const togglePlayBack = () => {
    if (videoPlayer.current) {
      if (videoPlayer.current.paused) {
        videoPlayer.current.play();
        setIsPlaying(true);
      } else {
        videoPlayer.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleFullscreen = () => {
    if (videoPlayer.current.requestFullscreen) {
      videoPlayer.current.requestFullscreen();
    } else if (videoPlayer.current.mozRequestFullScreen) {
      videoPlayer.current.mozRequestFullScreen();
    } else if (videoPlayer.current.webkitRequestFullscreen) {
      videoPlayer.current.webkitRequestFullscreen();
    } else if (videoPlayer.current.msRequestFullscreen) {
      videoPlayer.current.msRequestFullscreen();
    }
  };

  return (
    <>
      {transition.map(
        ({ item, key, props }) =>
          item && (
            <animated.div key={key} className={classes.root} style={props}>
              <AppBar position="absolute" elevation={0} className={classes.appBar}>
                <Toolbar>
                  <IconButton
                    edge="end"
                    className={classes.leftButton}
                    color="inherit"
                    aria-label="close"
                    onClick={onClose}
                  >
                    <CloseIcon fontSize="large" />
                  </IconButton>
                  <div className={classes.appBarFiller}></div>

                  {mediaType === "video" && (
                    <IconButton
                      edge="start"
                      className={classes.rightButton}
                      color="inherit"
                      aria-label="menu"
                      onClick={togglePlayBack}
                    >
                      {isPlaying ? <PauseIcon /> : <PlayIcon />}
                    </IconButton>
                  )}
                </Toolbar>
              </AppBar>
              {mediaType === "video" && (
                <video ref={videoPlayer} autoPlay onClick={togglePlayBack} alt={mediaAlt}>
                  <source src={mediaUrl} type="video/mp4" />
                  <source src={mediaUrl} type="video/ogg" />
                </video>
              )}
              {mediaType === "image" && (
                <img src={mediaUrl} alt={mediaAlt} className={classes.image} />
              )}
              <AppBar position="fixed" elevation={0} className={classes.bottomAppBar}>
                <Toolbar>
                  <div className={classes.appBarFiller}></div>

                  {mediaType === "video" && (
                    <IconButton
                      edge="start"
                      className={classes.bottomRightButton}
                      color="inherit"
                      aria-label="menu"
                      onClick={toggleFullscreen}
                    >
                      <FullScreenIcon />
                    </IconButton>
                  )}
                </Toolbar>
              </AppBar>
            </animated.div>
          )
      )}
    </>
  );
};

export default MediaViewer;
