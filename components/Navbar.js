import Link from 'next/link';
import styles from './Navbar.module.css'; // Optional for custom styles

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>Koder's Portfolio</h1>
      <ul className={styles.navLinks}>
        <li><Link href="#home">Home</Link></li>
        <li><Link href="#about">About</Link></li>
        <li><Link href="#projects">Projects</Link></li>
        <li><Link href="#certificates">Certificates</Link></li>
        <li><Link href="#contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
