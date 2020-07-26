import React from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";

import Events from "./containers/Events";
import Event from "./containers/Event";

import events from "data/advertising.json";
const Advertising = ({ onToggleMenu }) => {
  return (
    <Switch>
      <Route exact path="/creative-advertising-media">
        <Events
          onToggleMenu={onToggleMenu}
          title={events.title}
          description={events.description}
          events={events.items}
          seoKey="advertising"
        />
      </Route>
      <Route path="/creative-advertising-media/:event">
        <Event onToggleMenu={onToggleMenu} onClosePath="/" />
      </Route>
    </Switch>
  );
};
Advertising.propTypes = {
  onToggleMenu: PropTypes.func,
};
export default Advertising;
