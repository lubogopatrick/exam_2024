import { Component } from "react";
import "./App.css";
import React from "react";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home.page";
import About from "./pages/about/about.page";
import Contact from "./pages/contact/contact.page";
import { Header } from "./components/header/header.component";
import { Authentication } from "./pages/authentication-page/authentication-page";
import { ShopPage } from "./pages/shop/shop.component";
import { auth } from "./components/firebase/firebase.utils";
import { store } from "./redux/store";
import { setCurrentUser } from "./redux/user";
import { CheckoutPage } from "./pages/checkout/checkout.page";

class App extends Component {
  constructor() {
    super();

    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      this.setState({ user });

      store.dispatch(setCurrentUser(user));
    });
  }

  render() {
    return (
      <>
        <Header />

        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="shop" element={<ShopPage />} />
            <Route path="checkout" element={<CheckoutPage />} />
            <Route
              path="authentication"
              element={<Authentication currentUser={this.state.user} />}
            />
          </Routes>
        </div>

        {/* <Directory categories={categories} /> */}
        {/* //routes */}
      </>
    );
  }
}

export default App;
