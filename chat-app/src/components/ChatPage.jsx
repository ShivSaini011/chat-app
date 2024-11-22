import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Send } from "@mui/icons-material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("", {
    backgroundColor: "",
    boxShadow: "none", // Remove the shadow
  }),
}));

export default function ChatPage() {
  const [textValue, setTextValue] = React.useState("");

  const handleChange = (e) => {
    setTextValue(e.target.value);
  };
  return (
    <Box sx={{ padding: "10px", width: "100%" }}>
      <Box sx={{ textAlign: "center", height: "50px" }}>
        <h6>Ask me Something :</h6>
      </Box>
      <Box>
        <Box sx={{ flexGrow: 1, marginBottom: "10px" }}>
          <Grid
            container
            spacing={1}
            justifyContent="center"
            alignItems="center"
            borderRadius="20px"
          >
            <Grid
              item
              style={{ border: "2px solid #DFDFDF", borderRadius: "8px" }}
            >
              <Item
                style={{
                  color: "black",
                  fontSize: "14px",
                  fontFamily: "Dm Sans",
                }}
              >
                Present Stats
              </Item>
            </Grid>
            <Grid
              item
              style={{ border: "2px solid #DFDFDF", borderRadius: "8px" }}
            >
              <Item style={{ color: "black", fontFamily: "Dm Sans" }}>
                Give Data on Excel sheet
              </Item>
            </Grid>
            <Grid
              item
              style={{
                order: 1,
                border: "2px solid #DFDFDF",
                borderRadius: "8px",
              }}
            >
              <Item style={{ color: "black", fontFamily: "Dm Sans" }}>
                Convert Data
              </Item>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={1}
            justifyContent="center"
            alignItems="center"
          >
            <Grid
              item
              style={{ border: "2px solid #DFDFDF", borderRadius: "8px" }}
            >
              <Item style={{ color: "black", fontFamily: "Dm Sans" }}>
                Create Graph
              </Item>
            </Grid>
            <Grid
              item
              style={{ border: "2px solid #DFDFDF", borderRadius: "8px" }}
            >
              <Item style={{ color: "black", fontFamily: "Dm Sans" }}>
                Prompt 6
              </Item>
            </Grid>
            <Grid
              item
              style={{
                order: 1,
                border: "2px solid #DFDFDF",
                borderRadius: "8px",
              }}
            >
              <Item style={{ color: "black", fontFamily: "Dm Sans" }}>
                Prompt 5
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box sx={{ width: "100%", height: "", marginTop: "10%" }}>
        <TextField
          placeholder="Ask anything to Mebo!"
          style={{
            width: "100%",
            bgcolor: "#F4F4F4",
            marginTop: 0,
            color: "#787878",
          }}
          // value={textValue}
          // onChange={handleChange}
          // onKeyPress={handleKeyPress}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
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
    </Box>
  );
}