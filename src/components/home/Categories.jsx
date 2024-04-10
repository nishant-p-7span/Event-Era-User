import React, { useState } from "react";
import { FaMusic, FaPersonHarassing } from "react-icons/fa6";
import { FaTheaterMasks, FaLaptop } from "react-icons/fa";
import { LuPartyPopper } from "react-icons/lu";
import { MdFestival, MdSportsMartialArts } from "react-icons/md";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([
    {
      icon: <FaMusic />,
      name: "music",
    },
    {
      icon: <FaTheaterMasks />,
      name: "theater",
    },
    {
      icon: <FaPersonHarassing />,
      name: "dance",
    },
    {
      icon: <LuPartyPopper />,
      name: "parties",
    },
    {
      icon: <MdFestival />,
      name: "festivals",
    },
    {
      icon: <MdSportsMartialArts />,
      name: "sports",
    },
    {
      icon: <FaLaptop />,
      name: "tech",
    },
  ]);

  return (
    <section className="px-8 mt-8 container mx-auto">
      <h2 className="text-2xl font-bold my-4 ">Explore Categories</h2>
      <div className="flex rounded-xl md:mx-20 py-3 justify-around overflow-auto no-scrollbar mt-8">
        {categories.map((category, index) => (
          <CategoryItem key={index} name={category.name} icon={category.icon} />
        ))}
      </div>
    </section>
  );
};

const CategoryItem = ({ icon, name }) => {
  return (
    <Link
      to={`/events?category=${name}`}
      className="flex flex-col items-center group "
    >
      <div className="flex justify-center items-center  sm:mx-8 w-24 h-24 bg-primary-100/30 rounded-full text-3xl text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition cursor-pointer">
        {icon}
      </div>
      <h3 className="text-base text-grey-800 capitalize mt-2  font-normal my-3">
        {name}
      </h3>
    </Link>
  );
};

export default Categories;
