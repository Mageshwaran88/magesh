import React from "react";
import "./Reacthook.css";
import { useForm } from "react-hook-form";
import icon from "../assets/9131529.png";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
    name :yup.string().required("username is required"),
    password :yup.string().required("password is required"),
    confirmpassword :yup.string().required("confirmpassword is required").oneOf([yup.ref("password"),null])


});

export const ReactHookForm = () => {
  const { register,
     handleSubmit,
     formState:{errors},
     } = useForm({ resolver: yupResolver(schema) });

  const onsubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div className="container">
        <form className="myform">
          <h1>Login</h1>
          <img className="myimg" src={icon} />
          <br />
          <label>Username :</label>
          <input {...register("name")} />
          <p>{errors?.name?.message}</p>
          <br />
          <label>Password :</label>
          <input {...register("password")} />
          <p>{errors?.password?.message}</p>
          <br />
          <label>Confirmpassword :</label>
          <input {...register("confirmpassword")} />
          <p>{errors?.confirmpassword?.message}</p>
          <button onClick={handleSubmit(onsubmit)}> Login</button>
        </form>
      </div>
    </div>
  );
};

// import React from 'react'
// import { useForm } from 'react-hook-form'

// export const ReactHookForm = () => {

//     const {register,handleSubmit} =useForm()

//    const onsubmit =(data)=>{
//        console.log(data);
//    }

//   return (
//    <div>
//     <label>Firstname :</label>
//     <input {...register("name")} type="text" placeholder='enter a name' />
//     <br />
//     <br />
//     <label>Age :</label>
//     <input {...register("age")} type="text" placeholder='enter a age' />
//     <br />
//     <br />
//     <button onClick={handleSubmit(onsubmit)}>enter</button>
//    </div>
//   )
// }
