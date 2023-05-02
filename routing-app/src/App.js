import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from './components/Products/Products';
import Laptop from './components/Products/Laptop';
import Mobile from './components/Products/Mobile';
import PageNotFound from './components/PageNotFound';
import Users from './components/Users/Users';
import UserDetails from './components/Users/UserDetails';
import Profile from './components/Profile';
import { AuthProvider } from './utils/Auth';
import Login from './components/Login';
import RequireAuth from './utils/RequireAuth';

function App() {
  const navigate = useNavigate();

  return (
    <AuthProvider>

      <Navbar title={'Routing App'} isShow={true} />

      <div className="container my-5">
        <Routes>

          {/* By default home route */}
          <Route path='/' element={<Home />}/>
          <Route path='/home' element={<Home />}/>

          {/* Nested routes */}
          <Route path='/products' element={<Products />}>
            <Route index element={<Mobile />}/>
            <Route path='mobile' element={<Mobile />}/>
            <Route path='laptop' element={<Laptop />}/>
          </Route>

          {/* Dynamic routes */}
          <Route path='/users' element={<Users />} />
          <Route path='/users/:id' element={<UserDetails />}/>
          {/* <Route path='/users' element={<Users />}>
            <Route path=':id' element={<UserDetails />}/>
          </Route> */}

          {/* Static routes */}
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/profile' element={<RequireAuth><Profile /></RequireAuth>}/>
          <Route path='/login' element={<Login />}/>

          {/* Page not found route */}
          <Route path='/*' element={<PageNotFound />}/>

          {/* Page not found then navigate to home page */}
          <Route path='/*' element={<Navigate to='/' />}/>

        </Routes>

        <div className='my-5'>
          <h5>Navigating to back page</h5>
          <button className='btn btn-primary' onClick={ () => navigate(-1) }>Go Back</button>
        </div>
      </div>
      
    </AuthProvider>
  );
}

export default App;
