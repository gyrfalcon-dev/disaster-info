import "./EventCard.css";
interface Props {
  name: string;
  text: string;
}
const EventCard = ({ name, text }: Props) => {
  return (
    //make title top only
    <button className="eventcard">
      <h1 className="eventname thumbnail">{name}</h1>
      <div className="content">
        <p className="summary">{text}</p>
      </div>
    </button>
  );
};

export default EventCard;
