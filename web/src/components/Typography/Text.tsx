import React, { ReactNode } from "react";

import useThemeContext from "../../hooks/use-theme-context";

interface IProps {
  children: ReactNode;
  [x: string]: any; // for rest operator
}

const Text: React.FC<IProps> = ({ children, ...rest }) => {
  const theme = useThemeContext();
  const color = theme.fontColorSecondary;

  return (
    <p style={{ color }} {...rest}>
      {children}
    </p>
  );
};

export default Text;
