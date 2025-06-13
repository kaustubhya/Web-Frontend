import React from "react";
import "./style.css";
import { createRoot } from "react-dom/client";

/**
 * A single card component that displays the given image, title, brand and price.
 * @param {{key: string, title: string, image: string, brand: string, price: string}} props 
 * @returns {JSX.Element}
 */
function Card({id, title, image, brand, price}) {
  console.log(id);
  // for keys, we will use id as key
  // To use the key value inside your component, pass it as a separate prop, like id.
  return (
    <>
      <div className="card-container">
        <div className="card" >
          <img
            src={image}
            alt="iphone"
          />
        </div>
        <div className="card-content">
          <h2>{title}</h2>
          <p>{brand}</p>
          <p>{price}</p>
        </div>
      </div>
    </>
  );
}
const root = createRoot(document.getElementById("root"));

fetch("https://dummyjson.com/products")
.then((res) => res.json())
.then((data) => {
  root.render(
    <div className="container">
      {data.products.map((product) => (
         <Card
          key={product.id}
          id={product.id}
          title={product.title}
          image={product.thumbnail}
          brand={product.brand}
          price={product.price}
        />
      ))}
    </div>
  )
})
