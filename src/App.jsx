import Context from "./Components/Context";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import React, { useState } from 'react'

function App() {

    const [basketIsShow,setBasketIsShow] =useState(false)

    const basketShow =()=>{
      setBasketIsShow(!basketIsShow)}
  return (
    <>
    <Header basketShow={basketShow} setBasketIsShow={setBasketIsShow}/>
    <Context basketIsShow={basketIsShow} setBasketIsShow={setBasketIsShow}/>
    <Footer/>
    </>
  );
}

export default App;
