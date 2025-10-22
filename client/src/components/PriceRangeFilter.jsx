import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterMakeQuery } from "../feature/productSlice";

const PriceRangeFilter = ({ min = 0, max = 200000, step = 1000,  }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const dispatch = useDispatch()

  const handleMinChange = (e) => {
    // console.log("min", e.target.value)
    const value = Math.min(Number(e.target.value), maxVal - step);
    setMinVal(value);
  };

  const handleMaxChange = (e) => {
    // console.log("max", e.target.value)
    const value = Math.max(Number(e.target.value), minVal + step);
    setMaxVal(value);
  };

  const handleApply = () => {
    dispatch(filterMakeQuery({priceRange: `${minVal},${maxVal}`}))
  };

  return (
    <div className="py-4 border-b border-gray-200">
      <h2 className="text-base font-semibold text-gray-700 mb-2">Price Range</h2>

      {/* RANGE WRAPPER */}
      <div className="relative mt-4 w-full flex flex-col items-center">
        {/* Track */}
        <div className="relative w-full h-2 bg-gray-300 rounded-full">
          {/* Active range bar */}
          <div
            className="absolute h-2 bg-blue-500 rounded-full"
            style={{
              left: `${((minVal - min) / (max - min)) * 100}%`,
              right: `${100 - ((maxVal - min) / (max - min)) * 100}%`,
            }}
          ></div>

          {/* RANGE INPUTS */}
        <div className="relative w-full"> 
          {/* 🔹 Separate layers for better thumb click area */}
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={minVal}
            onChange={handleMinChange}
            className="absolute mt-[-15px] w-full appearance-none bg-transparent pointer-events-auto"
          />
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={maxVal}
            onChange={handleMaxChange}
            className="absolute mt-[7px] w-full appearance-none bg-transparent pointer-events-auto"
          />
        </div>
        </div>

        {/* Labels below the slider */}
        <div className="flex justify-between w-full text-sm mt-4">
          <span className="font-medium text-gray-600">₹{minVal.toLocaleString()}</span>
          <span className="font-medium text-gray-600">₹{maxVal.toLocaleString()}</span>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-4 w-full">
          <button
            onClick={handleApply}
            className="btn btn-sm btn-primary text-white w-[48%]"
          >
            Apply
          </button>
          <button
            onClick={() => {
              setMinVal(min);
              setMaxVal(max);
              dispatch(filterMakeQuery({priceRange: `${min},${max}`}))
            }}
            className="btn btn-sm btn-outline w-[48%]"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default PriceRangeFilter;
