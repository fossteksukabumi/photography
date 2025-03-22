import React from "react";
import {
  Section,
  ImageContainer,
  InfoContainer,
  Title,
  Description,
  BenefitList,
  BenefitItem,
  PackageSection,
  PackageList,
  PackageItem,
  PackageTitle,
  PackagePrice,
  PackageDescription,
  PackageImage,
  Button
} from "./About.style";
import { FaCheckCircle } from "react-icons/fa";
import aboutImage from "../../assets/foto/43.jpg";

// Import package images
import qualityImage1 from "../../assets/foto/43.jpg";
import qualityImage2 from "../../assets/foto/42.jpg";
import qualityImage3 from "../../assets/foto/43.jpg";

const packages = [
  { 
    title: "Basic Package", 
    description: "Basic features with standard quality. Perfect for individuals and small projects.", 
    price: "$29",
    image: qualityImage1
  },
  { 
    title: "Standard Package", 
    description: "Includes additional features with high quality. Ideal for growing businesses.", 
    price: "$49",
    image: qualityImage2
  },
  { 
    title: "Premium Package",

    description: "Full premium features and top-notch quality. Best choice for professional needs.", 
    price: "$99",
    image: qualityImage3
  }
];

const benefits = [
  "High-quality products & services",
  "24/7 customer support",
  "Affordable pricing",
  "Fast & reliable delivery",
  "100% customer satisfaction"
];

const AboutPage = () => {
  return (
    <Section>
      <ImageContainer>
        <img src={aboutImage} alt="About Us" />
      </ImageContainer>

      <InfoContainer>
        <div className="scrollable-content">
          <Title>About Us</Title>
          <Description>
            Welcome to our company! We are dedicated to providing the best services 
            and products to our customers. Our team is passionate, innovative, and 
            always ready to assist you.
          </Description>

          <Description>
            Established in 2020, we have grown rapidly by focusing on quality and 
            customer satisfaction. Join us on our journey!
          </Description>

          {/* Benefits Section */}
          <Title>Why Choose Us?</Title>
          <BenefitList>
            {benefits.map((benefit, index) => (
              <BenefitItem key={index}>
                {benefit}
              </BenefitItem>
            ))}
          </BenefitList>

          {/* Packages Section */}
          <Title>Our Packages</Title>
          <PackageSection>
            <PackageList>
              {packages.map((pkg, index) => (
                <PackageItem key={index}>
                  <PackageImage src={pkg.image} alt={pkg.title} />
                  <PackageTitle>{pkg.title}</PackageTitle>
                  <PackageDescription>{pkg.description}</PackageDescription>
                  <PackagePrice>
                    {pkg.price} <span>/ month</span>
                  </PackagePrice>
                  <Button>Choose Plan</Button>
                </PackageItem>
              ))}
            </PackageList>
          </PackageSection>
        </div>
      </InfoContainer>
    </Section>
  );
};

export default AboutPage;