import * as React from "react";
import { IconButton, Link, useMediaQuery, Slide, Dialog } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";

import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("xs")]: {
      margin: theme.spacing(1.2),
    },
    "& .MuiDialog-paper": {
      overflow: "hidden",
    },
  },
  imageContainer: {
    margin: -6,
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.down("xs")]: {
      height: "100%",
      overflow: "hidden",
    },
  },
  image: {
    height: "100%",
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      objectFit: "cover",
    },
  },
  closeButton: {
    position: "absolute",
    color: "#3A1781",
    right: theme.spacing(2),
    top: theme.spacing(2),
    background: "#FFFFFFEE",
    "&:hover": {
      background: "#FFFFFF55",
    },
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Banner = ({ show, onDismiss }: { show: boolean; onDismiss: () => void }) => {
  const classes = useStyles();
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("xs"));

  return (
    <Dialog
      open={show}
      TransitionComponent={Transition as any}
      keepMounted
      onClose={onDismiss}
      maxWidth={isMobile ? "sm" : "md"}
      fullWidth={false}
      aria-labelledby="eve-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
      className={classes.root}
    >
      <IconButton aria-label="close" onClick={onDismiss} className={classes.closeButton}>
        <CloseIcon />
      </IconButton>
      <Link href="//www.eve.tech" className={classes.imageContainer}>
        {isMobile ? (
          <img src="/assets/tech/eve-mobile.png" className={classes.image} />
        ) : (
          <img src="/assets/tech/eve-website.png" className={`${classes.image}`} />
        )}
      </Link>
    </Dialog>
  );
};

export default Banner;
