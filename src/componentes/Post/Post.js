import "./Post.css";
import styles from "./Post.module.css";
import { Route, Routes, useParams } from "react-router-dom";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import ddPosts from "assets/json/posts.json";
import PostModelo from "componentes/PostModelo";
import NaoEncontrada from "paginas/NaoEncontrada";
import PaginaPadrao from "componentes/PaginaPadrao";
import PostCard from "componentes/PostCard";


export const Post = () => {

    const parametros = useParams();


    const fPost = ddPosts.find((iPost) => {
        return (iPost.id === Number(parametros.id));
    })


    const fPostsRecomendados = ddPosts.filter((iPost) => iPost.id !== Number(parametros.id))
        .sort((a, b) => b.id - a.id)
        .slice(0, 4);


    function MontarCapaSrc() {
        return (`/assets/posts/${fPost.id}/capa.png`);
    }


    if (!fPost) {
        return (
            <NaoEncontrada />
        )
    }
    return (
        <Routes>
            <Route path="*"
                element={<PaginaPadrao />}
            >
                <Route index
                    element={
                        <PostModelo titulo={fPost.titulo}
                            imgFotoCapa={MontarCapaSrc()}
                        >
                            <div className="post-markdown-container">
                                <ReactMarkdown>
                                    {fPost.texto}
                                </ReactMarkdown>
                            </div>
                            <h2 className={styles.tituloOutrosPosts}>
                                Outros posts que você pode gostar:
                            </h2>
                            <ul className={styles.postsRecomendados}>
                                {fPostsRecomendados.map((iPost) => (
                                    <li key={iPost.id} >
                                        <PostCard post={iPost}></PostCard>
                                    </li>
                                ))}
                            </ul>
                        </PostModelo>
                    } />
            </Route>
        </Routes>
    )
}