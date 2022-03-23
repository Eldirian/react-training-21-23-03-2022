import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Book } from "./Book"
import { Books } from "./Books"

const App = () => {
    return <BrowserRouter>
        <Routes>
            <Route path='/' element={<Books />} />
            <Route path='/:id' element={<Book />} />
        </Routes>
    </BrowserRouter>
}

export { App }