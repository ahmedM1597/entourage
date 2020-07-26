import React from "react";
import "rc-texty/assets/index.css";
import { IScene } from "types/IScene";
import { makeStyles } from "@material-ui/core/styles";
import TweenOne from "rc-tween-one";

const useStyles = makeStyles(theme => ({
  root: {
    //marginTop: theme.spacing(-4)
  },
  sentence: {
    //height: 50
  }
}));

interface DefaultSceneProps extends IScene {
  sentences: Array<string>;
  sentenceClassName?: string;
}

const DefaultScene = ({
  show,
  reverse,
  sentences,
  sentenceClassName
}: DefaultSceneProps) => {
  const classes = useStyles();
  let sentenceDelay = 0;
  const delayPerSentence = 0;
  const animationDuration = 800;
  return (
    show && (
      <div className={classes.root}>
        {sentences.map((s, index, array) => {
          sentenceDelay += delayPerSentence;
          let textProps = {
            className: `${classes.sentence} ${sentenceClassName ? sentenceClassName : ''}`,
            animation: {
              y: 80,
              opacity: 0,
              duration: animationDuration,
              type: "from",
              delay: sentenceDelay
            }
          } as any;
          return (
            <TweenOne key={index} {...textProps} reverse={reverse}>
              {s}
            </TweenOne>
          );
        })}
      </div>
    )
  );
};

export default DefaultScene;
