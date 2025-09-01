import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../index.css";

function Products() {
  return (
    <>
      <input
        className="bg-blue-200 border rounded px-2 ml-4"
        type="text"
        placeholder="search for products.."
      />
      <br />
      <div className="flex gap-4 ml-4 mt-4">
        <Link className="btn" to="featured">
          Featured
        </Link>
        <Link className="btn" to="new">
          New
        </Link>
      </div>

      <div className="mt-4 ml-4">
        <Outlet />
      </div>
    </>
  );
}

export default Products;
