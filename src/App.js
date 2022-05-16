import { Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";

function App() {
  return (
    <Box
      backgroundColor="#F7F7F7"
      whight="1388px"
      margin={2}
      borderRadius="10px"
    >
      <Stack justifyContent="center">
        <Typography fontSize="64px" lineHeight="96px" textAlign="center">
          What you need to do?
        </Typography>
        <Box
          backgroundColor="#fff"
          borderRadius={2}
          padding="4px"
          width="460px"
          alignSelf="center"
        >
          <TextField variant="standard" fullWidth />
        </Box>
        <Box display="flex">
          <Box
            backgroundColor="#fff"
            borderRadius={2}
            padding="4px"
            margin="30px 100px"
            width="340px"
            height="205px"
            alignContent="space-between"
          >
            <Typography textAlign="center" padding="20px">
              To-dos
            </Typography>
            <Typography
              variant="h4"
              textAlign="center"
              paddingTop="25px"
              marginBottom="30px 20px"
            >
              18
            </Typography>
          </Box>
          <Box
            backgroundColor="#fff"
            borderRadius={2}
            padding="4px"
            margin="30px 100px"
            width="340px"
            height="205px"
            alignContent="space-between"
          >
            <Typography textAlign="center" padding="20px">
              Done Tasks
            </Typography>
            <Typography
              variant="h4"
              textAlign="center"
              paddingTop="25px"
              marginBottom="30px 20px"
            >
              16
            </Typography>
          </Box>
          <Box
            backgroundColor="#fff"
            borderRadius={2}
            padding="4px"
            margin="30px 100px"
            width="340px"
            height="205px"
            alignContent="space-between"
          >
            <Typography textAlign="center" padding="20px">
              Undone tasks
            </Typography>
            <Typography
              variant="h4"
              textAlign="center"
              paddingTop="25px"
              marginBottom="30px 20px"
            >
              2
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}

export default App;
