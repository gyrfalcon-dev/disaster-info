import ArticleCard from "../ArticleCard/ArticleCard";
import "./ArticleSection.css";
const ArticleSection = () => {
  return (
    <div className="article-section">
      <h1>Resources</h1>
      <div className="article-container">
        <ArticleCard
          text="FEMA"
          url="/src/assets/ArticlePictures/1.jpg"
          link="https://www.fema.gov/disaster/current/hurricane-helene"
        />
        <ArticleCard
          text="NOAA"
          url="/src/assets/ArticlePictures/2.jpg"
          link="https://www.noaa.gov/helene"
        />
        <ArticleCard
          text="USAGov"
          url="/src/assets/ArticlePictures/3.jpg"
          link="https://www.usa.gov/hurricane-helene"
        />
      </div>
      <div className="article-container">
        <ArticleCard
          text="Red Cross"
          url="/src/assets/ArticlePictures/4.jpg"
          link="https://www.redcross.org/about-us/our-work/disaster-relief/hurricane-relief/hurricane-helene.html"
        />
        <ArticleCard
          text="Charity Navigator"
          url="/src/assets/ArticlePictures/5.jpg"
          link="https://www.charitynavigator.org/discover-charities/where-to-give/hurricane-helene-2024/"
        />
      </div>
    </div>
  );
};

export default ArticleSection;
