import React, { useState } from "react";
import "./landing-page.css";
import AboutImage from "../../assets/Rectangle 57.png"; // Adjust the path as necessary
import AboutImage1 from "../../assets/Vector.png";
import AboutImage2 from "../../assets/image 22.png";
import Service from "../../assets/Frame 427318620.png";
// import HomeNursing from "../../assets/Group 84.png";
// import Ambulance from "../../assets/Ambulance Services.png";
// import Nursing from "../../assets/Nurse Bureaus.png";
// import Arthritis from "../../assets/Arthritis.png";
// import Physiotherapy from "../../assets/Physiotherapy Centres-1.png";
// import Paralysis from "../../assets/Group 86.png";
// import Ventilator from "../../assets/Ventilator Services.png";
// import Sprain from "../../assets/Physiotherapists For Sprain.png";
import HomeService from "../../assets/home-service.webp";
import HappierYou from "../../assets/happier-you.jpg";
import Care from "../../assets/care.jpg";
import Protocols from "../../assets/best-protocol.jpg";
import Enquiry from "../../assets/Enquiry-Image.png";
import Rating from "../../assets/Group 89.png";
import Colons from "../../assets/,,.png";
import AppointmentModal from "../appointment-modal/AppointmentModal";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { Link } from "react-router-dom";
import VideosPage from "../../pages/VideosPage";
import cards from "../../util/serviceList";
import { Select } from "antd";
import { createEnquiry } from "../../util/api";
import { useNotification } from "../NotificationContext";

