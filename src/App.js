import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "componentes/Menu";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";
import Inicio from "paginas/Inicio";
import SobreMim from "paginas/SobreMim";
import NaoEncontrada from "paginas/NaoEncontrada";
import Post from "componentes/Post";
import ScrollToTop from "componentes/ScrollToTop";


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
                <Route path="posts/:id"
                    element={<Post />}
                />
                <Route path="*"
                    element={<NaoEncontrada />}
                />
            </Routes>
        )
    }


    return (
        <div className="App">
            <BrowserRouter>
                <ScrollToTop />
                <Menu />
                {ImporRotas()}
                <Rodape />
            </BrowserRouter>
        </div>
    );
}