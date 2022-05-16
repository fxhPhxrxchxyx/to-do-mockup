import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faXmark,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import { Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";

function App() {
  return (
    <Box
      backgroundColor="#F7F7F7"
      whight="1388px"
      height="100vh"
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

        <Box
          display="flex"
          justifyContent="space-evenly"
          alignItems="center"
          marginBottom="20px"
        >
          <Box backgroundColor="#ECECF7" borderRadius={2} padding="20px 80px ">
            <Stack flexDirection="row" gap="20px" justifyContent="space-evenly">
              <Typography>Todo dodo dodo...</Typography>
              <Typography>
                <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>
                {new Date().toLocaleDateString()} {new Date().getHours()}:
                {new Date().getMinutes()}
              </Typography>
              <Box borderRadius="100px">
                <Typography
                  backgroundColor="#6DBE9F"
                  color="#fff"
                  padding="1px 5px"
                  borderRadius="100%"
                >
                  <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                </Typography>
              </Box>
              <Typography>Done</Typography>
            </Stack>
          </Box>
          <Box backgroundColor="#ECECF7" borderRadius={2} padding="20px 80px ">
            <Stack flexDirection="row" gap="20px" justifyContent="space-evenly">
              <Typography>Todo dodo dodo...</Typography>
              <Typography>
                <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>
                {new Date().toLocaleDateString()} {new Date().getHours()}:
                {new Date().getMinutes()}
              </Typography>
              <Box borderRadius="100px">
                <Typography
                  backgroundColor="#6DBE9F"
                  color="#fff"
                  padding="1px 5px"
                  borderRadius="100%"
                >
                  <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                </Typography>
              </Box>
              <Typography>Done</Typography>
            </Stack>
          </Box>
        </Box>
        <Box display="flex" justifyContent="space-evenly" alignItems="center">
          <Box backgroundColor="#fff" borderRadius={2} padding="20px 80px ">
            <Stack flexDirection="row" gap="12px" justifyContent="space-evenly">
              <Typography>Todo dodo dodo...</Typography>
              <Typography>
                <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>
                {new Date().toLocaleDateString()} {new Date().getHours()}:
                {new Date().getMinutes()}
              </Typography>
              <Box borderRadius="100px">
                <Typography
                  backgroundColor="#DA6E6E"
                  color="#fff"
                  padding="1px 5px"
                  borderRadius="200%"
                >
                  <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
                </Typography>
              </Box>
              <Typography>Undone</Typography>
            </Stack>
          </Box>
          <Box backgroundColor="#ECECF7" borderRadius={2} padding="20px 80px ">
            <Stack flexDirection="row" gap="20px" justifyContent="space-evenly">
              <Typography>Todo dodo dodo...</Typography>
              <Typography>
                <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>
                {new Date().toLocaleDateString()} {new Date().getHours()}:
                {new Date().getMinutes()}
              </Typography>
              <Box borderRadius="100px">
                <Typography
                  backgroundColor="#6DBE9F"
                  color="#fff"
                  padding="1px 5px"
                  borderRadius="100%"
                >
                  <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                </Typography>
              </Box>
              <Typography>Done</Typography>
            </Stack>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}

export default App;
