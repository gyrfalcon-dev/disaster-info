import Navbar from "../components/Navbar/Navbar.tsx";
import Background from "../components/Background/Background.tsx";
import EventCardList from "../components/EventView/EventCardList.tsx";
import "../components/Background/Background.css";
import HurricaneHelene from "../components/HurricaneHelene/HurricaneHelene.tsx";
function Events() {
  return (
    <div className="background">
      <Navbar></Navbar>
      <EventCardList />
    </div>
  );
}

export default Events;
