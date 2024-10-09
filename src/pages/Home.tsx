import Navbar from "../components/Navbar/Navbar.tsx";
import Background from "../components/Background/Background.tsx";
import EventView from "../components/EventView/EventView.tsx";

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Background></Background>
      <div>
        <EventView />
      </div>
    </>
  );
}

export default Home;
