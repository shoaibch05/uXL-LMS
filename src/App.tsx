import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import StudentLogin from "./components/Login/StudentLogin";
import Forgot from "./components/Login/Forgot_Password/Forgot";
import EmailSend from "./components/Login/Forgot_Password/EmailSend";
import SetNewPass from "./components/Login/Forgot_Password/SetNewPass";

export const App = () => {
  return (
    <div className="bg-[#f5f5f7]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/student/login" element={<StudentLogin />} />
          <Route path="/forgot_password" element={<Forgot />} />
          <Route path="/forgot_password/email" element={<EmailSend />} />
          <Route
            path="/forgot_password/email/setup_password"
            element={<SetNewPass />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
