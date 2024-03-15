import React from "react";
import "./App.css";
import ItemDetail from "./components/master/ItemDetail.jsx";
import Navigation from "./components/Navigation.jsx";

function App() {
  return (
    <div>
      <Navigation />
      <ItemDetail />
    </div>
  );
}

export default App;
