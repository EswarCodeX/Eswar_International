import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import svg1 from "/question.svg";
import svg2 from "/earth.svg";
import svg3 from "/rocket.svg";

export default function TimelineWithAvatar() {
  return (
    <div className="sm:w-[35rem] w-screen sm:p-0 p-3 font-sans ">
      <Timeline>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-0">
              <Avatar size="sm" src={svg1} alt="user 1" withBorder />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Why Choose Us?
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography
              color="gary"
              className="font-normal sm:text-base text-sm text-gray-600"
            >
              ✔ Freshness Guaranteed: Direct from farms to your doorstep
              <br /> ✔ Premium Quality: Certified and rigorously tested produce
              <br />✔ Reliable Export Services: Timely delivery with secure
              packaging <br />✔ Sustainable Practices: Eco-friendly farming and
              processing
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-0">
              <Avatar size="sm" src={svg2} alt="user 2" withBorder />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Our Mission
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography
              color="gary"
              className="font-normal sm:text-base text-sm text-gray-600"
            >
              To deliver farm-fresh vegetables and beautifully crafted floral
              garlands to customers worldwide, ensuring top quality, timely
              delivery, and customer satisfaction.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineHeader>
            <TimelineIcon className="p-0">
              <Avatar size="sm" src={svg3} alt="user 3" withBorder />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Our Vision
            </Typography>
          </TimelineHeader>
          <TimelineBody>
            <Typography
              color="gary"
              className="font-normal sm:text-base text-sm text-gray-600"
            >
              To become a globally recognized leader in the export industry by
              offering fresh, organic, and high-quality produce while supporting
              sustainable farming and ethical trade practices.
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
