import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 768px) {
    flex-direction: column;
    min-height: 40vh;
    margin-top: 5rem;
  }
`;

export const ImageContainer = styled.div`
  flex: 0 0 50%;
  position: relative;
  height: 100vh;
  overflow: hidden;

  @media (max-width: 768px) {
    flex: 1;
    height: 40vh;
    min-height: 300px;
    order: -1;
  }
`;

export const InfoContainer = styled.div`
  flex: 0 0 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem;
  background-color: rgb(247, 238, 220);
  font-family: 'Poppins', sans-serif;
  overflow: auto;

    @media (max-width: 768px) {
    flex: 1;
    padding: 2.5rem 2rem;
    height: auto; /* Ubah max-height menjadi height agar tidak ada space berlebih */
    overflow-y: auto;
    }

`;

export const Title = styled.h2`
  font-size: 3rem;
  font-weight: 300;
  margin-bottom: 1.5rem;
  color: black;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

export const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.7;
  font-weight: 300;
  color: #555;
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  width: 100%;

  @media (max-width: 480px) {
    gap: 0.8rem;
  }
`;

export const SocialLink = styled.a`
  padding: 0.9rem 1.8rem;
  background-color: #f8f9fa;
  color: black;
  text-decoration: none;
  border-radius: 30px;
  font-weight: 500;
  font-size: 0.95rem;
  border: 1px solid #e0e0e0;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    background-color:rgb(145, 146, 150);
    color: white;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(37, 117, 252, 0.2);
  }

  @media (max-width: 480px) {
    padding: 0.7rem 1.2rem;
    font-size: 0.9rem;
  }
`;

export const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.1rem;
  color: #333;
`;

export const Icon = styled.span`
  font-size: 1.5rem;
  color:rgb(132, 134, 138);
`;
