import {NavLink}from 'react-router-dom';
import "./navbar.css";

export default NavBar

function NavBar() {
  return (
    <div className="navbar">
        <ul>
            <li>
                {/*isActive coloca la clase cuando se presiona en el link y aplica el estilo css que se difinió,
                  sino la deja vacia.*/}
                <NavLink className={ ({isActive}) => (isActive ? "active":"")} to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/counter'>Temporizador</NavLink>
            </li>
            <li>
                <NavLink to='/about'>About</NavLink>
            </li>
        </ul>

    </div>
  )
}
