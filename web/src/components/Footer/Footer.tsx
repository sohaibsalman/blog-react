import { Nav } from "react-bootstrap";

import { Text } from "../Typography";
import { config } from "../../config/footer.config";
import useThemeContext from "../../hooks/use-theme-context";

const Footer = () => {
  const theme = useThemeContext();

  const renderedSocialLinks = config.socialLinks.map((link) => (
    <Nav.Link
      key={link.label}
      href={link.route}
      target="_blank"
      style={{
        color: theme.fontColorSecondary,
        marginRight: "15px",
        fontSize: 28,
      }}
    >
      {link.icon}
    </Nav.Link>
  ));
  return (
    <section
      className="section-footer d-flex align-items-center flex-column"
      style={{ background: theme.colorPrimary }}
    >
      <div className="footer-content">
        <Text>{config.credits}</Text>
      </div>
      <div className="footer-icons d-flex mt-3">{renderedSocialLinks}</div>
    </section>
  );
};

export default Footer;
