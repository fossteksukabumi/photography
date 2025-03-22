import React, { useState } from "react";
import {
  Section,
  Hero,
  Title,
  Description,
  PortfolioGrid,
  PortfolioItem,
  PortfolioImage,
  PortfolioDetails,
  FilterContainer,
  FilterButton,
  PaginationContainer,
  PageButton
} from "./Portfolio.styles";
import styled from "styled-components";
import project1 from "../../assets/foto/43.jpg";
import project2 from "../../assets/foto/43.jpg";
import project3 from "../../assets/foto/43.jpg";
import project4 from "../../assets/foto/43.jpg";
import project5 from "../../assets/foto/43.jpg";
import project6 from "../../assets/foto/43.jpg";

const projects = [
  { id: 1, title: "Website for Startup", category: "Web Development", image: project1 },
  { id: 2, title: "Branding for Coffee Shop", category: "Branding", image: project2 },
  { id: 3, title: "Mobile App UI/UX", category: "Design", image: project3 },
  { id: 4, title: "Website Redesign", category: "Web Development", image: project4 },
  { id: 5, title: "Branding for Fashion", category: "Branding", image: project5 },
  { id: 6, title: "Design System", category: "Design", image: project6 }
];

const categories = ["All", "Web Development", "Branding", "Design"];

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Jumlah item per halaman

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedProjects = filteredProjects.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const getPageNumbers = () => {
    let startPage = Math.max(1, currentPage - 1);
    let endPage = Math.min(totalPages, currentPage + 1);
    if (currentPage === 1) {
      endPage = Math.min(totalPages, startPage + 2);
    } else if (currentPage === totalPages) {
      startPage = Math.max(1, endPage - 2);
    }
    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
  };

  return (
    <Section>
      <Hero>
        <Title>Our Portfolio</Title>
        <Description>Explore our latest projects and designs.</Description>
      </Hero>

      <FilterContainer>
        {categories.map((category) => (
          <FilterButton
            key={category}
            active={selectedCategory === category}
            onClick={() => { setSelectedCategory(category); setCurrentPage(1); }}
          >
            {category}
          </FilterButton>
        ))}
      </FilterContainer>

      <PortfolioGrid>
        {displayedProjects.map((project) => (
          <PortfolioItem key={project.id}>
            <PortfolioImage src={project.image} alt={project.title} />
            <PortfolioDetails>
              <h3>{project.title}</h3>
              <p>{project.category}</p>
            </PortfolioDetails>
          </PortfolioItem>
        ))}
      </PortfolioGrid>

      {totalPages > 1 && (
        <PaginationContainer>
          <PageButton onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
            Prev
          </PageButton>
          {getPageNumbers().map((num) => (
            <PageButton
              key={num}
              active={currentPage === num}
              onClick={() => handlePageChange(num)}
            >
              {num}
            </PageButton>
          ))}
          <PageButton onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
            Next
          </PageButton>
        </PaginationContainer>
      )}
    </Section>
  );
};

export default PortfolioPage;