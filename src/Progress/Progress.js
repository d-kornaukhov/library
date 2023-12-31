import React, { useEffect, useState } from 'react';
import './Progress.scss';

export const Progress = ({ color, width, height, st, value = 0, variant = 'determinate' }) => {

  const dashArray = 2 * Math.PI * 20.2;

  return (
    <div className={'ProgressWrapper'}>
      {variant === 'determinate' && (
        <div className="ProgressLabel">
          {`${Math.round(value)}%`}
        </div>
      )}
      <div className={`Progress ${variant === 'determinate' && 'ProgressNoAnim'}`} style={{ color: `${color}`, width: `${width}px`, height: `${height}px`, ...st }}>
        <svg className="" viewBox="22 22 44 44">
          <circle
            className={`ProgressCircle ${variant === 'determinate' && 'ProgressNoAnim'}`}
            cx="44"
            cy="44"
            r="20.2"
            fill="none"
            strokeWidth="3.6"
            style={{
              strokeDasharray: variant === 'determinate' ? `${dashArray}px` : '80px, 200px',
              strokeDashoffset: variant === 'determinate' ? `${((100 - value) / 100) * dashArray}px` : '0',
            }}
          ></circle>
        </svg>
      </div>
    </div>
  );
};


export const LinearProgress = ({ color, st, value, variant, showValue }) => {
  return (
    <div className={'LinearProgressWrapper'}>
      <div className="LinearProgress"
           style={{...st}}>
        <div className={`LinearProgressBar ${variant === 'determinate' && 'LinearProgressBarValue'}`} style={variant === 'determinate' ? { width: `${value}%` } : {}}
        ></div>
      </div>
      {
        variant === 'determinate' && showValue && (
          <p className={'LinearProgressValue'}>{value}%</p>
        )
      }
    </div>
  );
};
