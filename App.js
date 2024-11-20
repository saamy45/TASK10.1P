import React from "react";
import Header from "./header";
import Logo from "./images/Logo.jpg";
import FeaturedArticles from "./article";
import FeaturedTutorials from "./tutorial";
import SubscribeForm from "./subscribe";
import Footer from "./footer";
import './App.css';

import "semantic-ui-css/semantic.min.css"; 

function App() {
  return (
    <div>
      <Header />
      <div className="header-image-container">
        <img src={Logo} alt="Header" className="header-image" />
      </div>
      <FeaturedArticles />
      <FeaturedTutorials />
      <SubscribeForm />
      <Footer />
    </div>
  );
}

export default App;
