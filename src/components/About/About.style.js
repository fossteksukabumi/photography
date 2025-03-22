import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  font-family: "Poppins", sans-serif;
  padding-top: 20px;

  /* Large devices (desktops) */
  @media (max-width: 1200px) {
    padding-top: 18px;
  }

  /* Medium devices (tablets) */
  @media (max-width: 992px) {
    padding-top: 35px;
    height: auto;
    min-height: 100vh;
    flex-direction: column;
  }

  /* Small devices (landscape phones) */
  @media (max-width: 768px) {
    padding-top: 14px;
    flex-direction: column;
  }

  /* Extra small devices (portrait phones) */
  @media (max-width: 576px) {
    padding-top: 12px;
  }

  /* Very small devices */
  @media (max-width: 380px) {
    padding-top: 10px;
  }
`;

export const ImageContainer = styled.div`
  width: 40%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* Large devices (desktops) */
  @media (max-width: 1200px) {
    width: 45%;
  }

  /* Medium devices (tablets) */
  @media (max-width: 992px) {
    position: relative;
    width: 100%;
    height: 50vh;
    flex-shrink: 0;
    z-index: 0;
  }

  /* Small devices (landscape phones) */
  @media (max-width: 768px) {
    position: relative;
    width: 100%;
    height: 50vh;
    flex-shrink: 0;
    z-index: 0;
  }

  /* Extra small devices (portrait phones) */
  @media (max-width: 576px) {
    height: 40vh;
  }

  /* Very small devices */
  @media (max-width: 380px) {
    height: 35vh;
  }
`;

// InfoContainer untuk menampilkan konten di sebelah kanan
export const InfoContainer = styled.div`
  width: 60%;
  margin-left: 40%;
  min-height: 100vh;
  padding: 3rem;
  overflow-y: auto;
  position: relative;
  z-index: 2;
  
  /* Hide scrollbar for Chrome, Safari, and newer Edge */
  &::-webkit-scrollbar {
    display: none;
  }
  
  /* For Firefox */
  scrollbar-width: none;
  
  /* For IE and older Edge */
  -ms-overflow-style: none;

  /* Large devices (desktops) */
  @media (max-width: 1200px) {
    width: 55%;
    margin-left: 45%;
    padding: 2.5rem;
  }

  /* Medium devices (tablets) */
  @media (max-width: 992px) {
    width: 100%;
    margin-left: 0;
    padding: 2rem;
    min-height: auto;
  }

  /* Small devices (landscape phones) */
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    padding: 2rem;
    min-height: auto;
  }

  /* Extra small devices (portrait phones) */
  @media (max-width: 576px) {
    padding: 1.5rem;
  }

  /* Very small devices */
  @media (max-width: 380px) {
    padding: 1.25rem 1rem;
  }
