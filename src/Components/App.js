import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "Components/Header";
import AppRouter from "Components/Router";

const App = () => {
  return (
    <Router>
      <Header />
      <AppRouter />
    </Router>
  );
};

export default App;
