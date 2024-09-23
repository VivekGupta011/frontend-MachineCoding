import React, { useState, useEffect } from "react";

const ImageCarousel = () => {
  const images = [
    "https://via.placeholder.com/600x300.png?text=Slide+1",
    "https://via.placeholder.com/600x300.png?text=Slide+2",
    "https://via.placeholder.com/600x300.png?text=Slide+3",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play: Change image every 3 seconds
  useEffect(() => {
    console.log("hello")
    const interval = setInterval(() => {
      goToNextSlide();
    }, 3000);

    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        {/* Previous Button */}
        <button onClick={goToPreviousSlide} className="left-arrow">
          &#10094;
        </button>

        {/* Image */}
        <div className="carousel-slide">
          <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
        </div>

        {/* Next Button */}
        <button onClick={goToNextSlide} className="right-arrow">
          &#10095;
        </button>
      </div>

      {/* Dots for navigation */}
      <div className="carousel-dots">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Dot ${index}`}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
            style={{
              cursor: 'pointer',
              width: '30px', // Set desired width for the dot images
              height: '30px', // Set desired height for the dot images
              borderRadius: '50%', // Optional: make them circular
              margin: '0 5px',
              opacity: currentIndex === index ? 1 : 0.5, // Highlight the active dot
            }}
          />
        ))}
      </div>

      <style jsx>{`
        .carousel-container {
          position: relative;
          max-width: 600px;
          margin: auto;
        }
        .carousel-wrapper {
          position: relative;
          overflow: hidden;
        }
        .carousel-slide img {
          width: 100%;
          border-radius: 10px;
        }
        .left-arrow,
        .right-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background-color: rgba(0, 0, 0, 0.5);
          color: white;
          border: none;
          font-size: 2rem;
          padding: 0.5rem;
          cursor: pointer;
          border-radius: 50%;
        }
        .left-arrow {
          left: 10px;
        }
        .right-arrow {
          right: 10px;
        }
      `}</style>
    </div>
  );
};

export default ImageCarousel;
