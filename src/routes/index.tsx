import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Header from "../Components/Header";
import Camisetas from "../pages/Camisetas";
import Bermudas from "../pages/Bermudas";
import Calcados from "../pages/Calcados";
import NotFound from "../pages/NotFound";



export default function RoutesApp(){
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/camisetas" element={ <Camisetas /> } />
                <Route path="/bermudas" element={ <Bermudas /> } />
                <Route path="/calçados" element={ <Calcados /> } />
                <Route path="*" element={ <NotFound /> } />
            </Routes>
        </BrowserRouter>
    );
}