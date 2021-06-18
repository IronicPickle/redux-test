import React, { FormEvent } from "react";
import "./App.css";
import { User } from "./interfaces.ts/data";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { usersSlice } from "./redux/slices";
import { parseAddUserForm } from "./utils/form";

function App() {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users);

  const formSubmit = (event: FormEvent) => {
    event.stopPropagation();
    event.preventDefault();
    const formData = parseAddUserForm();
    if (formData == null) return;
    const { name, age } = formData;
    addUser(name, parseInt(age));
  };

  const addUser = (name: string, age: number) => {
    if (name.length === 0 || isNaN(age)) return;
    const user: User = {
      id: Math.floor(Math.random() * 100),
      name,
      age,
    };
    console.log(user);
    dispatch(usersSlice.actions.addUser(user));
  };

  return (
    <div>
      <form id="addUserForm" onSubmit={formSubmit} style={{ margin: 32 }}>
        <input name="name" type="test" placeholder="Name" />
        <input name="age" type="number" placeholder="Age" />
        <button type="submit">Submit</button>
      </form>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 32,
        }}
      >
        {users.map((user, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "1px solid darkgray",
              boxSizing: "border-box",
              minWidth: 200,
              padding: 8,
            }}
          >
            <code>{user.id}</code>
            <br />

            <small>Name</small>
            <h2>{user.name}</h2>
            <br />

            <small>Age</small>
            <h3>{user.age}</h3>
            <br />

            <div style={{ display: "flex", alignItems: "center" }}>
              <small>Is Admin</small>
              <input type="checkbox" readOnly checked={user.isAdmin} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
