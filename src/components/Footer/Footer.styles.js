const styles = {
    footer: {
      backgroundColor: 'rgb(247, 238, 220)',
      color: 'black',
      padding: '60px 0 20px',
      width: '100%',
      fontFamily: 'Arial, sans-serif',
    },
    container: {
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
    },
    topSection: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      marginBottom: '40px',
      gap: '40px',
    },
    brandSection: {
      flex: '1',
      minWidth: '250px',
      marginBottom: '20px',
    },
    logo: {
      fontSize: '28px',
      fontWeight: 'bold',
      margin: '0 0 10px',
    },
    tagline: {
      fontSize: '14px',
      margin: '0 0 20px',
      color: 'black',
    },
    socialLinks: {
      display: 'flex',
      gap: '15px',
    },
    socialLink: {
      color: 'black',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '36px',
      height: '36px',
      borderRadius: '50%',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      transition: 'background-color 0.3s ease',
      ':hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
      },
    },
    socialIcon: {
      width: '18px',
      height: '18px',
    },
    linksWrapper: {
      display: 'flex',
      flexWrap: 'wrap',
      flex: '2',
      gap: '40px',
    },
    linksColumn: {
      flex: '1',
      minWidth: '160px',
    },
    columnTitle: {
      fontSize: '16px',
      fontWeight: 'bold',
      marginTop: '0',
      marginBottom: '20px',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    linksList: {
      listStyle: 'none',
      padding: '0',
      margin: '0',
    },
    linkItem: {
      marginBottom: '10px',
    },
    link: {
      color: 'black',
      textDecoration: 'none',
      fontSize: '14px',
      transition: 'color 0.3s ease',
      ':hover': {
        color: 'rgb(54, 54, 54)',
      },
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '15px',
      fontSize: '14px',
      color: 'black',
    },
    contactIcon: {
      width: '16px',
      height: '16px',
      marginRight: '10px',
    },
    contactText: {
      fontSize: '14px',
    },
    bottomSection: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      paddingTop: '20px',
      gap: '15px',
    },
    copyright: {
      fontSize: '14px',
      color: 'black',
    },
    termsLinks: {
      display: 'flex',
      alignItems: 'center',
    },
    termsLink: {
      color: 'black',
      textDecoration: 'none',
      fontSize: '14px',
      transition: 'color 0.3s ease',
      ':hover': {
        color: 'rgb(241, 227, 196)',
      },
    },
    separator: {
      margin: '0 10px',
      color: 'black',
    },
    
    // Media queries handled through JS condition
    '@media (max-width: 768px)': {
      topSection: {
        flexDirection: 'column',
        gap: '30px',
      },
      linksWrapper: {
        gap: '30px',
      },
      bottomSection: {
        flexDirection: 'column',
        textAlign: 'center',
        gap: '10px',
      },
    }
  };
  
  // Since we're using inline styles in React, we need to handle media queries programmatically
  const applyMediaQueries = () => {
    // Check if window is available (for SSR compatibility)
    if (typeof window !== 'undefined') {
      const isMobile = window.matchMedia('(max-width: 768px)').matches;
      
      if (isMobile) {
        // Override styles for mobile
        styles.topSection = {
          ...styles.topSection,
          flexDirection: 'column',
          gap: '30px',
        };
        
        styles.linksWrapper = {
          ...styles.linksWrapper,
          gap: '30px',
        };
        
        styles.bottomSection = {
          ...styles.bottomSection,
          flexDirection: 'column',
          textAlign: 'center',
          gap: '10px',
        };
        
        styles.brandSection = {
          ...styles.brandSection,
          textAlign: 'center',
        };
        
        styles.socialLinks = {
          ...styles.socialLinks,
          justifyContent: 'center',
        };
      }
    }
    
    return styles;
  };
  
  export default applyMediaQueries();