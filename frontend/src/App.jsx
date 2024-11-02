import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Login from "./components/Login"
import Register from "./components/Register"
import Feedback from "./components/Feedback"
import Ai from "./components/Ai"
import Calendar from "./components/Calendar"
import Medalists from "./components/Medalist"
import IndianMedalWinningAthletes from "./components/IndianMedalWinningAthletes"
import OlympicPage from "./components/OlympicPage"
import AmanpreetSinghPage from "./components/AmanAMAN"
import HarmanpreetSinghPage from './components/HarmanpreetSingh'
import EshaSinghPage from './components/EshaSingh'
import SwapnilKusalePage from './components/SwapnilKUSALE'
import NeerajChopraPage from './components/NeerajChopraPage'
import ManuBhakarPage from './components/ManuBHAKER'
import {  createBrowserRouter,RouterProvider } from "react-router-dom"

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <><Header  /><Home /><Footer /></>
    },
    {
      path: '/login',
      element: <><Header  /><Login   /><Footer /></>
    },
    {
      path: '/register',
      element: <><Header  /><Register   /><Footer /></>
    },
    {
      path: '/contact',
      element: <><Header   /><Feedback /><Footer /></>
    },
    {
      path: '/ai',
      element: <><Header   /><Ai  /><Footer /></>
    },
    {
      path: '/schedule',
      element: <><Header   /><Calendar  /><Footer /></>
    },
    {
      path: '/medal',
      element: <><Header   /><Medalists  /><Footer /></>
    },
    {
      path: '/indian',
      element: <><Header   /><IndianMedalWinningAthletes  /><Footer /></>
    },
    {
      path: '/olympic',
      element: <><Header   /><OlympicPage  /><Footer /></>
    },
    {
      path: '/aman',
      element: <><Header   /><AmanpreetSinghPage  /><Footer /></>
    },
    {
      path: '/harmanpreet',
      element: <><Header   /><HarmanpreetSinghPage  /><Footer /></>
    },
    {
      path: '/esha',
      element: <><Header   /><EshaSinghPage  /><Footer /></>
    },
    {
      path: '/neeraj',
      element: <><Header   /><NeerajChopraPage  /><Footer /></>
    },
    {
      path: '/swapnil',
      element: <><Header   /><SwapnilKusalePage  /><Footer /></>
    },
    {
      path: '/manu',
      element: <><Header   /><ManuBhakarPage  /><Footer /></>
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
      
    </>
  )
}

export default App
