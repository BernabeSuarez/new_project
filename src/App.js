import Login from "./pages/login/Login";
import AddDate from "./components/addDate/AddDate"
import Turnos from "./components/turnos/Turnos";
import RootLayout from "./components/rootLayout/RootLayout";
import { getAuth } from "firebase/auth";
import { app } from "./firebase/firebaseConfig";
import { useState, useEffect } from "react";

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Turnos />} />
      <Route path="agregar_cita" element={<AddDate />} />
      <Route path="login" element={<Login />} />
    </Route>
  ))


function App() {

  const [userState, setUserState] = useState(false);

  getAuth().onAuthStateChanged(user => setUserState(!!user))

  return (userState ? <RouterProvider router={router} /> : <Login />)



}



export default App;
