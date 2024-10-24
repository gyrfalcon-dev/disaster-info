import "./ArticleCard.css";
interface Props {
  text: string;
  url: string;
}

const ArticleCard = ({ text: name, url }: Props) => {
  return (
    <button className="article-card">
      <img src={url}></img>
      <h1>{name}</h1>
    </button>
  );
};

export default ArticleCard;
