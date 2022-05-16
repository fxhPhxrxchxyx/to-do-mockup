import { Typography } from "@mui/material";
import { Box } from "@mui/system";
const Navbar = () => {
  return (
    <Box
      sx={{
        boxShadow: "9px 9px 20px -4px rgba(0,0,0,0.57)",
        backgroundColor: "#fff",
      }}
      display="flex"
      height="64px"
      padding="0 60px"
      justifyContent="center"
    >
      <Box
        display="flex"
        height="64px"
        alignItems="center"
        justifyContent="space-between"
        padding="0 10px"
        maxWidth="1248px"
        width="100%"
      >
        <Box sx={{ display: "flex", gap: "10px" }}>
          <img src="pic/logo-3.svg" alt="logo" width="56px" height="56px" />

          <Typography
            variant="body1"
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            Due Today,Do Tomorrow
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "10px" }}>
          <Box
            sx={{
              background: "#EAEAEA",
              padding: "5px 20px",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            Login
          </Box>
          <Box
            sx={{
              background: "#EAEAEA",
              padding: "5px 20px",
              borderRadius: "10px",
              display: "flex",
            }}
          >
            Home
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
