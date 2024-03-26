import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

import { FC, memo } from "react";
import { TimelineData } from "@/data/dataDef";
import Typography from "@mui/material/Typography";


const TimeLines: FC<{items: TimelineData[]}> = memo(function TimeLines({items}) {
  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      {items.map(({date, location, title, content}, idx) => (
        <TimelineItem key={idx}>
          <TimelineOppositeContent color="text.secondary">
            {date}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ px: 2, py: 0 }}>
            <Typography variant="h6" component="span">
              {location}
            </Typography>
            <Typography>
              {title}
            </Typography>
            {content && <Typography>{content}</Typography>}
          </TimelineContent>
        </TimelineItem>
      ))}



    </Timeline>
  )
})

export default TimeLines;