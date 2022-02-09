import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import userState from "../Recoil/atoms/userAtom";
import { ROUTES } from "../constants/routes.constants";

function AuthRoute() {
  const user = useRecoilValue(userState);

  return user ? <Outlet /> : <Navigate to={ROUTES.AUTH} />;
}

export default AuthRoute;
