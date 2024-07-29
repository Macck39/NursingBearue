import React from "react";
import AboutImage from "../assets/Rectangle 57.png"; // Adjust the path as necessary
import AboutImage1 from "../assets/Vector.png";
import AboutImage2 from "../assets/image 22.png";
import "./AboutUs.css"; // Assuming the CSS is in a file named AboutUs.css

const AboutUs = () => {
  return (
    <div className="about-us-section">
      <div className="about-banner"></div>
      <div className="about-us-content">
        <div className="text-content">
          <h2 className="text-center">About Us</h2>
          <p>
            Welcome Bharat 🙏 Our Home Healthcare journey started in 2021, after
            almost completion of 4 years, till now I have given 2lac fast &
            comfortable patient care service. In this journey, our patients get
            better as soon as possible by our new technology or service We have
            all types of Caretaker, Male/Female, ICU Nurse, General Nurse,
            Attendant Nanny, Baby Care, Japa Care, Elderly Care, ICU Setup,
            Medical Equipment Rent & Purchase Doctor Visits Available at your
            Home Hospital. This service is being provided from last 5 years.
            Marij Our team is becoming very comfortable with our work day by day
            by following the rules, discipline, honesty, using this new
            technology. Reach out to more and more people so that all our
            services can reach them. Thank you.
          </p>
        </div>
        <div className="image-content">
          <div className="background-image">
            <img src={AboutImage} alt="About Us Background" />
          </div>
          <div className="foreground-images">
            <img src={AboutImage2} alt="Vector Image 2" />
            <img
              src={AboutImage1}
              alt="Vector Image 1"
              className="plus-vector"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
