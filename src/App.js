import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeView from './views/HomeView';
import AboutView from './views/AboutView';
import NotFoundView from './views/NotFoundView';
import UserView from './views/UserView';
import CounterView from "./views/CounterView";
import NavBar from './components/NavBar';
import Footer from './components/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <NavBar/>   
      <Routes>
        <Route path="/" element= {<HomeView/>}/>
        <Route path="/about" element= {<AboutView/>}/>
        <Route path="/mascota/:id" element= {<UserView/>}/>
        <Route path="/counter" element= {<CounterView/>}/>
        <Route path="*" element= {<NotFoundView/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
