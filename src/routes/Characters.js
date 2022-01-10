import React, { useState, useEffect } from "react";
import { Modal, Button, Pagination } from "antd";
import { SmileTwoTone, FrownTwoTone } from "@ant-design/icons";
import Header from "./Header";
import TopBar from "./TopBar";
import { NavLink, Outlet } from "react-router-dom";
import "../index.css";
const Characters = ({setPagenum, items,pagenum}) => {

  const characters=items

  console.log(pagenum)
const HandleChange=(num)=>{
   setPagenum(num)
}
  return (
    <div>
      <TopBar />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          rowGap: "10px",
          columnGap: "20px",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        {characters &&
          characters.map((item) => (
            <div className="card">
              <NavLink
                style={{ textDecoration: "none" }}
                key={item.id}
                to={`/characters/${item.id}`}
              >
                <img
                  style={{ borderRadius: "10px 10px 0px 0px" }}
                  src={item.image}
                />

                <p className="character-title">{item.name}</p>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    color: "#9e9e9e",
                    marginTop: "0px",
                  }}
                >
                  {item.status == "Alive" ? (
                    <SmileTwoTone twoToneColor="#52c41a" />
                  ) : (
                    <FrownTwoTone twoToneColor="#eb2f96" />
                  )}
                  {item.status} - {item.species}
                </div>
              </NavLink>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <p
                  style={{
                    fontSize: "10px",
                    marginBottom: "0px",
                    color: "#9e9e9e",
                  }}
                >
                  {" "}
                  Last Known Location:{" "}
                </p>
                <p style={{ fontSize: "15px", marginTop: "0px" }}>
                  {" "}
                  {item.location.name}{" "}
                </p>
              </div>
            </div>
          ))}
      </div>

      <Pagination
        onChange={(num)=>HandleChange(num)}
        simple
        style={{
          display: "flex",
          alignItems: "center",
          color: "white",
          marginLeft: "25%",
          justifyContent: "space-around",
          width: "40%",
        }}
        defaultCurrent={pagenum}
        total={500}
      />
    </div>
  );
};

export default Characters;
