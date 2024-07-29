import React, { useEffect, useState } from "react";
import Service from "../assets/service1.jpg";
import "./services.css";

const ServiceEnquiry = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Fetch data from db.json
    fetch("/db.json")
      .then((response) => response.json())
      .then((data) => setCards(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="service-enquiry-container">
      <div className="service-left-section">
        <img src={Service} alt="Service" />
      </div>
      <div className="service-right-section">
        <div className="service">
          <h2 className="text-center my-3">Services & Enquiry</h2>
          <div className="cards-container">
            {cards.map((card, index) => (
              <div key={index} className="card">
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
      </div>
    </div>
  );
};

export default ServiceEnquiry;
