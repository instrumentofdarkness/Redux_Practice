import React from "react";

export default function FavoriteProductList(
  { product, favProducts, setFavProducts }:
  { product: any, favProducts: any, setFavProducts: any }
) {
  function addFavHandler() {
    setFavProducts([...favProducts, product]);
  }

  return (
    <div>
      <h1>
        {product.name}
        <span> </span>
        <button name="fav" onClick={addFavHandler}>
          Add to Favorites
        </button>
      </h1>
    </div>
  );
}
