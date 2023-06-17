import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeView from './views/HomeView';
import AboutView from './views/AboutView';
import NotFoundView from './views/NotFoundView';
import CounterView from "./views/CounterView";
import RecommendationsView from "./views/RecommendationsView";

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import "./index";


export default function App() {
  return (
    <div className="AppContent">
      <BrowserRouter>
        <NavBar/>   
        <Routes>
          <Route path="/" element= {<HomeView/>}/>
          <Route path="/about" element= {<AboutView/>}/>
          <Route path="/counter" element= {<CounterView/>}/>
          <Route path="/recommendations" element= {<RecommendationsView/>}/>
          <Route path="*" element= {<NotFoundView/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}
