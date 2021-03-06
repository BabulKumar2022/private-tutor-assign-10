import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Blogs from './components/Blogs/Blogs';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import NotFound from './components/NotFound/NotFound';
import Services from './components/Services/Services';
import RequireAuth from './RequireAuth/RequireAuth';

function App() {
  return (
    <div >
      <Navbar ></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='services' element={<Services></Services>}></Route>
        <Route path='blogs' element={<Blogs></Blogs>}></Route>
        <Route path='aboutme' element={<AboutMe></AboutMe>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='cart' element=
        {
          <RequireAuth>
            <Cart></Cart>
          </RequireAuth>
        }></Route>
         <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
