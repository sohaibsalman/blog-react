import { ReactNode } from "react";

import useThemeContext from "../../hooks/use-theme-context";

interface IProps {
  children: ReactNode;
  variant: string;
  color?: string;
  [x: string]: any; // for rest operator
}

const Heading: React.FC<IProps> = ({ children, variant, color, ...rest }) => {
  const theme = useThemeContext();
  if (!color) color = theme.fontColorPrimary;

  if (variant === "h1")
    return (
      <h1 style={{ color }} {...rest}>
        {children}
      </h1>
    );
  else if (variant === "h2")
    return (
      <h2 style={{ color }} {...rest}>
        {children}
      </h2>
    );
  else if (variant === "h3")
    return (
      <h3 style={{ color }} {...rest}>
        {children}
      </h3>
    );
  else if (variant === "h4")
    return (
      <h4 style={{ color }} {...rest}>
        {children}
      </h4>
    );
  else if (variant === "h5")
    return (
      <h5 style={{ color }} {...rest}>
        {children}
      </h5>
    );
  else if (variant === "h6")
    return (
      <h6 style={{ color }} {...rest}>
        {children}
      </h6>
    );
  return null;
};

export default Heading;
