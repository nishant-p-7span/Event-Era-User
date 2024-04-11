import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import moment from "moment/moment";
import axios from "../services/api";
import { useNavigate } from "react-router-dom";

const AddTicketForm = ({ isBlock, event }) => {
  const [ticketCount, setTicketCount] = useState(1);
  
  const navigate = useNavigate();
  const handleIncrement = () => {
    setTicketCount(ticketCount + 1);
  };

  const handleDecrement = () => {
    if (ticketCount > 1) {
      setTicketCount(ticketCount - 1);
    }
  };

  const subTotal = ticketCount * event.price;
  const gst = subTotal * 0.1;
  const totalAmount = subTotal + gst;

  const handleTicketBooking = () => {
    const email = localStorage.getItem("email");
    if(!email){
     let question =  confirm("You have to login first in order to book the ticket");
     if(question) navigate("/login");
     else{
      return;
     }
    }
    console.log(event._id, email, totalAmount, ticketCount);

    function generateRandomPaymentId() {
      // Generate a random string
      const randomString = Math.random().toString(36).substring(2, 10);

      // Get current timestamp
      const timestamp = Date.now();

      // Combine timestamp and random string to create the payment ID
      const paymentId = `PAY${timestamp}${randomString}`;

      return paymentId;
    }

    const requestBody = {
      event_id: event._id,
      user_email: email,
      total_amount: totalAmount, // Example amount
      no_seats: ticketCount, // Example number of seats
      platform_charges: 10, // Example platform charges
      payment_id: generateRandomPaymentId(),
    };

    axios
      .post("/bookings/book-event", requestBody)
      .then((response) => {
        // console.log("Response:", response.data);
        localStorage.setItem("bookingData",JSON.stringify(response.data));
        navigate("/downloadticket")
        isBlock(false);
        // alert(`your ${ticketCount} tickets has booked`);
        setResponseData(response.data); // Set response data here
        
      })
      .catch((error) => {
        console.error("Error:", error.response.data);
      });
  };

  return (
    <div className="fixed bg-black/80 z-50 inset-x-0 inset-y-0 w-full  flex justify-center items-center">
      <div className="w-[487px] h-[615.08px] relative  p-8 rounded-lg border border-solid border-gray-300 mx-auto my-auto bg-white shadow-md mb-8 flex flex-col mt-9">
        <IoIosCloseCircle
          className="absolute top-0 right-0 text-red-500 hover:text-red-800 cursor-pointer"
          size={30}
          onClick={() => isBlock(false)}
        />
        <h2 className="text-2xl font-semibold mb-2">{event.event_name}</h2>
        <p className="text-red-500 mb-4">
          {ticketCount} ticket{ticketCount !== 1 ? "s" : ""}
        </p>
        <hr className="mb-5 border-gray-400" />

        <div className="mb-4">
          <div className="flex items-center text-gray-600 mb-3">
            {/* <CalendarIcon className="h-5 w-5 mr-1" /> */}
            <p>
              {moment(event.event_date).format("MMMM DD, YYYY")}|{" "}
              {event.event_time}
            </p>
          </div>
          <div className="flex items-center text-gray-600 mb-2">
            {/* <LocationMarkerIcon className="h-5 w-5 mr-1" /> */}
            <p>{event.city}</p>
          </div>
        </div>
        <hr className="mb-5 border-gray-400" />

        <div className="mb-4 text-gray-600 flex flex-col">
          <div className="flex justify-between">
            <label className="block mb-2 mr-2">Number of Tickets:</label>
            <div className="flex items-center">
              <button
                className="px-2 border border-red-500 group font-bold hover:bg-red-400 hover:border-red-700"
                onClick={handleDecrement}
              >
                <span className="text-lg text-red-500 group-hover:text-white">
                  -
                </span>
              </button>
              <span className="px-2  py-1">{ticketCount}</span>
              <button
                className="px-2 border border-red-500 group  font-bold hover:bg-red-400 hover:border-red-700"
                onClick={handleIncrement}
              >
                <span className="text-lg text-red-500 group-hover:text-white  ">
                  +
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="mb-4 text-gray-600 flex flex-col">
          <div className="flex justify-between">
            <p className="mb-5">Sub total:</p>
            <p className="mb-5">&#x20B9;{subTotal.toFixed(2)}</p>
          </div>
          <div className="flex justify-between">
            <p className="mb-5">GST (10%):</p>
            <p className="mb-5">&#x20B9;{gst.toFixed(2)}</p>
          </div>
          <hr className="my-2 border-dotted border-gray-400" />
          <div className="flex justify-between">
            <p className="font-semibold ">Total Amount:</p>
            <p className="font-semibold mb-2">
              &#x20B9;{totalAmount.toFixed(2)}
            </p>
          </div>
        </div>
        <hr className="mb-4 border-gray-400" />
        <div className="flex items-center mb-7">
          {/* <InformationCircleIcon className="h-5 w-5 mr-1 text-black" /> */}
          <p className="text-sm text-gray-600">
            I hereby acknowledge my agreement to finalize this transaction by
            proceeding.
          </p>
        </div>
        <button
          className="w-full py-2  rounded bg-red-500 text-white hover:bg-red-600"
          onClick={handleTicketBooking} // Moved onClick to Link component
        >
          <span className="block mx-auto text-center">Proceed to Pay</span>
        </button>
      </div>
    </div>
  );
};

export default AddTicketForm;
