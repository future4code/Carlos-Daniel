import React from "react";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import { ScreenContainer } from "../LoginPage/styled";
import SignUpForm from "./SignUpForm";

const SignUpPage = () => {
  useUnprotectedPage();
  return (
    <ScreenContainer>
      <h1>Página de cadastro</h1>
      <SignUpForm />
    </ScreenContainer>
  );
};

export default SignUpPage;
