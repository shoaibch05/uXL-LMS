import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import StudentLogin from "./components/Login/StudentLogin";

export const App = () => {
  return (
    <div className="bg-[#f5f5f7]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/student/login" element={<StudentLogin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
