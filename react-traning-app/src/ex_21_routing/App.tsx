import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AboutMe } from "./AboutMe"
import { Contact } from "./Contact"
import { Dashboard } from "./Dashboard"
import { Details } from "./Details"
import { Facility } from "./Facility"
import { Home } from "./Home"
import { Navigation } from "./Navigation"

const App = () => {
return (
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/facility/:id' element={<Facility />} />
                <Route path='/details' element={<Details />}>
                    <Route path='about-me' element={<AboutMe />} />
                </Route>
                <Route path='/dashboard/*' element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    )
}

export { App }