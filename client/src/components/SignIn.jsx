import React, { useState } from "react";
import { Header } from "./Header";
import  AmplifyLink from "./AmplifyLink";

export const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
        <Header text="Sign In" emoji="money" />

        <p>We can help you analyze your financial status.</p>
        <p>
            Or actually we can’t. We’re just a simple example app. But you can
            connect your bank to see your account data, transactions and
            investments!
        </p>

        <div style={{ padding: "50px 0 10px 0" }}>
            <input
                id="username"
                key="username"
                name="username"
                onChange={event => setUsername(event.target.value)}
                type="text"
                placeholder="Username"
            />
        </div>

        <div style={{ padding: "50px 0 10px 0" }}>
            <input
                id="password"
                key="password"
                name="password"
                onChange={event => setPassword(event.target.value)}
                type="password"
                placeholder="Password"
            />
        </div>

        <AmplifyLink
            username={username}
            password={password}
        />
    </div>
  );
};

export default SignIn;
