import { Banner } from "componentes/Banner/Banner";
import styles from "./Inicio.module.css";
import ddPosts from "assets/json/posts.json";
import Post from "componentes/Post";


export const Inicio = () => {
    return (
        <main>
            <Banner />
            <ul className={styles.posts}>
                {ddPosts.map((iPost) => (
                    <li key={iPost.id}>
                        <Post post={iPost} />
                    </li>
                ))}
            </ul>
        </main>
    )
}