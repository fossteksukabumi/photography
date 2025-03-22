import styled from 'styled-components';

export const Section = styled.section`
  padding: 5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Hero = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

export const Title = styled.h1`
  font-family: 'Poppins-Bold', sans-serif; // Gunakan font Poppins Bold
  font-weight: 500; // Pastikan bold
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Description = styled.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const FilterButton = styled.button`
  padding: 0.5rem 1.5rem;
  background-color: ${props => props.active ? 'rgb(247, 209, 126)' : 'transparent'};
  color: ${props => props.active ? '#333' : '#333'};
  border: 1px solid #333;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.active ? 'white' : 'rgba(52, 152, 219, 0.1)'};
  }
`;

export const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const PortfolioItem = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  height: 300px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

export const PortfolioImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
  
  ${PortfolioItem}:hover & {
    transform: scale(1.05);
  }
`;

export const PortfolioDetails = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem;
  background: rgba(51, 50, 49, 0.48);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  z-index: 10;
  
  /* Efek transisi untuk hover */
  transform: translateY(40%);
  transition: transform 0.2s ease;
  
  /* Tampilkan saat PortfolioItem di-hover */
  ${PortfolioItem}:hover & {
    transform: translateY(0);
  }
  
  h3 {
    font-family: 'Poppins-Bold', sans-serif; // Gunakan font Poppins Bold
    margin: 0 0 1rem 0;
    font-size: 1.3rem;
    font-weight: 40;
    color: white;
  }
  
  p {
    margin: 0;
    font-size: 1rem;
    color: white;
  }
  
  @media (max-width: 768px) {
    padding: 1.2rem;
    
    h3 {
      font-size: 1.2rem;
    }
    
    p {
      font-size: 0.9rem;
    }
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
    
    h3 {
      font-size: 1.1rem;
    }
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const PageButton = styled.button`
  background: ${(props) => (props.active ? "rgb(247, 209, 126)" : "transparent")};
  color: ${(props) => (props.active ? "#333" : "#000")};
  border: 1px solid #333;
  padding: 8px 12px;
  margin: 0 5px;
  cursor: pointer;
  border-radius: 4px;
  transition: background 0.3s;

  &:hover {
    background: rgb(247, 209, 126);
    color: #333;
  }

  &:disabled {
    background: #ddd;
    cursor: not-allowed;
  }
`;
