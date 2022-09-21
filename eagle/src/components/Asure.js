import React, { useState } from "react";
import { Button, ButtonGroup, Box, Card ,Paper} from "@mui/material";
import Typography from "@mui/material/Typography";
import axios from "axios";
import Image from "C:/Users/nallu/cloud-project/eagle/src/components/azure.png"

export default function Asure() {
  const [sample, setsample] = useState(null);
  const [sample1, setsample1] = useState(null);
  const Azure1 = () => {
    axios
      .get("http://localhost:5000/cloudtechapi/v1/azure/deactivate_mfa_azure", {
        mode: "cors",
        headers: {
          "access-control-alloworigin": "*",
          "Content-Type": "application/json",
        },
      })
      .then((responce) => {
        setsample(responce.data);
      });
  };
  const Azure2 = () => {
    axios
      .get("http://localhost:5000/cloudtechapi/v1/azure/deactivate_mfa_azure", {
        mode: "cors",
        headers: {
          "access-control-alloworigin": "*",
          "Content-Type": "application/json",
        },
      })
      .then((responce) => {
        setsample1(responce.data);
      });
  };
  const styles = {
    paperContainer: {
        backgroundImage: `url(${Image})`,
        backgroundSize: "cover",
        height: "100vh",
    }
};
  return (
    <Paper style={styles.paperContainer}>
      <Typography variant="h4" sx={{ fontWeight: "bold",color:"cyan", textAlign: "center" }}>
        Azure cloud event
      </Typography>
      <div>
        <Button variant="contained" href="/triggercloudevent">
          Back
        </Button>
      </div>
      <ButtonGroup style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{
            justifyContent: "center",
            margin: "auto",
            width: "50%",
            alignItems: "left",
            paddingTop: "5%",
            paddingLeft: "15%",
          }}
        >
          <Box>
            <Button
              variant="contained"
              style={{ alignItems: "center" }}
              onClick={Azure1}
            >
              Azure1
            </Button>
          </Box>
          
        </div>
        <div style={{
            justifyContent: "center",
            margin: "auto",
            width: "50%",
            alignItems: "left",
            paddingTop: "5%",
            paddingLeft: "15%",
          }}>
            {sample !== null && <Card variant="outlined">{sample}</Card>}
          </div>
      </ButtonGroup>
      <br />
      <br />
      <br />
      <ButtonGroup style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{
            justifyContent: "center",
            margin: "auto",
            width: "50%",
            alignItems: "left",
            paddingTop: "5%",
            paddingLeft: "15%",
          }}
        >
          <Box>
            <Button
              variant="contained"
              style={{ alignItems: "center" }}
              onClick={Azure2}
            >
              Azure2
            </Button>
          </Box>
        </div>
        <div style={{
            justifyContent: "center",
            margin: "auto",
            width: "50%",
            alignItems: "left",
            paddingTop: "5%",
            paddingLeft: "15%",
          }}>
            {sample1 !== null && <Card variant="outlined">{sample1}</Card>}
          </div>
      </ButtonGroup>
      </Paper>
  );
}
