import React, { Component } from "react";
import {
  Routes,
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "../components/Home";
import Donation from "../components/Donation";
import Projects from "../components/Projects";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";


class AppRouter extends Component {
  render() {
    return (
        <HashRouter>
        <div class="wrapper">
          <nav class="navbar navbar-inverse navbar-fixed-top">
            <div class="container-fluid">
            <div class="navbar-header">
             <NavLink exact="true" to="/"><span class="navbar-brand" style={{color: "var(--secondary-color)"}}>Equin Rescue</span></NavLink>
            </div>
            <ul class="nav navbar-nav navbar-right">
             <li><NavLink exact="true" to="/">HOME</NavLink></li>
             <li><NavLink to="/projects">Projects</NavLink></li>
             <li><NavLink to="/donation">Donation</NavLink></li>
             <li><NavLink to="/gallery">Gallery</NavLink></li>
            </ul>
            </div>
          </nav>
          
              <Routes>
              <Route exact="true" path="/" element={<Home/>}/>
              <Route path="/projects" element={<Projects/>}/>
              <Route path="/donation" element={<Donation/>}/>
              <Route path="/gallery" element={<Gallery/>}/>
              </Routes>

              <Footer></Footer>

        </div>
        </HashRouter>
    );
  }
}
export default AppRouter;