import { Box, Button, Stack } from "@mui/material";

export default function ControlButtons(props) {
  const StartButton = (
    <Button
      sx={{ borderRadius: "16px" }}
      color="error"
      variant="contained"
      onClick={props.handleStart}
    >
      Start
    </Button>
  );
  const ActiveButtons = (
    <Stack direction="row" spacing={2}>
      <Button
        sx={{ borderRadius: "16px" }}
        color="error"
        variant="outlined"
        onClick={props.handlePauseResume}
      >
        {props.isPaused ? "Resume" : "Pause"}
      </Button>
      <Button
        sx={{ borderRadius: "16px" }}
        color="error"
        variant="contained"
        onClick={props.handleReset}
      >
        Reset
      </Button>
    </Stack>
  );

  return <Box>{props.active ? ActiveButtons : StartButton}</Box>;
}
