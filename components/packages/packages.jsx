import React, {useState} from "react";
import styles from "./packages.module.css";

function Card({ title, header, description, background, hoverImage, onSelect, isSelected }) {
  
    const handleImageClick = () => {
        onSelect(title);
    };
    
    const cardStyle = {
      backgroundImage: `url(${background})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    };
  
    const hoverImageStyle = {
      backgroundImage: `url(${hoverImage})`,
    };
  
    return (
      <div className={`${styles.card} ${isSelected ? styles.selected : ''}`} style={cardStyle}>
        <div 
          className={styles.card_image}
          style={hoverImageStyle}
          onClick={handleImageClick}
        ></div>
        <div className={styles.select_package}>{isSelected ? "SELECTED" : "SELECT"}</div>
        <div className={styles.card_text}>
          <h2>{title}</h2>
          <div className={styles.card_content}>
            <div className={styles.card_header}>
              <h4>{header}</h4>
            </div>
            <p className={styles.fade_text}>{description}</p>
          </div>
        </div>
      </div>
    );
}

export default function Packages({onCardSelect }) {
    const [selectedCard, setSelectedCard] = useState("");

    const handleCardSelect = (title, cardNumber) => {
        if (selectedCard === title) {
            setSelectedCard(""); 
        } else {
            setSelectedCard(title);
            onCardSelect(cardNumber);
        }
    };

    return (
      <div className={styles.card_container}>
        <Card
          title="1 Surgery"
          header="Elevate Your Experience in Thailand"
          description="Thailand, a haven of natural beauty and cultural richness, now offers an elevated experience: world-class surgical transformations. Beyond its pristine beaches and luxury accommodations, it's fast becoming the go-to destination for those seeking state-of-the-art surgical metamorphosis. Whether you're envisioning a cutting-edge facelift or a more profound change, Thailand's elite medical facilities guarantee precision, care, and discretion. After undergoing their chosen procedure, patients can recuperate in lavish recovery suites, blending top-tier medical care with unparalleled luxury. Thailand isn't just a vacation; it's a journey to a renewed self."
          background="/images/packages/package1-bg.jpg"
          hoverImage="/images/packages/package1.jpg"
          isSelected={selectedCard === "1 Surgery"}
          onSelect={(title) => handleCardSelect(title, 1)}
          onClick={() => handleCardClick(1)}
        />
        <Card
          title="2 Surgeries"
          header="Double the Transformation in Thailand"
          description="Experience the allure of Thailand, not just for its stunning landscapes and opulent accommodations, but for a dual surgical journey that promises to redefine. Choosing two surgeries in this exotic paradise isn't only about achieving multiple aesthetic goals, but it's also a wise economic choice. Thailand offers premium medical expertise at a fraction of global prices, and combining procedures can maximize both savings and results. Imagine, reshaping one aspect of yourself while enhancing another, all under the meticulous hands of world-renowned surgeons. As you recover in a serene setting, you'll soon realize that opting for a double transformation is not just about aesthetics, but about embracing a holistic change at unmatched value. Why settle for one when Thailand offers you the allure of two?"
          background="/images/packages/package2-bg.jpg"
          hoverImage="/images/packages/package2.jpg"
          isSelected={selectedCard === "2 Surgeries"}
          onSelect={(title) => handleCardSelect(title, 2)}
          onClick={() => handleCardClick(2)}
        />
        <Card
          title="3 Surgeries"
          header="Triple the Allure in Thailand: A Must-Experience Journey"
          description="Thailand isn't just a luxury travel destination; it's the epicenter of transformative experiences, especially when it comes to tri-fold surgical enhancements. Here's the secret: three surgeries offer not just triple the refinement but an unparalleled synergy that one or two can't match. By harmoniously addressing multiple areas, you're ensuring a balanced, comprehensive metamorphosis. Economically, the decision is even clearer. The combined cost for three procedures in Thailand vastly undercuts global prices without compromising on quality. Moreover, the recuperation is nothing short of indulgence in world-class resorts. If you're contemplating a change, the trio-package isn't just an option; it's the zenith of aesthetic journeys. In the realm of self-improvement, three isn't just company —it's perfection."
          background="/images/packages/package3-bg.jpg"
          hoverImage="/images/packages/package3.jpg"
          isSelected={selectedCard === "3 Surgeries"}
          onSelect={(title) => handleCardSelect(title, 3)}
          onClick={() => handleCardClick(3)}
        />
      </div>
    );
}