`;

export const Title = styled.h2`
  font-family: 'Poppins-Bold', sans-serif;
  font-weight: 500;
  font-size: 2.75rem;
  margin-bottom: 1.5rem;
  color: #333;
  line-height: 1.2;

  @media (max-width: 1200px) {
    font-size: 2.5rem;
  }

  @media (max-width: 768px) {
    font-size: 2.25rem;
    margin-bottom: 1.25rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

export const Description = styled.p`
  font-family: 'Poppins-Thin', sans-serif;
  font-weight: 300;
  font-size: 1.25rem;
  line-height: 1.8;
  color: #555;
  max-width: 600px;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.125rem;
    line-height: 1.7;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
`;

export const PackageSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  margin: 2rem auto 1rem 0;
  width: 100%;
  max-width: 100%;
  padding: 0 1rem;
  
  /* Subtle animation when page loads */
  opacity: 0;
  animation: fadeIn 0.8s ease-in-out forwards;
  animation-delay: 0.2s;
  
  @keyframes fadeIn {
    from { 
      opacity: 0; 
      transform: translateY(15px); 
    }
    to { 
      opacity: 1; 
      transform: translateY(0); 
    }
  }
  
  /* Large devices (desktops) */
  @media (min-width: 992px) and (max-width: 1200px) {
    gap: 2.75rem;
    padding: 0 1.75rem;
  }
  
  /* Medium devices (tablets) */
  @media (max-width: 991px) {
    gap: 2.5rem;
    padding: 0 1.5rem;
    margin: 3.5rem auto 2rem;
  }
  
  /* Small devices (landscape phones) */
  @media (max-width: 768px) {
    gap: 2.25rem;
    padding: 0 1.25rem;
    margin: 3rem auto 1.5rem;
  }
  
  /* Extra small devices (portrait phones) */
  @media (max-width: 576px) {
    gap: 2rem;
    padding: 0 1rem;
    margin: 2.5rem auto 1rem;
  }
  
  /* Very small devices */
  @media (max-width: 380px) {
    gap: 1.75rem;
    padding: 0 0.75rem;
    margin: 2rem auto 0.75rem;
  }
`;

export const PackageList = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  
  @media (max-width: 1300px) { 
    flex-direction: column;
    align-items: center;
  }
  
  @media (max-width: 768px) {
    gap: 2rem;
    width: 100%;
    max-width: 900px;
  }
  
  @media (max-width: 480px) {
    gap: 1.75rem;
  }
`;



export const PackageItem = styled.div`
  background: linear-gradient(145deg,rgb(241, 237, 225), rgb(241, 227, 196));
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  padding: 10px;
  width: 100%;
  min-height: 35vh;
  max-width: 330px;
  text-align: left;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.03);
  
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.07);
  }

  @media (max-width: 1300px) {
    max-width: 100%;
    min-height: 33vh;
    padding: 10px;
  }
  
  @media (max-width: 992px) {
    max-width: 100%;
    min-height: auto;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    width: 100%;
    min-height: auto;
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1.25rem;
  }

  @media (max-width: 375px) {
    padding: 1.1rem;
  }
`;

export const PackageTitle = styled.h3`
  font-family: 'Poppins-Bold', sans-serif;
  font-weight: 500;
  font-size: 1.625rem;
  color: #222;
  margin-bottom: 0.75rem;
  width: 100%;
  line-height: 1.3;

  @media (max-width: 1300px) {
    font-size: 1.5rem;
  }
  
  @media (max-width: 992px) {
    font-size: 1.4rem;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.35rem;
    margin-bottom: 0.6rem;
  }
`;

export const PackagePrice = styled.p`
  font-family: 'Poppins-Bold', sans-serif;
  font-weight: 700;
  font-size: 1.35rem;
  color: #1a1a1a;
  width: 100%;
  margin-bottom: 1rem;
  
  span {
    color: #555;
    font-size: 1rem;
    font-weight: 400;
  }

  @media (max-width: 1200px) {
    font-size: 1.3rem;
  }
  
  @media (max-width: 992px) {
    font-size: 1.25rem;
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 0.9rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin-bottom: 0.8rem;
  }
`;

export const PackageDescription = styled.p`
  font-family: 'Poppins-Thin', sans-serif;
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
  width: 100%;
  margin-bottom: 1.25rem;
  flex-grow: 1;

  @media (max-width: 992px) {
    font-size: 0.95rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding-right: 0;
    margin-bottom: 1.1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
    line-height: 1.5;
  }
`;

export const PackageImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 100%;
  border-radius: 4px;
  margin-bottom: 1.25rem;
  transition: transform 0.3s ease;
  
  ${PackageItem}:hover & {
    transform: scale(1.02);
  }

  @media (max-width: 1300px) {
    max-width: 100%;
  }
  
  @media (max-width: 992px) {
    max-width: 100%;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 1rem;
  }
  
  @media (max-width: 480px) {
    border-radius: 6px;
  }
`;

export const BenefitList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
  width: 100%;
`;

export const BenefitItem = styled.li`
  font-size: 1rem;
  color: #444;
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
  
  &:before {
    content: "✓";
    color:rgb(48, 49, 48);
    font-weight: bold;
    margin-right: 0.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin-bottom: 0.6rem;
  }
`;

export const Button = styled.button`
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 0.75rem 1.5rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-start;
  margin-top: auto;
  
  &:hover {
    background-color: #222;
    transform: translateY(-2px);
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
    padding: 0.7rem 1.4rem;
  }
`;