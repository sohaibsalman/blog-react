import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import { Heading, Text } from "../../components/Typography";

interface IProps {
  config: any;
}

const HomeMainSection: React.FC<IProps> = ({ config }) => {
  const navigate = useNavigate();
  const flexClasses = "d-flex flex-column justify-content-center";

  return (
    <section className="home-main-section">
      <div className="row">
        <div
          className={`home-main-image col-lg-4 order-lg-2 position-relative ${flexClasses}`}
        >
          <img
            src={config.image.url}
            className="img-fluid picture"
            alt={config.image.alt}
          />
        </div>
        <div className={`home-main-content col-lg-8 order-lg-1`}>
          <div className={flexClasses}>
            <Heading variant="h4">{config.greetings}</Heading>
            <Heading variant="h1">{config.name}</Heading>
            <Heading variant="h2">{config.designation}</Heading>
            <Text className="mt-4">{config.bio}</Text>
          </div>
          <Button
            outlined
            rounded
            className="mt-4"
            onClick={() => navigate("/blogs")}
          >
            Check out my Blogs!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeMainSection;
