import React, { useEffect, useState } from "react";
import axios from "axios";

const Banner = () => {
  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchSliderData = async () => {
      try {
        const response = await axios.get("https://api.theeventera.live/api/sliders/allslider");
        setSlides(response.data);
      } catch (error) {
        console.error("Error fetching slider data:", error);
      }
    };

    fetchSliderData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="h-96 w-full m-auto relative group overflow-hidden container">
      <div
        className="w-full h-full flex transition-transform duration-[1500ms]"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            style={{
              backgroundImage: `url(https://api.theeventera.live/${slide.imageUrl.replace(/\\/g, '/')})`,
              width: "100%",
              flex: "0 0 auto",
            }}
            className="w-full h-full bg-center bg-cover "
          ></div>
        ))}
      </div>
      <div className="flex absolute bottom-4 text-white inset-x-0 justify-center py-1">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => setCurrentIndex(slideIndex)}
            className={`w-3 h-3 rounded-full mx-1 cursor-pointer ${
              currentIndex === slideIndex ? "bg-primary-500" : "bg-white/50"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Banner;