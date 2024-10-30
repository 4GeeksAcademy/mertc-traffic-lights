import React, { useState } from 'react';

function TrafficLight() {
  const [selectedColor, setSelectedColor] = useState(null);

  return (
    <div className = "bg-dark mx-auto" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width:'100px', }}>
      <div
        onClick={() => setSelectedColor("red")}
        style={{
          width: 50,
          height: 50,
          borderRadius: '50%',
          backgroundColor: "red",
          margin: '10px',
          cursor: 'pointer',
          boxShadow: selectedColor === "red" ? '0 0 10px 5px red' : 'none'
        }}
      />
      <div
        onClick={() => setSelectedColor("yellow")}
        style={{
          width: 50,
          height: 50,
          borderRadius: '50%',
          backgroundColor: "yellow",
          margin: '10px',
          cursor: 'pointer',
          boxShadow: selectedColor === "yellow" ? '0 0 10px 5px yellow' : 'none'
        }}
      />
      <div
        onClick={() => setSelectedColor("green")}
        style={{
          width: 50,
          height: 50,
          borderRadius: '50%',
          backgroundColor: "green",
          margin: '10px',
          cursor: 'pointer',
          boxShadow: selectedColor === "green" ? '0 0 10px 5px green' : 'none'
        }}
      />
    </div>
  );
}

export default TrafficLight;
