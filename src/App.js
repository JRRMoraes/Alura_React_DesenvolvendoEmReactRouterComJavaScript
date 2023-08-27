import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./componentes/Menu";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";


export default function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route path="/"
                        element={<Inicio />}
                    />
                    <Route path="/sobremim"
                        element={<SobreMim />}
                    />
                    <Route path="*"
                        element={<div>Página não encontrada!</div>}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}