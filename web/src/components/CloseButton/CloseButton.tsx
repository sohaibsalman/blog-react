import React from "react";

import "./close-button.css";

interface IProps {
  onClick: () => void;
  color: string;
}

const CloseButton: React.FC<IProps> = ({ onClick, color }) => {
  return (
    <button className="close-button" onClick={onClick}>
      <span className="close-bar" style={{ backgroundColor: color }}></span>
      <span className="close-bar" style={{ backgroundColor: color }}></span>
    </button>
  );
};

export default CloseButton;
