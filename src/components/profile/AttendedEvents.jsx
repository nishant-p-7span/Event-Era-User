import { useEffect, useState } from "react";
import axios from "@/services/api";
import { Link } from "react-router-dom";

const AttendedEvents = () => {
  const email = localStorage.getItem("email");
  const [bookedEvents, setBookedEvents] = useState([]);

  const url = "https://api.theeventera.live/";

  useEffect(() => {
    try {
      axios
        .get("https://api.theeventera.live/api/bookings/user/" + email)
        .then((response) => {
          setBookedEvents(response.data);
          console.log(response.data);
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      {!bookedEvents.length > 0 ? (
        <div className="w-full h-[calc(100vh-200px)] flex place-content-center place-items-center">
          <div className="text-center">
            <div className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-16 h-16"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z"
                />
              </svg>
            </div>

            <h3 className="mt-2 text-sm font-semibold text-gray-900">
              No Attended Events
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Get started by creating a new project.
            </p>
            <div className="mt-6">
              <Link
                to={`/events`}
                type="button"
                className="inline-flex items-center rounded-md bg-primary-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {/* <PlusIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" /> */}
                View Events
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div
          className=" ml-8 p-8 mb-72 h-[620px] overflow-auto active"
          id="attended"
        >
          <div className="font-semibold text-xl mb-8">
            <h3>Past 6 months</h3>
          </div>
          {bookedEvents.map((booking) => (
            <div
              key={booking._id}
              className="flex flex-col w-3/4 lg:flex-row mb-6 border p-6 rounded-xl"
            >
              <div className="w-1/4 h-44   me-14">
                <img
                  className="w-full object-cover"
                  src={`${url}${booking.event_id.poster_img}`}
                  alt=""
                />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold pb-7">
                  {booking.event_id?.event_name}
                </h3>
                <span className="py-2 mb-2 flex text-lg items-start">{`${new Date(
                  booking.event_id?.event_date
                ).toLocaleDateString()} | ${
                  booking.event_id?.event_time
                }`}</span>
                <span className="py-2 mb-2 flex text-lg">
                  {booking.event_id?.city}
                </span>
                <div className="flex justify-between flex-col lg:flex-row">
                  <span className="flex py-2 pr-64 mb-2 text-xl">
                    ₹{" " + booking?.total_amount}
                  </span>
                  <Link
                    className="flex rounded-full border-2 items-center py-3 px-4 text-lg"
                    to={`/events/bookings/${booking._id}`}
                  >
                    Download Ticket
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default AttendedEvents;
