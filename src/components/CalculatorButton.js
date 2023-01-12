import { Fab } from "@mui/material";

export default function CalculatorButton(props) {
  return (
    <Fab
      sx={{
        fontSize: "1.5em",
        backgroundColor: props.color === "gray" ? "#505050" : "#FF9500",
        visibility: props.hidden && "hidden",
      }}
      onClick={props.click}
      value={props.value}
    >
      {props.children}
    </Fab>
  );
}
