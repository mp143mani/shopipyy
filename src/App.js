import React, { useState } from 'react';
import NavBar from './component/NavBar';
import Head from './component/Head';
import Card from './component/Card';
import Footer from './component/Footer';

function App() {
  let [cartvalue, setCartvalue] = useState(0);

  return (
    <>
      <NavBar cartvalue={cartvalue} />
      <Head />
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <Card cartvalue={cartvalue} setCartvalue={setCartvalue} />
            <Card cartvalue={cartvalue} setCartvalue={setCartvalue} />
            <Card cartvalue={cartvalue} setCartvalue={setCartvalue} />
            <Card cartvalue={cartvalue} setCartvalue={setCartvalue} />
            <Card cartvalue={cartvalue} setCartvalue={setCartvalue} />
            <Card cartvalue={cartvalue} setCartvalue={setCartvalue} />
            <Card cartvalue={cartvalue} setCartvalue={setCartvalue} />
            <Card cartvalue={cartvalue} setCartvalue={setCartvalue} />
            
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
