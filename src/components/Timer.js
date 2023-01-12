import { Box } from "@mui/material";

export default function Timer(props) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "3rem",
      }}
    >
      <span>{("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}.</span>
      <span>{("0" + ((props.time / 10) % 100)).slice(-2)}</span>
    </Box>
  );
}
