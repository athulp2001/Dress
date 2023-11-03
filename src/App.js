import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import NavB from './Componets/NavB';
import Men from './Componets/Men/Men';
import HomeLiving from './Componets/HomeLiving/HomeLiving';
import Beauty from './Componets/Beauty/Beauty';

import StudioMain from './Componets/Studio/StudioMain';
import Studio from './Componets/Studio/Studio';

import Bag from './Componets/Bag/Bag';
import Login from './Componets/Login/Login';
import WishList from './Componets/WishList/WishList';
import Adrop from './Componets/Adrop';
import StudioNav from './Componets/Studio/StudioNav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
<NavB></NavB>
    </div>
  );
}

export default App;
