import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "componentes/Menu";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";
import Inicio from "paginas/Inicio";
import SobreMim from "paginas/SobreMim";


export default function App() {

    function ImporRotas() {
        return (
            <Routes>
                <Route path="/"
                    element={<PaginaPadrao />}
                >
                    <Route index
                        element={<Inicio />}
                    />
                    <Route path="sobremim"
                        element={<SobreMim />}
                    />
                </Route>
                <Route path="*"
                    element={<div>Página não encontrada!</div>}
                />
            </Routes>
        )
    }


    return (
        <div className="App">
            <BrowserRouter>
                <Menu />
                {ImporRotas()}
                <Rodape />
            </BrowserRouter>
        </div>
    );
}