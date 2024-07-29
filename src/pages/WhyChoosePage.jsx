import React from "react";
import "./whychoose.css";
import HomeService from "../assets/home-service.webp";
import HappierYou from "../assets/happier-you.jpg";
import Care from "../assets/care.jpg";
import Protocols from "../assets/best-protocol.jpg";

const WhyChoosePage = () => {
  return (
    <>
      <section className="why-choose-section">
        <div>
          <h2 className="text-center">Why Choose Us ?</h2>
        </div>
        <div className="d-flex justify-content-around">
          <div class="product_card">
            <div class="image">
              <img src={HomeService} alt="" />
            </div>
            <div class="product_info">
              <h2 class="product_name">Home Service</h2>
              <p class="product_description">
                All the nurses are trained to give the best patient care at
                home.
              </p>
            </div>
          </div>
          <div class="product_card">
            <div class="image">
              <img src={Care} alt="" />
            </div>
            <div class="product_info">
              <h2 class="product_name">Care</h2>
              <p class="product_description">
                We help recover faster at Home by giving proper care.
              </p>
            </div>
          </div>
          <div class="product_card">
            <div class="image">
              <img src={Protocols} alt="" />
            </div>
            <div class="product_info">
              <h2 class="product_name">Best Protocols</h2>
              <p class="product_description">
                All clinical procedures performed are based on best protocols.
              </p>
            </div>
          </div>
          <div class="product_card">
            <div class="image">
              <img src={HappierYou} alt="" />
            </div>
            <div class="product_info">
              <h2 class="product_name">Convenience</h2>
              <p class="product_description">
                Be assured for high standards of trusted quality & service
                consistency.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChoosePage;
