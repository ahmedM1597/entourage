import React from "react";
import PropTypes from 'prop-types';
import { Switch, Route } from "react-router-dom";

import Events from "./containers/Events";
import Event from "./containers/Event";

import events from "data/technology.json";

const Technology = ({ onToggleMenu }) => {
  return (
    <Switch>
      <Route exact path="/technology-digital">
        <Events onToggleMenu={onToggleMenu} events={events} seoKey="technology"/>
      </Route>
      <Route path="/technology-digital/:event">
         <Event onToggleMenu={onToggleMenu} onClosePath="/" />
      </Route>
    </Switch>
  );
};
Technology.propTypes = {
  onToggleMenu: PropTypes.func
};
export default Technology;
