import React, { useEffect, useRef } from "react";
import p5 from "p5";
import "./ThirdPage.scss";

function FractalTree() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const sketch = new p5((p) => {
      p.setup = () => {
        const canvas = p.createCanvas(400, 500);
        canvas.parent(canvasRef.current);
        p.angleMode(p.DEGREES); // Set angle mode to degrees
        p.noLoop();
      };

      p.draw = () => {
        p.background(255);
        p.stroke(0);

        const len = 100;
        const angle = 40;

        p.translate(p.width / 2, p.height);
        branch(len, angle);
      };

      const branch = (len, angle) => {
        p.line(0, 0, 0, -len);
        p.translate(0, -len);

        if (len > 4) {
          p.push();
          p.rotate(angle);
          branch(len * 0.67, angle);
          p.pop();

          p.push();
          p.rotate(-angle);
          branch(len * 0.67, angle);
          p.pop();
        }
      };
    });

    return () => {
      sketch.remove();
    };
  }, []);

  return <div ref={canvasRef} className="particle-motion" />;
}

export default FractalTree;
