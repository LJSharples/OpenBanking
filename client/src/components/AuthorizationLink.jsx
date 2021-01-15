import React from "react";
import { Button } from "reactstrap";
import PropTypes from "prop-types";

export const AuthorizationLink = ({ scope, ssn }) => {
  const ssnData = ssn ? "&input_username=" + ssn : "";
  const link =
    "https://link.tink.com/1.0/authorize/?" +
    "client_id=" +
    process.env.REACT_APP_CLIENT_ID +
    "&redirect_uri=http://localhost:3000/callback" +
    "&scope=" +
    scope +
    ssnData +
    "&market=" +
    "GB" +
    "&locale=" +
    "en_US" +
    "&test=" +
    "true";

  return <Button style={{ margin: "30px" }} href={link}>Connect Bank</Button>;
};

AuthorizationLink.propTypes = {
  ssn: PropTypes.string,
  scope: PropTypes.string.isRequired,
};

export default AuthorizationLink;
