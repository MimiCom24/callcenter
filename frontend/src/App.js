import React from "react";
import Login from "./components/Login";
import { useImmer } from "use-immer";
import axios from "./utils/axios";

function App() {
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
