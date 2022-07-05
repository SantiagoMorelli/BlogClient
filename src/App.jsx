import Topbar from "./components/topbar/TopBar";
import Homepage from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);
  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route path="/">
          <Route index element={<Homepage />} />
          <Route path="posts" element={<Homepage />} />
          <Route path="register" element={user ? <Homepage /> : <Register />} />
          <Route path="login" element={user ? <Homepage /> : <Login />} />
          <Route path="post/:id" element={<Single />} />
          <Route path="write" element={user ? <Write /> : <Login />} />
          <Route path="settings" element={user ? <Settings /> : <Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
