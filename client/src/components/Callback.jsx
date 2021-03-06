import React from "react";
import ReactRouterPropTypes from "react-router-prop-types";
import { Header } from "./Header";
import { FinancialOverview } from "./FinancialOverview";
import  AuthorizationLink from "./AuthorizationLink";
import { useCallback } from "../hooks/useCallback";

const getHeaderProps = error =>
  error
    ? {
        text: "Please refresh your transactions!",
        emoji: "chart"
      }
    : {
        text: "Your bank was successfully connected!",
        emoji: "money"
      };
export const Callback = ({ location }) => {
  const { loading, error, data } = useCallback(location);
  const message = new URLSearchParams(location).get("message");
  const headerProps = getHeaderProps(error);

  return (
    <div>
      <Header {...headerProps} />
      <FinancialOverview loading={loading} data={data} error={error}/>
      <p style={{ fontSize: "18px", paddingTop: "40px" }}>{message}</p>
      <AuthorizationLink
        scope="accounts:read,transactions:read,investments:read,user:read"
      />
    </div>
  );
};

Callback.propTypes = {
  location: ReactRouterPropTypes.location.isRequired
};

export default Callback;
