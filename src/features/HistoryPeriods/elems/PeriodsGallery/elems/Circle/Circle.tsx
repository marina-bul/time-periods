import { useCallback, useEffect, useState } from 'react';
import cn from 'clsx';
import { CircleSlider } from 'shared/services/CircleSlider/CircleSlider';

import styles from './Circle.module.scss'

import type { FC } from 'react';
import type { Point } from 'shared/types/Circle';

interface CircleProps {
  className?: string;
  numberOfPoints: number;
  activePoint: {idx: number; field: string}
  onChangeActivePoint: (pointIndex: number) => void
}

export const CircleWithPoints: FC<CircleProps> = ({ 
  className, 
  numberOfPoints, 
  activePoint, 
  onChangeActivePoint 
}) => {

  const [rotation, setRotation] = useState(0);

  const circleSlider = new CircleSlider(265, 265, 265, numberOfPoints)

  const points = circleSlider.getPoints();


  const handleRotate = useCallback((point: Point) => {
    setRotation(circleSlider.calculateRotation(point));
    onChangeActivePoint(point.index)
  }, [circleSlider.calculateRotation, onChangeActivePoint]);

  useEffect(() => {
    const newActivePoint = points.find(point => point.index === activePoint.idx)
    handleRotate(newActivePoint)
  }, [activePoint, handleRotate])

  return (
    <svg
      className={cn(styles.circleContainer, className)}
      width="580"
      height="580"
      viewBox="0 0 570 580"
    >
      <g
        width="530"
        height="530"
        transform={`rotate(${rotation}, 265, 265)`} 
        style={{
          transition: 'transform 0.5s ease',
        }}
      >
        <circle cx="265" cy="265" r="265" stroke="rgba(66, 86, 122, 0.2)" strokeWidth="1" fill="none" />
        {points.map((point) => (
          <g key={point.index}>
            <circle
              className={cn(styles.border, { [styles.active]: point.index === activePoint.idx })}
              cx={point.coords.cx}
              cy={point.coords.cy}
              r="12"
              fill="transparent"
              onClick={() => handleRotate(point)}
            />

            <circle 
              className={styles.point}
              cx={point.coords.cx}
              cy={point.coords.cy}
              r="3"
            />
            <text
              x={point.coords.cx}
              y={point.coords.cy}
              className={styles.pointText}
              textAnchor="middle"
              dominantBaseline="middle"
              transform={`rotate(${-rotation}, ${point.coords.cx}, ${point.coords.cy})`} 
            >
              {point.index}
            </text>
            <text
              x={point.coords.cx + 70}
              y={point.coords.cy}
              className={cn(styles.fieldText, { [styles.visible]: point.index === activePoint.idx })}
              textAnchor="middle"
              dominantBaseline="middle"
              transform={`rotate(${-rotation}, ${point.coords.cx}, ${point.coords.cy})`} 
            >
              {activePoint.field}
            </text>
          </g>
                
        ))}
      </g>
    </svg>
  );
};
