import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import albumData from "../../data/albumData";
import baseStyles from "./AlbumPage.style";

const AlbumPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [styles, setStyles] = useState(baseStyles);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const gridRef = useRef(null);

  // Cari fotografer berdasarkan ID
  const photographer = albumData.find((p) => p.id.toString() === id);

  // Handle responsive styling
  useEffect(() => {
    const handleResize = () => {
      const responsiveStyles = baseStyles.getResponsiveStyles(window.innerWidth);
      setStyles({ ...baseStyles, ...responsiveStyles });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Efek pada foto yang dipilih
  useEffect(() => {
    if (selectedPhoto) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedPhoto]);

  if (!photographer) {
    return <h2>Album not found</h2>;
  }

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div style={styles.container}>
      <button style={styles.backButton} onClick={() => navigate("/")}>
        ← Back to Home
      </button>

      <div style={styles.header}>
        <h1 style={styles.headerTitle}>{photographer.name}</h1>
        <p style={styles.headerSubtitle}>
          {photographer.role} | {photographer.instagramHandle}
        </p>
      </div>

      {/* Masonry Grid Album */}
      <div style={styles.grid} ref={gridRef}>
        {photographer.albumPhotos.map((photo, index) => (
          <div 
            key={index} 
            style={styles.photoCard} 
            onClick={() => handlePhotoClick(photo)}
          >
            <img 
              src={photo} 
              alt={`Photo ${index + 1} by ${photographer.name}`} 
              loading="lazy"
              style={styles.photo} 
            />
          </div>
        ))}
      </div>

      {/* Modal untuk memperbesar gambar */}
      {selectedPhoto && (
        <div style={styles.modalOverlay} onClick={closeModal}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button style={styles.closeButton} onClick={closeModal}>✖</button>
            <img src={selectedPhoto} alt="Enlarged" style={styles.modalImage} />
          </div>
        </div>
      )}
    </div>
  );
};

export default AlbumPage;