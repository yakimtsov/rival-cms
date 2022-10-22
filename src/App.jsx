import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import View from "./pages/Dashboard/View/View";
import Create from './pages/Dashboard/Create/Create'
import Files from './pages/Dashboard/Files/Files'

function App() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" />
              <Route index element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element = {<View />}/>
            <Route path="/dashboard/create" element = {<Create />}/>
            <Route path="/dashboard/files" element = {<Files />}/>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
  
  export default App;