import Image from "next/image";
import { Inter } from "next/font/google";
import { Button, Container, Stack, Typography } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ height: "100vh"}} >
      <Stack
        direction="row"
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        <Stack>
          <Image
            src="/images/navbar/Frame 427320930.svg"
            alt="logo"
            width={428}
            height={441}
          />
        </Stack>
        <Stack>
          <Image
            src="/images/navbar/Frame 427320929.svg"
            alt="logo"
            width={544}
            height={352}
          />
        </Stack>
        <Stack>
          <Image
            src="/images/navbar/Frame 427320931.svg"
            alt="logo"
            width={428}
            height={441}
          />
        </Stack>
      </Stack>
      <Stack sx={{width:'1064px', height:'168px', backgroundColor:'red',borderRadius:'10px',justifyContent:'center'}}>

      </Stack>


      <Typography variant="h4" sx={{fontWeight:700, textAlign:'center'}}> {/* Use variant="h2" */}
        {"Your Pets, Our Priority: Perfect Care, Anytime, Anywhere."}
      </Typography>

    </Container>
  );
}
