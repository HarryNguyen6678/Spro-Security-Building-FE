import { MuiButton } from "../../components/HeaderButton";
import styles from "../../assets/css/Header.module.css";
import logo from "../../assets/img/logo192.png";
import HeaderClock from "../../components/HeaderClock";
import { HeaderLogoutButton } from "../../components/HeaderLogoutButton";

function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="SPRO Logo" width="80px" height="60px"></img>
      <MuiButton />
      <div className={styles.groupA}>
        <HeaderClock />
        <HeaderLogoutButton />
      </div>
    </header>
  );
}

export default Header;
