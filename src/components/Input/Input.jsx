import React from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

export default function Input({ label, name, handleChange, type, handleShowPassword, autoFocus, value }) {
  return (
    <TextField
      name={name}
      onChange={handleChange}
      variant="outlined"
      required
      value={value}
      fullWidth
      autoComplete="false"
      label={label}
      autoFocus={autoFocus}
      type={type}
      InputProps={
        name === "password"
          ? {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPassword}>
                    {type === "password" ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }
          : null
      }
    />
  );
}
