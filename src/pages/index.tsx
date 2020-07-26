import React, { useState } from "react";
import { BrowserRouter, Switch, Route, useLocation, Redirect } from "react-router-dom";
import ReactGA from "react-ga";
import { useMediaQuery } from "@material-ui/core";
import Homepage from "./Home/Homepage";
import Clients from "./Clients";
import About from "./About";
import CEOMessage from "./CEOMessage";
import Contacts from "./Contacts";
import Work from "./Work/Work";
import Advertising from "./Work/Advertising";
import Events from "./Work/Events";
import Technology from "./Work/Technology";
import Social from "./Work/Social";
import Eve from "./Work/Eve";
import { useTransition, animated } from "react-spring";
import Menus from "../components/Menus";
import { IBasePage } from "../types/IBasePage";
import Team from "./Team";

interface MainIndexProps extends IBasePage {}

export const MainRoutes = ({ toggleMenu }: MainIndexProps) => {
  const location = useLocation();
  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("xs"));
  const transitions = useTransition(location, location => location.pathname, {
    from: item => {
      if (item.pathname === "/") {
        return {
          opacity: 0
        };
      }
      return {
        opacity: 0,
        transform: "translate3d(100%,0,0)"
      };
    },
    enter: () => {
      ReactGA.pageview(location.pathname + location.search);

      return {
        opacity: 1,
        transform: "translate3d(0%,0,0)"
      };
    },
    leave: {
      opacity: 0,
      transform: isMobile ? "translate3d(75%,0,0)" : "translate3d(75%,0,0)"
    }
  });
  return (
    <React.Fragment>
      {transitions.map(({ item: location, props, key }) => {
        return (
          <animated.div
            key={key}
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              overflow: "auto",
              ...props
            }}
          >
            <Switch location={location}>
              <Route exact path="/">
                <Homepage onToggleMenu={toggleMenu} />
              </Route>
              <Route exact path="/ceo-message">
                <CEOMessage onToggleMenu={toggleMenu} />
              </Route>
              <Route exact path="/about-us">
                <About onToggleMenu={toggleMenu} />
              </Route>
              <Route exact path="/clients">
                <Clients onToggleMenu={toggleMenu} />
              </Route>
              <Route exact path="/team">
                <Team onToggleMenu={toggleMenu} />
              </Route>
              <Route path="/contact-us">
                <Contacts onToggleMenu={toggleMenu} />
              </Route>
              <Route exact path="/work">
                <Work onToggleMenu={toggleMenu} />
              </Route>
              <Route path="/creative-advertising-media">
                <Advertising onToggleMenu={toggleMenu} />
              </Route>
              <Route path="/corporate-events-conferences">
                <Events onToggleMenu={toggleMenu} />
              </Route>
              <Route path="/technology-digital">
                <Technology onToggleMenu={toggleMenu} />
              </Route>
              <Route path="/social-media">
                <Social onToggleMenu={toggleMenu} />
              </Route>
              <Route path="/virtual-events">
                <Eve onToggleMenu={toggleMenu} />
              </Route>
              <Redirect to="/" />
            </Switch>
          </animated.div>
        );
      })}
    </React.Fragment>
  );
};

const Index = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <BrowserRouter basename="/">
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          overflow: "hidden"
        }}
      >
        <Menus onToggleMenu={toggleMenu} open={showMenu} />
        <MainRoutes toggleMenu={toggleMenu} />
      </div>
    </BrowserRouter>
  );
};

export default Index;
