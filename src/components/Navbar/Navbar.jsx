import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import decode from "jwt-decode";
import { useNavigate, useLocation, Link } from "react-router-dom";
import userState from "../../Recoil/atoms/userAtom";
import { ROUTES } from "../../constants/routes.constants";
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Avatar, Button, Tooltip, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const ResponsiveAppBar = () => {
  const [user, setUser] = useRecoilState(userState);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logOut();
      }
    }
    setUser(JSON.parse(localStorage.getItem("user")));
    // eslint-disable-next-line
  }, [location]);

  const logOut = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate(ROUTES.AUTH);
  };

  const handleUserClick = () => {
    if (user) {
      logOut();
    } else {
      navigate(ROUTES.AUTH);
    }
    setAnchorElUser(null);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" noWrap component="div" sx={{ mr: 2, display: { xs: "none", md: "flex" } }}>
          Workout Tracker
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton size="large" aria-controls="menu-appbar" onClick={handleOpenNavMenu} color="inherit">
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}>
            <MenuItem onClick={handleCloseNavMenu}>
              <Link className="btnLink" to={ROUTES.DASH}>
                Dashboard
              </Link>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Link className="btnLink" to={ROUTES.WORKOUT}>
                Add Workout
              </Link>
            </MenuItem>
          </Menu>
        </Box>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          Workout Tracker
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          <Button onClick={handleCloseNavMenu} sx={{ color: "white", display: "block" }}>
            <Link className="btnLink" to={ROUTES.DASH}>
              Dashboard
            </Link>
          </Button>
          <Button onClick={handleCloseNavMenu} sx={{ color: "white", display: "block" }}>
            <Link className="btnLink" to={ROUTES.WORKOUT}>
              Add Workout
            </Link>
          </Button>
        </Box>
        <Tooltip title="">
          <IconButton onClick={handleOpenUserMenu}>
            <Avatar alt={user?.result.name} src={user?.result.imageUrl}>
              {user?.result.name?.charAt(0).toUpperCase()}
            </Avatar>
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}>
          <MenuItem onClick={handleUserClick}>{user ? "Logout" : "Sign Up"}</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};
export default ResponsiveAppBar;
