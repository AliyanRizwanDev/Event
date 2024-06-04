import React from "react";
import classes from "./MyEvents.module.css";
import Home from "../../utils/Home";

const MyEvents = () => {
  const registeredEvents = [
    {
      id: 1,
      title: "React Conference",
      date: "2024-06-15",
      time: "10:00 AM",
      venue: "Conference Hall A",
      status: "upcoming",
    },
    {
      id: 2,
      title: "JavaScript Workshop",
      date: "2024-05-20",
      time: "2:00 PM",
      venue: "Room 101",
      status: "past",
    },
    {
      id: 3,
      title: "Tech Meetup",
      date: "2024-07-10",
      time: "6:00 PM",
      venue: "Auditorium",
      status: "canceled",
    },
  ];

  return (
    <Home>
      <div className={classes.myEvents}>
        <h1>My Events</h1>
        <ul className={classes.eventList}>
          {registeredEvents.map((event) => (
            <li
              key={event.id}
              className={`${classes.eventItem} ${classes[event.status]}`}
            >
              <div className={classes.eventDetails}>
                <h2>{event.title}</h2>
                <p>
                  {event.date} at {event.time}
                </p>
                <p>Venue: {event.venue}</p>
              </div>
              <div className={classes.eventActions}>
                <button className={classes.detailButton}>View Details</button>
                <button className={classes.cancelButton}>
                  Cancel Registration
                </button>
                <button className={classes.contactButton}>
                  Contact Organizer
                </button>
              </div>
              <div className={classes.eventStatus}>
                <span>{event.status}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Home>
  );
};

export default MyEvents;
