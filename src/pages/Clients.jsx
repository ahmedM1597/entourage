import React from "react";
import PropTypes from 'prop-types';
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Helmet } from "react-helmet";

import PageAppBar from "components/PageAppBar";
import { generateMetadata } from "components/Metadata";
import logos from "data/clients.json";
import seo from "data/seo.json";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    minHeight: "100vh",
    background: "white",
    [theme.breakpoints.down("sm")]: {
      //not sure why 0 causes a horizontal scroll bar
      overflowX: "hidden",
      padding: 0,
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2)
    }
  },
  contentContainer: {
    marginTop: theme.spacing(-2),
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "white",
    [theme.breakpoints.down("sm")]: {
      marginTop: "unset"
    }
  },
  itemsGrid: {
    flex: 1,
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: theme.spacing(6),
    width: "80%",
    maxWidth: 1600,
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(2),
      padding: theme.spacing(1)
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      justifyContent: "center",
      flexWrap: "nowrap"
    }
  },
  item: {
    margin: theme.spacing(4),
    "& img": {
      maxHeight: 180,
      maxWidth: 180,
      filter: "grayscale(1)"
    }
  },
  fillerItem: {
    flexGrow: 1
  }
}));

const Contacts = ({ onToggleMenu }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Helmet>
        <title>{seo.pages.clients.title}</title>
        {generateMetadata(seo.pages.clients)}
      </Helmet>

      <PageAppBar onToggleMenu={onToggleMenu} />
      <div className={classes.contentContainer}>
        <Typography variant="h3">Clients</Typography>
        <div className={classes.itemsGrid}>
          {logos.map((logo, index) => (
            <div key={index} className={classes.item}>
              <img src={logo.src} alt={logo.slt || ""} />
            </div>
          ))}
          <div className={classes.fillerItem}></div>
        </div>
      </div>
    </div>
  );
};

Contacts.propTypes = {
  onToggleMenu: PropTypes.func
};

export default Contacts;
