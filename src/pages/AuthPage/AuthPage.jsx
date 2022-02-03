import React, { useState } from "react";
import { useRecoilState } from "recoil";
import userState from "../../Recoil/atoms/userAtom";
import { Container, Paper } from "@mui/material";
import { FormStyled, Header } from "./AuthPage.styles";
import Input from "../../components/Input/Input";

import DatePicker from "../../components/DatePicker/DatePicker";

function AuthPage() {
  const [User, setUser] = useRecoilState(userState);
  const [showPassword, setShowPassword] = useState(false);
  const [date, setDate] = useState(null);

  return (
    <Container component="main" maxWidth="xs">
      <Paper>
        <Header>Sign Up</Header>
        <FormStyled>
          <Input label="User Name" name="username" type="text" autoFocus />
          <Input label="Email" name="email" type="email" />
          <Input
            label="Password"
            name="password"
            type={showPassword ? "text" : "password"}
            handleShowPassword={() => setShowPassword((prev) => !prev)}
          />
          <Input label="Confirm Password" name="confirmPassword" type="password" />
          <DatePicker
            label="Birth Date"
            value={date}
            onChange={(newDate) => {
              setDate(newDate);
            }}
          />
        </FormStyled>
      </Paper>
    </Container>
  );
}

export default AuthPage;
