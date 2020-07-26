import React, {
  useState,
  useEffect,
  useImperativeHandle,
  forwardRef,
  RefForwardingComponent,
  useRef
} from "react";
import "rc-texty/assets/index.css";
import { IScene } from "types/IScene";

export interface IScenePlayer {
  scene: (props: IScene) => React.ElementType<IScene>;
  startTime: number;
  duration: number;
}

export interface ScenePlayerProps extends IScenePlayer {
  onEnd?: () => void;
  repeat?: number;
}

export interface IScenePlayerHandler {
  play: () => void;
  stop: () => void;
}

const ScenePlayer: RefForwardingComponent<
  IScenePlayerHandler,
  ScenePlayerProps
> = ({ startTime, duration, onEnd, repeat, scene }, ref) => {
  const [show, setShow] = useState(false);
  const [startPlay, setStartPlay] = useState(true);
  const [reverse, setReverse] = useState(false);
  const animationDuration = 800;
 
  const playerTimer = useRef<any>()
  useImperativeHandle(ref, () => ({
    play,
    stop
  }));

  const play = () => {
    setStartPlay(true);
  };

  const stop = () => {
    if (playerTimer.current) {
      clearTimeout(playerTimer.current);
    }
    setShow(false);
    setReverse(false);
    setStartPlay(false);
  };

  useEffect(() => {
    //console.log("playerTimer :", playerTimer);
    //console.log("startPlay :", startPlay);
    if (startPlay) {
      playerTimer.current = window.setTimeout(() => {
        setShow(true);
        setReverse(false);
        window.setTimeout(() => {
          setReverse(true);
          window.setTimeout(() => {
            setShow(false);
          }, animationDuration);
        }, duration * 1000);
      }, startTime * 1000);
    }
    return () => {
      if (playerTimer.current) {
        clearTimeout(playerTimer.current);
      }
    };
  }, [repeat, startPlay]);

  useEffect(() => {
    if (!show && onEnd) {
      onEnd();
    }
  }, [show]);

  return <React.Fragment>{scene({ show, reverse })}</React.Fragment>;
};

export default forwardRef(ScenePlayer);
