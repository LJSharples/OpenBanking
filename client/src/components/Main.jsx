import React from "react";
import { Header } from "./Header";
import  AuthorizationLink from "./AuthorizationLink";
import { Auth } from "aws-amplify"
import { Redirect } from "react-router-dom"

const checkUser = async () => {
  Auth.currentAuthenticatedUser()
      .then(user => {
        console.log("USER", user);
        return true
      })
      .catch(err => {
        console.log("ERROR", err);
        return false
      });
}
export const Main = () => {
  if(checkUser() === false){
    return <Redirect to='/'/>
  }
  return (
    <div>
      <Header text="Hello!" emoji="money" />

      <p>We can help you analyze your financial status.</p>
      <p>
        Or actually we can’t. We’re just a simple example app. But you can
        connect your bank to see your account data, transactions and
        investments!
      </p>

      <AuthorizationLink
        scope="accounts:read,transactions:read,investments:read,user:read"
      />
    </div>
  );
};

export default Main;
