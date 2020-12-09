import React from "react";
import ReactDOM from "react-dom";

import Layout from "./components/layout";
// Components
import Header from "./components/Header";
import Work from "./components/Work";
import About from "./components/about";
import Skills from "./components/skills";
import Promotion from "./components/Promotion";
import Footer from "./components/Footer";
import "./App.css";

const IndexPage = () => (
  <Layout>
    <Header></Header>
    <Work></Work>
    <About></About>
    <Skills></Skills>
    <Promotion></Promotion>
    <Footer></Footer>
  </Layout>
);

ReactDOM.render(<IndexPage />, document.getElementById("root"));
