import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import logo from "../logo.svg";
import SideBar from "./SideBar";
import WelcomePage from "./WelcomePage";
import ChatPage from "./ChatPage";
import { DownloadOutlined } from "@mui/icons-material";
import { QuesAnsPage } from "./QuesAnsPage";
// import ChatPage from "./ChatPage";
import chatbot from "../chatbot.png";

export const MainPage = () => {
  const [isStarted, setIsStarted] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        minHeight: "100vh",
        background:
          "linear-gradient(to bottom, rgba(37, 115, 186, 0.25) 0%, rgba(255, 255, 255, 0.25) 50%, white 100%)",
      }}
    >
      {" "}
      <SideBar />
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 1, // Reduced gap
          padding: 2,
        }}
      >
        {isStarted && (
          <Box sx={{ width: "100%", textAlign: "right" }}>
            <Button
              variant="outlined"
              size="medium"
              startIcon={<DownloadOutlined />}
              style={{
                textTransform: "none",
              }}
            >
              Download chat as PDF
            </Button>
          </Box>
        )}
        <Box sx={{ width: "100%", textAlign: "center" }}>
          <img src={chatbot} style={{ width: "100px", height: "100px" }} />
        </Box>
        <Box sx={{ width: "100%", textAlign: "center" }}>
          <Typography
            style={{
              fontFamily: "sans-serif",
              fontSize: "32px",
              fontWeight: "bold",
            }}
          >
            Meet Your New AI Assistant{" "}
            <span style={{ color: "#2573ba" }}>MIBO!</span>{" "}
          </Typography>
        </Box>

        <Box
          sx={{
            textAlign: "center",
            height: "60px",
            fontFamily: "sans-serif",
            fontSize: "14px",
            fontWeight: "regular",
          }}
        >
          <p style={{ fontFamily: "sans-serif" }}>
            An intuitive application that allows you to interact with
          </p>
          <p>your data using natural language</p>
        </Box>

        <WelcomePage setIsStarted={setIsStarted} />

        {/* <QuesAnsPage /> */}
      </Box>
    </Box>
  );
};