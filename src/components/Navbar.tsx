import React, { useState } from "react";
import "../index.css";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const TopBar = () => {
  const messages = [
    "الشحن بـ 9 جنيه فقط لكل الجمهورية لنخر الأسبوع",
    "خصومات تصل إلى 50% على تشكيل محافظ الجلد الطبيعي",
  ];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("next");

  const handleNext = () => {
    setDirection("next");
    setIndex((prev) => (prev + 1) % messages.length);
  };

  const handlePrev = () => {
    setDirection("prev");
    setIndex((prev) => (prev - 1 + messages.length) % messages.length);
  };

  return (
    <div className="topbar">
      {/* أيقونات السوشيال على الشمال */}
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noreferrer">
          <FaTiktok />
        </a>
      </div>

      {/* النص والأسهم في النص */}
      <div className="center-content">
        <button className="arrow-btn" onClick={handlePrev}>
          &lt;
        </button>

        <div className="topbar-text-wrapper">
          <span key={index} className={`topbar-text ${direction}`}>
            {messages[index]}
          </span>
        </div>

        <button className="arrow-btn" onClick={handleNext}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default TopBar;
