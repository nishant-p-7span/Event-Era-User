import React from "react";

const testimonialsData = [
  {
    name: "Jacky Pout",
    imageSrc:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    altText: "Avatar Jacky",
    quote:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, quaerat!",
  },
  {
    name: "Damien Marley",
    imageSrc:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    altText: "Avatar Damien Marley",
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, exercitationem.",
  },
  {
    name: "John Doe",
    imageSrc:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    altText: "Avatar John Doe",
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, laborum.",
  },
  {
    name: "Jane Smith",
    imageSrc:
      "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    altText: "Avatar Jane Smith",
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, aperiam.",
  },
  // Add more testimonials as needed
];

const Testimonials = () => {
  return (
    <div className="container mx-auto">
      {/* Testimonials Section */}
      <div className=" flex flex-col md:flex-row flex-wrap justify-center items-center mt-12">
        {testimonialsData.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            name={testimonial.name}
            imageSrc={testimonial.imageSrc}
            altText={testimonial.altText}
            quote={testimonial.quote}
          />
        ))}
      </div>
    </div>
  );
};

const TestimonialCard = ({ name, imageSrc, altText, quote }) => {
  return (
    <div className=" w-full sm:w-1/2 md:w-1/3 lg:w-1/4  p-1">
      <div className="mb-8 text-center md:mb-0">
        <img
          className="w-48 h-48 mx-auto -mb-24 rounded-full object-cover"
          src={imageSrc}
          alt={altText}
        />
        <div className="px-8 pt-32 pb-10 text-gray-600 bg-white rounded-lg shadow-lg">
          <h3 className="mb-3 text-xl text-gray-800 font-title">{name}</h3>
          <p className="mb-4 text-sm font-body">{quote}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
