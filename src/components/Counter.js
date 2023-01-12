import { Box, Button, Stack, Typography } from "@mui/material";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "100%",
        height: 350,
      }}
    >
      <Typography variant="h2" component="h2">
        {count}
      </Typography>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" onClick={() => setCount(count + 1)}>
          Increment
        </Button>
        <Button
          disabled={count <= 0}
          variant="contained"
          color="error"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </Button>
      </Stack>
    </Box>
  );
}
