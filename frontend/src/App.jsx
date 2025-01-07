import { Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import EmailVerificationPage from "./pages/EmailVerificationPage";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-800 via-cyan-700 to-teal-600 flex items-center justify-center">
      <Routes>
        <Route path="/" element={"Homepage"} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/verify-email" element={<EmailVerificationPage />} />
      </Routes>
    </div>
  );
}

export default App;
