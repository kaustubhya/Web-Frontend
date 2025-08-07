import { createRoot } from "react-dom/client";
import "./style.css";

// 📦 Reusable Card component that displays product info
// Receives props: id (used in content), price, brand, image, title
function Card({ id, price, brand, image, title }) {
  return (
    <div className="card">
      {/* 🖼️ Product image */}
      <img src={image} alt={`Image of ${title}`} />

      <div className="card-content">
        {/* 🏷️ Title, Brand and Price */}
        <h3>{title}</h3>
        <p>{brand}</p>
        <p>
          <b>${price}</b>
        </p>

        {/* 🆔 Just to show that 'id' is accessible inside the component */}
        <small>Product ID: {id}</small>
      </div>
    </div>
  );
}

// 🔗 Get a reference to the root DOM element and attach React to it
const root = createRoot(document.getElementById("root"));

// 🛠️ Fetch product data from the API and render it
fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
    // ✅ Render a list of <Card /> components inside a container
    root.render(
      <div className="container">
        {data.products.map((product) => (
          <Card
            key={product.id}         // ✅ 'key' is for React’s internal use (must be unique in list)
            id={product.id}          // ✅ 'id' is passed as a prop (can be used inside the component)
            title={product.title}
            image={product.thumbnail}
            brand={product.brand}
            price={product.price}
          />
        ))}
      </div>
    );
  });
