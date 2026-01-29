import React, { useEffect, useState } from "react";

const QuotePage = () => {
  const [quote, setQuote] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/quote");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setQuote(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchQuote();
  }, []);

  if (error) return <p style={{ color: "red", textAlign: "center" }}>Error: {error}</p>;
  if (!quote) return <p style={{ textAlign: "left", fontStyle: "italic" }}>Loading...</p>;

  return (
    <div
      style={{
        backgroundColor: "lightgreen",   // 🌿 light green background
        minHeight: "100vh",              // full viewport height
        display: "flex",                 // flexbox for centering
        flexDirection: "column",
        justifyContent: "center",        // vertical center
        alignItems: "center",            // horizontal center
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        textAlign: "center"              // center text
      }}
    >
      <h2 style={{ color: "#333", marginBottom: "20px" }}>Quote of the Day</h2>
      <blockquote style={{ fontSize: "1.5rem", maxWidth: "600px" }}>
        “{quote.q}”
        <footer style={{ marginTop: "10px", fontStyle: "italic" }}>— {quote.a}</footer>
      </blockquote>
    </div>
  );
};

export default QuotePage;
