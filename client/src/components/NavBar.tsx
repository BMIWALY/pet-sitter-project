import React from "react";
import { Inter } from "next/font/google";
import { Button, Stack } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function Navbar() {
  return (
    <Stack sx={{width:"100px",justifyContent:"center"}}>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
}