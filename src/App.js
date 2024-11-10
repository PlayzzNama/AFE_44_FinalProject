import React from "react";
import { Routes, Route, Link, Router } from "react-router-dom"; // Updated from Switch to Routes
import { Layout, Typography, Space } from "antd";

import {
  Navbar,
  Homepage,
  Cryptocurrencies,
  CryptoDetails,
} from "./Components";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              {" "}
              <Route exact path="/" element={<Homepage />} />{" "}
              <Route
                exact
                path="/cryptocurrencies"
                element={<Cryptocurrencies />}
              />{" "}
              <Route exact path={`/crypto/:coinId`} element={<CryptoDetails />} />{" "}
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            CoinOrbit <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/about-me">About me</Link>
            <Link to="/cryptocurrencies">Cryptocurrency</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
