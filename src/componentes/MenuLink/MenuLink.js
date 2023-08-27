import styles from "./MenuLink.module.css";
import { NavLink } from "react-router-dom";


export const MenuLink = ({
    children,
    to
}) => {

    function montarStyles(estaAtivo) {
        return (`${styles.link}
                ${estaAtivo ? styles.linkDestacado : ""}        
                `)
    }


    return (
        <NavLink className={({ isActive }) => montarStyles(isActive)}
            to={to}
        >
            {children}
        </NavLink >
    )
}