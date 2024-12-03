import { useCallback, useState } from 'react';
import cn from 'clsx';

import styles from './Circle.module.scss'

export const CircleWithPoints = () => {
  const [rotation, setRotation] = useState(0);
  const generatePoints = (numPoints: number) => {
    const radius = 265;
    const centerX = 265;
    const centerY = 265;
    const points = [];

    for (let i = 0; i < numPoints; i++) {
      const angle = ((i * 2 * Math.PI) / numPoints) - (Math.PI / 3);
      points.push({
        cx: centerX - radius * Math.cos(angle),
        cy: centerY + radius * Math.sin(angle), 
        index: i+1
      });
    }

    return points;
  };

  const points = generatePoints(6);
  
  const initialActivePoint = points[points.length-1]
  const activePointCoords = { cx: initialActivePoint.cx, cy: initialActivePoint.cy }

  const [activePoint, setActivePoint] = useState(initialActivePoint);


  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClick = useCallback((point: any) => {
    const toDegrees = (radians: number) => radians * (180 / Math.PI);

    const currentAngle = Math.atan2(
      point.cy - 265,
      point.cx - 265
    );

    const targetAngle = Math.atan2(
      activePointCoords.cy - 265,
      activePointCoords.cx - 265
    );

    const rotationAngle = toDegrees(targetAngle - currentAngle);

    setRotation(rotationAngle);
    setActivePoint(point);
  }, []);

  return (
    
    <svg
      className={styles.circleContainer}
      width="580"
      height="580"
      viewBox="0 0 570 580"
    >
      <g
        width="530"
        height="530"
        style={{
          transform: `rotate(${rotation}deg)`,
          transformOrigin: 'center',
          transformBox: 'fill-box',
          transition: 'transform 0.5s ease',
        }}
      >
        <circle cx="265" cy="265" r="265" stroke="rgba(66, 86, 122, 0.2)" strokeWidth="1" fill="none" />
        {points.map((point) => (
          <g key={point.index}>
            <circle
              className={cn(styles.border, { [styles.active]: point.index === activePoint.index })}
              cx={point.cx}
              cy={point.cy}
              r="12"
              fill="transparent"
              onClick={() => handleClick(point)}
            />
            <circle 
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
              {point.index}
            </text>
          </g>
                
        ))}
      </g>
    </svg>
  );
};
