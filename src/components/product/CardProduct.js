import React from "react";

import { Link } from "react-router-dom";

export default function CardProduct({ product }) {
  return (
    <tr>
      <th scope="col">{product.id}</th>
      <th scope="col">{product.name}</th>
      <th scope="col">{product.price}</th>
      <th scope="col">
        <Link className="btn btn-dark" to={"/EditProduct/" + product.id}>
          Edit
        </Link>
      </th>
    </tr>
  );
}
