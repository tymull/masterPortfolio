import React from "react";
import "./Phone.css";
import PhoneCard from "../../components/phoneCard/PhoneCard";
import { phoneSection } from "../../portfolio";

export default function Phones() {
  return (
    <div className="main" id="phones">
      <div className="phone-header">
        <h1 className="phone-header-text">{phoneSection.title}</h1>
        <p className="subTitle phone-subtitle">{phoneSection.subtitle}</p>
      </div>
      <div className="phone-main-div">
        <div className="phone-text-div">
          {phoneSection.phones.map((phone) => {
            return (
              <PhoneCard
                phone={{
                  url: phone.url,
                  image: phone.image,
                  title: phone.title,
                  description: phone.description,
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
