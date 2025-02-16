/* eslint-disable react/no-unknown-property */
import Layout from "../../../components/layout/Layout";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Gallery() {
  // Gallery album data (all images in one album)
  const galleryImages = [
    {
      id: 1,
      src: "/assets/img/gallery/gallery-img01.jpg",
      alt: "Gallery Image 1",
    },
    {
      id: 2,
      src: "/assets/img/gallery/gallery-img02.jpg",
      alt: "Gallery Image 2",
    },
    {
      id: 3,
      src: "/assets/img/gallery/gallery-img03.jpg",
      alt: "Gallery Image 3",
    },
    {
      id: 4,
      src: "/assets/img/gallery/gallery-img04.jpg",
      alt: "Gallery Image 4",
    },
    {
      id: 5,
      src: "/assets/img/gallery/gallery-img05.jpg",
      alt: "Gallery Image 5",
    },
    {
      id: 6,
      src: "/assets/img/gallery/gallery-img06.jpg",
      alt: "Gallery Image 6",
    },
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
    const prevIndex =
      (currentIndex - 1 + galleryImages.length) % galleryImages.length;
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
    <Layout headerStyle={1} footerStyle={1}>
      <div className="gallery-area pt-40 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title text-center mb-60">
                <h2 className="tp-section-title mb-20">Our School Gallery</h2>
                <p>
                  Browse through our extensive collection of school images and get a glimpse of our vibrant campus life.
                </p>
              </div>
            </div>
          </div>
          {/* Gallery Grid */}
          <div className="row">
            {galleryImages.map((image) => (
              <div key={image.id} className="col-lg-4 col-md-6 col-sm-12">
                <div
                  className="gallery-item position-relative mb-30 overflow-hidden"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleImageClick(image)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    layout="responsive"
                    width={600}
                    height={300}
                    objectFit="cover"
                  />
                  <div className="gallery-overlay position-absolute w-100 h-100 d-flex align-items-center justify-content-center">
                    <span className="gallery-icon">
                      <i className="far fa-expand-arrows-alt fs-3"></i>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox Modal */}
          {selectedImage && (
            <div
              className="lightbox-overlay position-fixed top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center"
              style={{ backgroundColor: "rgba(0,0,0,0.9)", zIndex: 1050 }}
            >
              <div className="lightbox-content position-relative" style={{ maxWidth: "90vw" }}>
                {/* Close button */}
                <button
                  onClick={handleLightboxClose}
                  className="btn-close btn-close-white position-absolute top-0 end-0"
                  style={{ transform: "translate(100%, -100%)" }}
                  aria-label="Close"
                ></button>
                {/* Navigation arrows */}
                <div
                  className="nav-arrow position-absolute top-50 start-0 translate-middle-y"
                  style={{ padding: "20px", fontSize: "3rem", cursor: "pointer", zIndex: 1060 }}
                  onClick={handlePrevImage}
                >
                  ‹
                </div>
                <div
                  className="nav-arrow position-absolute top-50 end-0 translate-middle-y"
                  style={{ padding: "20px", fontSize: "3rem", cursor: "pointer", zIndex: 1060 }}
                  onClick={handleNextImage}
                >
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
                <div className="lightbox-thumbnails d-flex justify-content-center mt-4 gap-2">
                  {galleryImages.map((img) => (
                    <div
                      key={img.id}
                      className={`thumbnail ${selectedImage.id === img.id ? "active" : ""}`}
                      style={{ cursor: "pointer", border: "2px solid transparent" }}
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
      </div>

      <style jsx>{`
        .gallery-item {
          border-radius: 8px;
        }
        .gallery-overlay {
          background-color: rgba(0, 0, 0, 0);
          opacity: 0;
          transition: all 0.3s ease;
        }
        .gallery-icon {
          color: white;
          opacity: 0;
          transform: scale(0.8);
          transition: all 0.3s ease;
        }
        .gallery-item:hover .gallery-overlay {
          background-color: rgba(0, 0, 0, 0.2);
          opacity: 1;
        }
        .gallery-item:hover .gallery-icon {
          opacity: 1;
          transform: scale(1);
        }
        .gallery-item img {
          transition: transform 0.3s ease;
        }
        .gallery-item:hover img {
          transform: scale(1.1);
        }
        .lightbox-thumbnails .thumbnail.active {
          border-color: white;
        }
      `}</style>
    </Layout>
  );
}
