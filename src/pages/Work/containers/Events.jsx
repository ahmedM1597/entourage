import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { generateMetadata } from "components/Metadata";
import BackIcon from "@material-ui/icons/ArrowBack";
import { Helmet } from "react-helmet";
import seo from "data/seo.json";
import PageAppBar from "components/PageAppBar";
import List from "components/List";
import LinkButton from "components/LinkButton";

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
    left: 0,
    minHeight: "100vh",
    background: "white",
    [theme.breakpoints.down("sm")]: {
      //not sure why 0 causes a horizontal scroll bar
      overflowX: "hidden",
      padding: 0,
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingBottom: theme.spacing(6),
    background: "white",
  },
  infoContainter: {
    width: "60%",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  title: {
    fontWeight: "bold",
    marginBottom: theme.spacing(2),
  },
}));

const Events = ({
  onToggleMenu,
  events,
  title,
  description,
  listClassName = "",
  listItemClassName = "",
  seoKey = "",
}) => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div className={classes.root}>
      <Helmet>
        <title>{seo.pages[seoKey].title}</title>
        {generateMetadata(seo.pages[seoKey])}
      </Helmet>
      <PageAppBar onToggleMenu={() => history.goBack()} menuIcon={<BackIcon fontSize="large" />} />
      <div className={classes.contentContainer}>
        <div className={classes.infoContainter}>
          {title && (
            <Typography variant="h4" className={classes.title}>
              {title}
            </Typography>
          )}
          {description &&
            description.length > 0 &&
            description.map((text, index) => (
              <React.Fragment key={index}>
                <Typography variant="body1">{text}</Typography>
                <br />
              </React.Fragment>
            ))}
        </div>
        <List data={events} itemClassName={listItemClassName} />
        <Box display="flex" justifyContent="center" mt={8}>
          <LinkButton to="/contact-us" label="Contact Us" className={classes.contactUsButton} />
        </Box>
      </div>
    </div>
  );
};
Events.propTypes = {
  onToggleMenu: PropTypes.func,
  events: PropTypes.array,
  listClassName: PropTypes.string,
  listItemClassName: PropTypes.string,
};
export default Events;
