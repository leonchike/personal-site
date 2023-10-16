import React from "react";
import { ArrowDown, ArrowRight } from "react-feather";

const icons = {
  arrowDown: ArrowDown,
  arrowRight: ArrowRight,
};

interface IconProps {
  id: keyof typeof icons;
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

type IconType = IconProps &
  React.HTMLAttributes<HTMLDivElement> &
  React.ButtonHTMLAttributes<HTMLDivElement>;

const Icon = ({ id, color, size, strokeWidth, ...delegated }: IconType) => {
  const Component = icons[id];

  if (!Component) {
    throw new Error(`No icon found for ID: ${id}`);
  }

  return (
    <div id={id} {...delegated}>
      <Component
        color={color}
        size={size}
        style={{ strokeWidth: strokeWidth }}
      />
    </div>
  );
};

export default Icon;
