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
              text="Associated Press"
              url="https://apnews.com/hub/hurricane-helene"
              image="/src/assets/NewsPictures/6.jpg"
            ></NewsCard>
            <NewsCard
              text="Britannica"
              url="https://www.britannica.com/event/Hurricane-Helene"
              image="/src/assets/NewsPictures/7.webp"
            ></NewsCard>
            <NewsCard
              text="BBC Weather"
              url="https://www.bbc.com/weather/articles/c1jdzwgepgzo?form=MG0AV3"
              image="/src/assets/NewsPictures/8.webp"
            ></NewsCard>
            <NewsCard
              text="USA TODAY"
              url="https://www.usatoday.com/story/news/nation/2024/09/30/asheville-north-carolina-helene-damage-flooding-photos/75448712007/"
              image="/src/assets/NewsPictures/9.webp"
            ></NewsCard>
          </div>
          <div className="scroll-element secondary">
            <NewsCard
              text="Associated Press"
              url="https://apnews.com/hub/hurricane-helene"
              image="/src/assets/NewsPictures/6.jpg"
            ></NewsCard>
            <NewsCard
              text="Britannica"
              url="https://www.britannica.com/event/Hurricane-Helene"
              image="/src/assets/NewsPictures/7.webp"
            ></NewsCard>
            <NewsCard
              text="BBC Weather"
              url="https://www.bbc.com/weather/articles/c1jdzwgepgzo?form=MG0AV3"
              image="/src/assets/NewsPictures/8.webp"
            ></NewsCard>
            <NewsCard
              text="USA TODAY"
              url="https://www.usatoday.com/story/news/nation/2024/09/30/asheville-north-carolina-helene-damage-flooding-photos/75448712007/"
              image="/src/assets/NewsPictures/9.webp"
            ></NewsCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsSection;
