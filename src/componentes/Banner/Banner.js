import styles from "./Banner.module.css";
import imgCirculoColorido from "assets/circulo_colorido.png";
import imgMinhaFoto from "assets/minha_foto.png";


export const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, mundo!
                </h1>
                <p className={styles.paragrafo}>
                    Boas vindas ao meu espaço pessoal! Eu sou Antônio Evaldo, instrutor de Front-end da Alura. Aqui compartilho vários conhecimentos, espero que aprenda algo novo :)
                </p>
            </div>
            <div className={styles.imagens}>
                <img className={styles.circuloColorido}
                    src={imgCirculoColorido}
                    aria-hidden={true}
                />
                <img className={styles.minhaFoto}
                    src={imgMinhaFoto}
                    alt="Foto do Antônio Evaldo sorrindo"
                />
            </div>
        </div>
    )
}