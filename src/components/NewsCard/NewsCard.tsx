import React from "react";
import "./NewsCard.css";
interface Props {
  text: string;
  url: string;
  image: string;
}

const NewsCard = ({ text, url, image }: Props) => {
  return (
    <button className="news-card">
      <div
        className="news-background"
        style={{ backgroundImage: `url(${image})` }}
      >
        <h1>{text}</h1>
      </div>
    </button>
  );
};

export default NewsCard;
