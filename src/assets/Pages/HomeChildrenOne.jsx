import React from "react";
import styles from "./Home.module.css";

const HomeChildrenOne = ({
  image,
  altText,
  heading,
  paragraph1,
  paragraph2,
}) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <img src={image} alt={altText} className={styles.image} />
        </div>
        <div className={styles.textContent}>
          <h1 className={styles.heading}>{heading}</h1>
          <p className={styles.paragraph}>{paragraph1}</p>
          <p className={styles.paragraph}>{paragraph2}</p>
        </div>
      </div>
    </>
  );
};

// Setting default props
HomeChildrenOne.defaultProps = {
  heading: "Default Heading",
  paragraph1: "Default content for the first paragraph.",
  paragraph2: "Default content for the second paragraph.",
};

export default HomeChildrenOne;
