import React from "react";
import { Switch, Route } from "react-router-dom";
import Contacts from "./Contacts";

const index = ({ onToggleMenu }) => {
  return (
    <Switch>
      <Route path="/contact-us">
        <Contacts onToggleMenu={onToggleMenu} />
      </Route>
    </Switch>
  );
};

export default index;
