import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./componentes/Menu";
import Rodape from "componentes/Rodape";
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

                <Rodape />
            </BrowserRouter>
        </div>
    );
}