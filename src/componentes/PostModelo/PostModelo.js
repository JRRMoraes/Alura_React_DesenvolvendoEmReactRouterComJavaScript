import styles from "./PostModelo.module.css";


export const PostModelo = ({
    titulo,
    imgFotoCapa,
    children
}) => {

    function EstilizarMontarCapaSrc() {
        return ({ backgroundImage: `url(${imgFotoCapa})` });
    }


    return (
        <article className={styles.postModeloContainer}>
            <div className={styles.fotoCapa}
                style={EstilizarMontarCapaSrc()}
            >
            </div>
            <h2 className={styles.titulo}>
                {titulo}
            </h2>
            <div className={styles.postConteudoContainer}>
                {children}
            </div>
        </article>
    )
}