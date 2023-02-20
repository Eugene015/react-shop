import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Checkout from "./scenes/home/checkout/Checkout";
import Confirmation from "./scenes/home/checkout/Confirmation";
import CartMenu from "./scenes/home/global/CartMenu";
import Navbar from "./scenes/home/global/Navbar";
import Home from "./scenes/home/Home";
import ItemDetails from "./scenes/home/itemDetails/ItemDetails";
import Footer from "./scenes/home/global/Footer";
import Login from "./scenes/Login";
import Register from "./scenes/Register";
import Search from "./scenes/Search";
import { useFetchUser, UserProvider } from "./services/authContext";
import Profile from "./scenes/Profile";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const { user, loading } = useFetchUser();

  return (
    <div className="app">
      <BrowserRouter>
        <UserProvider>
          <Navbar user={user} />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/searchpage" element={<Search />} />
            <Route path="item/:itemId" element={<ItemDetails />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="checkout/success" element={<Confirmation />} />
          </Routes>
          <CartMenu />
          <Footer />
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
