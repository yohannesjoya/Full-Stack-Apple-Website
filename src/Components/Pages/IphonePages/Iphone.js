import React, { useState, useEffect } from "react";
import OneIphoneDisplay from "./OneIphoneDisplay";
import "./OneIphoneDis.css";
export default function Iphone() {
  var [ProductsList, setProductsList] = useState([]);
  // var [joke, setJoke] = useState(null);

  useEffect(() => {
    // fetch("http://localhost:3000/iphones.json")
    fetch("http://localhost:1000/iphone")
      .then((res) => res.json())
      .then((data) => {
        setProductsList(data.products);
      });

    // fetch("https://official-joke-api.appspot.com/random_joke")
    //   .then((res) => res.json())
    //   .then((jj) => {
    //     if (joke)
    //     setJoke(jj.setup);
    //   });
  }, []);

  return (
    <>
      {/* <h1>{joke}</h1> */}
      <h1 className="IphoneHeader">iPhones</h1>
      <p className="Iphone-slogan">
        <i>The Best for the Brightest</i>
      </p>
      <div>
        {ProductsList.map((element, index) => {
          let imgOrd;
          let txtOrd;
          if (index % 2 === 0) {
            imgOrd = 1;
            txtOrd = 2;
          } else {
            imgOrd = 2;
            txtOrd = 1;
          }
          return (
            <div key={element.product_id}>
              <OneIphoneDisplay
                imgOrder={imgOrd}
                txtOrder={txtOrd}
                productName={element.product_name}
                productBriefDesc={element.product_brief_description}
                startingPrice={element.starting_price}
                priceRange={element.price_range}
                productImage={element.product_img}
                productUrl={ element.product_url}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
