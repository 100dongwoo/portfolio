import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./Page/MainPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />

        {/*<Route exact path="/Email" component={EmailPage} />*/}
      </Routes>
    </Router>
  );
}

export default App;
