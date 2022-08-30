import React, { useState } from "react";
import { Button, ButtonGroup, Box, Card, Paper} from "@mui/material";
import Typography from "@mui/material/Typography";
import axios from "axios";

export default function AWS() {
  const [data1,setdata1]=useState(null);
  const [data2,setdata2]=useState(null);
  const CloudTrial = () => {
    axios.get("http://localhost:5000/cloudtechapi/v1/aws/create_cloudtrail_aws",{
        mode: 'cors',
        headers: {
         "access-control-alloworigin" : "*",
        "Content-Type": "application/json",
    }}).then((responce) => {
      setdata1(responce.data)
    });
  };
  const VPC = () => {
    axios.get("https://gorest.co.in/public/v2/users/64",{
        mode: 'cors',
        headers: {
         "access-control-alloworigin" : "*",
        "Content-Type": "application/json",
    }}).then((responce) => {
      setdata2(responce.name)
    });
  };

  return (
    <>
      <Typography variant="h4" sx={{ fontWeight: "bold", textAlign: "center" }}>
        AWS cloud event
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
              onClick={CloudTrial}
            >
              CloudTrial
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
            {data1 !== null && <Paper sx={{fontWeight:"bold",fontStyle:"italic"}}>{data1}</Paper>}
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
              onClick={VPC}
            >
              VPC
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
            {data2 !== null && <Card variant="outlined">{data2}</Card>}
          </div>
      
      </ButtonGroup>
    </>
  );
}
