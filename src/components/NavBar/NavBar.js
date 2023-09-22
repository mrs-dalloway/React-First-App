import Container from "../Container/Container";
import styles from "./NavBar.module.scss"
import '../../styles/global.scss';

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <Container>
        <div className={styles.bar}>
          <a href="/"><span className="fa fa-tasks" /></a>
          <ul className={styles.list}>
            <li><a href="/">Home</a></li>
            <li><a href="/favorite">Favorite</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
