import React from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Events from "./containers/Events";
import SocialEvent from "./containers/SocialEvent";
import events from "data/social.json";

const useStyles = makeStyles((theme) => ({
  listItem: {
    marginBottom: theme.spacing(4),
    "& img": {
      maxWidth: 280,
    },
  },
}));

const Social = ({ onToggleMenu }) => {
  const classes = useStyles();

  return (
    <Switch>
      <Route exact path="/social-media">
        <Events
          onToggleMenu={onToggleMenu}
          title={events.title}
          description={events.description}
          events={events.items}
          listItemClassName={classes.listItem}
          seoKey="social"
        />
      </Route>
      <Route path="/social-media/:event">
        <SocialEvent onToggleMenu={onToggleMenu} onClosePath="/" />
      </Route>
    </Switch>
  );
};
Social.propTypes = {
  onToggleMenu: PropTypes.func,
};
export default Social;
