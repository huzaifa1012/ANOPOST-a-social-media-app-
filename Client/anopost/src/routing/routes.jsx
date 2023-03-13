import React from 'react'
import MainPage from "../component/main page/mainPage"
import { Post } from '../component/main page/body'
import { Route, Routes } from 'react-router-dom'
import * as Components from '../component/AuthPage'
const MyRoutes = () => {
    return (
        <>
            <h1>It's Rout Page</h1>

            <Routes>
                <Route path='/' element={<Components.Signin />} />
                <Route path='/anopost' element={<MainPage />} />
                <Route path='/signup' element={<Components.Signup />} />
            </Routes>
        </>
    )
}
export default MyRoutes