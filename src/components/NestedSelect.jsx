import React, { useState } from "react";
import SalesCharts from "./SalesCharts";
import SelectList from "./SelectList";


const NestedSelect = () => {

  const [category,SetCategory] = useState("");
  const [product,SetProduct] = useState("");
  const [brand,SetBrand] = useState("");

    const categoryStatic = '3639f038-1f07-4aa0-89c6-f40b122577f5';
    const productStatic = '55f93ce4-f710-4326-ab65-34a90fbf3d7b';
    const brandStatic = '070eaecf-a603-4680-9fd0-17e4d243b1d3';


  return (
    <>
      {/* <SelectList title="categoria" url="http://localhost:3001/category" handleChange={(e) =>{SetCategory(e.target.value)}} />
      
      {category && ( <SelectList title="producto" url={`http://localhost:3001/nomenclator/category/${category.id}`} handleChange={(e) =>{SetProduct(e.target.value)}} />)}
      
      {product && (<SelectList title="marca" url={`http://localhost:3001/nomenclator/product/${product.id}`} handleChange={(e) =>{SetBrand(e.target.value)}} />)} */}
      
      <SalesCharts category = {categoryStatic} product = {productStatic} brand = {brandStatic}/>
    </>
  );
}
export default NestedSelect;
