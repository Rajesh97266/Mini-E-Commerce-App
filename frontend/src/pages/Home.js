/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment } from "react";
import ProductCart from "../components/ProductCart";


export default function Home() {
    return (
      <Fragment>
      

        <h1 id="products_heading">Latest Products</h1>

        <section id="products" className="container mt-5">
          <div className="row">
            <ProductCart />
            
          </div>
        </section>

       
      </Fragment>
    );
}