import React from "react";

const Footer = () => {
  return (
    <footer className="w-full  px-12  border-t-2 bg-primary-100/30 mt-10 ">
      <div className="flex justify-center flex-col p-8 container mx-auto ">
        <h4 className="text-xl font-semibold">About Us</h4>
        <div className=" flex mt-5  items-center">
          <div className="">
            <ul className="font-thin text-lg">
              <li className="font-semibold">Find Events</li>
              <li>Theatre</li>
              <li>Music</li>
              <li>Party</li>
              <li>More</li>
            </ul>
          </div>

          <p className="w-2/3 px-12 text-xl font-normal  mx-auto leading-7 text-justify">
            paraLorem ipsum dolor sit amet, consectetur adipiscing elit Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.graph 20px paraLorem ipsum dolor sit amet,
            consectetur adipiscing elit Nunc vulputate libero et velit interdum,
            ac aliquet odio mattis. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos.graph
          </p>
        </div>

        <div className="max-w-screen-xl px-4 mx-auto mt-4">
          <div className="pt-8 flex max-w-xs mx-auto items-center justify-between">
            <a
              href="#"
              className=" transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
              </svg>
            </a>
            <a
              href="#"
              className=" transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"></path>
              </svg>
            </a>
            <a
              href="#"
              className=" transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 50 50"
              >
                <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
              </svg>
            </a>
            <a
              href="#"
              className=" transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 30 30"
              >
                <path d="M 15 4 C 10.814 4 5.3808594 5.0488281 5.3808594 5.0488281 L 5.3671875 5.0644531 C 3.4606632 5.3693645 2 7.0076245 2 9 L 2 15 L 2 15.001953 L 2 21 L 2 21.001953 A 4 4 0 0 0 5.3769531 24.945312 L 5.3808594 24.951172 C 5.3808594 24.951172 10.814 26.001953 15 26.001953 C 19.186 26.001953 24.619141 24.951172 24.619141 24.951172 L 24.621094 24.949219 A 4 4 0 0 0 28 21.001953 L 28 21 L 28 15.001953 L 28 15 L 28 9 A 4 4 0 0 0 24.623047 5.0546875 L 24.619141 5.0488281 C 24.619141 5.0488281 19.186 4 15 4 z M 12 10.398438 L 20 15 L 12 19.601562 L 12 10.398438 z"></path>
              </svg>
            </a>
          </div>
          {/* <div className="text-center pt-10 sm:pt-12 font-light flex items-center justify-center">
          <form className="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
            <div className=" relative ">
              <input
                type="text"
                id='"form-subscribe-Subscribe'
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Email"
              />
            </div>
            <button
              className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-primary-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div> */}
          <div className="text-center text-primary-500 dark:text-gray-200 pt-10 sm:pt-12 font-light flex items-center justify-center">
            Copyright 2024. All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
