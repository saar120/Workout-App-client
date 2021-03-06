import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import userState from "../../Recoil/atoms/userAtom";

import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes.constants";

import { GoogleLogin } from "react-google-login";
import GoogleIcon from "@mui/icons-material/Google";

import { signUp, signIn } from "../../api/api";
import { Button, Link } from "@mui/material";
import Container from "../../components/StyledComponents/Container";
import { AuthContainer, FormStyled, Header } from "./AuthPage.styles";
import Input from "../../components/Input/Input";
import Spinner from "../../components/Spinner/Spinner";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const initialFormState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function AuthPage() {
  const setUser = useSetRecoilState(userState);
  const [isSignUp, setIsSignUp] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(initialFormState);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const action = isSignUp ? signIn : signUp;
    try {
      const { data } = await action({ ...formData });
      setUser(data);
      localStorage.setItem("user", JSON.stringify(data));
      setLoading(false);
      navigate(ROUTES.DASH);
    } catch (err) {
      setError(err.response.data.message);
      setLoading(false);
    }
  };

  const googleSuccess = async (res) => {
    try {
      const result = res?.profileObj; //taking profile obj from google res
      const token = res?.tokenId;
      setUser({ result, token });
      localStorage.setItem("user", JSON.stringify({ result, token }));
      navigate(ROUTES.DASH);
    } catch (error) {
      setError(error.message);
    }
  };

  const googleFailure = async (error) => {
    console.log(error);
    setError("google sign in failed");
  };

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const switchMode = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
    setShowPassword(false);
  };

  const demoSignIn = async () => {
    try {
      const loginData = { email: "guest@guest.com", password: "guest123" };
      const { data } = await signIn(loginData);
      setUser(data);
      localStorage.setItem("user", JSON.stringify(data));
      navigate(ROUTES.DASH);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  return (
    <Container>
      <AuthContainer>
        <Header>{isSignUp ? "Sign In" : "Sign Up"}</Header>
        <FormStyled onSubmit={handleSubmit}>
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
            </>
          )}

          <Button fullWidth variant="contained" type="submit">
            {loading ? <Spinner small white /> : isSignUp ? "Sign In" : "Sign Up"}
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
          <Button onClick={demoSignIn} variant="contained">
            Demo
          </Button>
          <Link onClick={switchMode}>
            {isSignUp ? "Don't have and account? Sign Up" : "Already have an account Sign In"}
          </Link>
        </FormStyled>
      </AuthContainer>
      <ErrorMessage open={error} onClose={() => setError("")} message={error} />
    </Container>
  );
}

export default AuthPage;
