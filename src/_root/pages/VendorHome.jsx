import { CiSearch } from "react-icons/ci";
import { RiMenu3Line } from "react-icons/ri";
import { useNavigate, useLocation } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import React, { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
// import Block from "../components/Block";
// import HostBlock from '../components/HostBlock';
// import MusicIcon from "../assets/images/MusicIcon.svg";
// import CelebrationIcon from "../assets/images/CelebrationIcon.svg";
// import ComputerIcon from "../assets/images/ComputerIcon.svg";
// import SportsIcon from "../assets/images/SportsIcon.svg";
// import BranchIcon from "../assets/images/BranchIcon.svg";
// import AnalysisIcon from '../assets/images/AnalysisIcon.svg';
// import CreateIcon from '../assets/images/CreateIcon.svg';
// import LogOutIcon from '../assets/images/LogoutIcon.svg';
// import PostBanner from '../assets/images/post_banner.png'
import { FaCopyright } from "react-icons/fa6";


const VendorHome = () =>{
    const navigate = useNavigate();
    // const storedToken = localStorage.getItem("authToken");
    const location = useLocation();
    const email = localStorage.getItem("email");

    const slides = [
        {
          url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          url: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          url: "https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ];
    
    const [currentIndex, setCurrentIndex] = useState(2);
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 3000);
        return () => clearInterval(interval);
      }, [slides.length]);

      const FeatureContent =[
        {
            f_img :"https://adiyogitechnosoft.com/admin/assets/img/service/3a28d2920552dfcd4141b9b9b88561fb.jpg",
            f_title : "Streamlined Ticket Sales",
            f_description : "Effortlessly sell event tickets online with a seamless experience for attendees.",
        },
        {
            f_img :"https://adiyogitechnosoft.com/admin/assets/img/service/3a28d2920552dfcd4141b9b9b88561fb.jpg",
            f_title : "Real-Time Event Updates",
            f_description : "Instantly notify attendees of any changes or updates to the event schedule or details.",
        },
        {
            f_img :"https://adiyogitechnosoft.com/admin/assets/img/service/3a28d2920552dfcd4141b9b9b88561fb.jpg",
            f_title : "Secure Payment Gateway",
            f_description : "Ensure peace of mind for both organizers and attendees with a reliable and secure payment process.",
        },
        {
            f_img :"https://adiyogitechnosoft.com/admin/assets/img/service/3a28d2920552dfcd4141b9b9b88561fb.jpg",
            f_title : "Monitor Event Analytics",
            f_description : "Gain valuable insights from detailed analytics to enhance future events.",
        },
        {
            f_img :"https://adiyogitechnosoft.com/admin/assets/img/service/3a28d2920552dfcd4141b9b9b88561fb.jpg",
            f_title : "Event Management",
            f_description : " Simplify the planning and execution process with intuitive tools for seamless event management.",
        },
        {
            f_img :"https://adiyogitechnosoft.com/admin/assets/img/service/3a28d2920552dfcd4141b9b9b88561fb.jpg",
            f_title : "Eco-Friendly Certification",
            f_description : "Achieve green event certification by implementing sustainable practices and reducing environmental impact.",
        },
    ];
    const [fBlock] = useState(FeatureContent);

    const HostContent =[
        {
            // h_img :MusicIcon,
            h_title : "Performances",
            h_description : "Creating a lively stage for music, dance, and theater, ensuring a memorable experience for both artists and the audience.",
        },
        {
            // h_img :CelebrationIcon,
            h_title : "Celebration",
            h_description : "Event hosting for festive occasions like New Year's Eve, Christmas, and festivals. Elevate celebrations with our tailored services, providing a vibrant and memorable atmosphere for your special events.",
        },
        {
            // h_img : SportsIcon,
            h_title : "Sports",
            h_description : "Dynamic sports event hosting for cricket, volleyball, and more.  Our venue is equipped to elevate the excitement of every match, providing a top-notch experience for players and spectators alike.",
        },
        {
            // h_img : ComputerIcon,
            h_title : "Technology",
            h_description : "Host hackathons, AI/ML conferences, and space science events. Elevate your tech gatherings with our state-of-the-art facilities, fostering innovation and collaboration.",
        },
        {
            // h_img :BranchIcon,
            h_title : "Festival Celebration",
            h_description : "Host vibrant celebrations like Holi, Diwali, Uttrayan, Dandiya and many more with us. Elevate your cultural events in a dynamic and welcoming space that brings communities together in the spirit of tradition and joy.",
        },
    ];
    const [HBlock, setHBlock] = useState(HostContent);
    return (
        <div className="relative">
            {/* Navbar section Starts ---------------------------------------------- */}
            
                {/* Navbar section Starts ---------------------------------------------- */}

                {/* Banner section Starts ---------------------------------------------- */}
                <div className="h-[576px] w-full m-auto relative group overflow-hidden">
                    <div
                        className="w-full h-full flex transition-transform duration-[1500ms]"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {slides.map((slide, slideIndex) => (
                        <div
                            key={slideIndex}
                            style={{
                            backgroundImage: `url(${slide.url})`,
                            width: "100%",
                            flex: "0 0 auto",
                            }}
                            className="w-full h-full bg-center bg-cover"
                        ></div>
                        ))}
                    </div>
                    <div className="flex absolute bottom-4 text-white inset-x-0 justify-center py-1">
                        {slides.map((slide, slideIndex) => (
                        <div key={slideIndex} className="text-2xl cursor-pointer ">
                            <RxDotFilled
                            size={30}
                            onClick={() => setCurrentIndex(slideIndex)}
                            className={`${
                                currentIndex === slideIndex
                                ? "text-primary-500 transform-1"
                                : "text-white/50"
                            }`}
                            />
                        </div>
                        ))}
                    </div>
                    </div>
                {/* Banner section Ends ---------------------------------------------- */}
                {/* Feature section Starts ---------------------------------------------- */}
                <div className='mx-8 my-7'>
                    <div className='mx-80 text-center'>
                        <h2 className='px-40 text-5xl font-bold text-black'>Unlock Your Vendor Potential: Where Events Meet Success.</h2>
                    </div>
                    <div className='mt-7'>
                        <h3 className='text-black font-bold text-2xl'>Our Features</h3>
                    </div>
                    <div className='mx-28 py-8'>
                        <div className='flex flex-wrap justify-between gap-12 '>
                        {/* {fBlock.map((item, index) => (
                            <Block key={index} item={item} />
                        ))} */}
                        </div>
                    </div>
                </div>
                {/* Feature section Ends ---------------------------------------------- */}
                {/* Host section Starts ---------------------------------------------- */}
                <div className='mx-8 my-7'>
                    <div className='mt-7'>
                        <h3 className='text-black font-bold text-2xl'>Who you can host</h3>
                    </div>
                    <div className='mx-28 py-8'>
                        <div className='flex flex-wrap justify-around gap-12'>
                            {/* {HBlock.map((item, index) => (
                                <HostBlock key={index} item={item} />
                            ))} */}
                        </div>
                    </div>
                </div>
                {/* Host section Ends ---------------------------------------------- */}

                {/* Steps section Starts ---------------------------------------------- */}
                <div className='mx-8 my-7'>
                    <div className='mx-80 text-center'>
                        <h2 className='px-32 text-5xl font-bold text-black'>Dive into Event Era, Where Getting Started is as Simple as a Click!</h2>
                    </div>
                    <div className='mt-7'>
                        <h3 className='text-black font-bold text-2xl'>Steps to Follow </h3>
                    </div>
                    <div className='mx-28 py-8 flex flex-wrap justify-between'>
                        <div className='w-[28%] flex flex-col text-center pb-5 px-5 hover:border-black'>
                            <div className="p-10 mb-4 mx-auto rounded-full bg-grey-100">
                                {/* <img src={LogOutIcon} alt="" className="mx-auto object-cover" /> */}
                            </div>
                            <div className='pb-16'>
                                <h4 className='text-xl text-black font-bold pb-2'>Login</h4>
                                <p className='text-xl  text-black'> Access your organizer account securely to manage events and track analytics.</p>
                            </div>
                        </div>

                        <div className='w-[28%] flex flex-col text-center pb-5 px-5 hover:border-black'>
                            <div className="p-10 mb-4 mx-auto rounded-full bg-grey-100">
                                {/* <img src={CreateIcon} alt="" className="mx-auto object-cover" /> */}
                            </div>
                            <div className='pb-16'>
                                <h4 className='text-xl text-black font-bold pb-2'>Create Event</h4>
                                <p className='text-xl  text-black'> Easily set up your event details, including date, location, and ticketing options, to attract attendees.</p>
                            </div>
                        </div>

                        <div className='w-[28%] flex flex-col text-center pb-5 px-5 hover:border-black'>
                            <div className="p-10 mb-4 mx-auto rounded-full bg-grey-100">
                                {/* <img src={AnalysisIcon} alt="" className="mx-auto object-cover" /> */}
                            </div>
                            <div className='pb-16'>
                                <h4 className='text-xl text-black font-bold pb-2'>Monitor Analytics</h4>
                                <p className='text-xl  text-black'> Gain insights into attendee demographics, ticket sales, and engagement metrics to optimize future events effectively.</p>
                            </div>
                        </div>
                    </div>
                    <div className='text-center'>
                        <button className='border rounded-full font-semibold text-primary-500 p-5 hover:text-white hover:bg-[#ED5858]'>Create Event Now</button>
                    </div>
                </div>
                {/* Steps section Ends ---------------------------------------------- */}
                {/* Post section Starts ---------------------------------------------- */}
                <div className="mx-8 my-14 flex gap-4">
                    <div className="w-3/5">
                        <div className="px-8 pb-8">
                            <h3 className="text-2xl text-[#545454] font-bold">Event Era</h3>
                            <h3 className="text-2xl text-[#616161] ">Your All-in-One Event Management Solution</h3>
                        </div>object-cover
                        <div className="text-xl text-[#616161]">
                            <p className="flex text-justify pb-8">Welcome to Event Era, where we bring simplicity and efficiency to every aspect of event planning and execution. Our platform offers a suite of powerful features designed to streamline your event management process from start to finish, ensuring a seamless experience for both organizers and attendees alike.</p>
                            <p className="flex text-justify pb-8">Sell event tickets effortlessly with our user-friendly ticket sales platform, providing attendees with a smooth and hassle-free booking process. Keep everyone informed and engaged with real-time event updates, allowing you to instantly communicate any changes or updates to schedules or event details, ensuring a smooth experience for all participants</p>
                            <p className="flex text-justify pb-8">Rest easy knowing that your transactions are secure with our reliable payment gateway, providing peace of mind for both organizers and attendees. Gain valuable insights into your event's performance with our comprehensive post-event analytics, empowering you to make data-driven decisions and optimize future events for success. Simplify your event planning and execution with our efficient management tools, allowing you to coordinate every aspect seamlessly. And with our eco-friendly event certification feature, showcase your commitment to sustainability by implementing green practices and reducing environmental impact. Experience the ease and effectiveness of event management with Event Era - your ultimate partner for successful and sustainable events.</p>
                        </div>
                    </div>
                    <div className="w-2/5 h-[] ">
                        {/* <img src={PostBanner} alt="post banner" className="object-contain h-full"></img> */}
                    </div>
                </div>
                {/* Post section Ends ---------------------------------------------- */}
                {/* testimonial section Starts ---------------------------------------------- */}
                <div className="mx-8 my-8">
                    <div className='mb-36'>
                        <h3 className='text-black font-bold text-2xl'>Our Client Testimonial </h3>
                    </div>
                    <div className="gap-8 flex flex-col md:flex-row flex-wrap justify-between items-center mt-12">
                        <div className="mb-8 text-center w-80 md:mb-0 shadow-lg">
                        <img
                            className="w-48 h-48 mt-[-100px] mx-auto rounded-full object-cover"
                            src="https://images.mid-day.com/images/images/2023/apr/hema-april-eight_d.jpg"
                            alt="Avatar Jacky"
                        />
                        <div className="px-8 pt-10 pb-10 text-gray-400 bg-white rounded-lg ">
                            <h3 className="mb-3 text-xl text-gray-800 font-title">
                            Olivia Smith
                            </h3>
                            <p className="mb-4 text-sm font-body">
                            Borem ipsum dolor sit amet, consectetur adip iscing elit. Borem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                        </div>

                        <div className="mb-8 text-center w-80 md:mb-0 shadow-lg">
                        <img
                            className="w-48 h-48 mt-[-100px] mx-auto rounded-full object-cover"
                            src="https://images.mid-day.com/images/images/2023/apr/hema-april-eight_d.jpg"
                            alt="Avatar Jacky"
                        />
                        <div className="px-8 pt-10 pb-10 text-gray-400 bg-white rounded-lg ">
                            <h3 className="mb-3 text-xl text-gray-800 font-title">
                            Olivia Smith
                            </h3>
                            <p className="mb-4 text-sm font-body">
                            Borem ipsum dolor sit amet, consectetur adip iscing elit. Borem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                        </div>

                        <div className="mb-8 text-center w-80 md:mb-0 shadow-lg">
                        <img
                            className="w-48 h-48 mt-[-100px] mx-auto rounded-full object-cover"
                            src="https://images.mid-day.com/images/images/2023/apr/hema-april-eight_d.jpg"
                            alt="Avatar Jacky"
                        />
                        <div className="px-8 pt-10 pb-10 text-gray-400 bg-white rounded-lg ">
                            <h3 className="mb-3 text-xl text-gray-800 font-title">
                            Olivia Smith
                            </h3>
                            <p className="mb-4 text-sm font-body">
                            Borem ipsum dolor sit amet, consectetur adip iscing elit. Borem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                        </div>

                        <div className="mb-8 text-center w-80 md:mb-0 shadow-lg">
                        <img
                            className="w-48 h-48 mt-[-100px] mx-auto rounded-full object-cover"
                            src="https://images.mid-day.com/images/images/2023/apr/hema-april-eight_d.jpg"
                            alt="Avatar Jacky"
                        />
                        <div className="px-8 pt-10 pb-10 text-gray-400 bg-white rounded-lg ">
                            <h3 className="mb-3 text-xl text-gray-800 font-title">
                            Olivia Smith
                            </h3>
                            <p className="mb-4 text-sm font-body">
                            Borem ipsum dolor sit amet, consectetur adip iscing elit. Borem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
                {/* testimonial section Ends ---------------------------------------------- */}
                
                {/* Terms And Condition section Starts ---------------------------------------------- */}
                <div className=" bg-grey-100 py-5">
                    <div className="px-8 py-4 text-black">
                    <div className='mb-16'>
                        <h3 className='font-bold text-2xl'>Terms and Conditions </h3>
                    </div>
                    <div className="flex flex-col text-lg gap-5">
                        <p>Welcome to Event Era! Please read these Terms and Conditions carefully before using our platform.</p>
                        <p>1. Acceptance of Terms: By accessing or using our website, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, please do not use our platform. Welcome to Event Era! Please read these Terms and Conditions carefully before using our platform.</p>
                        <p>2. Registration: In order to use certain features of our website, you may be required to register an account. You agree to provide accurate and complete information during the registration process and to keep your account information updated.</p>
                        <p>3. Event Listings: As an organizer, you are solely responsible for the accuracy and legality of the information provided in your event listings. You agree not to list any events that violate any applicable laws or regulations, including but not limited to those related to intellectual property rights, privacy, and consumer protection.</p>
                        <p>4. Ticket Sales: If you choose to sell tickets through our platform, you agree to comply with our pricing and payment policies. You are responsible for setting the ticket prices, managing ticket inventory, and fulfilling ticket orders in a timely manner.</p>
                        <p>5. Payment Processing: We may use third-party payment processors to facilitate transactions on our platform. By using our website to sell tickets, you agree to abide by the terms and conditions of our chosen payment processor(s).</p>
                        <p>6. Cancellation and Refunds: If you need to cancel or reschedule an event, you are responsible for communicating any changes to ticket holders and issuing refunds if necessary. We are not responsible for any losses incurred as a result of event cancellations or changes.</p>
                        <p>7. Indemnification: You agree to indemnify and hold harmless Event Era and its affiliates, officers, directors, employees, and agents from any claims, damages, or liabilities arising out of your use of our platform or any breach of these Terms.</p>
                        <p>8. Termination: We reserve the right to suspend or terminate your account at any time for any reason, without prior notice or liability. Upon termination, you will lose access to any data associated with your account, and we may delete such data in our sole discretion.</p>
                        <p>9. Changes to Terms: We reserve the right to modify or revise these Terms at any time by posting the updated Terms on our website. Your continued use of our platform after such changes constitutes your acceptance of the new Terms.</p>
                        <p>If you have any questions or concerns about these Terms, please contact us. Thank you for using Event Era</p>
                    </div>
                    </div>
                </div>
                {/* Terms And Condition section Ends ---------------------------------------------- */}
                {/* Footer section Starts ---------------------------------------------- */}
                <div className='items-center py-6 bg-grey-100'>
                    <div className='flex justify-center'>
                        <img src={FaCopyright} alt="copyright" className='pr-2'></img>
                        <h4 className='text-black pt-1 text-xl'> Copyright 2024. All rights reserved</h4>
                    </div>
                </div>
                {/* Footer section Ends ---------------------------------------------- */}
        </div>
    )
};
export default VendorHome;
