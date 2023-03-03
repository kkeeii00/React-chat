import { Button } from "@mui/material";
import React from "react";
import { auth } from "../firebase";
import CallIcon from '@mui/icons-material/Call'

const SignOut = () => {
  return (
    <div className="header">
      <Button style={{ color: "white" ,fontSize:'20px'}} onClick={() => auth.signOut()}>
        サインアウト
      </Button>
      <CallIcon/>
    </div>
  );
};

export default SignOut;
