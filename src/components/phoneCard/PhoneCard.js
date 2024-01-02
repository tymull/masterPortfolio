import React from "react";
import "./PhoneCard.css";

export default function PhoneCard({ phone }) {
  return (
    <div>
      <div class="container">
        <div class="square">
          <img src={phone.image} alt="phone" className="phone-card-image mask" />
          <div class="phone-card-title">{phone.title}</div>
          <p className="phone-card-subtitle">{phone.description}</p>

          <div>
            <a href={phone.url} target="_" class="button">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
