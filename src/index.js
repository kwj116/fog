import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import "./css/reset.css";
import Event from "./inside/Event";
import Product from "./inside/Product";
import Community from "./inside/Community";
import Login from "./inside/Login";
import MyPage from "./inside/MyPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Switch>
      <Route path="/event">
        <Event />
      </Route>
      <Route path="/product">
        <Product />
      </Route>
      <Route path="/community">
        <Community />
      </Route>
      <Route path="/Login">
        <Login />
      </Route>
      <Route path="/mypage">
        <MyPage />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
