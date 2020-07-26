import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Facebook from "./Logos/Facebook";
import Twitter from "./Logos/Twitter";
import Instagram from "./Logos/Instagram";
import Youtube from "./Logos/Youtube";

import seo from "data/seo.json";

const useStyles = makeStyles(theme => ({
  root: {},
  logo: {
    height: 40,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    "&:hover": {
      opacity: 0.8
    }
  }
}));

const SocialLinks = ({ ...props }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <a target="_blank" rel="noreferrer noopener" href={seo.socialLinks.facebook}>
        <Facebook className={classes.logo} />
      </a>
      <a target="_blank" rel="noreferrer noopener" href={seo.socialLinks.instagram}>
        <Instagram className={classes.logo} />
      </a>
      <a target="_blank" rel="noreferrer noopener" href={seo.socialLinks.twitter}>
        <Twitter className={classes.logo} />
      </a>
      <a target="_blank" rel="noreferrer noopener" href={seo.socialLinks.youtube}>
        <Youtube className={classes.logo} />
      </a>
    </Box>
  );
};

export default React.memo(SocialLinks);
