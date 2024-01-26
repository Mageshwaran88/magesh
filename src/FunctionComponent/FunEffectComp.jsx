import React, { useEffect, useState } from "react";

export default function FunEffectComp() {
  const [count, setcount] = useState(0);
  const handleadd = () => {
    setcount(count + 1);
  };
 
  useEffect(() => {
    return()=>{
      console.log("page is cleared");
    }
  }, [count]);

  return (
    <div>
      <h1>LifeCycle</h1>
      <h1>Count :{count}</h1>
      <button onClick={handleadd}>Add</button>
    </div>
  );
}
