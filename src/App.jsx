import React from "react"
import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router-dom"
import Body from "./components/Body"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Body />}>
        <Route path="/login" element={<>Login</>} />
      </Route>

      <Route path="/user" element={<Body />}>
        <Route path="/user/profile" element={<>Profile</>} />
      </Route>
    </Routes>
  )
}

export default App
