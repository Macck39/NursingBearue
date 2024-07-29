import React, { useState } from "react";
import "./all-services.css";
import AppointmentModal from "../components/appointment-modal/AppointmentModal";
import cards from "../util/serviceList";

const AllServices = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  

  const handleCardClick = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <section>
        <div className="all-services-wrapper">
          <div className="all-services-banner">
            <h1 className="all-services-text">OUR SERVICES</h1>
          </div>
        </div>
        <section>
          <div className="all_services_wrapper">
          <div className="all_services-cards-container">
            {cards.map((card, index) => (
              <div
                key={index}
                className="all_services-card"
                onClick={() => handleCardClick(card)}
              >
                <img
                  className="all_services-card-img-top"
                  src={card.image}
                  alt={`Card ${index + 1}`}
                />
                <div className="all_services-card-body">
                  <h6>{card.title}</h6>
                </div>
              </div>
            ))}
          </div>
          </div>
        </section>
      </section>

      {selectedService && (
        <AppointmentModal
          show={showModal}
          handleClose={handleModalClose}
          service={selectedService}
        />
      )}
    </>
  );
};

export default AllServices;
