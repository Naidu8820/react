import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import Mobile from './Pages/Mobile';
import Laptop from './Pages/Laptop';
import Earbuds from './Pages/Earbuds';
import Tv from './Pages/Tv';
import TvDisplay from './ProductDisplay/TvDisplay';
import EarbudsDisplay from './ProductDisplay/EarbudsDisplay';
import LaptopDisplay from './ProductDisplay/LaptopDisplay';
import MobileDisplay from './ProductDisplay/MobileDisplay';
function App() {

    return (
        <Router>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
                <Route path='/mobile' element={<Mobile/>}/>
                <Route path='/mobile/:id' element={<MobileDisplay/>}/>
                <Route path='/laptop' element={<Laptop/>}/>
                <Route path='/laptop/:id' element={<LaptopDisplay/>}/>
                <Route path='/earbuds' element={<Earbuds/>}/>
                <Route path='/earbuds/:id' element={<EarbudsDisplay/>}/>
                <Route path='/tv' element={<Tv/>}/>
                <Route path='/tv/:id' element={<TvDisplay/>}/>
            </Routes>
        </Router>
    );
}

export default App