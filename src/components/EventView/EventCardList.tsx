import EventCard from "../EventCard/EventCard.tsx";
import "./EventCardList.css";
import Thumbnail from "../../assets/hurricanehelene.jpg";
//Rename to EventCardList.tsx
function EventCardList() {
  return (
    <div className="eventcardlist">
      <EventCard
        name="HURRICANE HELENE"
        text="A devastating tropical cyclone that caused widespread destruction and fatalities across the Southeastern United States in late September 2024. It was the strongest hurricane on record to strike the Big Bend region of Florida, the deadliest Atlantic hurricane since Maria in 2017, and the deadliest to strike the mainland U.S. since Katrina in 2005."
        url="/events/hurricane-helene"
        type="hurricane"
      />
      <EventCard
        name="HURRICANE MILTON"
        text="An extremely powerful and devastating tropical cyclone which became the second-most intense Atlantic hurricane ever recorded over the Gulf of Mexico, behind only Hurricane Rita in 2005. Milton made landfall on the west coast of the U.S. state of Florida, less than two weeks after Hurricane Helene devastated the state's Big Bend region. The thirteenth named storm, ninth hurricane, fourth major hurricane, and second Category 5 hurricane of the 2024 Atlantic hurricane season, Milton is the strongest tropical cyclone worldwide in 2024 so far."
        url="/about"
        type="hurricane"
      />
    </div>
  );
}

export default EventCardList;
