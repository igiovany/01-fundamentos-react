import { PencilLine } from 'phosphor-react' 
import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={ styles.sidebar }>
            <img 
                className={ styles.cover }
                src="https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            />

            <div className={ styles.profile }>
                <img className={ styles.avatar } src="https://avatars.githubusercontent.com/u/105370259?v=4" />

                <strong>Giovany Inocêncio</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>

        </aside>
    );
}