import Logo from "../../components/Logo/Logo";
import Search from "../../components/Search/Search";
import styles from './header.module.css';

export default function Header({ onhandleGetSearchData }) {
  function handleOnSearchChange(searchData) {
    onhandleGetSearchData(searchData);
  }
  return (
    <div className={styles.container}>
      <Logo />
      <Search onSearchChange={handleOnSearchChange} />
    </div>
  );
}
