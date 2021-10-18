import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import MeetPage from "./pages/MeetPage";

export default function App() {
  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/meet" component={MeetPage} />
          </Switch>
        </Router>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
