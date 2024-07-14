import React from 'react'
import ReactPlayer from 'react-player'

export interface IPlayerProps {
    url: string;
    timeToStart?: number;
    timeToStop?: number;
}

export const Player = ({url, timeToStart, timeToStop}: IPlayerProps) => {
    const playerRef = React.useRef();

    const [isPlay, setIsPlay] = React.useState(false);
    const [isReady, setIsReady] = React.useState(false);

    const onReady = React.useCallback(() => {
    }, [playerRef.current, timeToStart]);

    const onProgress = React.useCallback((state: {played: number, playedSeconds: number, loaded: number, loadedSeconds: number}) => {
        if (isPlay && timeToStop && state.playedSeconds >= timeToStop) {
            setIsPlay(false)
        }
    }, [isPlay, timeToStop]);

    const onPlay = React.useCallback(() => {
        setIsPlay(true)
        if (timeToStart && isReady === false) {
            playerRef.current?.seekTo(timeToStart, 'seconds');
            setIsReady(true)
        }
    }, [setIsPlay]);

    return (
        <ReactPlayer
            ref={playerRef}
            playing={isPlay}
            url={`${url}`}
            width="80%"
            controls={true}
            onReady={onReady}
            onProgress={onProgress}
            onPlay={onPlay}
        />
    )
};

