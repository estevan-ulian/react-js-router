import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contato from "./pages/Contato";
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Error from './pages/Error'
import Header from "./components/Header";
import Produto from "./pages/Produtos";

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={ <Home />}/>
                <Route path="/sobre" element={ <Sobre />}/>
                <Route path="/contato" element={ <Contato />}/>
                <Route path="/produto/:id" element={ <Produto />}/>

                <Route path="*" element={<Error />}/>
            </Routes>
        </BrowserRouter>
    )
}