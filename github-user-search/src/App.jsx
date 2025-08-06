import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import UserProfile from './components/UserProfile'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
