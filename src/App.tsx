import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/auth/Login";
import RegisterPage from "./components/auth/RegistrationPage";
import TestSelectionPage from "./components/test/TestSelectionPage";
import TestPage from "./components/test/TestPage";
import ResultsPage from "./components/result/ResultPage";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<TestSelectionPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/test/:testId" element={<TestPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="*" element={<h1>Warning 404 error!</h1>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
