import AuthLayout from "./_auth/AuthLayout";
import { Route, Routes } from "react-router-dom";
import Home from "./_root/pages/Home";
import Profile from "./_root/pages/Profile";
import AllEvents from "./_root/pages/AllEvents";
import EventDetail from "./_root/pages/EventDetail";
import ForgotPassword from "./_auth/forms/ForgotPassword";
import SignUp from "./_auth/forms/SignUp";
import LogIn from "./_auth/forms/LogIn";
import RootLayout from "./_root/RootLayout";
import DownloadTicketPage from "./_root/pages/DownloadTicketPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Route>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/profile/*" element={<Profile />} />
          <Route path="/events" element={<AllEvents />} />
          <Route path="/events/:id" element={<EventDetail />} />
          <Route path="/downloadticket" element={<DownloadTicketPage />} />

          
        </Route>
      </Routes>
    </>
  );
};

export default App;
