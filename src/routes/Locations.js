import React from "react";
import TopBar from "./TopBar"
const Locations = (props) => {
  let locations = props.locations;
  return (
      <div>

      <TopBar/>
      <div style={{display:"flex", flexWrap:"wrap", rowGap: "10px",
      columnGap: "20px", justifyContent: "center", marginTop: "20px"}}>
      {locations && locations.map((location) => <div style={{width:"25%", margin:"20px", display:"flex", alignItems: "center", flexDirection:"column",}} className="card">

      <h2 className="character-title" >{location.name}</h2>
      <p style={{fontSize:"10px", marginBottom:"0px", color:"#9e9e9e"}} > Type: </p>
              <p style={{fontSize:"15px", marginTop:"0px"}}> {location.type} </p>
      <p style={{fontSize:"10px", marginBottom:"0px", color:"#9e9e9e"}} > Dimension: </p>
              <p style={{fontSize:"15px", marginTop:"0px"}}> {location.dimension} </p>
      <p style={{fontSize:"10px", marginBottom:"0px", color:"#9e9e9e"}} > Residents: </p>
      <div style={{fontSize:"10px", marginTop:"0px", width: "25%"}}>

              
      </div>

      </div>)}
    </div>
          </div>
  );
};

export default Locations;
