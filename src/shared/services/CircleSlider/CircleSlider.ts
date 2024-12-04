import type { Point, PointCoords } from 'shared/types/Circle'

export class CircleSlider {
  private radius: number
  private centerX: number
  private centerY: number
  private numPoints: number
  private points: Point[]
  private targetCoords: PointCoords

  constructor(radius: number, centerX: number, centerY: number, numPoints: number) {
    this.radius = radius;
    this.centerX = centerX;
    this.centerY = centerY;
    this.numPoints = numPoints;
    this.points = this.generatePoints()
    this.targetCoords = this.initTargetCoords()
  }
  
  private generatePoints() {
    const points = [];

    for (let i = 0; i < this.numPoints; i++) {
      const angle = ((i * 2 * Math.PI) / this.numPoints) - (Math.PI / 3);
      points.push({
        coords: {
          cx: this.centerX - this.radius * Math.cos(angle),
          cy: this.centerY + this.radius * Math.sin(angle), 
        },
        index: i+1
      });
    }

    return points;
  };

  private initTargetCoords() {
    const targetPoint = this.points[this.points.length-1]
    return { cx: targetPoint.coords.cx, cy: targetPoint.coords.cy }
  }

  getPoints() {
    return this.points
  }

  getTargetCoords() {
    return this.targetCoords
  }

  calculateRotation(startPoint: Point) {
    const toDegrees = (radians: number) => radians * (180 / Math.PI);

    const currentAngle = Math.atan2(
      startPoint.coords.cy - this.centerY,
      startPoint.coords.cx - this.centerX
    );

    const targetAngle = Math.atan2(
      this.targetCoords.cy - this.centerY,
      this.targetCoords.cx - this.centerX
    );

    return toDegrees(targetAngle - currentAngle);
  }
}