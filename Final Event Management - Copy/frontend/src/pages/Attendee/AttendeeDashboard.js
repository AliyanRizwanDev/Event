import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './AttendeeDashboard.module.css';
import axios from 'axios';

const AttendeeDashboard = () => {
  // const upcomingEvents = [
  //   { id: 1, title: "React Conference", date: "2024-06-15" },
  //   { id: 2, title: "JavaScript Workshop", date: "2024-06-20" }
  // ];
  const data = JSON.parse(localStorage.getItem("user"));

  const notifications = [
    { id: 1, message: "New message from organizer of React Conference" },
    { id: 2, message: "Your subscription is about to expire" }
  ];
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/user/events",
    {
      headers: {
        Authorization: `Bearer ${data.token}`,
      },
    })
      .then((response) => {
        setUpcomingEvents(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [data]); 

  return (
    <div className={classes.dashboard}>
      <h1>Dashboard</h1>
      
      <div className={classes.section}>
        <h2>Upcoming Events</h2>
        <ul className={classes.eventList}>
          {upcomingEvents.slice(0, 5).map(event => (
            <li key={event.id} className={classes.eventItem}>
              <span>{event.title} - {event.date}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className={classes.section}>
        <h2>Notifications</h2>
        <ul className={classes.notificationList}>
          {notifications.map(notification => (
            <li key={notification.id} className={classes.notificationItem}>
              <span>{notification.message}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className={classes.section}>
        <h2>Quick Links</h2>
        <div className={classes.quickLinks}>
          <Link to="/attendee/explore-events" className={classes.quickLink}>Explore Events</Link>
          <Link to="/attendee/profile" className={classes.quickLink}>My Profile</Link>
        </div>
      </div>
    </div>
  );
};

export default AttendeeDashboard;
