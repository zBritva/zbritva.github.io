import React from 'react'
import ReactPlayer from 'react-player'

export interface IIconProps {
    url: string;
    alt: string;
    size?: number;
}

export const Icon = ({url, alt, size}: IIconProps) => {
    return (
        <img src={url} alt={alt}  width={size ?? "20px"} height={size ?? "20px"}/>
    );
};



