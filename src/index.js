import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import './index.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 
import Home from './pages/Home';
import Aboutme from './pages/Aboutme';
import Skills from './pages/Skills';
import Jobs from './pages/Jobs';
import Job from './pages/Job';  //detalle del trabajo
import Error404 from './pages/Error404';
import Studies from './pages/Studies';
import Study from './pages/Study'; //detalle del estudio

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/miportafolioSD/' element={<Home/>} ></Route> 
      <Route path='/about-me' element={<Aboutme/>}></Route>
      <Route path='/studies' element={<Studies/>}></Route>
      <Route path='/skills' element={<Skills/>}></Route>
      <Route path='/jobs' element={<Jobs/>}></Route>

      <Route path='*' element={<Error404/>}></Route>

      <Route path='/home' element={<Navigate replace to={"/"}/>}></Route>

      <Route path='/jobs/:id' element={<Job/>}></Route>
      <Route path='/studies/:id' element={<Study/>}></Route>
    </Routes>
  </BrowserRouter>
);
