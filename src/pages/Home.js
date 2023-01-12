import AvTimerIcon from "@mui/icons-material/AvTimer";
import CalculateIcon from "@mui/icons-material/Calculate";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Container, Tab } from "@mui/material";
import { useState } from "react";
import Calculator from "../components/Calculator";
import Counter from "../components/Counter";
import StopWatch from "../components/StopWatch";

export default function Home() {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fda172",
        height: "100vh",
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ backgroundColor: "#fff" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                variant="scrollable"
                scrollButtons
                allowScrollButtonsMobile
                onChange={handleChange}
              >
                <Tab
                  icon={<FormatListNumberedIcon />}
                  iconPosition="start"
                  label="Contador"
                  value="1"
                />
                <Tab
                  icon={<AvTimerIcon />}
                  iconPosition="start"
                  label="Cronometro"
                  value="2"
                />
                <Tab
                  icon={<CalculateIcon />}
                  iconPosition="start"
                  label="Calculadora"
                  value="3"
                />
              </TabList>
            </Box>
            <TabPanel value="1">
              <Counter />
            </TabPanel>
            <TabPanel value="2">
              <StopWatch />
            </TabPanel>
            <TabPanel value="3">
              <Calculator />
            </TabPanel>
          </TabContext>
        </Box>
      </Container>
    </Box>
  );
}
