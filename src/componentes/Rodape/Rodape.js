import styles from "./Rodape.module.css";
import { ReactComponent as ImgMarcaRegistrada } from "assets/marca_registrada.svg";


export const Rodape = () => {
    return (
        <footer className={styles.rodape}>
            <ImgMarcaRegistrada />
            Desenvolvido por Alura.
        </footer>
    )
}