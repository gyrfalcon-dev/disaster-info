import "./ArticleCard.css";
interface Props {
  text: string;
  url: string;
  link: string;
}

const ArticleCard = ({ text: name, url, link }: Props) => {
  return (
    <a href={link} className="article-card">
      <img src={url}></img>
      <h1>{name}</h1>
    </a>
  );
};

export default ArticleCard;
