import React from "react";
import "./SponsorSection.css";

const sponsors = [
  {
    name: "BIBA",
    image: "https://1000logos.net/wp-content/uploads/2022/11/Biba-Logo.png" ,
  },
  {
    name: "Realme",
    image: "https://logos-world.net/wp-content/uploads/2020/05/Realme-Logo.png",
  },
  {
    name: "Axis Bank",
    image: "https://download.logo.wine/logo/Axis_Bank/Axis_Bank-Logo.wine.png",
  },
  {
    name: "BOB Card",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/Bank_of_Baroda_logo.svg/512px-Bank_of_Baroda_logo.svg.png" ,
  },
  {
    name: "HSBC",
    image: "https://download.logo.wine/logo/HSBC/HSBC-Logo.wine.png",
  },
  {
    name: "IDFC Bank",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/Bank_of_Baroda_logo.svg/512px-Bank_of_Baroda_logo.svg.png" ,
  },
];

function SponsorSection() {
  return (
    <section className="sponsor-section">
      <h2>Our Sponsors & Banking Partners</h2>
      <div className="sponsor-logos">
        {sponsors.map((sponsor, index) => (
          <div key={index} className="sponsor-item">
            <img src={sponsor.image} alt={sponsor.name} />
            <p>{sponsor.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SponsorSection;
