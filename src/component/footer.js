import React from "react";
import "../App.css";

const styles = {
  footer: {
    backgroundColor: "hsl(218, 23%, 16%)",
    textAlign: "center",
    fontSize: "10px",
    padding: "10px",
    color: "hsl(193, 38%, 86%)",
  },
  a: {
    fontSize: "10px",
    color: "hsl(193, 38%, 86%)",
  },
};

// eslint-disable-next-line react/prop-types
export function Footer() {
  return (
    <footer style={styles.footer}>
      Challenge by{" "}
      <a
        style={styles.a}
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noreferrer"
      >
        Frontend Mentor
      </a>{" "}
      | Coded by{" "}
      <a
        style={styles.a}
        href="https://www.frontendmentor.io/profile/Vanillatte68"
      >
        Roselin Y
      </a>
    </footer>
  );
}
