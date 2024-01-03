import { useState, useRef, useCallback, useEffect } from "react";
import classnames from "classnames";
import '../assets/multiRangeSlider.css'

interface color {light: string, dark: string}

interface props {
    labelMin?: string,
    min: number, 
    max: number, 
    labelMax?: string,
    mode: "light" | "dark",
    custom: {
        activeLine: color,
        inActiveLine: color,
        text: color
    }
    onChange: any
}

const MultiRangeSlider = ({ min, max, mode, custom, onChange, labelMin, labelMax }: props) => {
    const [minVal, setMinVal] = useState(min);
    const [maxVal, setMaxVal] = useState(max);

    const minValRef = useRef<any>(null);
    const maxValRef = useRef<any>(null);
    const range = useRef<any>(null);

    const getPercent = useCallback(
        (value: number) => Math.round(((value - min) / (max - min)) * 100), [min, max]
    );

    useEffect(() => {
      if (maxValRef.current) {
        const minPercent = getPercent(minVal);
        const maxPercent = getPercent(+maxValRef.current.value); 
    
        if (range.current) {
          range.current.style.left = `${minPercent}%`;
          range.current.style.width = `${maxPercent - minPercent}%`;
        }
      }
    }, [minVal, getPercent]);
    
    useEffect(() => {
      if (minValRef.current) {
        const minPercent = getPercent(+minValRef.current.value);
        const maxPercent = getPercent(maxVal);
    
        if (range.current) {
         range.current.style.width = `${maxPercent - minPercent}%`;
        }
      }
    }, [maxVal, getPercent]);
    
    
    useEffect(() => {
        onChange({ min: minVal, max: maxVal });
    }, [minVal, maxVal, onChange]);

    return (
        <>
            <input
                type="range"
                min={min}
                max={max}
                value={minVal}
                ref={minValRef}
                onChange={(event) => {
                    const value = Math.min(+event.target.value, maxVal - 1);
                    setMinVal(value);
                    event.target.value = value.toString();
                }}
                className={classnames(`thumb thumb--zindex-3`, {
                    "thumb--zindex-5": minVal > max - 100
                })}
            />
            <input
                type="range"
                min={min}
                max={max}
                value={maxVal}
                ref={maxValRef}
                onChange={(event) => {
                    const value = Math.max(+event.target.value, minVal + 1);
                    setMaxVal(value);
                    event.target.value = value.toString();
                }}
                className={`thumb thumb--zindex-4`}
            />
            <div className="slider">
                <div className={`slider__track ${mode === "light"? custom.inActiveLine.light : custom.inActiveLine.dark}`} />
                <div ref={range} className={`slider__range ${mode === "light"? custom.activeLine.light : custom.activeLine.dark}`} />
                <div className={`slider__left-value ${mode === "light"? custom.text.light : custom.text.dark}`}>{labelMin} {minVal}</div>
                <div className={`slider__right-value ${mode === "light"? custom.text.light : custom.text.dark}`}>{labelMax} {maxVal}</div> 
            </div>
        </>
    );
};
    
export default MultiRangeSlider;