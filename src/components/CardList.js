// CardList.js
import React, { useState, useEffect } from "react";
import Card from "./Card";
import SkeletonCard from "./SkeletonCard";
import "./CardList.css";

const CardList = ({ data }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      data.forEach((item, index) => {
        setTimeout(() => {
          setVisibleCards((prev) => [...prev, item.id]);
        }, index * 200); // Her kart için 200ms gecikme
      });
      setLoading(false);
    }, 2000); // 2 saniye skeleton görünür

    return () => clearTimeout(timeoutId);
  }, [data]);

  return (
    <div className="card-list">
      {loading
        ? data.map((_, index) => (
            <div key={index} className="skeleton-container visible">
              <SkeletonCard />
            </div>
          ))
        : data.map((item) => (
            <div
              key={item.id}
              className={`card-container ${
                visibleCards.includes(item.id) ? "visible" : ""
              }`}
            >
              <Card {...item} />
            </div>
          ))}
    </div>
  );
};

export default CardList;
