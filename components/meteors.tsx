"use client";

import type { CSSProperties } from "react";

type MeteorsProps = {
  number?: number;
  minDelay?: number;
  maxDelay?: number;
  minDuration?: number;
  maxDuration?: number;
  angle?: number;
  className?: string;
};

const seededUnit = (seed: number) => {
  let value = seed + 0x9e3779b9;
  value = Math.imul(value ^ (value >>> 16), 0x85ebca6b);
  value = Math.imul(value ^ (value >>> 13), 0xc2b2ae35);
  return ((value ^ (value >>> 16)) >>> 0) / 4294967296;
};

const randomBetween = (min: number, max: number, seed: number) =>
  min + seededUnit(seed) * (max - min);

const formatCssNumber = (value: number) => value.toFixed(4);

export function Meteors({
  number = 20,
  minDelay = 0.2,
  maxDelay = 1.2,
  minDuration = 2,
  maxDuration = 10,
  angle = 215,
  className,
}: MeteorsProps) {
  return (
    <div
      className={className ? `meteors ${className}` : "meteors"}
      aria-hidden="true"
    >
      {Array.from({ length: number }).map((_, index) => {
        const left = randomBetween(-8, 108, index + 1);
        const top = randomBetween(-18, 42, index + 31);
        const delay = randomBetween(minDelay, maxDelay, index + 61);
        const duration = randomBetween(minDuration, maxDuration, index + 91);
        const size = randomBetween(1.5, 2.8, index + 121);
        const meteorStyle = {
          "--meteor-angle": `${angle}deg`,
          "--meteor-delay": `${formatCssNumber(delay)}s`,
          "--meteor-duration": `${formatCssNumber(duration)}s`,
          "--meteor-size": `${formatCssNumber(size)}px`,
          left: `${formatCssNumber(left)}%`,
          top: `${formatCssNumber(top)}%`,
        } as CSSProperties;

        return (
          <span
            className="meteor"
            key={index}
            style={meteorStyle}
          />
        );
      })}
    </div>
  );
}
