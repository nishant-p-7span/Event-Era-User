import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import SearchPost from "../SearchPost";
import { RiMenu3Line } from "react-icons/ri";
import RightSlideOver from "./RightSlideOver";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const email = localStorage.getItem("email");
  const id = localStorage.getItem("personId");

  return (
    <header className=" w-full h-auto   px-7 py-6 sm:items-center bg-primary-100/30 relative z-10">
      <div className="flex relative  justify-center sm:justify-between items-center sm:items-center container mx-auto">
        <nav className="flex gap-8 items-center justify-between sm:flex-row flex-col relative ">
          <a
            className="flex items-center sm:mb-0 mb-4 cursor-pointer w-56"
            onClick={() => navigate("/")}
          >
            <img src="/logo.png" className="w-full" alt="" />
          </a>
          {pathname === "/login" ||
          pathname === "/profile" ||
          pathname === "/signup" ||
          pathname === "/forgotpassword" ? (
            ""
          ) : (
            <SearchPost />
          )}
        </nav>
        <div className="hidden md:flex md:items-center  font-normal">
          <a href="https://vendor.theeventera.live" className="group border  px-7 py-3 text-primary-500 flex items-center border-primary-400 cursor-pointer text-base rounded-3xl mr-4 transition">
            <FaPlus className="group-hover:text-primary-500 mr-3 " />
            Create Event
          </a>
          {!email ? (
            <button
              className="text-white bg-primary-500 px-16 py-3 text-base rounded-3xl transition font-medium"
              // onClick={() => navigate("/profile")}
              onClick={() =>
                navigate("/login", { state: { from: location.pathname } })
              }
            >
              Login
            </button>
          ) : (
            <Link
              className="flex items-center justify-center bg-primary-500 w-12 h-12 rounded-full cursor-pointer"
              to={`/profile/${id}`}
            >
              <span className="text-3xl">
                {/* {profile && profile.userName
                  ? profile.userName[0].toUpperCase()
                  : " "} */}
                {email && email[0].toUpperCase()}
              </span>
            </Link>
          )}
        </div>

        <div className="absolute right-0 cursor-pointer  inline-block md:hidden text-left">
          <RiMenu3Line
            className=" text-3xl cursor-pointer font-extraBold text-black  right-5"
            onClick={() => setOpen(true)}
          />
        </div>
        <RightSlideOver open={open} setOpen={setOpen} />
      </div>
    </header>
  );
};

export default Navbar;
