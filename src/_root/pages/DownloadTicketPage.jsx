import React, { useEffect} from "react";
// import { useLocation } from "react-router-dom";
import { FaChevronLeft, FaCheckCircle } from "react-icons/fa"; // Importing Font Awesome icons
import Ticket from "./Ticket"; // Import the Ticket component
import SmilarEvents from "../../components/SmilarEvents";



const DownloadTicketPage = () => {
  // Handle the print ticket button click event
  const handlePrintButtonClick = () => {
    // Implement your logic here to print the ticket
    alert("Print ticket");
  };
  

  useEffect(() => {
    window.scrollTo(0, 0);

    const data = localStorage.getItem("bookingData");
    // console.log(JSON.parse(data));
   
  },[])
  
 

  // Handle the download ticket button click event
  const handleDownloadButtonClick = () => {
    // Implement your logic here to download the ticket
    alert("Download ticket");
  };

  return (
    <div className="container mx-auto px-6 md:px-12 py-9 bg-white overflow-auto">
      {/* Back Button */}
      <div className="flex items-center mb-2 ">
        
        <FaChevronLeft className="h-8 w-8  text-gray-500 cursor-pointer" />
        <h1 className="text-2xl md:text-2xl font-semibold">Back</h1>
      </div>

      {/* Payment Successful Message */}
      <div className="mb-6 text-center flex items-center justify-center">
        <FaCheckCircle className="h-12 w-12 text-green-500" />
        <p className="text-green-600 text-2xl font-semibold mt-1 ml-2">
          Payment Successful!
        </p>
        
      </div>

      {/* Download E-ticket Section */}
      <div className="flex justify-center">
        {/* Render the Ticket component */}
        <Ticket/>
      </div>

      {/* Similar Events Section */}
      <div className="mb-6 ml-4">
        <h2 className="text-2xl font-semibold">More Events</h2>
        <SmilarEvents />
      </div>
    </div>
  );
};

export default DownloadTicketPage;
