import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [emailText, setEmailText] = useState("");
  const [passwordText, setPasswordText] = useState("");
  const navigate= useNavigate();
  const users = [{username:'sai',password:'sai123@'},{username:'esanya',password:'esanya123@'},{username:'sulakshan',password:'sulakshan123@'},{username:'sheefali',password:'sheefali123@'},{username:'anindita',password:'anindita123@'}];
  const addNewUser = (userName, passWord) => {
  
    users.forEach((e)=>{
      if(e.username===userName && e.password ===passWord )
      {
        navigate("/triggercloudevent")
        return true
      }
      return false
    })
  };
  return (
    <>
    <Typography variant="h3" sx={{ fontWeight: "bold", textAlign: "center" }}>CLOUD TECH PROTAL</Typography>
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        height: "100vh",
      }}
    >
      <Paper elevation={10} sx={{ height: "20rem",
      // width: "30rem", 
      p: 5 }}>
        <Typography variant="h3" sx={{ fontWeight: "100%", textAlign: "center" }}>Login</Typography>
        <Grid container flexDirection={"column"} sx={{ width: "15rem", mt: 5,color:"black" }}>
          <TextField
            sx={{color:"black"}}
            label="Username"
            id="standard-basic"
            variant="standard"
            onChange={(e) => {
              setEmailText(e.currentTarget.value);
            }}
          />
          <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="standard"
            onChange={(e) => {
              setPasswordText(e.currentTarget.value);
            }}
          />
        </Grid>
        <Grid container sx={{ mt: 3 }} spacing={2}>
          <Grid item>
            <Button
              variant="contained"
              onClick={() => {
               addNewUser(emailText, passwordText);
              }}
            >
              Login
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined">Cancel</Button>
          </Grid>
        </Grid>
        {/* <Button
          sx={{ fontSize: "12px", color: "#949494", mt: 2 }}
          href={"/create-account"}
        >
          Create an Account
        </Button> */}
      </Paper>
    </Box>
    </>
  );
}
