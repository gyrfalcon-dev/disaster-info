import "./EventCard.css";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
interface Props {
  name: string;
  text: string;
  url: string;
}
const EventCard = ({ name, text, url }: Props) => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(url)} className="eventcard">
      <h1 className="eventname thumbnail">{name}</h1>
      <div className="content">
        <p className="summary">{text}</p>
      </div>
    </button>
  );
};

export default EventCard;
