import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './componemts/Header'
import Home from './pages/Home'

function App() {

  return (
   <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}></Route>
    </Routes>
   </Router>
  )
}

export default App
