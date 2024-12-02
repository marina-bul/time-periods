import { useState } from 'react';

import styles from './Circle.module.scss'

export const CircleWithPoints = () => {
  const [rotation, setRotation] = useState(0);

  const handleClick = (index: number) => {
    const angle = index * 90;
    setRotation(-angle);
  };

  const generatePoints = (numPoints: number) => {
    const radius = 265;
    const centerX = 265;
    const centerY = 265;
    const points = [];

    for (let i = 0; i < numPoints; i++) {
      const angle = (i * 2 * Math.PI) / numPoints;
      points.push({
        cx: centerX + radius * Math.sin(angle),
        cy: centerY - radius * Math.cos(angle)
      });
    }

    return points;
  };

  const points = generatePoints(6);

  return (
    <svg
      className={styles.circleContainer}
      width="540"
      height="540"
      viewBox="0 0 540 530"
      style={{ transform: `rotate(${rotation}deg)`, transition: 'transform 0.5s ease' }}
    >
      <circle cx="265" cy="265" r="265" stroke="rgba(66, 86, 122, 0.2)" strokeWidth="1" fill="none" />
      {points.map((point, index) => (
        <>
          <circle
            key={index}
            className={styles.border}
            cx={point.cx}
            cy={point.cy}
            r="12"
            fill="transparent"
            onClick={() => handleClick(index)}
          />
          <circle
            key={index}
            className={styles.point}
            cx={point.cx}
            cy={point.cy}
            r="3"
            fill="#000000"
          />
          <text
            x={point.cx}
            y={point.cy}
            className={styles.pointText}
            textAnchor="middle"
            dominantBaseline="middle"
            style={{ 
              transform: `rotate(${-rotation}deg)`,
            }}
          >
            {index+1}
          </text>
        </>
                
      ))}
    </svg>
  );
};
