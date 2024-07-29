import React from "react";
import { Route, Routes } from "react-router-dom";
// import AboutPage from "../pages/AboutPage";
// import HomePage from "../pages/HomePage";
import ContactPage from "../pages/ContactPage";
// import ServicesPage from "../pages/ServicesPage";
import VideosPage from "../pages/VideosPage";
import LandingPage from "../components/landing-page/LandingPage";
import AboutUs from "../pages/AboutUs";
import AllServices from "../pages/AllServices";
import { AuthProvider } from "../components/AuthContext";
import Login from "../components/login/Login";
import PrivateRoute from "../components/PrivateRoute";
// import Admin from "../pages/Admin";
import AdminDashboard from "../pages/AdminDashboard";
import { NotificationProvider } from "../components/NotificationContext";

const Routers = () => {
  return (
    <div>
      <NotificationProvider>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/videos" element={<VideosPage />} />
            <Route path="/services" element={<AllServices />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/admindashboard"
              element={<PrivateRoute element={<AdminDashboard />} />}
            />
          </Routes>
        </AuthProvider>
      </NotificationProvider>
    </div>
  );
};

export default Routers;
