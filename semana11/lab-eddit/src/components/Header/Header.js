import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import { StyledToolbar } from "./styled";
import Button from "@material-ui/core/Button";
import { goToPostList, goToLogin } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const history = useHistory();
  const classes = useStyles();
  return (
    <AppBar position="static">
      <StyledToolbar>
        <Button onClick={() => goToPostList(history)} color="inherit">
          LabEddit
        </Button>
        <Button onClick={() => goToLogin(history)} color="inherit">
          Login
        </Button>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
