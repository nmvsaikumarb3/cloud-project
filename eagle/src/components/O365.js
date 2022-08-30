import { Button ,ButtonGroup, Box} from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
import axios from "axios";



export default  function O365(){
  const restData=()=>{
    axios.get('http://localhost:5000/cloudtechapi/v1/o365/deactivate_mfa_o365',{
      mode: 'cors',
      headers: {
       "access-control-alloworigin" : "*",
      "Content-Type": "application/json",
  }}).then((responce)=>{
      console.log(responce)
  
    })}
  return(
    <>
    <Typography variant="h4" sx={{ fontWeight: 'bold',textAlign:"center" }}>O365 cloud event</Typography>
    <div>
    <Button variant="contained" href="/triggercloudevent">Back</Button>
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
              onClick={restData}
            >
              Test 1
            </Button>
          </Box>
        </div>
        <div
          style={{
            justifyContent: "left",
            margin: "auto",
            width: "50%",
            alignItems: "right",
            paddingTop: "5%",
            paddingLeft: "35%",
          }}
        >
          <Box>
            <Button variant="contained" style={{ alignItems: "left" }}>
              Test 2
            </Button>
          </Box>
        </div>
      </ButtonGroup>
    </>
  )
}