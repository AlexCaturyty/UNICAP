import React, { useState } from 'react';
import logo from '../../images/Logo_UNICAP.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../../components/NavBar/NavBar.css';
import { Link } from 'react-scroll';

const NavBar = () => {
  const [active, setMode] = useState(false);

  const toggleMode = () => {
    setMode(!active);
  };

  return (
    <div id="navBar">
      <div className="logo">
        <img src={logo} alt="logo da Clinica Ativamente" height={35} />
      </div>
      <div className={`navLinks ${active ? 'active' : ''}`} id="navLinksUl">
        <Link to="sobreoSin" smooth={true} duration={500} onClick={toggleMode}>
          <li className="navLinksLi">Sobre o Sin</li>
        </Link>
        <Link to="gestaoPessoas" smooth={true} duration={500} onClick={toggleMode}>
          <li className="navLinksLi">Gestão e pessoas</li>
        </Link>
        <Link to="poseExtensao" smooth={true} duration={500} onClick={toggleMode}>
          <li className="navLinksLi">Pós-graduação</li>
        </Link>
        <Link to="poseExtensao" smooth={true} duration={500} onClick={toggleMode}>
          <li className="navLinksLi">Pesquisa e extensão</li>
        </Link>
        <a href="https://portal.unicap.br/pesquisa" target='_blanck'>
          <li className="navLinksLi">PIBIC</li>
        </a>
      </div>
      <div id="menu" onClick={toggleMode}>
        <i>{active ? <FaTimes /> : <FaBars />}</i>
      </div>
    </div>
  );
};

export default NavBar;
