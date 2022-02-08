import React, { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import userState from "../Recoil/atoms/userAtom";
import { ROUTES } from "../constants/routes.constants";

function AuthRoute() {
  const user = useRecoilValue(userState);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) return;
    navigate(ROUTES.AUTH, { replace: true });
  }, [user, navigate]);

  return <Outlet />;
}

export default AuthRoute;
