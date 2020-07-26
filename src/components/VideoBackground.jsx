import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Source from "./VideoSource";

const useStyles = makeStyles(() => ({
  video: {
    position: "absolute",
    top: 0,
    right: 0,
    height: "100%",
    width: "100%"
  },
  "@media (min-aspect-ratio: 16/9)": {
    video: {
      height: "auto",
      width: "100%"
    }
  },
  "@media (max-aspect-ratio: 16/9)": {
    video: {
      height: "100%",
      width: "auto"
    }
  },

  wrapper: {
    overflow: "hidden",
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: -9999
  }
}));

const VideoBackground = React.forwardRef(
  (
    {
      wrapperClass,
      videoClass,
      loop = true,
      muted = true,
      autoPlay = true,
      playsInline = true,
      poster,
      children,
      el: El = "div"
    },
    ref
  ) => {
    const classes = useStyles();

    return (
      <El
        className={`${classes.wrapper}${
          wrapperClass ? " " + wrapperClass : ""
        }`}
      >
        <video
          ref={ref}
          className={`${classes.video}${videoClass ? " " + videoClass : ""}`}
          loop={loop}
          muted={muted}
          poster={poster}
          autoPlay={autoPlay}
          playsInline={playsInline}
        >
          {children}
        </video>
      </El>
    );
  }
);

VideoBackground.displayName = "VideoBackground";
VideoBackground.propTypes = {
  wrapperClass: PropTypes.string,
  videoClass: PropTypes.string,
  loop: PropTypes.bool,
  muted: PropTypes.bool,
  poster: PropTypes.string,
  autoPlay: PropTypes.bool,
  playsInline: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.shape({
      type: Source
    }),
    PropTypes.arrayOf(
      PropTypes.shape({
        type: Source
      })
    )
  ]),
  el: PropTypes.string
};

VideoBackground.Source = Source;

export default VideoBackground;
