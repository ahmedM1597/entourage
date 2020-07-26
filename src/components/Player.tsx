import React, {
  useImperativeHandle,
  useRef,
  useState,
  RefForwardingComponent,
  forwardRef,
  createRef
} from "react";

import ScenePlayer, {
  ScenePlayerProps,
  IScenePlayer,
  IScenePlayerHandler
} from "./ScenePlayer";

export interface IPlayerHandler extends IScenePlayerHandler { }
type PlayerProps = {
  autoPlay: boolean;
  repeat: true;
  timeSpeed?: number;
  scenes: Array<IScenePlayer>;
};

const Player: RefForwardingComponent<IPlayerHandler, PlayerProps> = (
  { repeat, autoPlay, scenes, timeSpeed = 1 }: PlayerProps,
  ref: any
) => {
  const [currentRepeat, setCurrentRepeat] = useState(0);
  const scenesPlayerRef = useRef(
    [...Array(scenes.length)].map(() => createRef<IPlayerHandler>())
  );
  //const pref = useRef<IScenePlayerHandler>(null); // React.createRef<IScenePlayerHandler>();
  useImperativeHandle(ref, () => ({
    play,
    stop
  }));
  const play = () => {
    setCurrentRepeat(0);
    scenesPlayerRef.current.forEach((playerRef: any) => {
      playerRef?.current?.play();
    });
  };
  const stop = () => {
    scenesPlayerRef.current.forEach((playerRef: any) => {
      playerRef?.current?.stop();
    });
  };

  return (
    <React.Fragment>
      {scenes.map((scene, index) => {
        const sceneProps = {
          duration: timeSpeed * scene.duration,
          startTime: scene.startTime,
          repeat: currentRepeat,
          scene: scene.scene
        } as ScenePlayerProps;
        if (index === scenes.length - 1 && repeat) {
          sceneProps.onEnd = () => {
            setCurrentRepeat(currentRepeat + 1);
          };
        }
        return (
          <ScenePlayer
            ref={scenesPlayerRef.current[index]}
            key={index}
            {...sceneProps}
          />
        );
      })}
    </React.Fragment>
  );
};

export default forwardRef(Player);
