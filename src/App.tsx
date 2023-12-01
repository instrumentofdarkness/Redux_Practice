import React from "react";
import "./App.css";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

import ProductList from "./components/ProductList";


function App() {
  function FavouriteProducts({ favProducts }: { favProducts: any }) {

  return <div className="App">
    <h1>
      {favProducts.map((favProduct: any) => (
        <div key={favProduct.id}>
          <p>{favProduct.name}</p>
        </div>
      ))}{" "}
    </h1>
    <ProductList />

  </div>;
}
}


export default App; 
export { FavouriteProducts };
