// Media query breakpoints
const breakpoints = {
    sm: '@media (min-width: 640px)',
    md: '@media (min-width: 768px)',
    lg: '@media (min-width: 1024px)',
    xl: '@media (min-width: 1280px)',
  };
  
  const styles = {
    // Section container
    section: {
      padding: '64px 16px',
      backgroundColor: 'rgb(247, 238, 220)',
    },
    
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    
    // Header styles
    header: {
      textAlign: 'center',
      marginBottom: 'auto',
    },
    
    title: {
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '16px',
      color: '#111827',
      [breakpoints.md]: {
        fontSize: '2.5rem',
      },
    },
    
    subtitle: {
      fontSize: '1.125rem',
      color: '#4b5563',
      maxWidth: '768px',
      margin: '0 auto',
      lineHeight: 1.6,
    },
    
    // Grid layout
    grid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '32px',
      [breakpoints.md]: {
        gridTemplateColumns: 'repeat(2, 1fr)',
      },
      [breakpoints.lg]: {
        gridTemplateColumns: 'repeat(3, 1fr)',
      },
    },
    
    // Card styles
    card: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: '8px',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      transition: 'transform 0.3s ease',
    },
    
    link: {
      display: 'block',
      textDecoration: 'none',
    },
    
    imageContainer: {
      position: 'relative',
      paddingBottom: '75%', // 4:3 aspect ratio
    },
    
    featuredImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.5s ease',
    },
    
    overlay: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4), transparent)',
      opacity: 0.7,
      transition: 'opacity 0.3s ease',
    },
    
    // Photographer info styles
    photoInfo: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      padding: '24px',
      color: 'white',
    },
    
    photographerDetails: {
      marginBottom: '16px',
    },
    
    photographerName: {
      fontWeight: 'bold',
      fontSize: '1.25rem',
      marginBottom: '8px',
    },
    
    photographerRole: {
      color: 'rgba(229, 231, 235, 1)',
      fontSize: '0.875rem',
    },
    
    // Hover content
    hoverContent: {
      transition: 'opacity 0.3s ease, transform 0.5s ease',
      marginTop: '16px',
    },
    
    instagramHandle: {
      marginBottom: '12px',
      color: 'rgba(209, 213, 219, 1)',
      fontSize: '0.875rem',
    },
    
    viewButton: {
      backgroundColor: 'white',
      color: '#111827',
      padding: '8px 16px',
      borderRadius: '9999px',
      fontSize: '0.875rem',
      fontWeight: '500',
      border: 'none',
      cursor: 'pointer',
      transition: 'background-color 0.2s ease',
      ':hover': {
        backgroundColor: '#f3f4f6',
      },
    },
  };
  
  export default styles;