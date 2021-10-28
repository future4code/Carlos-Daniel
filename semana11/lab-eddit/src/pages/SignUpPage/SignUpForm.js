import React from "react";
import { InputsContainer, SignUpFormContainer } from "./styled";
import TextField from "@material-ui/core/TextField";
import useForm from "../../hooks/useForm";
import Button from "@material-ui/core/Button";
import { signUp } from "../../services/users";
import { useHistory } from "react-router-dom";

const SignUpForm = () => {
  const history = useHistory();
  const [form, onChange, clear] = useForm({
    name: "",
    email: "",
    password: "",
  });

  const onSubmitForm = (e) => {
    e.preventDefault();
    signUp(form, clear, history);
  };

  return (
    <form onSubmit={onSubmitForm}>
      <SignUpFormContainer>
        <InputsContainer>
          <TextField
            value={form.name}
            name={"name"}
            onChange={onChange}
            label={"Nome"}
            variant={"outlined"}
            fullWidth
            required
            autoFocus
            margin={"normal"}
          />

          <TextField
            name={"email"}
            value={form.email}
            onChange={onChange}
            label={"E-mail"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"email"}
          />
          <TextField
            name={"password"}
            value={form.password}
            onChange={onChange}
            label={"Password"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"password"}
          />

          <Button
            type={"submit"}
            fullWidth
            variant={"contained"}
            color={"primary"}
          >
            Cadastre-se
          </Button>
        </InputsContainer>
      </SignUpFormContainer>
    </form>
  );
};

export default SignUpForm;
