import React from "react";
import "./NewsSection.css";
import NewsCard from "../NewsCard/NewsCard.tsx";
function NewsSection() {
  return (
    <div className="news-section">
      <h1>Related Articles</h1>
      <div className="news-container">
        <div className="scroll-parent">
          <div className="scroll-element primary">
            <NewsCard
              text="hi"
              url="/events"
              image="/src/assets/background.jpg"
            ></NewsCard>
            <NewsCard
              text="hi"
              url="/events"
              image="/src/assets/background.jpg"
            ></NewsCard>
            <NewsCard
              text="hi"
              url="/events"
              image="/src/assets/background.jpg"
            ></NewsCard>
            <NewsCard
              text="hi"
              url="/events"
              image="/src/assets/background.jpg"
            ></NewsCard>
          </div>
          <div className="scroll-element secondary">
            <NewsCard
              text="hi"
              url="/events"
              image="/src/assets/background.jpg"
            ></NewsCard>
            <NewsCard
              text="hi"
              url="/events"
              image="/src/assets/background.jpg"
            ></NewsCard>
            <NewsCard
              text="hi"
              url="/events"
              image="/src/assets/background.jpg"
            ></NewsCard>
            <NewsCard
              text="hi"
              url="/events"
              image="/src/assets/background.jpg"
            ></NewsCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsSection;
