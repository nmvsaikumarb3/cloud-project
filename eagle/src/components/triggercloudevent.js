import { Button, Grid } from "@mui/material";
import React, { useState } from "react";
import AWS from "../components/AWS";
import Asure from "../components/Asure";
import O365 from "../components/O365";
import Typography from "@mui/material/Typography";


function Triggercloudevent() {
  const [buttonON, setButtonON] = useState(false);
  

  return (
  
    <Grid
      container
      flexDirection={"column"}
      sx={{ color: "black", backgroundColor: "lightgrey", height: "102.3vh" }}
      justifyContent="center"
      alignItems={"center"}
      spacing={4}
    >
      <Grid item>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            fontSize:"7rem",
          }}
        >
          CloudTech Project
        </Typography>
      </Grid>
      <Grid item>
        <Grid container spacing={3} sx={{ height: "100%" }}>
          <Grid
            container
            item
            flexDirection={"row"}
            flexWrap={"nowrap"}
            spacing={3}
            alignItems={"center"}
            sx={{ height: "340px" }}
          >
            <Grid item container>
              <Button
                variant="contained"
                sx={{fontSize:"1.000rem",borderRadius:"63px"}}
                onClick={() => setButtonON(!buttonON)}
              >
                Triggercloudevent
              </Button>
            </Grid>

            {buttonON && (
              <Grid container item flexDirection="column"  spacing={3}>
                <Grid item container>
                  <Button
                    variant="contained"
                    onClick={AWS}
                    href="/AWS"
                    sx={{ width: "100%",borderRadius:"27px" }}
                  >
                    AWS
                  </Button>
                </Grid>
                <Grid item container>
                  <Button
                    variant="contained"
                    onClick={Asure}
                    href="/Asure"
                    sx={{ width: "100%",borderRadius:"27px" }}
                  >
                    AZURE
                  </Button>
                </Grid>
                <Grid item container>
                  <Button
                    variant="contained"
                    onClick={O365}
                    href="/O365"
                    sx={{ width: "100%",borderRadius:"27px" }}
                  >
                    O365
                  </Button>
                </Grid>
              </Grid>
            )}
          </Grid>
          <Grid item container alignItems="end">
            <Button variant="contained" sx={{borderRadius:"40px"}} href="/login">
              Back
            </Button>
          </Grid>
        </Grid>
        {/* </Card> */}
      </Grid>
    </Grid>
  );
}

export default Triggercloudevent;
