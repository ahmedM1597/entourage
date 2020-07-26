/* eslint-disable react/display-name */
import React, { forwardRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Scene01 from "./Scene01";
//import Scene02 from "./Scene02";
import DefaultScene from "components/DefaultScene";
import Player from "components/Player";

const timeSpeed = 1;
const useStyles = makeStyles(theme => ({
  closingSentence: {
    //height: 50
    textAlign: "center"
  }
}));

const HomepageText = forwardRef((props, ref) => {
  const classes = useStyles();
  return (
    <Player
      timeSpeed={1}
      ref={ref}
      repeat={true}
      scenes={[
        {
          startTime: 0,
          duration: 1,
          scene: props => <Scene01 {...props} />
        },
        // {
        //   startTime: 5 * timeSpeed,
        //   duration: 2.5 * timeSpeed,
        //   scene: props => <Scene02 {...props} />
        // },
        {
          startTime: 5 * timeSpeed,
          duration: 2 * timeSpeed,
          scene: props => (
            <DefaultScene
              sentences={["a live communications artisan agency"]}
              {...props}
            />
          )
        },
        {
          startTime: 11.33 * timeSpeed,
          duration: 3 * timeSpeed,
          scene: props => (
            <DefaultScene
              sentences={["a customer centric, strategic design agency"]}
              {...props}
            />
          )
        },
        {
          startTime: 18 * timeSpeed,
          duration: 3 * timeSpeed,
          scene: props => (
            <DefaultScene
              sentences={[
                "we help countries boost their economy",
                "with cutting edge technology and media tools"
              ]}
              {...props}
            />
          )
        },
        {
          startTime: 26 * timeSpeed,
          duration: 3 * timeSpeed,
          scene: props => (
            <DefaultScene
              sentences={["we build brand experiences", "through storytelling"]}
              {...props}
            />
          )
        },
        {
          startTime: 36 * timeSpeed,
          duration: 2 * timeSpeed,
          scene: props => (
            <DefaultScene sentences={["where ideas fly"]} sentenceClassName={classes.closingSentence} {...props} />
          )
        }
      ]}
    />
  );
});

export default HomepageText;
