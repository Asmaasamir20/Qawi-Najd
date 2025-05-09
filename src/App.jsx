import './App.css'
import Navbar from './shared/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen ">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  )
}

export default App
