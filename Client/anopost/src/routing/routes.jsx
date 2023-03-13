import React from 'react'
import MainPage from "../component/main page/mainPage"
import { Post } from '../component/main page/body'
import { Route, Routes } from 'react-router-dom'
import AuthPage from '../component/AuthPage'

const MyRoutes = () => {
    return (
        <>
            <h1>It's Rout Page</h1>

            <Routes>
                <Route path='/' element={<AuthPage />} />
                <Route path='/anopost' element={<MainPage   />} />
            </Routes>
        </>
    )
}
export default MyRoutes