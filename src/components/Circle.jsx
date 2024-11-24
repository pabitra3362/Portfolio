import React from 'react';

const Circle = ({percentage}) => {
  const radius = 70; // Radius of the circle
  const strokeWidth = 12; // Width of the border
  const circumference = 2 * Math.PI * radius; // Circumference of the circle
  const offset = circumference - (percentage / 100) * circumference; // Calculate the offset for the green portion

  return (
    <div className="flex items-center justify-center">
      <svg
        className="transform -rotate-90"
        width="200" height="200" xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background circle */}
        <circle
          cx="100" cy="100" r={radius} stroke="#e5e7eb" strokeWidth={strokeWidth} fill="none"
        />
        {/* Green partial circle */}
        <circle
          cx="100" cy="100" r={radius} stroke="rgba(49, 245, 26, 0.98)" strokeWidth={strokeWidth}
          fill="none" strokeDasharray={circumference} strokeDashoffset={offset}
        />
      </svg>
    </div>
  );
};

export default Circle;
