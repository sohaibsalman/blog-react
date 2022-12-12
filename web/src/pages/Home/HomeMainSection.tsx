import { Heading, Text } from "../../components/Typography";

interface IProps {
  config: any;
}

const HomeMainSection: React.FC<IProps> = ({ config }) => {
  const flexClasses = "d-flex flex-column justify-content-center";

  return (
    <div className="home-main">
      <div className="row">
        <div className={`home-main-image col-lg-4 order-lg-2 ${flexClasses}`}>
          <img
            src={config.image.url}
            className="img-fluid picture"
            alt={config.image.alt}
          />
        </div>
        <div className={`home-main-content col-lg-8 order-lg-1 ${flexClasses}`}>
          <Heading variant="h4">{config.greetings}</Heading>
          <Heading variant="h1">{config.name}</Heading>
          <Heading variant="h2">{config.designation}</Heading>
          <Text className="mt-4">{config.bio}</Text>
        </div>
      </div>
    </div>
  );
};

export default HomeMainSection;
