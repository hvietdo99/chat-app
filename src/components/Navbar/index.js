import styles from './Navbar.module.scss';

function Navbar() {
    return (
        <div className={styles.nav}>
            <h1 className={styles.title}>CHATAPP</h1>
        </div>
    )
}

export default Navbar;