import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const today = new Date();
  const options = { day: "numeric", month: "long" };
  const formattedDate = today.toLocaleDateString("en-US", options);

  return (
    <div>
      <img 
          src="https://th.bing.com/th/id/OIF.DByIBxWAivjHzMuHh89EKg?w=235&h=183&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3https://th.bing.com/th/id/OIF.DByIBxWAivjHzMuHh89EKg?w=235&h=183&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" 
          alt="World Map" 
          className=".page-background"
          style={{
          width: "100%",
          height: "auto", 
          display: "block",
          position: "absolute",
          zIndex: "-1",
          }}
       />
      <h2 className="home">ON THIS DAY</h2>
      <p className="home">{formattedDate}</p>
      <div className="homeb">
        <Link to="/Onthisday">
          <button>Historical Events</button>
        </Link>
        <Link to="/Quoteoftheday">
          <button>Quote of the Day</button>
        </Link>
      </div>
      <p className="pheq">History is full of turning points that shaped civilizations, and famous quotes often serve as timeless reflections of those moments. For example, when the American Declaration of Independence was signed in 1776, it echoed the spirit of freedom that would later be captured in Abraham Lincoln’s words: “Government of the people, by the people, for the people, shall not perish from the earth.” Similarly, Winston Churchill’s rallying cry during World War II—“We shall never surrender”—embodied resilience in the face of overwhelming odds. Even in times of peace, voices like Mahatma Gandhi’s remind us of the power of nonviolence: “Be the change that you wish to see in the world.” These quotes transcend their original contexts, becoming guiding principles that continue to inspire generations long after the events themselves have passed.</p>
    </div>
  );
};

export default Home;
