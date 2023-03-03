import React from "react";
import firebase from "firebase/compat/app";
import { auth } from "../firebase";
import { Button } from "@mui/material";

const SignIn = () => {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <div className="signIn">
      <div className="signInHeader">チャットアプリ</div>

      <Button className="signInWithGoogle" onClick={signInWithGoogle}>
        グーグルでログイン
      </Button>
    </div>
  );
};

export default SignIn;
