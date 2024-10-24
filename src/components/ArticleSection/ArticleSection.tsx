import ArticleCard from "../ArticleCard/ArticleCard";
import "./ArticleSection.css";
const ArticleSection = () => {
  return (
    <div className="article-section">
      <h1>Relief Efforts</h1>
      <div className="article-container">
        <ArticleCard
          text="FEMA report, this is veryh iportant because it useful"
          url="/src/assets/background.jpg"
        />
        <ArticleCard text="FEMA report" url="/src/assets/background.jpg" />
        <ArticleCard text="FEMA report" url="/src/assets/background.jpg" />
      </div>
      <div className="article-container">
        <ArticleCard text="FEMA report" url="/src/assets/background.jpg" />
        <ArticleCard text="FEMA report" url="/src/assets/background.jpg" />
      </div>
    </div>
  );
};

export default ArticleSection;
