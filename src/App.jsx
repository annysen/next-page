import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { useNavigation } from "react-router-dom";
import LoadingSpinner from "./components/LoadingSpinner";

const App = () => {
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <LoadingSpinner />;
  }
  return (
    <div>
      <Header />
      <Outlet />

      <Footer />
    </div>
  );
};

export default App;
