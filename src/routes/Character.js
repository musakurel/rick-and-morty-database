import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Topbar from "./TopBar"
const Character = ( {items,setPagenum}) => {
  let nevVar = items;
  let params = useParams();

  function getCharacter(id) {
    if (nevVar) {
      return nevVar.find((character) => character.id === id);
    }else {
      return setPagenum(Math.round(id/20))
    }
  }
  let character = getCharacter(parseInt(params.characterId, 10));
console.log(character,"bu")
  return (
    <div>
      <Topbar/>
      {character && (
        <div className="character-detail">
          <div>
            <img src={character.image} />
          </div>

          <div style={{width:"100%"}} className="main-contents" >
            <div style={{display:"flex", justifyContent: "center"}} className="character-name">
              <h1> {character.name} </h1>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
                marginLeft: "10px",
              }}
              className="character-contents"
            >
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
                  Status:{" "}
                </p>
                <p style={{ fontSize: "15px", marginTop: "0px" }}>
                  {" "}
                  {character.status}{" "}
                </p>
              </div>
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
                  Origin:{" "}
                </p>
                <p style={{ fontSize: "15px", marginTop: "0px" }}>
                  {" "}
                  {character.origin.name}{" "}
                </p>
              </div>
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
                  Species:{" "}
                </p>
                <p style={{ fontSize: "15px", marginTop: "0px" }}>
                  {" "}
                  {character.species}{" "}
                </p>
              </div>

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
                  {character.location.name}{" "}
                </p>
              </div>
            </div>
            <div style={{ display: "flex", width: "100%", flexWrap: "wrap", rowGap:"10px"}} className="character-episodes">
            <p
                  style={{
                    marginLeft:"10px",
                    fontSize: "10px",
                    marginBottom: "0px",
                    color: "#9e9e9e",
                  }}
                >
                  {" "}
                  Episodes:{" "}
                </p>
              {character.episode.map((item)=>{
return <span style={{marginLeft:"10px",fontSize:"14px"}} > {item.split("/").pop() + ","}  </span> 
              })} 
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Character;
