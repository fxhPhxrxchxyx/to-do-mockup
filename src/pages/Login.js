import {
  createTheme,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
const Login = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#2F3237",
        borderRadius: "12px",
        display: "flex",
        padding: "40px",
      }}
      width="804px"
    >
      <Stack alignItems="center" flex={1}>
        <Typography
          paddingTop="8px"
          color="white"
          size="22px"
          fontWeight="700"
          line-hight="33px"
        >
          Welcome back
        </Typography>
        <Typography
          color="#C5C5C5"
          fontWeight="400"
          size="18px"
          line-hight="27px"
        >
          We're so excited to sleep again 😴
        </Typography>
        <Typography
          paddingTop="50px"
          color="#C5C5C5"
          fontWeight="600"
          size="16px"
          line-hight="24px"
          alignSelf="flex-start"
        >
          EMAIL OR PHONE NUMBER
        </Typography>

        <Box
          backgroundColor="#E4EEFD"
          borderRadius={2}
          padding="4px"
          width="100%"
        >
          <TextField variant="standard" fullWidth size="small" />
        </Box>

        <Typography
          color="#C5C5C5"
          fontWeight="600"
          size="16px"
          line-hight="24px"
          alignSelf="flex-start"
        >
          PASSWORD
        </Typography>
        <ThemeProvider theme={createTheme({ palette: { mode: "dark" } })}>
          <TextField variant="standard" fullWidth type="password" />
        </ThemeProvider>
        <Box
          component="a"
          href="#"
          sx={{ color: "#0095D2", alignSelf: "flex-start" }}
        >
          Forget your password?
        </Box>
        <Typography
          backgroundColor="#505CEA"
          color="white"
          fontWeight="600"
          padding="12px"
          margin="8px"
          width="100%"
          textAlign="center"
          borderRadius="6px"
        >
          Loging
        </Typography>
        <Typography color="#fff" alignSelf="start">
          Need an account? <a style={{ color: "#0095D2" }}>Register</a>
        </Typography>
      </Stack>
      <Stack alignItems="center" justifyContent="center" flex={1}>
        <img src="pic/image2.svg" />
        <Typography color="white" fontWeight="600" padding="15px">
          Unable to Login?
        </Typography>
        <Box textAlign="center">
          <Typography variant="body" color="#fff">
            Listen to some music, relax yourself, and take a deep breath until
            you can remember your password.
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default Login;
