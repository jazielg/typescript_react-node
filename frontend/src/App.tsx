import React, {
  useEffect,
  useState,
  useMemo,
  useCallback,
  useRef,
  useContext,
  useReducer,
} from "react";
import api from "./services/api";
import User from "./components/User";

interface IUser {
  name: string;
  email: string;
}

function App() {
  const [users, setUsers] = useState<IUser[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    api.get<IUser[]>("/users").then((response) => setUsers(response.data));
  }, []);

  const names = useMemo(() => users.map((user) => user.name).join(", ") || "", [
    users,
  ]);

  const greeting = useCallback(
    (user: IUser) => console.log(`Hello ${user.name}`),
    []
  );

  function focusOnInput() {
    inputRef.current?.focus();
  }

  return (
    <div className="App">
      <h1>Hello</h1>
      <input type="text" ref={inputRef} />
      {users.map((user) => (
        <User key={user.email} user={user} />
      ))}
    </div>
  );
}

export default App;
