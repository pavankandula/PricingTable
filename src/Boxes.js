import React from "react";

const Boxes = (props) => {
  return (
      <div className="containers">
        <div className="boxContainer">
          <div className="priceType">
            <h3 className="priceHeading">{props.priceHeading}</h3>
            <h1 className="priceTag">
              <span className="price-amount">{props.price}</span>{" "}
              <span className="price-duration">/month</span>
            </h1>
          </div>
          <hr></hr>
          <ul className="price-feature">
            <li>{props.userNumber}</li>
            <li>{props.data} Storage</li>
            <li>Unlimited Public Projects</li>
            <li>Community Access</li>
            <li>Unlimited Private Projects</li>
            <li>Dedicated Phone Support</li>
            <li>Free Subdomain</li>
            <li>Monthly Status Reports</li>
          </ul>
          <button className="price-button">Button</button>
        </div>
      </div>
  );
};

export default Boxes;
