import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "Components/Header";
import AppRouter from "Components/Router";
import GlobalStyles from "./GlobalStyles";

const App = () => {
  return (
    <Router>
      <Header />
      <AppRouter />
      <GlobalStyles />
    </Router>
  );
};

export default App;
