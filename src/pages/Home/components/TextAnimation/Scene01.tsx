import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Texty from "rc-texty";
import "rc-texty/assets/index.css";
import { IScene } from "types/IScene";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(-4)
  },
  hello: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "9.7rem",
    //height: 200,
    [theme.breakpoints.down("xs")]: {
      fontSize: "7rem",
      //height: 150
    }
  },
  we: {
    marginTop: theme.spacing(-4),
    textAlign: "center",
    fontWeight: 300,
    fontSize: "2.8rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem",
      marginTop: theme.spacing(-2),
    }
  }
}));

const Scene01 = ({ show, reverse }: IScene) => {
  const classes = useStyles();

  const getEnter = (e: any) => {
    switch (e.index) {
      // case 0:
      //   return {
      //     enter: {
      //       scale: 1.5,
      //       opacity: 0,
      //       y: 180,
      //       x: -100
      //     },
      //     leave: {
      //       y: 80,
      //       opacity: 0
      //     }
      //   };

      // case 4:
      //   return {
      //     enter: {
      //       scale: 1.5,
      //       opacity: 0,
      //       y: 180,
      //       x: 100
      //     },
      //     leave: {
      //       y: 80,
      //       opacity: 0
      //     }
      //   };

      default:
        return {
          enter: {
            y: 80,

            opacity: 0
          },
          leave: {
            y: 80,
            opacity: 0
          }
        };
    }
  };

  return (
    <div className={classes.root}>
      <Texty enter={getEnter} leave={getEnter} className={classes.hello}>
        {show ? "Hello" : ""}
      </Texty>
      <Texty className={classes.we} delay={100} mode="sync" type="bottom">
        {show ? "We are entourage" : ""}
      </Texty>
    </div>
  );
};

export default Scene01;
