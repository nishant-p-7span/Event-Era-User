import React, { useEffect, useState } from "react";
import axios from "axios";
import { CiCalendarDate } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { useParams } from "react-router-dom";

export default function Ticket() {
  const [bookingData, setBookingData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const localStorageBookingData = JSON.parse(
          localStorage.getItem("bookingData")
        );

        if (
          !localStorageBookingData ||
          !localStorageBookingData.booking ||
          !localStorageBookingData.booking._id
        ) {
          console.error(
            "Booking data or booking ID not found in local storage."
          );
          return;
        }

        const bookingId = localStorageBookingData.booking._id;
        const response = await axios.get(
          `https://api.theeventera.live/api/bookings/${bookingId}`
        );
        console.log(response);
        setBookingData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching booking data:", error);
      }
    };

    fetchData();
  }, [id]);
  const url = "https://api.theeventera.live/";


  function handlePrint() {
    const printContent = document.getElementById("ticketDetails").innerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = originalContents;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="mx-8">
      <p className="font-bold text-2xl text-[#545454] py-2 mb-3">
        Download Your E-Ticket
      </p>
      <div
        className="w-[912px] flex shadow-2xl box-shadow-xl mx-auto"
        id="ticketDetails"
      >
        <div className="w-3/4 inline-flex p-2 border-r">
          <div className="object-cover">
            <img
              // src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCA2IEFwcg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00388218-tqaycbvsak-portrait.jpg"
              src={`${url}${bookingData.event_id?.poster_img}`}
              alt="tech"
              className="h-[285px] w-[216px] object-cover"
            ></img>
          </div>
          <div className="mx-6 py-1 text-[#616161]">
            <p className="text-[12px] inline px-1 py-px bg-red-500 text-white rounded-md">
              {bookingData.event_id?.category}
            </p>
            <p className="font-bold text-[#545454] text-xl pb-4">
              {bookingData.event_id?.event_name}
            </p>
            <div className="flex gap-x-12 w-full border-b ">
              <div className="flex flex-col">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <CiCalendarDate size={20} />
                  <span>&nbsp;</span>
                  <span>
                    {new Date(
                      bookingData.event_id?.event_date
                    ).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span>&nbsp;|&nbsp;</span>
                  <span>{bookingData.event_id?.event_time}</span>
                </div>

                <p className="text-sm pt-5">Ticket ID</p>
                <p className="font-bold text-base pb-6">
                  {bookingData._id} {/* Replace with dynamic data */}
                </p>
              </div>
              <div className="flex flex-col justify-between">
                <p className="flex text-base">
                  <CiLocationOn size={20} />{" "}
                  <span> {bookingData.event_id?.city}</span>
                  {/* Replace with dynamic data */}
                </p>
                <div>
                  <p className="text-sm">Number of Ticket(s)</p>
                  <p className="font-bold text-base pb-6">
                    {bookingData.no_seats} {/* Replace with dynamic data */}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <p className="text-xl font-semibold py-3">Total Amount </p>
              <p className="text-xl font-semibold py-3">
                Rs. {bookingData.total_amount}{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/4 py-2 px-5 text-right">
          <div className="justify-end">
            <p className="text-[12px] inline px-1 py-px bg-[#10A013] justify-right text-white rounded-md">
              Confirmed
            </p>
          </div>
          <div className="w-full h-full py-6 justify-center text-center align-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxZaJ7KCPyosxEAaz9jFGLfziwoJMW0F1p08TX8vN6bw&s"
              alt="QR"
              className="mx-auto pb-2"
            ></img>
            <p className="text-sm">Scan For More Details</p>
          </div>
        </div>
      </div>
      <div className="mt-10 text-center">
        <button
          className="px-5 py-3 border rounded-3xl text-[#ED5858] border-[#ED5858] font-semibold hover:text-white hover:bg-[#ED5858] mr-6"
          onClick={() => handlePrint()}
        >
          Print Ticket
        </button>
        <button
          className="px-5 py-3 border rounded-3xl text-[#ED5858] border-[#ED5858] font-semibold hover:text-white hover:bg-[#ED5858]"
          onClick={() => handlePrint()}
        >
          Download E-ticket
        </button>
      </div>
    </div>
  );
}
