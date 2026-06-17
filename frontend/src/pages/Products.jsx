import { useEffect, useState } from "react";
import { productApi } from "../api/api";

function Products() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    productApi
      .get("/products")
      .then((response) => {
        setProducts(response.data);
      });

  }, []);

  return (
    <div>

      <h1>Products</h1>

      {products.map((product) => (
        <p key={product.id}>
          {product.name}
        </p>
      ))}

    </div>
  );
}

export default Products;