/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment } from "react";
import ProductCart from "../components/ProductCart";
import { useState, useEffect } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/products")
      .then((res) => res.json())
      .then((res) => {
        setProducts(res.products);
      });
  }, []);
  return (
    <Fragment>
      <h1 id="products_heading">Latest Products</h1>

      <section id="products" className="container mt-5">
        <div className="row">
         {
          products.map((product) => (
            <ProductCart  product={product} key={product._id}/>
          ))
         }
        </div>
      </section>
    </Fragment>
  );
}
