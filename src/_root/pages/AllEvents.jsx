import React, { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import axios from "../../services/api";

import EventItem from "../../components/shared/EventItem";
import {
  Link,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

const AllEvents = () => {
  const allCategories = [
    { id: 2, name: "Music" },
    { id: 3, name: "Dance" },
    { id: 4, name: "Tech" },
    { id: 5, name: "Theater" },
    { id: 6, name: "Festivals" },
    { id: 7, name: "Sports" },
    { id: 8, name: "Parties" },
  ];
  
  const [allEvents, setAllEvents] = useState([]);
  const [categories, setCategories] = useState(allCategories);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const category = searchParams.get("category");

  console.log(category);
  useEffect(() => {
    try {
      let url = "/events";
      setAllEvents([]);
      if (category) {
        url = url + `/category/${category} `;
      } else {
        url = url + `/active`;
      }

      axios
        .get(url)
        .then((response) => {
          console.log(response.data);
          setAllEvents(response.data);
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log("Err signing up", err);
    }
  }, [selectedCategory, searchParams]);

  useEffect(() => {
    const category = searchParams.get("category");

    if (category) {
      // Filter categories based on the query parameter
      const selectedCat = allCategories.find((cat) => cat.name === category);
      if (selectedCat) {
        setSelectedCategory(selectedCat);
      }
    }
  }, [searchParams, categories]);

  const handleGoBack = () => {
    window.history.back();
  };
  return (
    <section className=" mx-auto px-8 mt-6 container ">
      <div className="flex items-center mb-6">
        <FaChevronLeft
          className="h-4 w-8 mr-2 text-gray-500 cursor-pointer"
          onClick={handleGoBack}
        />{" "}
        {/* Chevron left icon */}
        <Link to="/events" className="text-xl font-semibold">
          All Events
        </Link>
      </div>
      <div className="mb-4 md:mb-0 w-full overflow-x-auto flex items-center no-scrollbar">
        <Link
          to={`/events`}
          className={`  py-2 px-6  rounded-full   border hover:bg-primary-500 hover:text-white transition ${
            location.pathname === "/events" && !searchParams.get("category")
              ? "bg-primary-500 text-white"
              : "bg-white text-primary-500"
          }`}
          style={{ whiteSpace: "nowrap" }} // Add nowrap style here
        >
          All Events
        </Link>
        {categories.map((category) => (
          <Link
            to={`/events?category=${category.name}`}
            key={category.id}
            className={`mr-4 md:mr-0 md:ml-4 py-2 px-6 rounded-full border hover:bg-primary-500 hover:text-white transition ${
              selectedCategory.id === category.id &&
              searchParams.get("category")
                ? "bg-primary-500 text-white"
                : "bg-white text-primary-500"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category.name[0].toUpperCase() + category.name.slice(1)}
          </Link>
        ))}
      </div>

      <div className="flex w-full flex-1 gap-y-8 flex-wrap  mt-6">
        {allEvents.map((event, index) => (
          <EventItem key={index} event={event} />
        ))}
      </div>
    </section>
  );
};

export default AllEvents;
