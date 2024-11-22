import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {
  InputAdornment,
  TextField,
  IconButton,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Table,
  TableBody,
} from "@mui/material";
import { Send } from "@mui/icons-material";
import axios from "axios";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "none",
}));

export const QuesAnsPage = () => {
  const [textValue, setTextValue] = React.useState("");
  const [messages, setMessages] = React.useState([]);

  const handleChange = (e) => {
    setTextValue(e.target.value);
  };

  const handleSubmit = async () => {
    if (textValue.trim()) {
      setMessages([
        ...messages,
        { text: textValue, isUser: true, type: "text" },
      ]);
      try {
        const response = await axios.get(
          `https://hexa-msl-fccebxghdwcdctd8.canadacentral-01.azurewebsites.net/process?methodName=chat&question=${textValue}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const responseType = response?.data?.type;
        const responseContent = response?.data?.data;

        if (responseType && responseContent) {
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: responseContent, isUser: false, type: responseType },
          ]);
        } else {
          console.warn("Unexpected response structure:", response.data);
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              text: "The server returned an unexpected response. Please try again later.",
              isUser: false,
              type: "text",
            },
          ]);
        }
      } catch (error) {
        console.error("Error fetching response:", error);
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            text: "Something went wrong. Please try again later.",
            isUser: false,
            type: "text",
          },
        ]);
      } finally {
        setTextValue("");
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const renderMessageContent = (message) => {
    switch (message.type) {
      case "text":
        return message.text;
      case "image":
        return (
          <img
            src={message?.text}
            alt="response"
            style={{ maxWidth: "100%" }}
          />
        );
      case "table":
        return (
          <TableContainer
            style={{
              maxHeight: "300px",
              overflowY: "auto",
              width: "100%",
              margin: "auto",
            }}
          >
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  {message?.text?.columns.map((column, index) => (
                    <TableCell key={index}>{column}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {message?.text?.data.map((row, rowIndex) => (
                  <TableRow
                    key={rowIndex}
                    style={{
                      backgroundColor:
                        rowIndex % 2 === 0 ? "#f9f9f9" : "#ffffff",
                    }}
                  >
                    {row.map((cell, cellIndex) => (
                      <TableCell key={cellIndex}>
                        {typeof cell === "object" ? JSON.stringify(cell) : cell}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        );
      default:
        return null;
    }
  };

  return (
    <Box sx={{ padding: "10px", width: "100%", marginTop: "10%" }}>
      {messages?.map((message, index) => (
        <Grid
          container
          key={index}
          justifyContent={message.isUser ? "flex-end" : "flex-start"}
          style={{
            marginBottom: "10px",
          }}
        >
          <Grid item xs={12} sm={8}>
            <Item
              style={{
                backgroundColor: message.isUser ? "#FEFEFE" : "#FFFFFF",
                textAlign: message.isUser ? "right" : "left",
                border: "2px solid #DFDFDF",
                borderRadius: "8px",
                padding: "10px",
              }}
            >
              {renderMessageContent(message)}
            </Item>
          </Grid>
        </Grid>
      ))}
      <TextField
        placeholder="Ask anything to Mebo!"
        style={{
          width: "100%",
          bgcolor: "#F4F4F4",
          marginTop: 0,
          color: "#787878",
        }}
        value={textValue}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleSubmit}>
                <Send />
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              border: "2px solid #9D9D9D",
            },
            "&:hover fieldset": {
              border: "1px solid #ccc",
            },
            "&.Mui-focused fieldset": {
              border: "2px solid #9D9D9D",
            },
          },
        }}
      />
    </Box>
  );
};
