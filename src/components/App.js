import './App.css';
import CategoriesList from "./CategoriesList/CategoriesList";
import React, {useEffect} from "react";
import {Header} from "./Header/Header";

function App() {
  useEffect(()=>{
    // todo load categories
  },[])

  return (
    <>
      <Header />
      <CategoriesList />
    </>
  );
}

export default App;
