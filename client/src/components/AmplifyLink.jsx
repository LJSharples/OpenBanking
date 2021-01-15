import React, { useState} from "react";
import { Button } from "reactstrap";
import PropTypes from "prop-types";
import { Auth } from "aws-amplify";

export const AmplifyLink = ({ username, password }) => {
  const [disabled, setActive] = useState(true);
  
  Auth.signIn(username, password)
  .then(user => {
    console.log('Successful signin')
    setActive(false);
  })
  .catch(err => {
    if (! err.message) {
      console.log('Error when signing in: ', err)
    } else {
      console.log('Error when signing in: ', err.message)
    }
  })

  return <Button href='http://localhost:3000/callback' disabled={disabled}>Login</Button>;
};

Button.propTypes = {
  disabled: PropTypes.bool
};

export default AmplifyLink;
