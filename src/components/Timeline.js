import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  
  const events = props.events.map((event, i) => {
    return (
      <div key={i}>
        <TimelineEvent
          person={event.person}
          status={event.status}
          timeStamp={event.timeStamp}
        />
      </div>
    )
  })

  return (
      <div className="timeline">{events}</div>
      // I update the timeline CSS to be 80% as 30% looked too narrow 
  );
}

export default Timeline;