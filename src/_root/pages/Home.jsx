import React from "react";
// import Banner from "../components/Banner";
import Categories from "../../components/home/Categories";
import EventsSection from "../../components/home/EventsSection";
import Banner from "../../components/home/Banner";
import Testimonials from "../../components/home/Testimonials";
import Poll from "../../components/home/Poll";


const Home = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <EventsSection />
      <Testimonials />
      <Poll />

    </div>
  );
};

export default Home;
