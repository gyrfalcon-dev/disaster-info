import "./InfoSection.css";
import InfoCard from "../InfoCard/InfoCard";

function InfoSection() {
  return (
    <div className="info-section">
      <div className="info-container">
        <div className="info-card">
          <img src="/src/assets/helenemap.png"></img>
        </div>
        <div className="info-card" style={{ justifyContent: "left" }}>
          <h1>Important Facts</h1>
          <ul>
            <li>Hundreds of people have died</li>
            <li>Numerous valley communities are devastated and isolated</li>
            <li>
              Estimated $200 billion in damages
              <ul>
                <li>Homes</li>
                <li>Businesses</li>
                <li>Infrastructure</li>
              </ul>
            </li>
            <li>
              State and federal governments are working with nonprofits in
              rescue and relief initiatives
            </li>
          </ul>
        </div>
        <div className="info-card">
          <img src="/src/assets/helenedamage.jpg"></img>
        </div>
        <div className="info-card" style={{ justifyContent: "left" }}>
          <h1>How to Help</h1>
          <ul>
            <li>
              Anywhere:
              <ul>
                <li>Spread awareness</li>
                <li>Fundraising</li>
                <li>
                  Donations:
                  <ul>
                    <li>Money</li>
                    <li>Non-perishable food</li>
                    <li>Clothing</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              Close to the affected area:
              <ul>
                <li>Volunteering</li>
                <li>Supporting local businesses</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default InfoSection;
