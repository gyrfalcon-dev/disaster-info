import "./AboutUs.css";
function AboutUs() {
  return (
    <div className="aboutus">
      <div className="paragraph">
        <h1 style={{ fontWeight: 700, fontSize: 50 }}>What is DisasterInfo?</h1>
        <p>
          DisasterInfo is a nonprofit website that brings light to natural
          disaster events around the world.
        </p>
        <p>
          In the future, we plan to add an interactive 3D globe (like Google
          Earth) to visualize where natural events are occurring alongside the
          current disaster-card system.
        </p>
        <p>
          We use public APIs such as the GDACS API from the EU for visuals and
          statistics.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
