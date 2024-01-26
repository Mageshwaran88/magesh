import React, { useEffect, useState } from "react";

export default function FunApiFetch() {
  const [datares, setdatares] = useState([]);

  const handlefetch = async () => {
    let response = await fetch("https://fakestoreapi.com/products");
    let data = await response.json();
    setdatares(data);
  };

  useEffect(() => {
    handlefetch();
    console.log("sundar");
  },[]);

  return (
    <div>
        {datares.map((da)=>(
          <div>
            <h1>{da.title}</h1>
            <img src={da.image}/>
            <p>{da.description}</p>
            </div>
        ))}
    </div>
  );
}
