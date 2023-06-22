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
                <NavLink className = "navlink" to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink className = "navlink" to='/counter'>Temporizador</NavLink>
            </li>
            
            <li>
                <NavLink className = "navlink" to='/recommendations'>Recomendaciones</NavLink>
            </li>

            <li>
                <NavLink className = "navlink" to='/notes'>Notas</NavLink>
            </li>

            <li>
                <NavLink className = "navlink" to='/about'>Acerca de</NavLink>
            </li>
            
        </ul>

    </div>
  )
}
