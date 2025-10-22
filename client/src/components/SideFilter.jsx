import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { filterMakeQuery } from "../feature/productSlice";

const SideFilter = ({ header, options, location = false }) => {
  const [showOptions, setShowOptions] = useState(true);
  const [maxHeight, setMaxHeight] = useState("0px");
  const contentRef = useRef(null);
  const dispatch = useDispatch()

  // console.log(header, options, location, showOptions, maxHeight)

  useEffect(() => {
    if (contentRef.current){
        setMaxHeight(showOptions ? `10rem` : "0px")
    }
  }, [options, showOptions])

  return (
    <div className="border-b border-gray-200 py-3">
      {/* Header */}
      <div
        className="flex justify-between items-center cursor-pointer select-none"
        onClick={() => setShowOptions((p) => !p)}
      >
        <h2 className="text-base font-semibold text-gray-700">{header}</h2>
        <FaArrowDown
          className={`transition-transform duration-500 text-gray-600 ${
            showOptions ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>

      {/* Collapsible Options */}
      <div
        ref={contentRef}
        style={
            {
                maxHeight,
                transition: "max-height 0.2s ease-in-out",
            }
        }
        className="overflow-y-scroll mt-2"
      >
        <ul className="space-y-1 pl-2 pr-1 text-sm text-gray-600 ">
          {location
            ? Object.keys(options)?.map((option, i) => (
                <li key={i}>
                  <button onClick={() => dispatch(filterMakeQuery({typeSpecificLocation: option.split(",")[0]}))} className="w-full text-left hover:text-primary hover:bg-gray-50 rounded-md px-2 py-1 transition">
                    {option.split(",")[0]} — {options[option]}
                  </button>
                </li>
              ))
            : options?.map((option, i) => (
                <li key={i}>
                  <Link
                    to={`/filter/${option}`}
                    className="block hover:text-primary hover:bg-gray-50 rounded-md px-2 py-1 transition"
                  >
                    {option}
                  </Link>
                </li>
              ))}
        </ul>
      </div>
    </div>
  );
};

export default SideFilter;
