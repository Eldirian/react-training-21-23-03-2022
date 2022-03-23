import { Navigate, Route, Routes } from "react-router-dom"

const Dashboard = () => {
    return <div>
        <h1>Dashboard</h1>
        <Routes>
            <Route path='user' element={<p>I am an user route</p>} />
            <Route path='admin' element={<p>I am an admin route</p>} />
            <Route path='*' element={<Navigate to='/' />} />
        </Routes>
    </div>
}

export { Dashboard }