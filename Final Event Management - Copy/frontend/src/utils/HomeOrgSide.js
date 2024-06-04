import React from 'react';
import classes from './Home.module.css';
import { Link } from 'react-router-dom';

export default function Home(props) {
  return (
    <div className={classes.mainPage}>
      <div className={classes.options}>
        <div className={classes.optionsSection}>
          <div className={classes.optionslinks}>
            <i className="fa-solid fa-house"></i>
            <Link className={classes.optionslink} to="/organizer">Dashboard</Link>
          </div>
          <div className={classes.optionslinks}>
            <i className="fa-solid fa-calendar"></i>
            <Link className={classes.optionslink} to="/organizer/my-events">My Events</Link>
          </div>
          <div className={classes.optionslinks}>
            <i className="fa-solid fa-calendar-plus"></i>
            <Link className={classes.optionslink} to="/organizer/create-event">Create Event</Link>
          </div>
          <div className={classes.optionslinks}>
            <i className="fa-solid fa-users"></i>
            <Link className={classes.optionslink} to="/organizer/attendees">Attendees</Link>
          </div>
          <div className={classes.optionslinks}>
            <i className="fa-solid fa-chart-bar"></i>
            <Link className={classes.optionslink} to="/organizer/analytics">Analytics</Link>
          </div>
          <div className={classes.optionslinks}>
            <i className="fa-solid fa-user"></i>
            <Link className={classes.optionslink} to="/organizer/profile">My Profile</Link>
          </div>
          <div className={classes.optionslinks}>
            <i className="fa-solid fa-sign-out-alt"></i>
            <Link className={classes.optionslink} to="/"
            onClick={()=>{
              localStorage.removeItem("user");
            }}
            >Logout</Link>
          </div>
        </div>
      </div>
      <div className={classes.posts}>
        {props.children}
      </div>
    </div>
  );
}
