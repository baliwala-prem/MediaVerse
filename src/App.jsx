import { useState } from 'react'

import './App.css'
import { fetchGIF, fetchPhotos, fetchVideo } from './api/MediaApi'
import SearchBar from './components/SearchBar'
import Tabs from './components/Tabs'
import ResultGrid from './components/ResultGrid'
import { Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import CollectionPage from './pages/CollectionPage';
import NavBar from './components/NavBar'
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [name, setName] = useState("")


  return (
    <>
      <div className=' bg-gray-400 min-h-screen w-full text-white'>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/collection' element={<CollectionPage/>}/>
        </Routes>
        <ToastContainer/>
      </div>
    </>
  )
}

export default App
