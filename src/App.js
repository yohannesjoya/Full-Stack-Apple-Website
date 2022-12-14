// import logo from './logo.svg';
// import './App.css';
import { Component } from "react";
import { Route, Routes } from "react-router-dom";
// import "bootstrap";

import "./commonResources/css/bootstrap.css";
import "./commonResources/css/styles.css";

// importing my components
import Navbar from "./Components/NavBar/Navbar";
import Alert from "./Components/Main/AlertSection/Alert";

import Section1 from "./Components/Main/Section1/Section1";
import Section2 from "./Components/Main/Section2/Section2";
import Section3 from "./Components/Main/Section3/Section3";
import Section4 from "./Components/Main/Section4/Section4";
import Section5 from "./Components/Main/Section5/Section5";
import Footer from "./Components/Footer/Footer";

import YoutubeFun from "./Components/YoutubeApi/YoutubeFun";
import Iphone from "./Components/Pages/IphonePages/Iphone";
import PageNotFound from "./Components/PageNotFound";
import ProductsPage from "./Components/ProductsPage/ProductsPage";

class App extends Component {
  ll = ["mac", "iPad", "Watch", "tv", "support", "music", "search", "cart"];
  render() {
    return (
      <>
        <Navbar />
        <Alert />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 />
                <YoutubeFun />
              </>
            }
          />
          <Route path="/iphone">
            <Route index element={<Iphone />}/>
            <Route path=":urlId" element={<ProductsPage />} />
          </Route>

          {this.ll.map((x) => {
            return (
              <Route
                path={"/" + x}
                exact
                element={<PageNotFound content={x} />}
              />
            );
          })}

          <Route
            path="*"
            element={<PageNotFound content="404 Page Not Found" />}
          />
        </Routes>

        {/* <div
          style={{ height: "60vh", border: "2px solid red", color: "black" }}
        >
          <h1>left for tomorrow</h1>
        </div> */}

        <Footer />
      </>
    );
  }
}

export default App;
