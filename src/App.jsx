import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Login from "./pages/Login";
import Feed from "./pages/Feed";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />}>
          <Route path="/login" element={<Login />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/profile" element={<>Profile</>} />
        </Route>

        {/* <Route path="/user" element={<Body />}>
          <Route path="/user/feed" element={<Feed />} />
          <Route path="/user/profile" element={<>Profile</>} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
