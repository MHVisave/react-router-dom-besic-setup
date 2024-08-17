// src/pages/About.jsx
import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Us</h1>
      <p className={styles.description}>
        Welcome to our website! We are dedicated to providing you with the best
        service possible. Our team is passionate about delivering high-quality
        solutions and ensuring customer satisfaction.
      </p>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        corrupti eligendi tempore omnis recusandae ex non in ullam amet et
        eveniet, suscipit dicta voluptate molestiae doloremque officiis. Est quo
        iusto odio quaerat molestias quidem obcaecati necessitatibus,
        perspiciatis ipsa neque officiis ut temporibus fugit consequatur. Itaque
        ullam unde aspernatur quaerat ut delectus provident dolore debitis nobis
        sapiente? Quibusdam, placeat dolor dolores, quam veritatis tempora
        dolore laborum nulla voluptatibus expedita cum excepturi inventore?
        Pariatur eos fuga, qui omnis blanditiis odit! Assumenda, quia quos.
        Excepturi, sunt debitis. Hic molestias deserunt sapiente quisquam quas
        asperiores excepturi, ea tenetur quo nulla, ipsum adipisci facilis
        voluptas consequatur?
      </p>
      <p className={styles.description}>
        Thank you for visiting our website. If you have any questions or need
        further information, feel free to reach out to us!
      </p>
    </div>
  );
};

export default About;
