import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import NotFoundPage from "./pages/NotFoundPage";
import LandingPage from "./pages/LandingPage";
import ShopPage from "./pages/ShopPage";
import ShopLayout from "./layouts/ShopLayout";

function App() {
  const [salads, setSalads] = useState([]);
  const [sandwichs, setSandwichs] = useState([]);
  const [pastas, setPastas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/salad")
      .then((Response) => Response.json())
      .then((data) => {
        setSalads(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:4000/sandwich")
      .then((Response) => Response.json())
      .then((data) => {
        setSandwichs(data);
      });
  }, []);
  useEffect(() => {
    fetch("http://localhost:4000/pastas")
      .then((Response) => Response.json())
      .then((data) => {
        setPastas(data);
      });
  }, []);
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route path="" element={<LandingPage />} />
          <Route path="/shop" element={<ShopLayout />}>
            <Route
              path=""
              element={
                <ShopPage
                  product_1={salads}
                  product_2={sandwichs}
                  product_3={pastas}
                />
              }
            />
            <Route
              path="all"
              element={
                <ShopPage
                  product_1={salads}
                  product_2={sandwichs}
                  product_3={pastas}
                />
              }
            />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
