import React, { useState } from "react";
import styles from "./PieChart.module.css";

const PieChart = ({ data, onSliceHover }) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const centerX = 50;
  const centerY = 50;
  let startAngle = 0;

  const [hoveredSlice, setHoveredSlice] = useState(null);
  const [prevHoveredSlice, setPrevHoveredSlice] = useState(null);

  const handleSliceHover = (index) => {
    setPrevHoveredSlice(hoveredSlice);
    setHoveredSlice(index);

    const selectedLanguage = data[index].label;
    onSliceHover(selectedLanguage); // Call the callback function with the selected language
  };

  const handleSliceLeave = () => {
    setPrevHoveredSlice(hoveredSlice);
    setHoveredSlice(null);
  };

  return (
<div className="pie-chart-container">
      <svg className="pie-chart-svg  " viewBox="0 0 100 100">
        {data.map((item, index) => {
          const percentage =
            (item.value / data.reduce((sum, d) => sum + d.value, 0)) * 100;
          const endAngle = startAngle + (percentage / 100) * 360;
          const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
          const startAngleRadians = (startAngle * Math.PI) / 180;
          const endAngleRadians = (endAngle * Math.PI) / 180;
          const startX = centerX + radius * Math.cos(startAngleRadians);
          const startY = centerY + radius * Math.sin(startAngleRadians);
          const endX = centerX + radius * Math.cos(endAngleRadians);
          const endY = centerY + radius * Math.sin(endAngleRadians);

          const pathData = [
            `M ${startX} ${startY}`,
            `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}`,
            `L ${centerX} ${centerY}`,
            "Z",
          ].join(" ");

          startAngle = endAngle;

          const gradientRotation = startAngle - 90;

          return (
            <g 
              key={item.label}
              className={` pie-slice ${
                hoveredSlice === index ? "hovered" : ""
              }`}
              onMouseEnter={() => handleSliceHover(index)}
              onMouseLeave={handleSliceLeave}
            >
              <path 
                d={pathData}
                fill={
                  hoveredSlice === index
                    ? `url(#sliceGradient-${index})`
                    : item.color
                }
                stroke="#fff"
                strokeWidth={0.1}
                style={{
                  transition: "fill 0.3s ease-in-out",
                }}
              />
              {hoveredSlice === index && (
                <defs>
                  <linearGradient
                    id={`sliceGradient-${index}`}
                    gradientTransform={`rotate(${gradientRotation} ${centerX} ${centerY})`}
                  >
                    <stop offset="0%" stopColor={item.color} stopOpacity="1" />
                    <stop offset="100%" stopColor={item.color} stopOpacity="0.3" />
                  </linearGradient>
                </defs>
              )}
            </g>
          );
        })}
        {(hoveredSlice !== null || prevHoveredSlice !== null) && (
          <g>
            <text
              x={centerX}
              y={centerY}
              dominantBaseline="middle"
              textAnchor="middle"
              className={`${styles.sliceLabel} ${styles.noPointerEvents}`}
            >
              {data[hoveredSlice !== null ? hoveredSlice : prevHoveredSlice].label}
            </text>
          </g>
        )}
      </svg>

    </div>
  );
};

export default PieChart;
