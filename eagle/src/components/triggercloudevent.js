import { Button, ButtonGroup, Box, Card } from "@mui/material";
import React, { useState } from "react";
import AWS from "../components/AWS";
import Asure from "../components/Asure";
import O365 from "../components/O365";
import Typography from "@mui/material/Typography";

function Triggercloudevent() {
  const [buttonON, setButtonON] = useState(false);

  // const handleSubmit = (e) => {

  //   setbuttonON('kumar');
  //   {buttonON === 'kumar' &&(
  //       <Button>AWS</Button>
  //     )
  //   }
  // };
  return (
    // <Box position="center">
    //   <Button variant="outlined" onClick={setButtonON(!buttonON)}>
    //     triggercloudevent
    //   </Button>
    //   {/* {buttonON ? <div><Button>AWS</Button><Button>AWS</Button><Button>AWS</Button></div>:null} */}
    // </Box>
    <>
      <Typography variant="h3" sx={{ fontWeight: "bold", textAlign: "center" }}>
        Cloud Project
      </Typography>
      <Card
        style={{
          /* margin: 59px; */ width: "30%",
          /* align-items: center; */
          /* padding-top: 5%; */
          backgroundColor: "lightblue",
          height: "50%",
          position: "fixed",
          padding: "20px",
          alignSelf: "center",
          /* margin-left: 30%; */
          margin: "50px 20px 50px 400px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            margin: "5px",
            //width:"50%",height:"50%",paddingBottom:"10%" ,backgroundColor:"lightblue",position:"fixed"
          }}
        >
          <Button
            variant="contained"
            sx={{
              marginRight: "50px",
              padding: "auto",
              height: "10%",
              width: "60%",
              marginTop: "108px",
              // overflow: "hidden",
              // textoverflow: "ellipsis",
              // whitespace: "nowrap",
              // wordwrap:"break-word"
            }}
            onClick={() => setButtonON(!buttonON)}
          >
            Triggercloudevent
          </Button>

          {buttonON ? (
            <ButtonGroup style={{ display: "flex", flexDirection: "column" }}>
              <Box m={3}>
                <Button
                  variant="contained"
                  style={{
                    maxWidth: "70px",
                    maxHeight: "70px",
                  }}
                  onClick={AWS}
                  href="/AWS"
                >
                  AWS
                </Button>
              </Box>
              <Box m={3}>
                <Button
                  variant="contained"
                  style={{
                    maxWidth: "70px",
                    maxHeight: "70px",
                    minWidth: "30px",
                    minHeight: "30px",
                  }}
                  onClick={Asure}
                  href="/Asure"
                >
                  AZURE
                </Button>
              </Box>
              <Box m={3}>
                <Button
                  variant="contained"
                  style={{
                    maxWidth: "70px",
                    maxHeight: "70px",
                    minWidth: "30px",
                    minHeight: "30px",
                  }}
                  onClick={O365}
                  href="/O365"
                >
                  O365
                </Button>
              </Box>
            </ButtonGroup>
          ) : null}
        </div>
        <br/>
        <br/>
        <div>
        <Box m={1}>
          <Button variant="contained" href="/login">
            Back
          </Button>
        </Box>
      </div>
      </Card>
    </>
  );
}

export default Triggercloudevent;
