import styles from "./BotaoPrincipal.module.css";


export const BotaoPrincipal = ({
    tamanho,
    children
}) => {

    function EstilizarBotaoPrincipal() {
        return (`
            ${styles.botaoPrincipal}    
            ${styles[tamanho]}
        `);
    }


    return (
        <button className={EstilizarBotaoPrincipal()}>
            {children}
        </button>
    )
}