import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

import { FC, memo } from "react";
import { TimelineData } from "@/data/dataDef";
import Typography from "@mui/material/Typography";

import "@/static/experience.css";


const TimeLines: FC<{ items: TimelineData[] }> = memo(function TimeLines({ items }) {

  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      {items.map(({ start_date, end_date, location, title, content }, idx) => (
        <TimelineItem key={idx}>
          <TimelineOppositeContent color="text.secondary" sx={{ flex: 0.2, display: { xs: 'none', sm: 'block' } }}>
            {start_date.getFullYear() + "/" + (start_date.getMonth() + 1)} ~ {end_date ? end_date.getFullYear() + "/" + (end_date.getMonth() + 1) : "Present"}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ px: 2, py: 0 }}>
            <Typography variant="h6" component="div">
              {title}
              <Typography variant="subtitle1" component="span"> @ {location}</Typography>
            </Typography>
            <Typography component='div' sx={{ color: "text.secondary", py: 2 }} className='list-content'>{content}</Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  )
})

export default TimeLines;