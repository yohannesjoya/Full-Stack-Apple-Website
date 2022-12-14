import React from "react";
// import ProductsPage from "../../ProductsPage/ProductsPage";
// import LearnComp from "../../Main/LearnComp";
import { Link } from "react-router-dom";
import "./OneIphoneDis.css";
export default function OneIphoneDisplay(props) {
  return (
    <section className="oneIphoneDisplay-wrapper container">
      <div className="row justify-content-center align-items-center text-center">
        <div
          className={`iPhone-text-contents col-12 col-md-6 order-${props.txtOrder}`}
        >
          <p className="IphoneTitle">{props.productName}</p>
          <p className="IphoneBriefDesc">{props.productBriefDesc}</p>
          <p className="IphoneStartingP">{props.startingPrice}</p>

          <p className="IphonePrange">{props.priceRange}</p>
          <Link className="learn-link" to={props.productUrl}>
            Learn
          </Link>
        </div>
        <div
          className={`iPhone-image-contents col-12 col-md-6 order-${props.imgOrder}`}
        >
          <img src={props.productImage} alt="here" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