const LandingPage = () => {
  const limitedItems = cards.slice(0, 8);
  const servicesOptions = cards.map((item) => item.title);
  const { addNotification } = useNotification();
  const initialEnquiryData = {
    fullname: "",
    email: "",
    mobile: "",
    location: "",
    message: "",
    service: "",
  };
  const [enquiryData, setEnquiryData] = useState(initialEnquiryData);

  const [testimonials, setTestimonials] = useState([
    {
      text: '"Very professional at home medical services offered by Ragini Nursing Bureau. Will definitely recommend it to everyone who is in need! Thank you team."',
      author: {
        name: "Swati Bansal",
        
      },
    },
    {
      text: '"Ragini nursing is the best nursing service provider in Delhi NCR."',
      author: {
        name: "Dev Mandal",
       
      },
    },
    {
      text: '"Service is good. But behaviour is best."',
      author: {
        name: "Manita Sharma",
       
      },
    },
    {
      text: '"Their service is very good, I have taken service from all over Delhi."',
      author: {
        name: "Bunty studio B.R",
       
      },
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextTestimonial = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 2;
      return nextIndex >= testimonials.length ? 0 : nextIndex;
    });
  };

  const videos = [
    {
      id: 1,
      src: "https://www.youtube.com/embed/pnJrO3WssIg?si=vRJ1jbg9eXoGvF8V",
      title: "Recurrent Pregnancy Loss",
      description: "Short description of video 1.",
    },
    {
      id: 2,
      src: "https://youtube.com/embed/duwQNtb-7rw?si=SKld_sSO0AT36jbL",
      title: "Home Service",
      description: "Bahut Dino se Office nahi aa rahe.",
    },
  ];

  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const clearForm = () => {
    setEnquiryData(initialEnquiryData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEnquiryData({ ...enquiryData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createEnquiry(enquiryData);
      console.log(response);
      if (response) {
        addNotification("Enquiry Submitted Successfully", "success", 3000);
        clearForm();
      } else {
        addNotification("Enquiry Submission Failed", "error", 3000);
      }
    } catch (error) {
      console.error("Error Submitting Enquiry", error);
      addNotification(error.message, "error", 3000);
    }
  };

  return (
    <>
      <section>
        <div class="wrapper">
          <div class="banner-content">
            <h1>Your Health Is Our Concern!</h1>
            <h1>Your Personal Healthcare Assistant</h1>
            <button class="btn" onClick={handleClick}>
              Book an Appointment
              <i class="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
        <AppointmentModal show={showModal} handleClose={handleClose} />
      </section>
      <section className="three-button-section">
        <div className="three-button">
          <button className="three-btn">
            <p className="three-btn-text">8+</p>
            <p className="three-btn-text-desc">Years Experience</p>
          </button>
          <button className="three-btn green-btn">
            <p className="three-btn-text green-text">500+</p>
            <p className="three-btn-text-desc green-text">Satisfied Clients</p>
          </button>
          <button className="three-btn">
            <p className="three-btn-text">100+</p>
            <p className="three-btn-text-desc">Expert Nurses</p>
          </button>
        </div>
      </section>
      <section>
        <div className="service-enquiry-container">
          <div className="service-left-section">
            <img src={Service} alt="Service" />
          </div>
          <div className="service-right-section">
            <div className="service">
              <h2 className="text-center">Services & Enquiry</h2>
              <div className="cards-container">
                {limitedItems.map((card, index) => (
                  
                    <div className="card"
                     key={index}
                     onClick={() => handleClick(card)}>
                      <img
                        className="card-img-top"
                        src={card.image}
                        alt={`Card ${index + 1}`}
                      />
                      <div className="card-body">
                        <h6>{card.title}</h6>
                      </div>
                    </div>
                ))}
              </div>
            </div>
            <div className="d-flex justify-content-center p-4" id="show-more">
              <Link to="/services">
                Show More
                <span className="p-2">
                  <i class="fa-solid fa-angles-right"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="d-flex justify-content-center">
        <div className="about-us-section">
          <div className="about-us-content">
            <div className="text-content">
              <h2 className="text-center">About Us</h2>
              <p>
                We Ragini Nursing Bureau at Shakurpur Colony, Delhi, provide
                expertise nursing care by our qualified and trained care takers.
                We are well known for excellent care and personal tailored
                service, which strives to meet our clients requirements
                perfectly. Our trained nurses provide high end quality care to
                patients at home. We are here for you and your family during
                lifes most challenging moments. We aim to give the idea of
                availing services that makes people grow healthy faster by
                putting in less effort and more attention being paid to their
                well being.
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
      </section>
      <section className="why-choose-section mt-5">
        <div>
          <h2 className="text-center">Why Choose Us ?</h2>
        </div>
        <div className="why-choose-container">
          <div className="product_card">
            <div className="image">
              <img src={HomeService} alt="Home Service" />
            </div>
            <div className="product_info">
              <h2 className="product_name">Home Service</h2>
              <p className="product_description">
                All the nurses are trained to give the best patient care at
                home.
              </p>
            </div>
          </div>
          <div className="product_card">
            <div className="image">
              <img src={Care} alt="Care" />
            </div>
            <div className="product_info">
              <h2 className="product_name">Care</h2>
              <p className="product_description">
                We help recover faster at Home by giving proper care.
              </p>
            </div>
          </div>
          <div className="product_card">
            <div className="image">
              <img src={Protocols} alt="Best Protocols" />
            </div>
            <div className="product_info">
              <h2 className="product_name">Best Protocols</h2>
              <p className="product_description">
                All clinical procedures performed are based on best protocols.
              </p>
            </div>
          </div>
          <div className="product_card">
            <div className="image">
              <img src={HappierYou} alt="Convenience" />
            </div>
            <div className="product_info">
              <h2 className="product_name">Convenience</h2>
              <p className="product_description">
                Be assured for high standards of trusted quality & service
                consistency.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-5">
        <div>
          <VideosPage />
          <div
            className="d-flex justify-content-end"
            style={{ marginRight: "300px" }}
          >
            <Link to="/videos" className="d-flex align-items-center">
              <span>Show More </span>
              <span className="ml-1">
                <i className="fa-solid fa-angles-right"></i>
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div>
          <h2 className="text-center">Testimonials</h2>
        </div>
        <div class="testimonial-section">
          <div class="testimonial-left">
            <div class="ratings-icon">
              <img src={Rating} alt="Rating" />
            </div>
          </div>
          <div class="testimonial-right">
            <img src={Colons} alt="Colons" className="colons" />
            <div className="testimonial-cards">
              {testimonials
                .slice(currentIndex, currentIndex + 2)
                .map((testimonial, index) => (
                  <div key={index} className="testimonial-card">
                    <p className="testimonial-text">{testimonial.text}</p>
                    <div className="testimonial-author">
                      <div>
                        <h5>{testimonial.author.name}</h5>
                        <p>{testimonial.author.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            <div class="slider-icon" onClick={handleNextTestimonial}>
              <i class="fas fa-circle-chevron-right"></i>
            </div>
          </div>
        </div>
      </section>
      <section className="my-5">
        <div>
          <h2 className="text-center">Enquiry</h2>
        </div>
        <div className="d-flex container">
          <div className="enquiry-container col-md-9">
            <form className="enquiry-form" onSubmit={handleSubmit}>
              <div className="left-fields">
                <div className="input-wrapper">
                  <i className="fas fa-user"></i>
                  <input
                    type="text"
                    name="fullname"
                    value={enquiryData.fullname}
                    onChange={handleChange}
                    placeholder="Full Name"
                  />
                </div>
                <div className="input-wrapper">
                  <i className="fas fa-envelope"></i>
                  <input
                    type="email"
                    name="email"
                    value={enquiryData.email}
                    onChange={handleChange}
                    placeholder="Email"
                  />
                </div>
                <div className="input-wrapper">
                  <i className="fas fa-phone"></i>
                  <input
                    type="number"
                    name="mobile"
                    value={enquiryData.mobile}
                    onChange={handleChange}
                    placeholder="Mobile"
                  />
                </div>
                <div className="input-wrapper">
                  <i class="fa-solid fa-square-check"></i>
                  <select
                    name="service"
                    value={enquiryData.service}
                    onChange={handleChange}
                  >
                    <option value="">Select Service</option>
                    {servicesOptions.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="input-wrapper">
                  <i className="fas fa-map-marker-alt"></i>
                  <input
                    type="text"
                    name="location"
                    value={enquiryData.location}
                    onChange={handleChange}
                    placeholder="Location"
                  />
                </div>
              </div>
              <div className="right-field">
                <textarea
                  name="message"
                  value={enquiryData.message}
                  onChange={handleChange}
                  placeholder="Message"
                ></textarea>
              </div>
            </form>
          </div>
          <div className="col-md-3">
            <img src={Enquiry} alt="Enquiry" className="enquiry-image" />
          </div>
        </div>
        <div className="enquiry-btn-container">
          <button className="enquiry-submit bg-primary" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </section>
      <section>
        <div>
          <a
            href="https://api.whatsapp.com/send?phone=7859989007&text=Hello, Thank you for reaching out to our nursing service. How can we assist you today?"
            class="float"
            target="_blank"
          >
            <AiOutlineWhatsApp className="my-float" />
          </a>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
