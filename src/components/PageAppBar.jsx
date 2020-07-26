import React from "react";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles(theme => ({
  appBar: {
    marginTop: theme.spacing(2),
    height: 64,
    background: "transparent",
    [theme.breakpoints.down("xs")]: {
      marginTop: 0
    }
  },
  menuButton: {
    color: "black",
    marginRight: theme.spacing(2)
  },
  menuButtonLight: {
    color: "white"
  },
  closeButton: {
    color: "black",
    marginRLeft: theme.spacing(2)
  },
  closeButtonLight: {
    color: "white"
  },
  appBarFiller: {
    flexGrow: 1
  }
}));

const PageAppBar = ({
  onToggleMenu,
  menuIcon = <MenuIcon fontSize="large" />,
  onClosePath = "/",
  light = false,
  className = ""
}) => {
  const classes = useStyles();
  return (
    <AppBar position="static" elevation={0} className={`${classes.appBar} ${className}`}>
      <Toolbar>
        <IconButton
          edge="start"
          className={light ? classes.menuButtonLight : classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={e => onToggleMenu(e)}
        >
          {menuIcon}
        </IconButton>
        <div className={classes.appBarFiller}></div>
        <IconButton
          edge="end"
          className={light ? classes.closeButtonLight : classes.closeButton}
          color="inherit"
          aria-label="close"
          component={Link}
          to={onClosePath}
        >
          <CloseIcon fontSize="large" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default React.memo(PageAppBar);
