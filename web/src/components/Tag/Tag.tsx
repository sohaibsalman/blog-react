import React from "react";

import { Text } from "../Typography";
import useThemeContext from "../../hooks/use-theme-context";
import "./tag.css";

interface IProps {
  text: string;
}

const Tag: React.FC<IProps> = ({ text }) => {
  const theme = useThemeContext();
  return (
    <div
      className="tag-container"
      style={{ backgroundColor: theme.colorPrimary }}
    >
      <Text>{text}</Text>
    </div>
  );
};

export default Tag;
