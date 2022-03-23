import React, { Suspense } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Navigation } from "./Navigation"

const Home = React.lazy(() => import('./Home'));
const Contact = React.lazy(() => import('./Contact'));
const AboutMe = React.lazy(() => import('./AboutMe'));

const App = () => {
return (
        <BrowserRouter>
            <Navigation />
            <Suspense fallback={<p>Trwa ładowanie...</p>}>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/about' element={<AboutMe />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export { App }