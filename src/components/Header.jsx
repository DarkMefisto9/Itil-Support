import React from 'react';
import '../assets/styles/components/Header.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faEnvelope, faFlag, faUser, faCog } from '@fortawesome/free-solid-svg-icons';

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="header">
          <div className="header--main">
            <i className="icon">{'\u2630'}</i>
          </div>

          <div className="Header--user">
            <Link to="/Mensaje" className="item icon"><FontAwesomeIcon title="Mensaje" className="faEnvelope" icon={faEnvelope} /></Link>
            <Link to="/Notificaciones" className="item icon"><FontAwesomeIcon title="Notificaciones" className="faBell" icon={faBell} /></Link>
            <Link to="/Tareas" className="item icon"><FontAwesomeIcon title="Tareas" className="faFlag" icon={faFlag} /></Link>
            <Link to="/Nombre" className="item pic"><FontAwesomeIcon title="Nombre" className="faUser" icon={faUser} /></Link>
            <Link to="/Config" className="item icon"><FontAwesomeIcon title="Config" className="faCog" icon={faCog} /></Link>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Header;