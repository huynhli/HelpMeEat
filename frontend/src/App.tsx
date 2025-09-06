import { Routes, Route, Outlet } from 'react-router-dom'
import HomePage from './pages/Home.tsx'
import Header from './components/Header.tsx'
import Signup from './pages/signup.tsx'
import Login from './pages/login.tsx'
import PickAFood from './pages/pickAFood.tsx'
import TryNew from './pages/tryNew.tsx'
import MoreTools from './pages/MoreTools.tsx'
import Social from './pages/Social.tsx'


export default function App() {



  // defining default layout
  const Layout = () => {
    return (
      <div>
        <Header/>
        <Outlet/>
      </div>
    )
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/pickAFood' element={<PickAFood/>} />
          <Route path='/tryNew' element={<TryNew/>} />
          <Route path='/moreTools' element={<MoreTools/>} />
          <Route path='/social' element={<Social />} />
        </Route>
      </Routes>
    </div>
  ) 
}
