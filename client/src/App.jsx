import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import CommonPage from "./pages/admin/CommonPage";
import Sidebar from "./pages/admin/Sidebar";
import UserList from "./pages/admin/UserList";
import Registration from "./pages/Registration";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Registration />} />
          <Route path="/admin/user-list" element={<CommonPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
