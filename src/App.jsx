import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Courses from './pages/Courses'
import SelectCourse from './pages/SelectCourse'
import SelectedList from './components/SelectedList'
import EditeCourse from './pages/EditeCourse'
import Login from './pages/Login'
import ProtectedRoute from "./components/ProtectedRoute";
import Contact from './pages/Contact'
import { ToastContainer } from 'react-toastify'


const App = () => {
    const [islogedIn, setIslogedIn] = useState(false);

    useEffect(() => {
        let loginStatus = JSON.parse(localStorage.getItem("islogedIn")) || false
        setIslogedIn(loginStatus)
    }, [])
    return (
        <BrowserRouter>
            <Header islogedIn={islogedIn} setIslogedIn={setIslogedIn} />
            <ToastContainer/>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/courses' element={<Courses />} />
                <Route path='/selectcourse' element={<ProtectedRoute islogedIn={islogedIn} Component={SelectCourse} />} />
                <Route path='/course-list' element={<ProtectedRoute islogedIn={islogedIn} Component={SelectedList} />} />
                <Route path='/editecourse/:id' element={<ProtectedRoute islogedIn={islogedIn} Component={EditeCourse} />} />
                <Route path="/login" element={<Login setIslogedIn={setIslogedIn} />} />
                <Route path='/contact' element={<Contact />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;