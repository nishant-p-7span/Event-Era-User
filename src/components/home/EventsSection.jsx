import React, { useEffect, useState } from "react";
import axios from "../../services/api";
import { useNavigate } from "react-router-dom";
import EventItem from "../shared/EventItem";

const EventsSection = () => {
  const [events, setEvents] = useState("popular");

  useEffect(() => {
    try {
      axios
        .get("/events/active")
        .then((response) => {
          console.log(response.data);
          setUpcomingEvents(response.data);
          setPopularEvents(response.data);
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log("Err signing up", err);
    }
  }, []);
  // const navigate = useNavigate();

  const [popularEvents, setPopularEvents] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  return (
    <section className="w-full flex mt-8 flex-col px-8 container mx-auto">
      <header className="">
        <ul className="flex text-xl  text-grey-800">
          <li
            className={`cursor-pointer mr-4 pb-2 px-1 ${
              events === "popular"
                ? `border-b-primary-500 border-b-4 font-semibold`
                : `border-none font-normal`
            }`}
            onClick={() => setEvents("popular")}
          >
            Popular Events
          </li>
          <li
            className={`cursor-pointer mr-4  pb-2 px-1 ${
              events === "upcoming"
                ? `border-b-primary-500 border-b-4 font-semibold`
                : `border-none font-normal`
            }`}
            onClick={() => setEvents("upcoming")}
          >
            Upcoming Events
          </li>
        </ul>
      </header>
      <div className="flex w-full  gap-y-8 flex-wrap  no-scrollbar mt-8">
      {events === "popular"
  ? popularEvents.slice(0, 8).map((event, index) => (
      <EventItem key={index} event={event} />
    ))
  : upcomingEvents.slice(0, 8).map((event, index) => (
      <EventItem key={index} event={event} />
    ))}
      </div>
      <a
        className="px-6 py-3 border-2 text-primary-500 border-primary-500 w-max mx-auto mt-9 rounded-3xl  hover:bg-primary-500 hover:text-white transition"
        href="/events"
      >
        View All Events
      </a>
    </section>
  );
};

export default EventsSection;
