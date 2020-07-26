import React from "react";
import { Link } from "react-router-dom";
import { Typography, Grid, useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { animated } from "react-spring";
import { Spring, config } from "react-spring/renderprops";

const useItemStyles = makeStyles(theme => ({
  listItemLinkContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(2)
    }
  },
  listItemLinkContainerOdd: {
    alignItems: "flex-start"
  },
  listItemLink: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    textTransform: "uppercase",
    textDecoration: "none",
    marginLeft: theme.spacing(4),
    color: "black",
    "& h4": {
      lineHeight: 0.9,
      fontWeight: "bold"
    },
    "&:hover": {
      color: "darkGray",
      "& $listItemBullet": {
        background: "darkGray"
      }
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "unset",
      alignItems: "flex-start"
    }
  },
  listItemLinkOdd: {
    marginLeft: "unset",
    marginRight: theme.spacing(4),
    alignItems: "flex-start"
  },
  listItemBullet: {
    height: 48,
    width: 48,
    background: "black",
    marginBottom: theme.spacing(1)
  },
  listItemImageContainer: {
    width: "50%",
    height: "100%",
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "unset",
      height: "unset",
      marginBottom: theme.spacing(1)
    }
  },
  listItemImageContainerOdd: {
    marginLeft: "auto",
    textAlign: "right",
  },
  listItemImage: {
    width: "100%",
    "-webkit-transition": "all 300ms",
    "-webkit-filter": "grayscale(1)" /* Google Chrome, Safari 6+ & Opera 15+ */,
    filter: "grayscale(1)",
    "&:hover": {
      "-webkit-filter": "grayscale(0)" /* Google Chrome, Safari 6+ & Opera 15+ */,
      filter: "none"
    }
  }
}));

const EventItem = ({ titles, imageUrl, url, flipLayout, className="" }) => {
  const classes = useItemStyles();
  const isMobile = useMediaQuery(theme => theme.breakpoints.down("xs"));

  const getImage = (imageUrl, flipLayout) => {
    return (
      <Spring
        from={{
          transform: `scale(0.5)`
        }}
        to={{
          transform: "scale(1)"
        }}
        config={{ ...config.default, delay: 50 }}
      >
        {props => (
          <animated.div
            style={props}
            className={`${classes.listItemImageContainer} ${
              flipLayout ? classes.listItemImageContainerOdd : ""
            } ${className}`}
          >
            <Link to={url}>
              <img src={imageUrl} className={classes.listItemImage} alt="" />
            </Link>
          </animated.div>
        )}
      </Spring>
    );
  };

  const getLink = (titles, url, flipLayout) => {
    return (
      <Spring
        from={{
          transform: `scale(0.5)`
        }}
        to={{
          transform: "scale(1)"
        }}
        config={{ ...config.default, delay: 100 }}
      >
        {props => (
          <animated.div
            style={props}
            className={`${classes.listItemLinkContainer} ${
              flipLayout ? classes.listItemLinkContainerOdd : ""
            }`}
          >
            <Link
              to={url}
              className={`${classes.listItemLink} ${flipLayout ? classes.listItemLinkOdd : ""}`}
            >
              <div className={classes.listItemBullet}></div>
              {titles &&
                titles.map((title, index) => (
                  <Typography key={index} variant="h4">
                    {title}
                  </Typography>
                ))}
            </Link>
          </animated.div>
        )}
      </Spring>
    );
  };

  if (isMobile) {
    return (
      <Grid item sm={12}>
        <div className={classes.listItemImageContainer}>
          <Link to={url}>
            <img src={imageUrl} className={classes.listItemImage} alt="" />
          </Link>
        </div>
        <div className={`${classes.listItemLinkContainer} ${classes.listItemLinkContainerOdd}`}>
          <Link to={url} className={classes.listItemLink}>
            {titles && <Typography variant="h4">{titles.join(" ")}</Typography>}
          </Link>
        </div>
      </Grid>
    );
  } else {
    if (flipLayout) {
      return (
        <>
          <Grid item xs={12} sm={6}>
            {getImage(imageUrl, flipLayout)}
          </Grid>
          <Grid item xs={12} sm={6}>
            {getLink(titles, url, flipLayout)}
          </Grid>
        </>
      );
    } else {
      return (
        <>
          <Grid item xs={12} sm={6}>
            {getLink(titles, url, flipLayout)}
          </Grid>
          <Grid item xs={12} sm={6}>
            {getImage(imageUrl, flipLayout)}
          </Grid>
        </>
      );
    }
  }
};

export default EventItem;
