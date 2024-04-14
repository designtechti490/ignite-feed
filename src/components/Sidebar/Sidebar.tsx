import { PencilLine } from "phosphor-react"
import styles from "./Sidebar.module.css"
import { Avatar } from "../Avatar/Avatar"

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=100&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <div className={styles.profile}>
                <Avatar
                    hasBorder={true}
                    src="https://github.com/designtechti490.png"
                />
                <strong>Marcelo Junior</strong>
                <span>Software Engineer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}
