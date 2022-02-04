import React, { useState } from "react";
import { useRecoilState } from "recoil";
import userState from "../../Recoil/atoms/userAtom";

import { differenceInYears } from "date-fns";

import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes.constants";

import { GoogleLogin } from "react-google-login";
import GoogleIcon from "@mui/icons-material/Google";

import { signUp, signIn } from "../../api/api";
import { Button, Link } from "@mui/material";
import Container from "../../components/StyledComponents/Container";
import { AuthContainer, FormStyled, Header } from "./AuthPage.styles";
import Input from "../../components/Input/Input";
import DatePicker from "../../components/DatePicker/DatePicker";

const initialFormState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function AuthPage() {
  const [User, setUser] = useRecoilState(userState);
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(initialFormState);
  const [date, setDate] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(differenceInYears(new Date(), date));
    if (!isSignUp && (!date || differenceInYears(new Date(), date) < 12)) {
      return console.log("Need to be above 12");
    }
    const action = isSignUp ? signIn : signUp;
    try {
      const { data } = await action({ ...formData, birthDate: date });
      setUser(data);
      localStorage.setItem("user", JSON.stringify(data));
      navigate(ROUTES.HOME);
    } catch (err) {
      console.log(err.response.data.message);
    }
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj; //taking profile obj from google res
    const token = res?.tokenId;
    setUser({ result, token });
    localStorage.setItem("user", JSON.stringify({ result, token }));
    navigate("/");
    try {
    } catch (error) {
      console.log(error);
    }
  };

  const googleFailure = async (error) => {
    console.log(error);
    console.log("google sign in failed");
  };

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const switchMode = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
    handleShowPassword(false);
  };

  return (
    <Container>
      <AuthContainer>
        <Header>{isSignUp ? "Sign In" : "Sign Up"}</Header>
        <FormStyled>
          {!isSignUp && (
            <>
              <Input
                label="User Name"
                name="name"
                type="text"
                autoFocus
                value={formData.name}
                handleChange={handleChange}
              />
            </>
          )}
          <Input label="Email" name="email" type="email" value={formData.email} handleChange={handleChange} />
          <Input
            label="Password"
            name="password"
            type={showPassword ? "text" : "password"}
            handleShowPassword={handleShowPassword}
            value={formData.password}
            handleChange={handleChange}
          />
          {!isSignUp && (
            <>
              <Input
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                handleChange={handleChange}
              />
              <DatePicker
                label="Birth Date"
                value={date}
                onChange={(newDate) => {
                  setDate(newDate);
                }}
              />
            </>
          )}

          <Button fullWidth variant="contained" type="submit" onClick={handleSubmit}>
            {isSignUp ? "Sign In" : "Sign Up"}
          </Button>
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            render={(renderProps) => (
              <Button
                color="primary"
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<GoogleIcon />}
                variant="contained">
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          />
          <Link onClick={switchMode}>
            {isSignUp ? "Don't have and account? Sign Up" : "Already have an account Sign In"}
          </Link>
        </FormStyled>
      </AuthContainer>
    </Container>
  );
}

export default AuthPage;
