import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleLogin, handleLogout } from "./redux/features/authSlice";

export default function Header() {
  const isLogged = useSelector((state) => state.auth.isLogged);
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);

  return (
    <header>
      <div> {counter} </div>
      {isLogged ? (
        <>
          <strong> Hello </strong>
          <button onClick={() => dispatch(handleLogout())}> logout </button>
        </>
      ) : (
        <button onClick={() => dispatch(handleLogin())}> login </button>
      )}
    </header>
  );
}
