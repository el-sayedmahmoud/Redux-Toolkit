import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./redux/features/usersSlice";

export default function Users() {
  const dispatch=useDispatch();
  const loading = useSelector(state => state.users.loading);
  const users = useSelector (state => state.users.data);

  return (
    <section className="users">
      <button onClick={()=>dispatch(getUser())} disabled={loading}>
        {" "}
        {!loading ? "Get Users" : "Loading ..."}{" "}
      </button>

      <ul>
        {users.map((user) => (
          <li key={user.id}> {user.name} </li>
        ))}
      </ul>
    </section>
  );
}