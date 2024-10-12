import Navbar from "../components/Navbar/Navbar.tsx";
import Background from "../components/Background/Background.tsx";
import EventView from "../components/EventView/EventView.tsx";
function Home() {
  return (
    <div className="background">
      <Navbar></Navbar>
      <EventView />
    </div>
  );
}

export default Home;
