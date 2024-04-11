import React, { useEffect, useState } from "react";
import axios from "@/services/api";
import { useNavigate } from "react-router-dom";
import EventItem from "./shared/EventItem";


const SmilarEvents = () => {
    const [events, setEvents] = useState();

  useEffect(() => {
    try {
      axios
        .get("/events/active")
        .then((response) => {
          console.log(response.data);
          setEvents(response.data);
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log("Err signing up", err);
    }
  }, []);
  return (
    <div className="flex w-full  gap-y-8 flex-wrap  no-scrollbar mt-8">
       {events.slice(0, 4).map((event, index) => (
    <EventItem key={index} event={event} />
))}
  </div>
  )
}

export default SmilarEvents