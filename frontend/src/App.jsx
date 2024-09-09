import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Login from "./components/Login"
import Register from "./components/Register"
import Feedback from "./components/Feedback"
import Ai from "./components/Ai"
import Calendar from "./components/Calendar"
import Medalists from "./components/Medalist"
import { useState } from "react"
import {  createBrowserRouter,RouterProvider } from "react-router-dom"

function App() {
  const [user, setUser] = useState({
      name: "",
      email: "",
      pass: ""
  })

  const router = createBrowserRouter([
    {
      path: '/',
      element: <><Header user={user} setUser={setUser}/><Home /><Footer /></>
    },
    {
      path: '/login',
      element: <><Header user={user} setUser={setUser}/><Login setUser={setUser} user={user} /><Footer /></>
    },
    {
      path: '/register',
      element: <><Header user={user} setUser={setUser}/><Register user={user} setUser={setUser} /><Footer /></>
    },
    {
      path: '/contact',
      element: <><Header user={user} setUser={setUser} /><Feedback user={user}/><Footer /></>
    },
    {
      path: '/ai',
      element: <><Header user={user} setUser={setUser} /><Ai user={user} /><Footer /></>
    },
    {
      path: '/schedule',
      element: <><Header user={user} setUser={setUser} /><Calendar user={user} /><Footer /></>
    },
    {
      path: '/medal',
      element: <><Header user={user} setUser={setUser} /><Medalists user={user} /><Footer /></>
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
      
    </>
  )
}

export default App
