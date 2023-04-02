import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function NavBar() {
  return (
    <Box>
      <AppBar position="sticky">
        <Toolbar sx={{ display: "flex" }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: 700, letterSpacing: ".3rem" }}
          >
            TECH READS
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
