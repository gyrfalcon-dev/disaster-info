import "./EventCard.css";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
interface Props {
  name: string;
  text: string;
  url: string;
  type: string;
}

const EventCard = ({ name, text, url, type }: Props) => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(url)} className="eventcard">
      <h1 className="eventname thumbnail">
        <img
          className="icon"
          src="/src/assets/hurricaneicon.png"
          width="45px"
          height="45px"
        />
        {name}
      </h1>

      <div className="content">
        <p className="summary">{text}</p>
      </div>
    </button>
  );
};

export default EventCard;
