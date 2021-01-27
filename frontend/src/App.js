import React, { useEffect } from "react";
import Login from "./components/Login";
import { useImmer } from "use-immer";
import axios from "./utils/axios";
import socket from "./utils/Socketio";

function App() {
  useEffect(() => {
    socket.on("disconnect", () => {
      console.log("Socket Connection is Disconnected");
    });

    return () => {};
  }, []);

  const [user, setUser] = useImmer({
    userName: "",
    mobileNumber: "",
    verifacationCode: "",
    verifacationSent: false,
  });

  async function sendSms() {
    console.log("Send Messge");
    await axios.post("/login", {
      to: user.mobileNumber,
      userName: user.userName,
      channel: "sms",
    });
    setUser((draft) => {
      draft.verifacationSent = true;
    });
  }

  async function sendCode() {
    console.log("Send Code: ");
    const response = await axios.post("/verify", {
      to: user.mobileNumber,
      code: user.verifacationCode,
    });
    console.log("Verification Response: ", response.data);
  }
  return (
    <div className="App">
      <Login
        user={user}
        setUser={setUser}
        sendSmsCode={sendSms}
        sendCode={sendCode}
      />
    </div>
  );
}

export default App;
