import React, { useState, useEffect } from 'react';
import './SlideRange.scss';

export const SlideRange = ({ minValue = 0, maxValue = 100, step = 1, value = 50, showCurrentValue = false, marks = false  }) => {
  const [stateValue, setStateValue] = useState(value || 0);
  const [marksState, setMarksState] = useState([]);

  useEffect(() => {
    if (step > 1) {
      const marksArray = Array.from(
        { length: Math.floor((maxValue - minValue) / step) + 1 },
        (_, index) => minValue + index * step
      );
      setMarksState(marksArray);
    }
  }, [minValue, maxValue, step]);

  const getBackgroundSize = () => {
    const range = maxValue - minValue;
    const normalizedValue = (stateValue - minValue) / range;
    return { backgroundSize: `${normalizedValue * 97}%` };
  };

  return (
    <div className={'SliderRangeContainer'}>
      {marks &&
          <div className={'SliderRangeMarksContainer'}>
          {marksState.map((mark) => (
            <span key={mark} className={'SliderRangeMark'}
                  style={{left: `${((mark - minValue) / (maxValue - minValue)) * 100}%`}}>
            </span>
          ))}
        </div>
      }
      <input
        type='range'
        className={'SliderRange'}
        min={minValue}
        max={maxValue}
        step={step}
        onChange={(e) => setStateValue(e.target.value)}
        style={getBackgroundSize()}
        value={stateValue}
      />
      {showCurrentValue && stateValue > 0 &&
        <p className={'SliderRangeValue'} style={{left: `${getBackgroundSize().backgroundSize} `}}>{stateValue}</p>}
    </div>
  );
};
