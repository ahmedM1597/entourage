import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { generateMetadata } from "components/Metadata";
import PageAppBar from "components/PageAppBar";
import seo from "data/seo.json";

const workImage = "/assets/images/services.jpg";
const useStyles = makeStyles((theme) => ({
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
    bottom: 0,
    left: 0,
    //background: "rgba(0, 0, 0, 0.6)",
    backgroundImage: `url(${workImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "top center",
    filter: "grayscale(1)",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1),
    },
  },
  title: {
    flexGrow: 1,
  },
  contentContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(4),
  },
  itemsContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "space-evenly",
      textAlign: "center",
    },
  },
  item: {},
  itemTitle: {
    "& a": {
      color: "white",
      textDecoration: "none",
      textTransform: "uppercase",
      fontWeight: "bold",
      //fontSize: "4rem"
    },
    "& a:hover": {
      color: "darkgray",
    },
  },
}));

const Work = ({ onToggleMenu }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Helmet>
        <title>{seo.pages.work.title}</title>
        {generateMetadata(seo.pages.work)}
      </Helmet>
      <PageAppBar onToggleMenu={onToggleMenu} light />
      <div className={classes.contentContainer}>
        <div className={classes.itemsContainer}>
          <div className={classes.item}>
            <Typography variant="h3" className={classes.itemTitle}>
              {/* <a href="//www.eve.tech">Virtual Events</a> */}
              <Link to="/virtual-events">Virtual Events</Link>
            </Typography>
          </div>
          <div className={classes.item}>
            <Typography variant="h3" className={classes.itemTitle}>
              <Link to="/social-media">PR & Social Media</Link>
            </Typography>
          </div>
          <div className={classes.item}>
            <Typography variant="h3" className={classes.itemTitle}>
              <Link to="/creative-advertising-media">Creative & Media</Link>
            </Typography>
          </div>
          <div className={classes.item}>
            <Typography variant="h3" className={classes.itemTitle}>
              <Link to="/technology-digital/entourage">Technology & Digital</Link>
            </Typography>
          </div>
          <div className={classes.item}>
            <Typography variant="h3" className={classes.itemTitle}>
              <Link to="/corporate-events-conferences">Corporate events & Conferences</Link>
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
Work.propTypes = {
  onToggleMenu: PropTypes.func,
};
export default Work;
