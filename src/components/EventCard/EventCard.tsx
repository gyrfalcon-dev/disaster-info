import "./EventCard.css";
interface Props {
  name: string;
  text: string;
}
const EventCard = ({ name, text }: Props) => {
  return (
    <button className="eventcard">
      <h1>{name}</h1>
      <p>{text}</p>
    </button>
  );
};

export default EventCard;
