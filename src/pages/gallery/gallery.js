/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Gallery() {
  // Gallery album data (all images in one album)
  const galleryImages = [
    { id: 1, src: "/assets/img/gallery/gallery-img01.jpg", alt: "Gallery Image 1" },
    { id: 2, src: "/assets/img/gallery/gallery-img02.jpg", alt: "Gallery Image 2" },
    { id: 3, src: "/assets/img/gallery/gallery-img03.jpg", alt: "Gallery Image 3" },
    { id: 4, src: "/assets/img/gallery/gallery-img04.jpg", alt: "Gallery Image 4" },
    { id: 5, src: "/assets/img/gallery/gallery-img05.jpg", alt: "Gallery Image 5" },
    { id: 6, src: "/assets/img/gallery/gallery-img06.jpg", alt: "Gallery Image 6" },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleLightboxClose = () => {
    setSelectedImage(null);
  };

  const handlePrevImage = () => {
    if (!selectedImage) return;
    const currentIndex = galleryImages.findIndex(
      (img) => img.id === selectedImage.id
    );
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[prevIndex]);
  };

  const handleNextImage = () => {
    if (!selectedImage) return;
    const currentIndex = galleryImages.findIndex(
      (img) => img.id === selectedImage.id
    );
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[nextIndex]);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === "Escape") handleLightboxClose();
      if (e.key === "ArrowLeft") handlePrevImage();
      if (e.key === "ArrowRight") handleNextImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  return (
    <div className="gallery-area">
      <div className="container">
        <div className="section-title text-center">
          <h2>Our School Gallery</h2>
          <p>
            Browse through our extensive collection of school images and get a glimpse
            of our vibrant campus life.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <div key={image.id} className="gallery-item" onClick={() => handleImageClick(image)}>
              <Image
                src={image.src}
                alt={image.alt}
                layout="responsive"
                width={620}
                height={480}
                objectFit="cover"
              />
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="lightbox-overlay" onClick={handleLightboxClose}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              {/* Close button */}
              <button className="close-btn" onClick={handleLightboxClose} aria-label="Close">
                &times;
              </button>
              {/* Navigation arrows */}
              <div className="nav-arrow prev" onClick={handlePrevImage}>
                ‹
              </div>
              <div className="nav-arrow next" onClick={handleNextImage}>
                ›
              </div>
              {/* Main image */}
              <div className="lightbox-main">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  layout="responsive"
                  width={1200}
                  height={800}
                  objectFit="contain"
                />
              </div>
              {/* Thumbnail strip */}
              <div className="lightbox-thumbnails">
                {galleryImages.map((img) => (
                  <div
                    key={img.id}
                    className={`thumbnail ${selectedImage.id === img.id ? "active" : ""}`}
                    onClick={() => setSelectedImage(img)}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={100}
                      height={70}
                      objectFit="cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        /* Container */
        .gallery-area {
          padding: 40px 0 90px;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .section-title {
          text-align: center;
          margin-bottom: 60px;
        }

        /* Gallery Grid */
        .gallery-grid {
          display: flex;
          flex-wrap: wrap;
        }
        .gallery-item {
          flex: 0 0 33.3333%;
          max-width: 33.3333%;
          cursor: pointer;
        }
        /* Remove any gap between images */
        .gallery-item :global(.nextImage) {
          margin: 0;
          padding: 0;
        }
        /* Ensure images fill the container */
        .gallery-item :global(img) {
          display: block;
          width: 100%;
          height: auto;
        }

        /* Lightbox Styles */
        .lightbox-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1050;
        }
        .lightbox-content {
          position: relative;
          max-width: 90vw;
          width: 100%;
        }
        .close-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          font-size: 2rem;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          z-index: 1060;
        }
        .nav-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          font-size: 3rem;
          color: white;
          cursor: pointer;
          z-index: 1060;
          user-select: none;
        }
        .nav-arrow.prev {
          left: 10px;
        }
        .nav-arrow.next {
          right: 10px;
        }
        .lightbox-main {
          margin: 0 auto;
        }
        .lightbox-thumbnails {
          display: flex;
          justify-content: center;
          margin-top: 20px;
          gap: 10px;
        }
        .thumbnail {
          cursor: pointer;
          border: 2px solid transparent;
        }
        .thumbnail.active {
          border-color: white;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .gallery-item {
            flex: 0 0 50%;
            max-width: 50%;
          }
        }
        @media (max-width: 480px) {
          .gallery-item {
            flex: 0 0 100%;
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
