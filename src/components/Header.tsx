import styles from './header.module.css'

type HeaderProps = {
    query: string;
    setQuery: (query: string) => void;
 };

const Header = ({ query, setQuery}: HeaderProps) => {
  return (
    <header className={styles.header}>Header
        <input className={styles.input} placeholder="Search Pokemon"  type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
    </header> 
  );
}

export default Header