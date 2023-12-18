import React from 'react';
import './Skeleton.scss';

export const Skeleton = ({ width = '100%', height, animation, st = {} }) => {
    const isAnimationWave = animation === 'wave'
    const widthValue = width.includes('%') ? width : `${width}px`;

    return (
        <div className={`Skeleton ${isAnimationWave ? 'Skeleton_wave' : ''}`} style={{ width: widthValue, height: `${height}px`, ...st }}></div>
    );
};
