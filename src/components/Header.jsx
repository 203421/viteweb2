import logo from '../assets/img/KFC.svg'
import '../assets/style/header.css'

function Header() {
  return (
    <header>
        <img src={logo}></img>
        <h1>KFC</h1>
    </header>
  );
}
export default Header;
