import React from "react";
import { createRoot } from "react-dom/client";

function Card(props) {
  const { id, title, image, brand, price } = props;
   console.log("ID (acts as key):", id); // ✅
  return (
    <div className="card" key={id}>
      <img src={image} alt="iphone" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{brand}</p>
        <p>
          <b>${price}</b>
        </p>
      </div>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));

// Using JSX (Recommended)
root.render(
  React.createElement(Card, {
    id: 12,
    title: "Essence Mascara Lash Princess",
    image: 'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp',
    brand: "Essence",
    price: 9.99,
  })
);