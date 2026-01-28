import React, { useEffect, useState } from "react";

const HistoryPage = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const today = new Date();
    const month = String(today.getMonth() + 1).padStart(2, "0"); // zero-padded
    const day = String(today.getDate()).padStart(2, "0");

    const url = `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all/${month}/${day}`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((json) => setData(json))
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <div
      style={{
        backgroundColor: "skyblue",   // 👈 sky-blue background
        minHeight: "100vh",           // full viewport height
        padding: "20px",              // spacing around content
        fontFamily: "Arial, sans-serif"
      }}
    >
      <h2 style={{ textAlign: "center", color: "#333" }}>
        Historical Events on This Day
      </h2>

      <h3>Events</h3>
      <ul>
        {data.events?.length > 0 ? (
          data.events.map((event, index) => (
            <li key={index}>{event.text}</li>
          ))
        ) : (
          <li>No events found</li>
        )}
      </ul>

      <h3>Births</h3>
      <ul>
        {data.births?.length > 0 ? (
          data.births.map((birth, index) => (
            <li key={index}>{birth.text}</li>
          ))
        ) : (
          <li>No births found</li>
        )}
      </ul>

      <h3>Deaths</h3>
      <ul>
        {data.deaths?.length > 0 ? (
          data.deaths.map((death, index) => (
            <li key={index}>{death.text}</li>
          ))
        ) : (
          <li>No deaths found</li>
        )}
      </ul>
    </div>
  );
};

export default HistoryPage;
