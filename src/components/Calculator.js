import { Box, Container, Grid, Typography } from "@mui/material";
import { useState } from "react";
import Button from "./CalculatorButton";

export default function Calculator() {
  const [num, setNum] = useState(0);
  const [oldnum, setOldNum] = useState(0);
  const [operator, setOperator] = useState();

  const inputNum = (e) => {
    var input = e.target.value;
    if (num === 0) {
      setNum(input);
    } else {
      setNum(num + input);
    }
  };

  const clear = () => {
    setNum(0);
  };

  const porcentage = () => {
    setNum(num / 100);
  };

  const changeSign = () => {
    if (num > 0) {
      setNum(-num);
    } else {
      setNum(Math.abs(num));
    }
  };

  const operatorHandler = (e) => {
    var operatorInput = e.target.value;
    setOperator(operatorInput);
    setOldNum(num);
    setNum(0);
  };

  const calculate = () => {
    if (operator === "/") {
      setNum(parseFloat(oldnum) / parseFloat(num));
    } else if (operator === "X") {
      setNum(parseFloat(oldnum) * parseFloat(num));
    } else if (operator === "-") {
      setNum(parseFloat(oldnum) - parseFloat(num));
    } else if (operator === "+") {
      setNum(parseFloat(oldnum) + parseFloat(num));
    }
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{ backgroundColor: "black", borderRadius: "1em", padding: "1em" }}
      >
        <Typography
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            marginRight: { md: "0.5em" },
            paddingY: "10px",
            overflow: "hidden",
          }}
          variant="h2"
          color="white"
        >
          {num}
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={3} sm={3} md={3}>
            <Button click={clear}>AC</Button>
          </Grid>
          <Grid item xs={3} sm={3} md={3}>
            <Button click={changeSign}>+/-</Button>
          </Grid>
          <Grid item xs={3} sm={3} md={3}>
            <Button click={porcentage}>%</Button>
          </Grid>
          <Grid item xs={3} sm={3} md={3}>
            <Button click={operatorHandler} value="/">
              /
            </Button>
          </Grid>
          <Grid item xs={3} sm={3} md={3}>
            <Button color="gray" click={inputNum} value={7}>
              7
            </Button>
          </Grid>
          <Grid item xs={3} sm={3} md={3}>
            <Button color="gray" click={inputNum} value={8}>
              8
            </Button>
          </Grid>
          <Grid item xs={3} sm={3} md={3}>
            <Button color="gray" click={inputNum} value={9}>
              9
            </Button>
          </Grid>
          <Grid item xs={3} sm={3} md={3}>
            <Button color="orange" click={operatorHandler} value="X">
              *
            </Button>
          </Grid>
          <Grid item xs={3} sm={3} md={3}>
            <Button color="gray" click={inputNum} value={4}>
              4
            </Button>
          </Grid>
          <Grid item xs={3} sm={3} md={3}>
            <Button color="gray" click={inputNum} value={5}>
              5
            </Button>
          </Grid>
          <Grid item xs={3} sm={3} md={3}>
            <Button color="gray" click={inputNum} value={6}>
              6
            </Button>
          </Grid>
          <Grid item xs={3} sm={3} md={3}>
            <Button color="orange" click={operatorHandler} value="-">
              -
            </Button>
          </Grid>
          <Grid item xs={3} sm={3} md={3}>
            <Button color="gray" click={inputNum} value={1}>
              1
            </Button>
          </Grid>
          <Grid item xs={3} sm={3} md={3}>
            <Button color="gray" click={inputNum} value={2}>
              2
            </Button>
          </Grid>
          <Grid item xs={3} sm={3} md={3}>
            <Button color="gray" click={inputNum} value={3}>
              3
            </Button>
          </Grid>
          <Grid item xs={3} sm={3} md={3}>
            <Button color="orange" click={operatorHandler} value="+">
              +
            </Button>
          </Grid>
          <Grid item xs={3} sm={3} md={3}>
            <Button color="gray" click={inputNum} value={0}>
              0
            </Button>
          </Grid>
          <Grid item xs={3} sm={3} md={3}>
            <Button color="gray" click={inputNum} value={"."}>
              .
            </Button>
          </Grid>
          <Grid item xs={3} sm={3} md={3}>
            <Button hidden />
          </Grid>
          <Grid item xs={3} sm={3} md={3}>
            <Button color="orange" click={calculate}>
              =
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
