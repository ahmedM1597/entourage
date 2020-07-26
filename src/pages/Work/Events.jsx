import React from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";

import Events from "./containers/Events";
import Event from "./containers/Event";

import events from "data/events.json";

const EventIndex = ({ onToggleMenu }) => {
  return (
    <Switch>
      <Route exact path="/corporate-events-conferences">
        <Events
          onToggleMenu={onToggleMenu}
          title={events.title}
          description={events.description}
          events={events.items}
          seoKey="events"
        />
      </Route>
      <Route path="/corporate-events-conferences/:event">
        <Event onToggleMenu={onToggleMenu} onClosePath="/" />
      </Route>
    </Switch>
  );
};

EventIndex.propTypes = {
  onToggleMenu: PropTypes.func,
};
export default EventIndex;
