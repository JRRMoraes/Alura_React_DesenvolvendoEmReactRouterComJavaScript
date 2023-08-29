import Banner from "componentes/Banner";
import { Outlet } from "react-router-dom";


export const PaginaPadrao = () => {
    return (
        <main>
            <Banner />
            <Outlet />
        </main>
    )
}