import React from "react";
import { ScreenContainer, SignUpButtonContainer } from "./styled";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import LoginForm from "./LoginForm";
import { goToSignUpPage } from "../../routes/coordinator";

const LoginPage = () => {
  const history = useHistory();
  return (
    <ScreenContainer>
      <h1>LabEddit</h1>
      <LoginForm />

      <SignUpButtonContainer>
        <Button
          onClick={() => goToSignUpPage(history)}
          type={"submit"}
          fullWidth
          variant={"text"}
          color={"primary"}
        >
          Não tem uma conta? Cadastre-se
        </Button>
      </SignUpButtonContainer>
    </ScreenContainer>
  );
};

export default LoginPage;
