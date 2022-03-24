import React, { useRef, useState, useEffect } from "react";

import "./productShowcase.css";

const ProductShowcase = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  // intersection observer api
  const ref = useRef(null); 

  const toggleAnimation = (e) => {
    if (e[0]?.isIntersecting) {
      setShowAnimation(true);
    }
  };

  const options = {
    root: null, //point of reference
    rootMargin: "0px", //bottom how much margin we observe
    threshold: 0.5, //how much is visible
  };

  useEffect(() => {

    
    const observer = new IntersectionObserver(toggleAnimation, options);
    if (!showAnimation) {
      if (ref.current) {
        observer.observe(ref.current);
      }
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  });
  return (
    <div
      className={`product-showcase ${showAnimation ? "scale-in-bottom" : ""}`}
      scale-in-bottom
      ref={ref}
    >

      {/* checks if show animation is true */}
      {showAnimation && (
        <div className="showcase-wrapper">

            {/* mock up images */}
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/left-2.png"
            className="showcase-ui showcase-mockup-1"
            alt="1"
          />
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/left-1.png"
            className="showcase-ui showcase-mockup-2"
          alt="2" />
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/center.png"
            className="showcase-ui showcase-mockup-3"
            alt="3"/>
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/right-1.png"
            className="showcase-ui showcase-mockup-4"
           alt="4"
         />
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/right-2.png"
            className="showcase-ui showcase-mockup-5"
          alt="5"
          
          />
        </div>
      )}
    </div>
  );
};

export default ProductShowcase;
