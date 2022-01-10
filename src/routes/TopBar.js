import React from "react";
import { Layout, Menu, Button, Row, Col } from "antd";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const { Header } = Layout;

const Topbar = () => {
  return (
    <div>
      <Header
        style={{
          padding: 0,
          backgroundColor: "#283046 !important",
          borderRadius: "5px",
        }}
      >
        <Menu
          style={{
            backgroundColor: "#283046",
            display: "flex",
            height: "50px",
            color: "#FFFFFF",
            justifyContent: "space-around",
            alignItems: "center",
          }}
          mode="horizontal"
        >
          <Link style={{ color: "white" }} to="/characters">
            <Menu.Item
              key="star"
              style={{
                float: "left",
                display: "flex",
                align: "center",
                justifyContent: "center",
                fontSize: "20px",
              }}
              icon={
                <Icon
                  style={{ color: "#ff9f43" }}
                  icon="fe:globe"
                  height={24}
                />
              }
            >
              Characters
            </Menu.Item>
          </Link>
          <Link style={{ color: "white" }} to="/">
            <Menu.Item
              key="star"
              style={{
                float: "left",
                display: "flex",
                align: "center",
                justifyContent: "center",
                fontSize: "20px",
              }}
            >
              <div className="header">
                <img style={{ height: "70px" }} src="/logo.png" />
                <h1>RICK AND MORTY</h1>
              </div>
            </Menu.Item>
          </Link>
          <Link style={{ color: "white" }} to="/locations">
            <Menu.Item
              key="star"
              style={{
                float: "left",
                display: "flex",
                align: "center",
                justifyContent: "center",
                fontSize: "20px",
              }}
              icon={
                <Icon
                  style={{ color: "#ff9f43" }}
                  icon="feather-star"
                  height={24}
                />
              }
            >
              Locations
            </Menu.Item>
          </Link>
        </Menu>
      </Header>
    </div>
  );
};

export default Topbar;
