import React from "react";
import "./Card.css";
import { FaStar } from "react-icons/fa";
import { GrAchievement } from "react-icons/gr";

const Card = ({
  location,
  shortDescription,
  availability,
  price,
  rate,
  special,
  photo,
}) => {
  return (
    <div className="card">
      {special && (
        <div className="badge">
          <GrAchievement style={{ height: "100%", width: "50%" }} />
          Misafirlerin Favorisi
        </div>
      )}
      <img src={photo} alt={location} className="card-image" />
      <div className="card-content">
        <div className="card-header">
          <h1 className="location">{location}</h1>
          <div className="rate">
            {rate} <FaStar className="star-icon" />
          </div>
        </div>
        <p className="short-description">{shortDescription}</p>
        <p className="availability">{availability}</p>
        <p className="price">
          {price.toLocaleString("tr-TR")} ₺{" "}
          <span style={{ fontWeight: 400 }}> - gece</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
