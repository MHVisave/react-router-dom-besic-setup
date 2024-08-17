// Gallery.jsx
import React from "react";
import styles from "./Gallery.module.css";
import Image1 from "../assets/Images/20.jpg";
import Image2 from "../assets/Images/21.jpg";
import Image3 from "../assets/Images/22.jpg";
import Image4 from "../assets/Images/23.jpg";
import Image5 from "../assets/Images/27.jpg";
import Image6 from "../assets/Images/25.jpg";

const Card = ({ title, description, imageUrl, link1, link2 }) => {
  return (
    <div className={styles.card}>
      {imageUrl && (
        <img src={imageUrl} alt={title} className={styles.cardImage} />
      )}
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <p className={styles.cardDescription}>{description}</p>
        <div className={styles.cardLinks}>
          {link1 && (
            <a
              href={link1.href}
              className={styles.cardLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link1.text}
            </a>
          )}
          {link2 && (
            <a
              href={link2.href}
              className={styles.cardLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link2.text}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const cards = [
    {
      title: "Card Title 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, animi cumque! Earum temporibus quam quod est sapiente doloremque recusandae repudiandae quidem odio nesciunt a maiores pariatur, itaque unde architecto distinctio?",
      imageUrl: Image1,
      link1: { href: "https://example.com", text: "Link 1" },
      link2: { href: "https://example.org", text: "Link 2" },
    },
    {
      title: "Card Title 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, animi cumque! Earum temporibus quam quod est sapiente doloremque recusandae repudiandae quidem odio nesciunt a maiores pariatur, itaque unde architecto distinctio?",
      imageUrl: Image2,
      link1: { href: "https://another-example.com", text: "Link A" },
      link2: { href: "https://another-example.org", text: "Link B" },
    },
    {
      title: "Card Title 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, animi cumque! Earum temporibus quam quod est sapiente doloremque recusandae repudiandae quidem odio nesciunt a maiores pariatur, itaque unde architecto distinctio?",
      imageUrl: Image3,
      link1: { href: "https://yet-another-example.com", text: "Link X" },
      link2: { href: "https://yet-another-example.org", text: "Link Y" },
    },
    {
      title: "Card Title 4",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, animi cumque! Earum temporibus quam quod est sapiente doloremque recusandae repudiandae quidem odio nesciunt a maiores pariatur, itaque unde architecto distinctio?",
      imageUrl: Image4,
      link1: { href: "https://yet-another-example.com", text: "Link X" },
      link2: { href: "https://yet-another-example.org", text: "Link Y" },
    },
    {
      title: "Card Title 5",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, animi cumque! Earum temporibus quam quod est sapiente doloremque recusandae repudiandae quidem odio nesciunt a maiores pariatur, itaque unde architecto distinctio?",
      imageUrl: Image5,
      link1: { href: "https://yet-another-example.com", text: "Link X" },
      link2: { href: "https://yet-another-example.org", text: "Link Y" },
    },
    {
      title: "Card Title 6",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, animi cumque! Earum temporibus quam quod est sapiente doloremque recusandae repudiandae quidem odio nesciunt a maiores pariatur, itaque unde architecto distinctio?",
      imageUrl: Image6,
      link1: { href: "https://yet-another-example.com", text: "Link X" },
      link2: { href: "https://yet-another-example.org", text: "Link Y" },
    },
    // Add more cards as needed
  ];

  return (
    <div className={styles.gallery}>
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          imageUrl={card.imageUrl}
          link1={card.link1}
          link2={card.link2}
        />
      ))}
    </div>
  );
};

export default Home;
