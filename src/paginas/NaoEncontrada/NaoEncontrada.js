import styles from "./NaoEncontrada.module.css";
import imgErro404 from "assets/erro_404.png";
import BotaoPrincipal from "componentes/BotaoPrincipal";
import { useNavigate } from "react-router-dom";


export const NaoEncontrada = () => {

    const navegador = useNavigate();


    return (
        <>
            <div className={styles.conteudoContainer}>
                <span className={styles.texto404}>
                    404
                </span>
                <hi className={styles.titulo}>
                    Ops! Página não encontrada.
                </hi>
                <p className={styles.paragrafo}>
                    Tem certeza de que era isso que você estava procurando?
                </p>
                <p className={styles.paragrafo}>
                    Aguarde uns instantes e recarregue a página, ou volte para a página inicial.
                </p>
                <div className={styles.botaoContainer}
                    onClick={() => navegador(-1)}
                >
                    <BotaoPrincipal tamanho="lg">
                        Voltar
                    </BotaoPrincipal>
                </div>
                <img className={styles.imagemCachorro}
                    src={imgErro404}
                    alt="Cachorro de óculos e vestido como humano"
                />
            </div>
            <div className={styles.espacoEmBranco}></div>
        </>
    )
}