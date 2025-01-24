import ptBR from "date-fns/locale/pt-BR"
import setDefaultOptions from "date-fns/setDefaultOptions"

import { Header } from "./components/Header/Header"
import { Sidebar } from "./components/Sidebar/Sidebar"
import { Post, PostType } from "./components/Post/Post"

import "./global.css"
import styles from "./App.module.css"

//author: { avatar_url: "", name: "", jobTitle: ""}

//publishedAt: date: Date

//content: String

//liked: Number

setDefaultOptions({ locale: ptBR })

const posts: PostType[] = [
    {
        id: 1,
        author: {
            avatarUrl: "https://github.com/diego3g.png",
            name: "Diego Fernandes",
            jobTitle: "CTO @Rocketseat",
        },
        content: [
            { type: 'paragraph', content: 'Fala galera 👋' },
            { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
            { type: 'link', content: 'jane.design/doctorcare' },
        ],
        publishedAt: new Date("2024-02-02 22:26:45"),
    },
    {
        id: 2,
        author: {
            avatarUrl: "https://github.com/maykbrito.png",
            name: "Mayk Brito",
            jobTitle: "Educator @Rocketseat",
        },
        content: [
            { type: 'paragraph', content: 'Fala galera 👋' },
            { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
            { type: 'link', content: 'jane.design/doctorcare' },
        ],
        publishedAt: new Date("2024-02-02 23:26:45"),
    },
    {
        id: 3,
        author: {
            avatarUrl: "https://github.com/designtechti490.png",
            name: "Marcelo Junior",
            jobTitle: "Salesperson @Nike and Developer Student",
        },
        content: [
            {
                type: "paragraph",
                content: "Fala galera!",
            },
            {
                type: "paragraph",
                content:
                    "Acabei de me inscrever no curso Ignite da Rocketseat e estou amando o conteúdo. Ganhei um acesso gratuito na plataforma durante 7 dias (período de avaliação) ao terminar o outro curso (o Discover). 🚀",
            },
            {
                type: "paragraph",
                content:
                    "O conteúdo é muito bom e eu já tive a oportunidade de aplicar em outros projetos. São ótimos professores e a comunidade é super ativa. Recomendo a todos que se inscrevam!",
            },
            {
                type: "paragraph",
                content:
                    "Estou aproveitando ao máximo o tempo para estudar e aprender. Agradeço a Rocketseat por me trazer aqui. Também me inscrevi no evento NLW que ocorrerá na próxima semana.",
            },
            {
                type: "paragraph",
                content:
                    "Infelizmente não vou conseguir assistir ao evento, mas espero que tenhamos uma boa experiência! Devido ao horário de trabalho que é bem no horário do evento, pois estarei, voltando para a Nike como Efetivo Full Time.",
            },
            {
                type: "paragraph",
                content:
                    "Abraços! Vou deixar o link do meu site abaixo. Espero que gostem do conteúdo e que tenhamos uma boa experiência com a Rocketseat e o NLW.",
            },
            {
                type: "link",
                content: "https://designtechti490.github.io/devlinks/",
            },
        ],
        publishedAt: new Date("2024-02-02 00:04:32"),
    },
]
export function App() {
    return (
        <div>
            <Header />
            <div className={styles.wrapper}>
                <Sidebar />
                <main>
                    {posts.map((post) => {
                        return (
                            <Post
                                key={post.id}
                                post={post}
                            />
                        )
                    })}
                </main>
            </div>
        </div>
    )
}

export default App
