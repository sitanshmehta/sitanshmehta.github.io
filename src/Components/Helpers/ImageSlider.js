import React, { useState, useRef } from 'react';
import './ImageSlider.css';

const ImageSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const imageContainerRef = useRef(null);
    const [zoomLevel, setZoomLevel] = useState(1);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setZoomLevel(1); // Reset zoom when changing images
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        setZoomLevel(1); // Reset zoom when changing images
    };

    const zoomIn = () => {
        setZoomLevel((prevZoom) => Math.min(prevZoom + 0.3, 3));
    };

    const zoomOut = () => {
        setZoomLevel((prevZoom) => Math.max(prevZoom - 0.3, 1));
    };

    const imageTitle = images[currentIndex].title;

    return (
        <div className="image-slider">
            <div className="image-title">
                {imageTitle}
            </div>
            <div
                className="image-container"
                ref={imageContainerRef}
                style={{
                    overflow: zoomLevel > 1 ? 'scroll' : 'hidden',
                    cursor: zoomLevel > 1 ? 'grab' : 'default',
                }}
            >
                <img
                    src={images[currentIndex].src}
                    alt={`Slide ${currentIndex}`}
                    style={{
                        transform: `scale(${zoomLevel})`,
                        transition: 'transform 0.3s ease',
                        objectFit: 'contain',
                        width: zoomLevel > 1 ? `${zoomLevel * 100}%` : '100%',
                        height: zoomLevel > 1 ? `${zoomLevel * 100}%` : '100%',
                    }}
                />
            </div>
            <div className="zoom-controls">
                <button className="zoom-button" onClick={zoomOut} disabled={zoomLevel <= 1}>
                    Zoom Out
                </button>
                <button className="zoom-button" onClick={zoomIn} disabled={zoomLevel >= 3}>
                    Zoom In
                </button>
            </div>
            <div>
                {currentIndex + 1} / {images.length}
            </div>
            {images.length > 1 && (
                <div>
                    <button className="slider-button" onClick={prevImage}>❮</button>
                    <button className="slider-button" onClick={nextImage}>❯</button>
                </div>
            )}
        </div>
    );
};

export default ImageSlider;
