import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

export default function Signup() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        height: "100vh",
      }}
    >
      <Paper elevation={10} sx={{ height: "30rem", width: "50rem", p: 5 }}>
        <Typography variant="h3">Creat An Account</Typography>
        <Grid container flexDirection={"column"} sx={{ width: "15rem", mt: 5 }}>
          <TextField label="Username" id="standard-basic" variant="standard" />
          <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="standard"
          />
          <TextField
            id="standard-password-input"
            label="Confirm Password"
            type="password"
            autoComplete="current-password"
            variant="standard"
          />
        </Grid>
        <Grid container sx={{ mt: 3 }} spacing={2}>
          <Grid item>
            <Button variant="contained">Creat My Account</Button>
          </Grid>
          <Grid item>
            <Button variant="outlined">Cancel</Button>
          </Grid>
        </Grid>
        <Button
          sx={{ fontSize: "12px", color: "#949494", mt: 2 }}
          href={"/login"}
        >
          Already have an account
        </Button>
      </Paper>
    </Box>
  );
}
