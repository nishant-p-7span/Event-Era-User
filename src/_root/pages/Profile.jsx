import { useEffect, useState } from "react";
import {
  Routes,
  Route,
  useNavigate,
  Link,
  useLocation,
} from "react-router-dom";
import AttendedEvents from "@/components/profile/AttendedEvents";
import UserProfile from "@/components/profile/UserProfile";
import { MdKeyboardArrowLeft } from "react-icons/md";

export default function Profile() {
  const navigate = useNavigate();
  const storedEmail = localStorage.getItem("email");
  const id = localStorage.getItem("userId");
  const [token, setToken] = useState(storedEmail);

  const location = useLocation();

  const logout = () => {
    localStorage.clear();
    setToken("");
    navigate("/");
  };

  return (
    <div className="flex h-[calc(100vh-106px)] container mx-auto">
      <aside className=" min-w-48 border-r-2 md:flex flex-col items-center relative hidden ">
        <div
          className="flex items-center mt-3 cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <MdKeyboardArrowLeft size={25} />
          <h3 className="text-xl">User Profile</h3>
        </div>
        <ul className="mt-4">
          <li className="py-3 rounded-3xl">
            <Link
              className={`py-3 px-6 hover:bg-primary-500 rounded-3xl ${
                location.pathname === `/profile/${id}` &&
                "bg-primary-500 rounded-3xl"
              }`}
              to={`/profile/${id}`}
            >
              Profile
            </Link>
          </li>
          <li className="py-3">
            <Link
              className={`py-3 px-6 hover:bg-primary-500 rounded-3xl ${
                location.pathname === "/profile/attendedevents" &&
                "bg-primary-500 rounded-3xl"
              }`}
              to="/profile/attendedevents"
            >
              Attended Events
            </Link>
          </li>
        </ul>
        <button className="absolute left-10 bottom-10" onClick={logout}>
          Logout
        </button>
      </aside>
      <div className="w-full h-screen">
        <Routes>
          <Route path="/:id" element={<UserProfile />} />
          <Route path="attendedevents" element={<AttendedEvents />} />
        </Routes>
      </div>
    </div>
  );
}
