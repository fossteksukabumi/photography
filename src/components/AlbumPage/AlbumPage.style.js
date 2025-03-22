const baseStyles = {
    container: {
      maxWidth: '100%',
      padding: '24px',
      backgroundColor: 'rgb(247, 238, 220)',
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },
    
    backButton: {
      padding: '10px 20px',
      backgroundColor: 'transparent',
      border: '1px solid #333',
      borderRadius: '4px',
      cursor: 'pointer',
      fontWeight: '500',
      fontSize: '16px',
      marginBottom: '30px',
      transition: 'all 0.2s ease',
    },
    
    header: {
      marginBottom: '40px',
      textAlign: 'center',
    },
    
    headerTitle: {
      fontSize: '2.5rem',
      marginBottom: '10px',
      fontWeight: '600',
    },
    
    headerSubtitle: {
      fontSize: '1.2rem',
      color: '#666',
      marginTop: '0',
    },
    
    // Masonry grid layout
    grid: {
      columnCount: 3,
      columnGap: '20px',
      width: '100%',
    },
    
    photoCard: {
      breakInside: 'avoid',
      marginBottom: '20px',
      position: 'relative',
      transition: 'transform 0.3s ease',
      cursor: 'pointer',
      overflow: 'hidden',
    },
    
    photo: {
      width: '100%',
      height: 'auto',
      display: 'block',
      borderRadius: '8px',
      boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s ease',
    },
    
    // Modal styles
    modalOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.85)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
      padding: '20px',
    },
    
    modalContent: {
      position: 'relative',
      maxWidth: '90%',
      maxHeight: '90%',
      borderRadius: '8px',
      overflow: 'hidden',
    },
    
    modalImage: {
      display: 'block',
      maxWidth: '100%',
      maxHeight: '90vh',
      objectFit: 'contain',
      borderRadius: '4px',
    },
    
    closeButton: {
      position: 'absolute',
      top: '15px',
      right: '15px',
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      color: 'white',
      border: 'none',
      fontSize: '20px',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1001,
    },
    
    // Metode untuk menghasilkan styles responsif berdasarkan lebar window
    getResponsiveStyles: (width) => {
      if (width <= 600) {
        // Mobile layout
        return {
          grid: {
            columnCount: 1,
            columnGap: '15px',
          },
          header: {
            marginBottom: '25px',
          },
          headerTitle: {
            fontSize: '1.8rem',
          },
          headerSubtitle: {
            fontSize: '1rem',
          },
          container: {
            padding: '15px',
          },
          modalContent: {
            maxWidth: '95%',
          },
        };
      } else if (width <= 1024) {
        // Tablet layout
        return {
          grid: {
            columnCount: 2,
            columnGap: '18px',
          },
          headerTitle: {
            fontSize: '2.2rem',
          },
        };
      } else {
        // Desktop - return empty for default styles
        return {};
      }
    }
  };
  
  // Add hover effects only for non-touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches) {
    baseStyles.photoCard = {
      ...baseStyles.photoCard,
      '&:hover': {
        transform: 'translateY(-5px)',
      }
    };
    
    baseStyles.photo = {
      ...baseStyles.photo,
      '&:hover': {
        transform: 'scale(1.03)',
      }
    };
    
    baseStyles.backButton = {
      ...baseStyles.backButton,
      '&:hover': {
        backgroundColor: '#333',
        color: '#fff',
      }
    };
  }
  
  export default baseStyles;