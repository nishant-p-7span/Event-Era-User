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
    { id: 2, name: "music" },
    { id: 3, name: "dance" },
    { id: 4, name: "tech" },
    { id: 5, name: "theater" },
    { id: 6, name: "festivals" },
    { id: 7, name: "sports" },
    { id: 8, name: "parties" },
  ];
  // const events = [
  //   {
  //     title: "Live Singing Concert",
  //     img: "https://images.unsplash.com/photo-1708112292874-1562bdd92f1e?q=80&w=3011&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     date: "3rd",
  //     month: "Feb",
  //     startTime: "6:00 PM",
  //     EndTIme: "9:00 PM",
  //     location: "H.K hall, Naranpura, Ahmedabad",
  //     price: 2000,
  //   },
  //   {
  //     title: "Live Singing Concert",
  //     img: "https://plus.unsplash.com/premium_photo-1707988179922-bd01b4dcb826?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     date: "3rd",
  //     month: "Feb",
  //     startTime: "6:00 PM",
  //     EndTIme: "9:00 PM",
  //     location: "H.K hall, Naranpura, Ahmedabad",
  //     price: 2000,
  //   },
  //   {
  //     title: "Live Singing Concert",
  //     img: "https://images.unsplash.com/photo-1705785994423-88b5fb81b297?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     date: "3rd",
  //     month: "Feb",
  //     startTime: "6:00 PM",
  //     EndTIme: "9:00 PM",
  //     location: "H.K hall, Naranpura, Ahmedabad",
  //     price: 2000,
  //   },
  //   {
  //     title: "Live Singing Concert",
  //     img: "https://plus.unsplash.com/premium_photo-1705421624750-f9ebd095f53a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     date: "3rd",
  //     month: "Feb",
  //     startTime: "6:00 PM",
  //     EndTIme: "9:00 PM",
  //     location: "H.K hall, Naranpura, Ahmedabad",
  //     price: 2000,
  //   },
  //   {
  //     title: "Live Singing Concert",
  //     img: "https://images.unsplash.com/photo-1682695795557-17447f921f79?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     date: "3rd",
  //     month: "Feb",
  //     startTime: "6:00 PM",
  //     EndTIme: "9:00 PM",
  //     location: "H.K hall, Naranpura, Ahmedabad",
  //     price: 2000,
  //   },
  //   {
  //     title: "Live Singing Concert",
  //     img: "https://images.unsplash.com/photo-1708112292874-1562bdd92f1e?q=80&w=3011&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     date: "3rd",
  //     month: "Feb",
  //     startTime: "6:00 PM",
  //     EndTIme: "9:00 PM",
  //     location: "H.K hall, Naranpura, Ahmedabad",
  //     price: 2000,
  //   },
  //   {
  //     title: "Live Singing Concert",
  //     img: "https://plus.unsplash.com/premium_photo-1707988179922-bd01b4dcb826?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     date: "3rd",
  //     month: "Feb",
  //     startTime: "6:00 PM",
  //     EndTIme: "9:00 PM",
  //     location: "H.K hall, Naranpura, Ahmedabad",
  //     price: 2000,
  //   },
  //   {
  //     title: "Live Singing Concert",
  //     img: "https://images.unsplash.com/photo-1705785994423-88b5fb81b297?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     date: "3rd",
  //     month: "Feb",
  //     startTime: "6:00 PM",
  //     EndTIme: "9:00 PM",
  //     location: "H.K hall, Naranpura, Ahmedabad",
  //     price: 2000,
  //   },
  //   {
  //     title: "Live Singing Concert",
  //     img: "https://images.unsplash.com/photo-1708112292874-1562bdd92f1e?q=80&w=3011&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     date: "3rd",
  //     month: "Feb",
  //     startTime: "6:00 PM",
  //     EndTIme: "9:00 PM",
  //     location: "H.K hall, Naranpura, Ahmedabad",
  //     price: 2000,
  //   },
  //   {
  //     title: "Live Singing Concert",
  //     img: "https://plus.unsplash.com/premium_photo-1707988179922-bd01b4dcb826?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     date: "3rd",
  //     month: "Feb",
  //     startTime: "6:00 PM",
  //     EndTIme: "9:00 PM",
  //     location: "H.K hall, Naranpura, Ahmedabad",
  //     price: 2000,
  //   },
  //   {
  //     title: "Live Singing Concert",
  //     img: "https://images.unsplash.com/photo-1705785994423-88b5fb81b297?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     date: "3rd",
  //     month: "Feb",
  //     startTime: "6:00 PM",
  //     EndTIme: "9:00 PM",
  //     location: "H.K hall, Naranpura, Ahmedabad",
  //     price: 2000,
  //   },
  //   {
  //     title: "Live Singing Concert",
  //     img: "https://plus.unsplash.com/premium_photo-1705421624750-f9ebd095f53a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     date: "3rd",
  //     month: "Feb",
  //     startTime: "6:00 PM",
  //     EndTIme: "9:00 PM",
  //     location: "H.K hall, Naranpura, Ahmedabad",
  //     price: 2000,
  //   },
  //   {
  //     title: "Live Singing Concert",
  //     img: "https://images.unsplash.com/photo-1682695795557-17447f921f79?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     date: "3rd",
  //     month: "Feb",
  //     startTime: "6:00 PM",
  //     EndTIme: "9:00 PM",
  //     location: "H.K hall, Naranpura, Ahmedabad",
  //     price: 2000,
  //   },
  //   {
  //     title: "Live Singing Concert",
  //     img: "https://images.unsplash.com/photo-1708112292874-1562bdd92f1e?q=80&w=3011&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     date: "3rd",
  //     month: "Feb",
  //     startTime: "6:00 PM",
  //     EndTIme: "9:00 PM",
  //     location: "H.K hall, Naranpura, Ahmedabad",
  //     price: 2000,
  //   },
  //   {
  //     title: "Live Singing Concert",
  //     img: "https://plus.unsplash.com/premium_photo-1707988179922-bd01b4dcb826?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     date: "3rd",
  //     month: "Feb",
  //     startTime: "6:00 PM",
  //     EndTIme: "9:00 PM",
  //     location: "H.K hall, Naranpura, Ahmedabad",
  //     price: 2000,
  //   },
  //   {
  //     title: "Live Singing Concert",
  //     img: "https://images.unsplash.com/photo-1705785994423-88b5fb81b297?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     date: "3rd",
  //     month: "Feb",
  //     startTime: "6:00 PM",
  //     EndTIme: "9:00 PM",
  //     location: "H.K hall, Naranpura, Ahmedabad",
  //     price: 2000,
  //   },
  // ];
  const [allEvents, setAllEvents] = useState([]);
  const [categories, setCategories] = useState(allCategories);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  // console.log(useParams());
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
    // handle the click event on the "Go back" button.
    // Implement your go back logic here
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
