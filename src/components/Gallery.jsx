import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import ReactGA from "react-ga";
import { GridList, GridListTile } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useLocation, useHistory } from "react-router-dom";
import { useSpring, animated } from "react-spring";

import PlayIcon from "@material-ui/icons/PlayArrow";

import MediaViewer from "./MediaViewer";

const useStyles = makeStyles(theme => ({
  root: {
    height: "95%",
    maxHeight: "100vh",
    maxWidth: "100vh",
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      height: "100%",
      maxWidth: "100%",
      maxHeight: "unset"
    }
  },
  galleryGrid: {
    height: "100%",
    overflow: "hidden",
    "& .MuiGrid-item > div": {
      height: "100%",
      width: "100%"
    }
  },
  galleryItem: {
    height: "100%",
    position: "relative",
    cursor: "pointer",
    "& img": {
      "-webkit-transition": "all 300ms"
    },
    "&:hover img": {
      filter: "grayscale(1)"
    }
  },
  galleryThumb: { height: "100%", width: "100%", objectFit: "cover" },
  playIcon: {
    position: "absolute",
    width: "100%",
    height: "100%",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
    "& > svg": {
      fontSize: "8rem",
      filter: "drop-shadow( 1px 1px 1px rgba(0, 0, 0, .7))"
    }
  }
}));

const calc = (x, y) => [x, y, 0.9];
const trans = (x, y, s) => `perspective(900px) scale(${s})`;

const GalleryItem = ({ media, onClick }) => {
  const classes = useStyles();

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 }
  }));

  return (
    <animated.div
      className={classes.galleryItem}
      onMouseEnter={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      onClick={onClick}
      // eslint-disable-next-line react/prop-types
      style={{ transform: props.xys.interpolate(trans) }}
    >
      {media.type === "video" && (
        <div className={classes.playIcon}>
          <PlayIcon fontSize="large" htmlColor="white" />
        </div>
      )}
      <img src={media.thumbUrl} alt={media.alt} className={classes.galleryThumb} />
    </animated.div>
  );
};

GalleryItem.propTypes = {
  media : PropTypes.any,
  onClick: PropTypes.func
}

const Gallery = ({ mediaList, onOpenMedia, onCloseMedia }) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const [currentMedia, setCurrentMedia] = useState({
    isOpen: false,
    mediaUrl: null,
    mediaType: null
  });

  useEffect(() => {
    if (location.state && location.state.mediaUrl) {
      setCurrentMedia({
        isOpen: true,
        mediaUrl: location.state.mediaUrl,
        mediaType: location.state.mediaType,
        mediaAlt: location.state.mediaAlt
      });
      if (onOpenMedia) {
        onOpenMedia();
      }
    } else {
      setCurrentMedia({ isOpen: false, mediaUrl: null, mediaType: null, mediaAlt: null });
    }
  }, [location, location.state]);

  const viewMedia = (url, type, alt) => {
    ReactGA.pageview(location.pathname + url);
    ReactGA.event({
      category: "User",
      action: "Viewed Media"
    });
    history.push(location, { mediaUrl: url, mediaType: type, mediaAlt: alt });
  };

  return (
    <div className={classes.root}>
      <MediaViewer
        isOpen={currentMedia.isOpen}
        mediaType={currentMedia.mediaType}
        mediaUrl={currentMedia.mediaUrl}
        mediaAlt={currentMedia.mediaAlt}
        onClose={() => {
          history.goBack();
          if (onCloseMedia) {
            onCloseMedia();
          }
        }}
      />
      <GridList cellHeight="auto" cols={3} className={classes.galleryGrid}>
        {mediaList ? (
          mediaList.map((media, index) => (
            <GridListTile
              key={index}
              cols={index !== 3 ? 1 : 2}
              rows={index !== 3 && index !== 4 ? 1 : 2}
            >
              <GalleryItem
                media={media}
                onClick={() => viewMedia(media.url, media.type, media.alt)}
              />
            </GridListTile>
          ))
        ) : (
          <GridListTile></GridListTile>
        )}
      </GridList>
    </div>
  );
};


Gallery.propTypes = {
  mediaList : PropTypes.array,
  onOpenMedia: PropTypes.func,
  onCloseMedia: PropTypes.func
}
export default Gallery;
