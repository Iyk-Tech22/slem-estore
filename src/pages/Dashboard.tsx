import React from "react";
import Hero from "../components/Hero";
import Category from "../components/Category";

export default function Dashboard() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Category />
    </div>
  );
}
