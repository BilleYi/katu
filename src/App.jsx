import React, { useEffect } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"
import { Login } from "./components"
import Home from "./containers/Home"

export default function App() {

    const navigate = useNavigate()

    useEffect(() => {
        const User = localStorage.getItem('token') !== 'undefined' ? JSON.parse(localStorage.getItem('token')) : localStorage.clear()

        if (User) navigate('/login')
    }, [navigate])

    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<Home />} />
        </Routes>

    )
}
