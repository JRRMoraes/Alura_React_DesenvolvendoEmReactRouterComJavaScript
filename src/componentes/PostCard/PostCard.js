import styles from "./PostCard.module.css";
import { Link } from "react-router-dom";
import BotaoPrincipal from "componentes/BotaoPrincipal";


export const PostCard = ({
    post
}) => {

    function MontarPostsId() {
        return (`/posts/${post.id}`);
    }


    function MontarCapaSrc() {
        return (`/assets/posts/${post.id}/capa.png`);
    }


    return (
        <Link to={MontarPostsId()}>
            <div className={styles.post}>
                <img className={styles.capa}
                    src={MontarCapaSrc()}
                    alt="Imagem de capa do post"
                />
                <h2 className={styles.titulo}>
                    {post.titulo}
                </h2>
                <BotaoPrincipal>
                    Ler
                </BotaoPrincipal>
            </div>
        </Link>
    )
}