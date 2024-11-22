import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import ChatPage from "./ChatPage";
export default function WelcomePage({ setIsStarted }) {
  const [btnClick, setBtnClick] = useState(false);

  const handleClick = () => {
    setIsStarted(true);
    setBtnClick(true);
  };

  return (
    <>
      {btnClick ? (
        <ChatPage />
      ) : (
        <div>
          <Box sx={{ textAlign: "center", height: "50px" }}>
            <h6
              style={{
                fontFamily: "sans-serif",
                fontSize: "14px",
                fontWeight: "regular",
              }}
            >
              Our Features
            </h6>
          </Box>

          <Box sx={{ display: "flex", gap: 1 }}>
            {" "}
            {/* Reduced gap */}
            <Box
              sx={{
                width: "200px",
                height: "100px",
                border: "1px solid #679ACB",
                borderRadius: "12px",
                textAlign: "flex-start",
                justifyContent: "flex-start",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "15px",
              }}
            >
              <Typography
                style={{
                  fontWeight: "bold",
                  fontSize: "16px",
                  fontFamily: "sans-serif",
                }}
              >
                Conversational AI
              </Typography>
              <Typography
                style={{
                  paddingTop: "5px",
                  fontSize: "14px",
                  fontFamily: "sans-serif",
                }}
              >
                Converts natural language into actionable insights
              </Typography>
            </Box>
            <Box
              sx={{
                width: "200px",
                height: "100px",
                border: "1px solid #679ACB",
                borderRadius: "12px",
                textAlign: "flex-start",
                justifyContent: "flex-start",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "15px",
              }}
            >
              <Typography
                style={{
                  fontWeight: "bold",
                  fontSize: "16px",
                  fontFamily: "sans-serif",
                }}
              >
                Data Analysis
              </Typography>
              <Typography style={{ paddingTop: "5px", fontSize: "14px" }}>
                Enables interaction with uploaded data files for detailed
                analysis
              </Typography>
            </Box>
            <Box
              sx={{
                width: "200px",
                height: "100px",
                border: "1px solid #679ACB",
                borderRadius: "12px",
                textAlign: "flex-start",
                justifyContent: "flex-start",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "15px",
              }}
            >
              <Typography
                style={{
                  fontWeight: "bold",
                  fontSize: "16px",
                  fontFamily: "sans-serif",
                }}
              >
                Dynamic Responses
              </Typography>
              <Typography
                style={{
                  paddingTop: "5px",
                  fontSize: "14px",
                  fontFamily: "sans-serif",
                }}
              >
                Retains context for seamless conversations
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "90px",
            }}
          >
            <Button
              variant="contained"
              size="medium"
              style={{
                textTransform: "none",
                width: "100px",
                fontFamily: "Dm sans",
              }}
              onClick={handleClick}
            >
              Start
            </Button>
            <Typography
              style={{
                fontWeight: "bold",
                fontSize: "12px",
                marginTop: "10px",
              }}
            >
              Please click here to use the chatbot
            </Typography>
          </Box>
        </div>
      )}
    </>
  );
}