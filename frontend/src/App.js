import React from "react";
import Login from "./components/Login";
import { useImmer } from "use-immer";

function App() {
  const [user, setUser] = useImmer({
    userName: "",
    mobileNumber: "",
  });

  return (
    <div className="App">
      <Login user={user} setUser={setUser} />
    </div>
  );
}

export default App;
