import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Texty from "rc-texty";
import "rc-texty/assets/index.css";
import { IScene } from "types/IScene";
import TweenOne from "rc-tween-one";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: "unset"
  },
  first: {
    fontWeight: "bold",
    //height: 50
  },
  sentence: {
    //height: 50
  }
}));

const Scene02 = ({ show, reverse }: IScene) => {
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
            x: -30,
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
    show && (
      <div>
        <Texty enter={getEnter} leave={getEnter} className={classes.first}>
          {!reverse ? "we are entourage" : ""}
        </Texty>

        <TweenOne
          className={classes.sentence}
          animation={{
            y: 80,
            opacity: 0,
            duration: 800,
            type: "from",
            delay: 600
          }}
          reverse={reverse}
        >
          a live communications artisan agency
        </TweenOne>
      </div>
    )
  );
};

export default Scene02;
