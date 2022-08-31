import styles from './Header.module.css';

import todoLogo from '../assets/Logo.svg';
import { Cadastro } from './Cadastro';

export function Header(){
    return(
        <div>
        <header className={styles.header}>
        <img src={todoLogo} alt="Logotipo Ignite" />
        </header>
        <div className={styles.cadastro}>
        <Cadastro/>
        </div>
        </div>
    );
} 