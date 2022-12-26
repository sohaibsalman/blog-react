import React from "react";

import useThemeContext from "../../hooks/use-theme-context";

import "./button.css";

interface IProps {
  children: React.ReactNode;
  outlined?: boolean;
  rounded?: boolean;
  [x: string]: any;
}

const Button: React.FC<IProps> = ({
  children,
  outlined,
  rounded,
  hoverEffect,
  ...rest
}) => {
  const theme = useThemeContext();

  let bgColor = theme.colorSecondary,
    color = theme.fontColorPrimary;

  if (outlined) {
    bgColor = "transparent";
    color = theme.colorSecondary;
  }

  return (
    <button
      {...rest}
      className={`button ${rest.className}`}
      style={{
        color,
        border: `2px solid ${theme.colorSecondary}`,
        background: bgColor,
        borderRadius: rounded ? "5px" : "",
      }}
    >
      {children}
    </button>
  );
};

export default Button;
