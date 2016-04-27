// require("./module1.js");
// require("./module2.js");

import React from "react";
import ReactDom from "react-dom";
import {Route, Router, IndexRoute, hashHistory} from "react-router";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Layout from "./pages/Layout";

const app = document.getElementById('app');

ReactDom.render(
    <Router>
        <Route path="/" component={Layout}>
            <IndexRoute component={Home}> </IndexRoute>
            <Route path="about" component={About}></Route>
            <Route path="contact" component={Contact}></Route>
        </Route>
    </Router>


    , app);
