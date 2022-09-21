import React, { useState } from "react";
import { Button, Card, Paper, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import axios from "axios";
import Image from "C:/Users/nallu/cloud-project/eagle/src/components/aws.png"

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
  const styles = {
    paperContainer: {
        backgroundImage: `url(${Image})`,
        backgroundSize: "cover",
        height: "100vh",
    }
};

  return (
     <Paper style={styles.paperContainer}>
     <Grid
      container
      flexDirection={"column"}
      sx={{ color: "black", height: "102.3vh"}}
      spacing={4}
      
    >
    <Grid item sx={{color:"cyan"}}>
      <Typography variant="h4" sx={{ fontWeight: "bold",borderRadius:"27px", textAlign: "center" }}>
        AWS cloud event
      </Typography>
      </Grid>
      <Grid item spacing={5}>
        <Button variant="contained" sx={{borderRadius:"27px"}} href="/triggercloudevent">
          Back
        </Button>
        </Grid>
      <Grid container item flexDirection="column"  spacing={12} > 
      <Grid container item flexDirection={"row"} spacing={2} >
            <Button
              variant="contained"
              sx={{ alignItems: "center",borderRadius:"27px" }}
              onClick={CloudTrial}
            >
              CloudTrial
            </Button>
            {data1 !== null && <Card sx={{fontWeight:"bold",color:"black",fontStyle:"italic"}}>{data1}</Card>}
 
      </Grid>
      <Grid item>
            <Button
              variant="contained"
              sx={{ alignItems: "center",borderRadius:"27px" }}
              onClick={VPC}
            >
              VPC
            </Button>
            {data2 !== null && <Card sx={{fontWeight:"bold",color:"black",fontStyle:"italic"}}>{data2}</Card>}
      
      </Grid>
      </Grid>
      </Grid> 
      </Paper>
  );
}
