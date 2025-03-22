import styled from "styled-components";

// Container utama header
export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 40px;
  background-color:rgb(247, 238, 220);
  color: black;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
`;

// Logo
export const Logo = styled.div`
  display: flex;
  align-items: center;

    img {
        width: auto;
        height: 2rem;
    }
`;

// Navigasi menu
export const NavMenu = styled.nav`
  ul {
    list-style: none;
    display: flex;
    gap: 20px;
  }

  li {
    display: inline;
  }

  a {
    text-decoration: none;
    color: Black;
    font-weight: 500;
    transition: 0.3s;

    &:hover {
      color:rgb(75, 74, 73);
    }
  }

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
    position: absolute;
    top: 50px;
    right: 0;
    background:rgb(228, 205, 155);
    width: 100%;
    text-align: center;
    padding: 10px 0;

    ul {
      flex-direction: column;
      gap: 10px;
    }
  }
`;

// Tombol menu untuk mobile
export const MenuButton = styled.button`
  background: none;
  border: none;
  color: black;
  font-size: 1.5rem;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;
