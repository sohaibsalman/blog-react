import React from "react";

import { Heading, Text } from "../Typography";
import Tag from "../Tag";

import "./timeline.css";

interface IProps {
  data: ITimelineData[];
}

interface ITimelineData {
  heading: string;
  timestamp?: string;
  subHeading?: string;
  description?: string;
}

const Timeline: React.FC<IProps> = ({ data }) => {
  const renderedTimeline = data.map((timeline) => {
    return (
      <React.Fragment key={`${timeline.heading}_${timeline.timestamp}`}>
        <div className="timeline-record">
          <div className="timeline-dot" />
          <div className="timeline-heading">
            <Heading variant="h5"> {timeline.heading}</Heading>
          </div>
          {timeline.timestamp && <Tag text={timeline.timestamp} />}
          {timeline.subHeading && (
            <div className="timeline-sub-heading">
              <Heading variant="h5"> {timeline.subHeading}</Heading>
            </div>
          )}
          <div className="timeline-description">
            <Text>{timeline.description}</Text>
          </div>
        </div>
      </React.Fragment>
    );
  });

  return (
    <React.Fragment>
      <div className="timeline-container">{renderedTimeline}</div>
    </React.Fragment>
  );
};

export default Timeline;
