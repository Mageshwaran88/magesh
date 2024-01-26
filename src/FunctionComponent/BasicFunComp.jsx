import React, { useState } from "react";
import FunEffectComp from "./FunEffectComp";

function BasicFunComp() {
    const [count, setcount] = useState(0);

    const handleadd = () => {
      setcount(count + 1);
    };
    const handlesub = () => {
      if (count <= 0) {
        setcount(0);
      } else {
        setcount(count - 1);
      }
    };
  const [show, setshow] = useState(true);
  const handlelogout = () => {
    setshow(false);
  };

  return (
    <div>
      {/* <h1>Count :{count}</h1>
      <button onClick={handleadd}>Add</button>
       <button onClick={handlesub}>Sub</button>  */}
      <button onClick={handlelogout}>logout</button>

      {show ? <FunEffectComp /> : ""}
    </div>
  );
}

export default BasicFunComp;
