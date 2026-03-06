import React from "react";
import { Hero } from "../components/Hero";
import { TrendyProducts } from "../components/TrendyProducts";
import { ProductList } from "../components/ProductList";
import { Wellness } from "../components/Wellness";
import { OurDifference } from "../components/OurDifference";

export function Home() {
  return (
    <main>
      <Hero />
      <TrendyProducts />
      <ProductList />
      <Wellness />
      <OurDifference />
    </main>
  );
}
