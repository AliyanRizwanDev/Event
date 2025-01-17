import React, { useEffect, useState } from 'react';
import classes from './ExploreEvents.module.css';
import Home from '../../utils/Home';
import axios from 'axios';

const ExploreEvents = () => {
  const [events, setEvents] = useState([]);
  const data = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    axios.get("http://localhost:8080/user/events",
    {
      headers: {
        Authorization: `Bearer ${data.token}`,
      },
    })
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [data]); 

  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value.toLowerCase()); 
  };

  const handleLocationFilter = (e) => {
    setLocation(e.target.value.toLowerCase());
  };

  const handleCategoryFilter = (e) => {
    setCategory(e.target.value.toLowerCase()); 
  };

  const handleBookTicket = async () => {
   

  }


  const filteredEvents = events.filter((event) => {
    const eventTitle = event.title.toLowerCase();
    const eventLocation = event.venue?.split(',')[1]?.toLowerCase();
    const eventCategory = event.category?.toLowerCase();

    return (
      eventTitle.includes(search) &&
      (!location || eventLocation?.includes(location)) &&
      (!category || eventCategory?.includes(category))
    );
  });

 
  
  return (
    <Home>
      <div className={classes.exploreEvents}>
        <h1>Explore Events</h1>

        <div className={classes.filters}>
          <input
            type="text"
            placeholder="Search events..."
            value={search}
            onChange={handleSearch}
            className={classes.searchBar}
          />
          <input
            type="text"
            placeholder="Filter by location..."
            value={location}
            onChange={handleLocationFilter}
            className={classes.filterInput}
          />
          <input
            type="text"
            placeholder="Filter by category..."
            value={category}
            onChange={handleCategoryFilter}
            className={classes.filterInput}
          />
        </div>

        <div className={classes.eventListings}>
          {filteredEvents.map((event) => (
            <div key={event._id} className={classes.eventItem}>
              <h2>{event.title}</h2>
              <p>
                {new Date(event.date).toLocaleDateString()} - {event.venue}
              </p>
              <p>
                {event.category ? (
                  <span>Category: {event.category}</span>
                ) : null}
              </p>
              <div className={classes.eventDetails}>
                {event.description && (
                  <p>
                    <b>Description:</b> {event.description}
                  </p>
                )}
                {event.time && (
                  <p>
                    <b>Time:</b> {event.time}
                  </p>
                )}
                {event.ticketTypes && event.ticketTypes.length > 0 && (
                  <div>
                    <b>Ticket Types:</b>
                    <ul>
                      {event.ticketTypes.map((ticketType) => (
                        <li key={ticketType.type}>
                          {ticketType.type} - &#8377;{ticketType.price} (Quantity: {ticketType.quantity})
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className={classes.buttonContainer}>
                <button className={classes.bookButton} onClick={handleBookTicket}>Book Ticket</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Home>
  );
};

export default ExploreEvents;
