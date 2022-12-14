import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ProductsPage() {
  var [Product, setProduct] = useState([]);
  var { urlId } = useParams();
  useEffect(() => {
    // fetch("http://localhost:3000/iphones.json")
    fetch("http://localhost:1000/iphone")
      .then((res) => res.json())
      .then((data) => {
        const ProductsList = data.products;
        var singleProduct = ProductsList.filter((x) => x.product_url === urlId);
        setProduct(() => singleProduct);
      });
  }, []);

  return Product.map((x) => {
    return (
      <section className="oneIphoneDisplay-wrapper container">
        <div className="row justify-content-center align-items-center text-center">
          <div className={`iPhone-text-contents col-12 col-md-6 order-1`}>
            <p className="IphoneTitle">{x.product_name}</p>
            <p className="IphoneBriefDesc">{x.product_brief_description}</p>
            <p className="IphoneStartingP">{x.starting_price}</p>

            <p className="IphonePrange">{x.price_range}</p>
            <p>{x.product_description}</p>
          </div>
          <div className={`iPhone-image-contents col-12 col-md-6 order-2`}>
            <img src={x.product_img} alt="here" loading="lazy" />
          </div>
        </div>
      </section>
    );
  });
}
