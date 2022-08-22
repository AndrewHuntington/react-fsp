import React from "react";

function Card({ name, created, status }) {
  return (
    <div className=" max-w-fit">
      <div className="border border-red-500 rounded">
        <h1>{name}</h1>
        <p>{created}</p>
        <p>{status}</p>
      </div>
    </div>
  );
}

export default Card;
