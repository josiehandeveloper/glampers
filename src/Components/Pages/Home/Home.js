import React from "react";
import Hero from "../../Hero/Hero";
import Card from "../../Card/Card";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Hero />
      <div className="cards__container">
        <Card
          src="https://images.unsplash.com/photo-1541004995602-b3e898709909?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          title="Cozy Camper in a Serene Farmland"
          description="Offers an idyllic country escape"
          price="$75/night"
        />
        <Card
          src="https://images.unsplash.com/photo-1589508420947-34b40f3d28be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
          title="Tiny Home near Crater Lake"
          description="Perfect for a weekend getaway"
          price="$60/night"
        />
        <Card
          src="https://images.unsplash.com/photo-1536395155544-a3ba483e0b9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          title="Mongolian Yurt in Joshua Tree"
          description="Enjoy the stars under the desert sky"
          price="$70/night"
        />
        <Card
          src="https://images.unsplash.com/photo-1503516353893-4bc5bd56f50d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1498&q=80"
          title="Van Life by the Ocean"
          description="Hear the ocean waves in an intimate setting"
          price="$50/night"
        />
      </div>
      <div className="cards__container">
        <Card
          src="https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          title="Vintage Airstream in the Countryside"
          description="All the amenities of being at home"
          price="$85/night"
        />
        <Card
          src="https://images.unsplash.com/photo-1582840996732-e9c89c6feb34?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          title="Teepee Surrounded by Joshua Trees"
          description="Unique experience"
          price="$70/night"
        />
        <Card
          src="https://images.unsplash.com/photo-1618767689160-da3fb810aad7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          title="Treehouse Amongst the Forest"
          description="One of a kind stay"
          price="$50/night"
        />
      </div>
    </div>
  );
}

export default Home;
