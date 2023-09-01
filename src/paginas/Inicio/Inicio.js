import styles from "./Inicio.module.css";
import ddPosts from "assets/json/posts.json";
import PostCard from "componentes/PostCard";


export const Inicio = () => {
    return (
        <ul className={styles.posts}>
            {ddPosts.map((iPost) => (
                <li key={iPost.id}>
                    <PostCard post={iPost} />
                </li>
            ))}
        </ul>
    )
}