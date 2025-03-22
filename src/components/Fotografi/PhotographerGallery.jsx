import React, { useState } from "react";
import styles from "./PhotographerGallery.styles";
import photographersData from "../../data/photographersData";

const PhotographerGallery = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* Header */}
        <header style={styles.header}>
        </header>

        {/* Grid Layout */}
        <div style={styles.grid}>
          {photographersData.map((photographer, index) => (
            <div
              key={photographer.id}
              style={{
                ...styles.card,
                transform: hoverIndex === index ? "scale(1.05)" : "scale(1)",
              }}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >

                <div style={styles.imageContainer}>
                  <img
                    src={photographer.featured}
                    alt={photographer.name}
                    style={{
                      ...styles.featuredImage,
                      transform: hoverIndex === index ? "scale(1.1)" : "scale(1)",
                    }}
                  />
                  <div style={styles.overlay}></div>
                </div>

              <a href={photographer.albumLink} style={styles.link}>

                {/* Photographer Info */}
                <div style={styles.photoInfo}>
                  <div style={styles.photographerDetails}>
                    <h3 style={styles.photographerName}>{photographer.name}</h3>
                    <p style={styles.photographerRole}>{photographer.role}</p>
                  </div>

                  {/* Hover Content - Tetap ada di DOM */}
                  <div
                    style={{
                      ...styles.hoverContent,
                      opacity: hoverIndex === index ? 1 : 0,
                      transform: hoverIndex === index ? "translateY(0)" : "translateY(10px)",
                    }}
                  >
                    <p style={styles.instagramHandle}>{photographer.instagramHandle}</p>
                    <button style={styles.viewButton}>View Album</button>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotographerGallery;
