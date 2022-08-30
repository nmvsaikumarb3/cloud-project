import { Button, Card, Grid } from "@mui/material";
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
        {/* <Card
          style={{
            width: "500px",
            backgroundColor: "lightskyblue",
            height: "350px",
            padding: "20px",
          }}
        > */}
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
                sx={{fontSize:"1.875rem"}}
                onClick={() => setButtonON(!buttonON)}
              >
                Triggercloudevent
              </Button>
            </Grid>

            {buttonON && (
              <Grid container item flexDirection="column" spacing={3}>
                <Grid item container>
                  <Button
                    variant="contained"
                    onClick={AWS}
                    href="/AWS"
                    sx={{ width: "100%" }}
                  >
                    AWS
                  </Button>
                </Grid>
                <Grid item container>
                  <Button
                    variant="contained"
                    onClick={Asure}
                    href="/Asure"
                    sx={{ width: "100%" }}
                  >
                    AZURE
                  </Button>
                </Grid>
                <Grid item container>
                  <Button
                    variant="contained"
                    onClick={O365}
                    href="/O365"
                    sx={{ width: "100%" }}
                  >
                    O365
                  </Button>
                </Grid>
              </Grid>
            )}
          </Grid>
          <Grid item container alignItems="end">
            <Button variant="contained" href="/login">
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
