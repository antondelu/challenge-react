import "./login.css";
import { useContext, useState } from "react";
import { Button } from "../Button/Button";
import { InitialContext } from "../Context/Context";

export const Login = () => {
  const {email,setEmail}=useContext(InitialContext);
  
  return (
    <>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>

      <form className="loginForm" onSubmit={(e) => e.preventDefault()}>
        <h3>Bienvenido</h3>
        <label for="email">Email</label>
        <input
          type="text"
          placeholder="Email"
          id="email"
          className="inputLogin"
          name="email"
          defaultValue={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button />
      </form>
    </>
  );
};
